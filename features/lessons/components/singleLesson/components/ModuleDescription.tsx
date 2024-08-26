import { useTranslations } from 'next-intl'

import { IconBox } from '../../lessonsList/components'
import TechnologyCard from './TechnologyCard'
import { TechnologyProps } from '../../lessonsList/components/IconBox'

type ModuleDescriptionProps = {
  longDescription: string
  index: number
  title: string
  technology: TechnologyProps[]
}

const ModuleDescription: React.FC<ModuleDescriptionProps> = ({
  longDescription,
  index,
  title,
  technology,
}) => {
  const t = useTranslations('lessonsPage')

  return (
    <div className='flex h-full shrink-0 p-8'>
      <div className='flex w-2/3 flex-col justify-center gap-8 font-medium text-white'>
        <h1 className='flex items-center text-2xl font-medium'>
          {t('moduleIndex', { index })} - {title}
        </h1>
        <span className='text-xs'>{longDescription}</span>
        <IconBox technology={technology} />
      </div>
      <div className='flex items-center'>
        <TechnologyCard technology={technology} />
      </div>
    </div>
  )
}

export default ModuleDescription
