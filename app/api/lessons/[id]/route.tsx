import { NextResponse, NextRequest } from 'next/server'

import prisma from '@/lib/prismadb'

export const GET = async (request: NextRequest) => {
  const url = new URL(request.url)
  const pathname = url.pathname
  const pathnameParts = pathname.split('/')
  const moduleId = pathnameParts[pathnameParts.length - 1]

  const lesson = await prisma.module.findUnique({
    where: {
      id: moduleId,
    },
    select: {
      id: true,
      title: true,
      shortDescription: true,
      longDescription: true,
      technology: true,
      sprints: true,
      difficultyLevel: true,
      duration: true,
    },
  })

  return NextResponse.json(lesson)
}
