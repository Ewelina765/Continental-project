import { NextResponse, NextRequest } from 'next/server'

import prisma from '@/lib/prismadb'

export const GET = async (request: NextRequest) => {
  const url = new URL(request.url)
  const limit = url.searchParams.get('limit')

  const tasks = await prisma.javascriptAssignment.findMany({
    select: {
      id: true,
      category: true,
      difficultyLevel: true,
      name: true,
      solutions: true,
    },
    take: Number(limit),
  })

  return NextResponse.json(tasks)
}
