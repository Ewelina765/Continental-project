import { useTranslations } from 'next-intl'

import IconBox, { TechnologyProps } from '../../lessonsList/components/IconBox'
import { ModuleBox } from '../../lessonsList/components'
import { Button } from '@/components'

type SprintDescriptionProps = {
  title: string
  index: number
  longDescription: string
  tasksAmount: number
  duration: number
  technology: TechnologyProps[]
}

const SprintDescription: React.FC<SprintDescriptionProps> = ({
  title,
  index,
  longDescription,
  tasksAmount,
  duration,
  technology,
}) => {
  const t = useTranslations('lessonsPage')
  return (
    <div className='flex flex-col gap-8 p-8 font-medium text-white'>
      <h1 className='flex text-lg'>
        {t('sprintIndex', { index })} - {title}
      </h1>
      <span className='text-xs'>{longDescription}</span>
      <ModuleBox
        variant='tertiary'
        duration={duration}
        tasksAmount={tasksAmount}
      />
      <IconBox technology={technology} />
      <Button name={t('start')} variant='quaternary' className='w-75' />
    </div>
  )
}

export default SprintDescription
