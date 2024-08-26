import { NextResponse } from 'next/server'
import vm from 'vm'

import prisma from '@/lib/prismadb'

type Body = {
  solution: string
  variant: 'test' | 'solution' | 'quickTest'
  quickTest?: unknown[] | unknown[][]
  userId: string
}

type Check = {
  input: unknown[] | unknown[][]
  output: unknown[] | string | {}
}[]

const getFunctionName = (func: string) => {
  const regex = func.includes('function')
    ? /function\s+([^\s(]+)/
    : /const\s+([^\s(]+)\s*=/
  const match = func.match(regex)
  return match ? match[1] : null
}

const compareArrays = (
  firstArray: unknown[],
  testArray: unknown[] | string | {}
) => {
  if (Array.isArray(testArray)) {
    if (firstArray.length !== testArray.length) return false

    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== testArray[i]) return false
    }

    return true
  }
}

const isAnComplexData = (input: string | unknown) => {
  if (typeof input === 'string') {
    try {
      const obj = JSON.parse(input)
      return obj
    } catch {
      return input
    }
  }
  return input
}

const runCode = (solutionFunc: string, params: unknown[]) => {
  const sandbox = {}
  vm.createContext(sandbox)

  const functionString = `${solutionFunc}; ${getFunctionName(
    solutionFunc
  )}(...${JSON.stringify(params.map((param) => isAnComplexData(param)))})`

  try {
    const functionInstance = vm.runInNewContext(functionString, sandbox)
    return { result: functionInstance, error: null }
  } catch (error) {
    return { result: null, error: 'Compilation error' }
  }
}

const codeTest = (solution: string, check: Check) => {
  const testType = typeof check[0].output

  const testsOutcome = check.map(({ input, output }) => {
    const { result, error } = runCode(solution, input)

    if (error) {
      return error
    }

    if (testType === 'object') {
      if (Array.isArray(check[0].output)) {
        return compareArrays(result, output)
      }
      return JSON.stringify(result) === JSON.stringify(output)
    }
    return {
      testOutcome: result === output,
      codeOutcome: result,
      expectedResult: output,
      input,
    }
  })

  return testsOutcome
}

const validateResult = (result: unknown[]) =>
  result.findIndex((item) => {
    if (typeof item === 'string') {
      return true
    }
    return false
  })

export const PUT = async (
  request: Request
): Promise<Body | NextResponse<unknown>> => {
  const url = new URL(request.url)
  const pathname = url.pathname
  const pathnameParts = pathname.split('/')
  const id = pathnameParts[pathnameParts.length - 1]

  try {
    let outcome: string | unknown[] = []
    const body = (await request.json()) as Body
    const { solution: taskSolution, variant, quickTest, userId } = body

    const task = await prisma?.javascriptAssignment.findUnique({
      where: {
        id: id,
      },
    })

    const { tests, patternFunction } = task || {}

    if (variant === 'test')
      outcome = codeTest(taskSolution, tests?.slice(0, 3) as Check) // type will be improved when CMS ready

    if (variant === 'solution') outcome = codeTest(taskSolution, tests as Check) // type will be improved when CMS ready

    if (variant === 'quickTest' && patternFunction && quickTest) {
      const quickTests = [
        {
          input: quickTest,
          output: runCode(patternFunction, quickTest).result,
        },
      ]

      outcome = codeTest(taskSolution, quickTests)
    }

    const errorIndex = validateResult(outcome)

    if (errorIndex !== -1) {
      return new NextResponse(
        JSON.stringify({
          message: outcome[errorIndex],
        }),
        {
          status: 401,
        }
      )
    }

    if (variant === 'solution' && id) {
      const isPassed = !outcome.some((item: any) => !item?.testOutcome) // type will be improved when CMS ready
      const newSolution = { isPassed, taskSolution }
      await prisma.javascriptAssignment.update({
        where: {
          id,
        },
        data: {
          submissions: { increment: 1 },
        },
      })
      const javascriptAssignmentSolution =
        await prisma.javascriptAssignmentSolution.findUnique({
          where: {
            javascriptAssignmentId_userId: {
              javascriptAssignmentId: id,
              userId,
            },
          },
        })
      if (!javascriptAssignmentSolution) {
        await prisma.javascriptAssignmentSolution.create({
          data: {
            javascriptAssignment: {
              connect: {
                id,
              },
            },
            solution: [newSolution],
            user: {
              connect: {
                id: userId,
              },
            },
          },
        })
      } else {
        await prisma.javascriptAssignmentSolution.update({
          where: { id: javascriptAssignmentSolution.id },
          data: {
            solution: {
              push: newSolution,
            },
          },
        })
      }
    }

    return NextResponse.json(outcome)
  } catch (error) {
    throw error
  }
}

export const GET = async (request: Request) => {
  const url = new URL(request.url)
  const pathname = url.pathname
  const pathnameParts = pathname.split('/')
  const taskId = pathnameParts[pathnameParts.length - 2]
  const userId = pathnameParts[pathnameParts.length - 1]

  const task = await prisma.javascriptAssignment.findUnique({
    where: {
      id: taskId,
    },
    select: {
      id: true,
      name: true,
      category: true,
      difficultyLevel: true,
      submissions: true,
      descriptionStart: true,
      descriptionEnd: true,
      sampleInput: true,
      sampleOutput: true,
      tests: true,
      solutions: {
        where: {
          userId,
        },
      },
    },
  })

  return NextResponse.json(task)
}
