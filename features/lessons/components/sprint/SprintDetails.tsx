'use client'

import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import React from 'react'

import useSprint from './useSprint'
import { ContentBox, ProgressBar } from '@/components'
import { ModuleBox } from '../lessonsList/components'
import SprintDescription from './components/SprintDescription'
import useLesson from '../singleLesson/useLesson'
import { Sprint } from '../singleLesson/Lesson'
import TasksTable from './components/TasksTable'

export type TaskType = {
  title: string
  taskNumber: number
  id: string
  description: string
  status: string
  canbanColumnId: string
  difficultyLevel: string
  taskCategory: string
  result: string
  technology: string
}[]

export type CanbanColumnType = {
  id: string
  columnIndex: number
  name: string
  sprintId: string
  task: TaskType
}[]

const SprintDetails = () => {
  const [checked, setChecked] = React.useState(0)
  const { fetchSprint } = useSprint()
  const { id, sprint } = useParams()
  const t = useTranslations('lessonsPage')
  const { fetchLesson } = useLesson()

  const { data, isLoading } = useQuery(['sprint', id], () =>
    fetchSprint(id, sprint)
  )

  const { data: data2 } = useQuery(['lesson', id], () => fetchLesson(id))
  const { sprints } = data2 || {}

  const idToFind = sprint
  const array = sprints
    ?.map((x: Sprint) => x.id)
    .findIndex((id: string) => id === idToFind)
  const index = array + 1

  const {
    title,
    difficultyLevel,
    shortDescription,
    longDescription,
    tasksAmount,
    technology,
    duration,
    canbanColumn,
  } = data || {}

  if (isLoading) return <div className='text-white'>Loading...</div>

  return (
    <div className='flex h-full flex-col items-center gap-8'>
      <div className='flex flex-col gap-6 font-medium text-white md:w-full lg:w-9/12'>
        <h1 className='flex text-2xl'>
          {t('sprintIndex', { index })} - {title}
        </h1>
        <span className='text-xs'>{shortDescription}</span>
        <ProgressBar progress={27} />
        <ModuleBox
          variant='quaternary'
          tasksAmount={tasksAmount}
          difficultyLevel={difficultyLevel}
          duration={duration}
        />
      </div>
      <ContentBox
        tabs={[t('sprintDesc'), t('tasksList')]}
        checked={checked}
        setChecked={setChecked}
        variant='lesson'
        overflow={true}
      >
        {checked === 0 && (
          <SprintDescription
            title={title}
            index={index}
            technology={technology}
            longDescription={longDescription}
            tasksAmount={tasksAmount}
            duration={duration}
          />
        )}
        {checked === 1 && <TasksTable canbanColumn={canbanColumn} />}
      </ContentBox>
    </div>
  )
}

export default SprintDetails
