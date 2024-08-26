import React from 'react'

import { DonutChart, HorizontalDivider } from '@/components'

const ProgressBalls = () => {
  const progresses = [100, 60, 0, 0, 0, 0]
  
  return (
    <div className='flex items-center justify-center gap-1'>
      {progresses.map((progress, index) => (
        <React.Fragment key={index}>
          <DonutChart progress={progress} />
          {index !== progresses.length - 1 && <HorizontalDivider />}
        </React.Fragment>
      ))}
    </div>
  )
}

export default ProgressBalls
