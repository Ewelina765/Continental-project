'use client'

import { useTranslations } from 'next-intl'
import clsx from 'clsx'
import { useState } from 'react'

import { HorizontalDivider } from '@/components'
import TaskModal from '@/components/TaskModal'

type CanbanTaskProps = {
  title: string
  taskNumber: number
  difficultyLevel: string
  status: string
  taskCategory: string
  technology: string
  result: string
  name: string
  description: string
  canbanColId: string
}

const CanbanTask: React.FC<CanbanTaskProps> = ({
  title,
  taskNumber,
  difficultyLevel,
  status,
  taskCategory,
  technology,
  result,
  name,
  description,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const t = useTranslations('lessonsPage')

  const handleModalClose = () => {
    setIsModalOpen((prev) => !prev)
  }

  const bigName = name.toUpperCase()

  return (
    <>
      <div
        draggable
        onClick={() => setIsModalOpen(true)}
        className='sticky flex flex-col gap-4 rounded-lg bg-lightGrey p-4 font-medium text-white'
      >
        <div className='flex justify-between gap-3'>
          <h1 className=' text-base'>{title}</h1>
          <div className='flex h-max items-center rounded-lg border-0.25 px-2 py-1 text-xs'>
            {taskNumber}
          </div>
        </div>
        <HorizontalDivider />
        <div className='flex flex-wrap gap-1.5'>
          <div
            className={clsx('w-max rounded-lg border-0.25 px-2 py-1 text-xs', {
              'border-green text-green': difficultyLevel === 'MEDIUM',
              'border-orange text-orange': difficultyLevel === 'HARD',
              'border-red text-red': difficultyLevel === 'ADVANCED',
            })}
          >
            {t('difficulty', { difficultyLevel })}
          </div>
          <div className='w-max rounded-lg border-0.25 border-blue px-2 py-1 text-xs text-blue'>
            {technology}
          </div>
          <div className='w-max rounded-lg border-0.25 border-aqua px-2 py-1 text-xs text-aqua'>
            {t(`${taskCategory}`)}
          </div>
        </div>
        <HorizontalDivider />
        {bigName && <div className='text-xs'>Status: {t(`${bigName}`)}</div>}
        {taskCategory !== 'QUIZ' && taskCategory !== 'ARTICLE' && (
          <div
            className={clsx(
              'flex items-center justify-center rounded-lg border-0.25 px-2 py-1 text-xs',
              {
                'border-green text-green': result === 'POSITIVE',
                'border-orange text-orange': result === 'INPROGRESSREVIEW',
                'border-red text-red': result === 'NEGATIVE',
              }
            )}
          >
            {t(`${result}`)}
          </div>
        )}
      </div>
      {isModalOpen && (
        <TaskModal
          result={result}
          title={title}
          difficultyLevel={difficultyLevel}
          description={description}
          handleClick={handleModalClose}
          taskCategory={taskCategory}
          status={status}
          technology={technology}
          taskNumber={taskNumber}
        />
      )}
    </>
  )
}

export default CanbanTask
