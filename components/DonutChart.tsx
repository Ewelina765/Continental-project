import clsx from 'clsx'

import { CheckIcon } from '@/icons'
import { white } from '@/styles/colors'

type DonutChartProps = {
  progress: number
}

const DonutChart: React.FC<DonutChartProps> = ({ progress }) => {
  
  return (
    <div
      className={clsx(
        'flex h-7.5 min-w-7.5 items-center justify-center rounded-3.75',
        {
          'bg-red ': progress === 0,
          'bg-orange': progress >= 1 && progress <= 99,
          'bg-green': progress === 100,
        }
      )}
    >
      <span className='text-xs font-medium text-white'>
        {progress === 100 && (
          <CheckIcon size='24' scale={false} stroke={white} fill='none' />
        )}
        {progress !== 100 && progress + '%'}
      </span>
    </div>
  )
}

export default DonutChart
