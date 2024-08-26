import { NextResponse, NextRequest } from 'next/server'

import prisma from '@/lib/prismadb'

export const GET = async (request: NextRequest) => {
  const url = new URL(request.url)
  const limit = url.searchParams.get('limit')

  const lessons = await prisma.module.findMany({
    select: {
      id: true,
      title: true,
      shortDescription: true,
      technology: true,
      sprints: true,
      difficultyLevel: true,
      duration: true,
    },
    take: Number(limit),
  })

  return NextResponse.json(lessons)
}
