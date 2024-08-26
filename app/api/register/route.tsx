import bcrypt from 'bcrypt'
import { NextResponse } from 'next/server'

import prisma from '@/lib/prismadb'

type Body = {
  nick: string
  name: string
  lastName: string
  email: string
  password: string
  acceptTerms: boolean
  eneabled: boolean
}

export const POST = async (
  request: Request
): Promise<Body | NextResponse<unknown>> => {
  try {
    const body = (await request.json()) as Body
    const { nick, name, lastName, email, password, acceptTerms, eneabled } =
      body

    if (!nick || !name || !lastName || !email || !password || !acceptTerms) {
      return new NextResponse(
        JSON.stringify({ message: 'Required Fields Missing' }),
        {
          status: 401,
        }
      )
    }

    const exist = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (exist) {
      return new NextResponse(
        JSON.stringify({
          message: 'Following email is already taken',
        }),
        {
          status: 401,
        }
      )
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        nick,
        name,
        lastName,
        email,
        password: hashedPassword,
        acceptTerms,
        eneabled,
      },
    })

    return NextResponse.json(user)
  } catch (error) {
    throw error
  }
}
