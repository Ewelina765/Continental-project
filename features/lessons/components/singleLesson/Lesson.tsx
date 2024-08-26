'use client'

import { useQuery } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import { enqueueSnackbar } from 'notistack'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import clsx from 'clsx'

import useLesson from './useLesson'
import ModuleBox from '../lessonsList/components/ModuleBox'
import { Button, ContentBox, ProgressBar } from '@/components'
import ModuleDescription from './components/ModuleDescription'
import SprintsList from './components/SprintsList'
import useLessonsLogic from '../lessonsList/useLessonsLogic'
import { LessonType } from '../lessonsList/LessonsList'

export type Sprint = {
  id: string
  title: string
  moduleId: string
  tasksAmount: number
  duration: number
  shortDescription: string
  longDescription: string
  difficultyLevel: string
}

const Lesson = () => {
  const [checked, setChecked] = React.useState(0)
  const [limit, setLimit] = React.useState<number>(6)

  const { fetchLesson } = useLesson()
  const { id } = useParams()
  const router = useRouter()
  const T = useTranslations('generalErrors')
  const t = useTranslations('lessonsPage')
  const { fetchLessons } = useLessonsLogic()

  const { data, isError, isLoading } = useQuery(['lesson', id], () =>
    fetchLesson(id)
  )

  const { data: data2 } = useQuery(['lessons', limit], () =>
    fetchLessons(limit)
  )

  const idToFind = id
  const array = data2
    ?.map((x: LessonType) => x.id)
    .findIndex((id: string) => id === idToFind)
  const index = array + 1

  const {
    title,
    shortDescription,
    longDescription,
    duration,
    sprints,
    technology,
    difficultyLevel,
  } = data || {}

  if (isLoading) return <div className='text-white'>Loading...</div>

  if (isError || !data) {
    router.push('/lessons')
    enqueueSnackbar(T('somethingGoesWrong'), {
      variant: 'error',
    })
    return <div>Error...</div>
  }

  const tasks = sprints?.map((sprint: Sprint) => sprint.tasksAmount)

  const sum = tasks.reduce(
    (accumulator: number, currentValue: number) => accumulator + currentValue,
    0
  )

  return (
    <div className='flex h-full flex-col items-center gap-6'>
      <div className='flex w-full flex-wrap items-center justify-center gap-16 md:w-4/5'>
        <div className='flex flex-1 flex-col gap-6 font-medium text-white'>
          <h1 className='flex text-2xl font-medium'>
            {t('moduleIndex', { index })} - {title}
          </h1>
          <span className='max-w-lg whitespace-normal text-xs'>
            {shortDescription}
          </span>
          {index === 1 && (
            <Button
              name={t('wantToBuyModule')}
              variant='quaternary'
              className='w-75'
            />
          )}
          {index !== 1 && <ProgressBar progress={78} />}
          <div className='w-2/3'>
            <ModuleBox
              sprintsLength={sprints.length}
              duration={duration}
              difficultyLevel={difficultyLevel}
              variant='secondary'
              tasksAmount={sum}
              justify='justify-between'
            />
          </div>
        </div>
        <div className='relative flex items-center justify-center'>
          <Image
            src='/images/comp.png'
            alt='compImage'
            width={405}
            height={250}
            priority
          />
          <Image
            src='/images/play.svg'
            alt='play'
            width={78}
            height={54}
            className='absolute '
          />
        </div>
      </div>
      <ContentBox
        tabs={[t('moduleDesc'), t('sprintsList')]}
        checked={checked}
        setChecked={setChecked}
        variant='lesson'
        overflow={true}
      >
        {checked === 0 && (
          <ModuleDescription
            longDescription={longDescription}
            index={index}
            title={title}
            technology={technology}
          />
        )}
        {checked === 1 && <SprintsList sprints={sprints} index={index} />}
      </ContentBox>
    </div>
  )
}

export default Lesson
