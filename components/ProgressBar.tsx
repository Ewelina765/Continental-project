import clsx from 'clsx'

type ProgressBarProps = {
  progress: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  
  const avarageProgress = Math.round(progress / 5) * 5

  return (
    <div className='flex flex-col'>
      <div className='text-right text-xs font-medium'>{avarageProgress}%</div>
      <div className='h-2 bg-gray-200'>
        <div
          className={clsx(
            'h-full',
            {
              'bg-red ': avarageProgress >= 0 && avarageProgress <= 10,
              'bg-orange': avarageProgress >= 11 && avarageProgress <= 99,
              'bg-green': avarageProgress === 100,
            },
            {
              'w-0': avarageProgress === 0,
              'w-0.05': avarageProgress === 5,
              'w-1/12': avarageProgress === 10,
              'w-2/12': avarageProgress === 15,
              'w-1/5': avarageProgress === 20,
              'w-3/12': avarageProgress === 25,
              'w-2/6': avarageProgress === 30,
              'w-4/12': avarageProgress === 35,
              'w-2/5': avarageProgress === 40,
              'w-0.45': avarageProgress === 45,
              'w-2/4': avarageProgress === 50,
              'w-7/12': avarageProgress === 55,
              'w-3/5': avarageProgress === 60,
              'w-2/3': avarageProgress === 65,
              'w-3/4': avarageProgress === 75,
              'w-4/5': avarageProgress === 80,
              'w-10/12': avarageProgress === 85,
              'w-11/12': avarageProgress === 90,
              'w-0.95': avarageProgress === 95,
              'w-full': avarageProgress === 100,
            }
          )}
        ></div>
      </div>
    </div>
  )
}

export default ProgressBar
