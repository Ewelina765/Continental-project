import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useQueries } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'

import useSprint from '../../sprint/useSprint'
import { Sprint } from '../Lesson'
import { Button, ProgressBar } from '@/components'
import { ModuleBox, IconBox } from '../../lessonsList/components'

type SprintsListProps = {
  sprints: Sprint[]
  index: number
}

const SprintsList: React.FC<SprintsListProps> = ({ sprints, index }) => {
  const { fetchSprint } = useSprint()
  const { moduleId } = useParams()
  const t = useTranslations('lessonsPage')

  const queries = sprints.map((sprint) => ({
    queryKey: ['sprint', sprint.id],
    queryFn: () => fetchSprint(moduleId, sprint.id),
  }))

  const results = useQueries({
    queries,
  })

  return (
    <div className='mb-8 flex flex-col gap-8 p-8'>
      {sprints.map(
        ({
          title,
          longDescription,
          duration,
          tasksAmount,
          id: sprintId,
          moduleId,
        }: Sprint) => {
          return (
            <div key={sprintId} className='flex gap-8 rounded-lg bg-grey p-8'>
              <div className='relative h-auto w-80'>
                <Image
                  src='/images/code.png'
                  alt='code'
                  fill
                  sizes='auto'
                  priority
                />
              </div>
              <div className='flex flex-1 flex-col gap-4 font-medium text-white'>
                <h1 className='text-lg'>{title}</h1>
                <span className='text-xs'>{longDescription}</span>
                <ModuleBox
                  variant='tertiary'
                  duration={duration}
                  tasksAmount={tasksAmount}
                />
                {results
                  ?.filter((x) => x?.data?.id === sprintId)
                  .map((sprint) => (
                    <IconBox
                      technology={sprint?.data?.technology}
                      key={sprint?.data?.id}
                    />
                  ))}

                {index === 1 && (
                  <Button name={t('buyModule')} variant='sprint' />
                )}
                {index !== 1 && (
                  <>
                    <Link href={`/lessons/${moduleId}/${sprintId}`}>
                      <Button
                        variant='quaternary'
                        name={t('goToSprint')}
                        className='w-75'
                      />
                    </Link>
                    {index === 2 ? (
                      <ProgressBar progress={8} />
                    ) : (
                      <ProgressBar progress={100} />
                    )}
                  </>
                )}
              </div>
            </div>
          )
        }
      )}
    </div>
  )
}

export default SprintsList
