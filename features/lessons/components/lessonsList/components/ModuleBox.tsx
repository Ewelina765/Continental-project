'use client'

import { useTranslations } from 'next-intl'
import clsx from 'clsx'

import { ClockIcon, FolderIcon, LevelIcon, ModuleTasksIcon } from '@/icons'

type ModuleBoxProps = {
  difficultyLevel?: string
  duration: number
  sprintsLength?: number
  tasksAmount?: number
  variant?: 'secondary' | 'tertiary' | 'quaternary'
  justify?: string
}

const ModuleBox: React.FC<ModuleBoxProps> = ({
  difficultyLevel,
  duration,
  sprintsLength,
  variant = 'primary',
  tasksAmount,
  justify
}) => {
  const t = useTranslations('lessonsPage')

  return (
    <div
      className={clsx(
        `flex items-center ${justify}`,
        {
          'gap-4': variant === 'tertiary',
          'gap-8 ': variant === 'quaternary',
        }
      )}
    >
      {variant !== 'tertiary' && variant !== 'quaternary' && (
        <div className='flex items-center gap-2'>
          <FolderIcon size='24' scale={false} fill='none' />
          <span className='text-xs font-medium text-white'>
            {sprintsLength} {t('sprints', { count: sprintsLength })}
          </span>
        </div>
      )}
      {variant !== 'primary' && (
        <div className='flex items-center gap-2'>
          <ModuleTasksIcon size='24' scale={false} fill='none' />
          <div className='text-xs font-medium text-white'>
            {tasksAmount} {t('tasks', { tasksAmount })}
          </div>
        </div>
      )}
      {variant !== 'tertiary' && (
        <div className='flex items-center gap-2'>
          <LevelIcon size='24' scale={false} fill='none' />
          <div className='text-xs font-medium text-white'>
            {t('difficulty', { difficultyLevel })}
          </div>
        </div>
      )}

      <div className='flex items-center gap-2'>
        <ClockIcon size='24' scale={false} fill='none' />
        <span className='text-xs font-medium text-white'>{duration}h</span>
      </div>
    </div>
  )
}

export default ModuleBox
