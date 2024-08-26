import { NextResponse, NextRequest } from 'next/server'

import prisma from '@/lib/prismadb'

type Body = {
  taskId: string
  newStatus: any
  canbanId: string
}

export const PUT = async (
  request: Request
): Promise<Body | NextResponse<unknown>> => {
  const url = new URL(request.url)
  const pathname = url.pathname
  const pathnameParts = pathname.split('/')
  const sprintId = pathnameParts[pathnameParts.length - 1]

  try {
    const body = (await request.json()) as Body
    const { taskId, newStatus, canbanId } = body

    const task = await prisma.task.findUnique({
      where: {
        id: taskId,
      },
    })

    const updatedTask = await prisma.task.update({
      where: {
        id: taskId,
      },
      data: {
        status: newStatus,
        canbanColumnId: canbanId,
      },
      select: {
        id: true,
        title: true,
        difficultyLevel: true,
        technology: true,
        taskNumber: true,
        result: true,
      },
    })

    const updatedKanbanColumn = await prisma.canbanColumn.update({
      where: { id: canbanId },
      data: {
        task: {
          connect: {
            id: updatedTask.id,
          },
        },
      },
      select: {
        id: true,
      },
    })

    const updatedSprint = await prisma.sprint.update({
      where: {
        id: sprintId,
      },
      data: {
        canbanColumn: {
          connect: {
            id: updatedKanbanColumn.id,
          },
        },
      },
      select: {
        id: true,
        title: true,
        moduleId: true,
        difficultyLevel: true,
        shortDescription: true,
        longDescription: true,
        technology: true,
        tasksAmount: true,
        duration: true,
        canbanColumn: {
          include: {
            task: true,
          },
        },
      },
    })

    return NextResponse.json(updatedTask)
  } catch (error) {
    throw error
  }
}

export const GET = async (request: NextRequest) => {
  const url = new URL(request.url)
  const pathname = url.pathname
  const pathnameParts = pathname.split('/')
  const sprintId = pathnameParts[pathnameParts.length - 1]

  const sprint = await prisma.sprint.findUnique({
    where: {
      id: sprintId,
    },
    select: {
      id: true,
      title: true,
      moduleId: true,
      difficultyLevel: true,
      shortDescription: true,
      longDescription: true,
      technology: true,
      tasksAmount: true,
      duration: true,
      canbanColumn: {
        include: {
          task: true,
        },
      },
    },
  })

  return NextResponse.json(sprint)
}
