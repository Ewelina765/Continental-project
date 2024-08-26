'use client'

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'

import LessonsListElement from './LessonsListElement'
import useLessonsLogic from './useLessonsLogic'

export type LessonType = {
  id: string
  title: string
  technology: {
    id: string
    name: string
    description: string
  }[]
  difficultyLevel: string
  sprints: {
    id: string
    title: string
    tasksAmount: number
  }[]
  duration: number
  shortDescription: string
  longDescription: string
}

const LessonsList = () => {
  const [limit, setLimit] = React.useState<number>(6)
  const { fetchLessons } = useLessonsLogic()
  const t = useTranslations('lessonsPage')

  const { data, isLoading } = useQuery(['lessons', limit], () =>
    fetchLessons(limit)
  )

  if (isLoading) return <div className='text-white'>Loading...</div>

  return (
    <div className='flex flex-col items-center justify-center gap-6'>
      <h1 className='text-2xl font-medium text-white'>
       Academy
      </h1>
      <span className='text-center text-xs font-medium text-white'>
        Krótki opis, krótki opis krótki opis krótki opis krótki opis krótki opis
        krótki opis krótki opis krótki opis krótki opis krótki opis krótki opis
        krótki opis
      </span>
      <div className='grid gap-8 px-8 pb-8 md:grid-cols-2 lg:grid-cols-3'>
        {data?.map((module: LessonType, index: number) => (
          <LessonsListElement
            key={module.id}
            module={module}
            index={index + 1}
          />
        ))}
      </div>
    </div>
  )
}

export default LessonsList
