// "use client"

import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Button, HorizontalDivider } from '@/components'
import { IconBox, ProgressBalls, ModuleBox } from './components'
import { LessonType } from './LessonsList'

type LessonsListElementProps = {
  index: number
  module: LessonType
}

const LessonsListElement: React.FC<LessonsListElementProps> = ({
  module,
  index,
}) => {
  const {
    id,
    title,
    technology,
    difficultyLevel,
    duration,
    shortDescription,
    sprints,
  } = module
  const t = useTranslations('lessonsPage')

  if (!module) return <div className='text-white'>Loading...</div>

  return (
    <div className='min-w-87.5 max-w-125 rounded-lg bg-darkGrey'>
      <div className='flex flex-col gap-4 p-4'>
        <div className='relative h-38.5 rounded-lg'>
          <Image
            src='/images/cardHeader.webp'
            alt='cardHeader'
            priority
            fill
            sizes='auto'
          />
        </div>
        <h1 className='flex h-14 items-center text-lg font-medium text-white'>
          {t('moduleIndex', { index })} - {title}
        </h1>
        <span className='h-8 text-xs font-medium text-white'>
          {shortDescription}
        </span>
        <IconBox technology={technology} />
        <HorizontalDivider />
        <ModuleBox
          difficultyLevel={difficultyLevel}
          duration={duration}
          sprintsLength={sprints.length}
          justify='justify-between'
        />
        <HorizontalDivider />
        <Link href={`/lessons/${id}`}>
          <Button
            name={t('enterTheModule')}
            variant='primary'
            className='w-full'
          />
        </Link>
        <ProgressBalls />
      </div>
    </div>
  )
}

export default LessonsListElement
