import { IconWrapper } from '@/components'

import { SvgProps } from './iconTypes'

const ArrowLeftIcon: React.FC<SvgProps> = ({ fill, size, stroke, scale }) => {
  return (
    <IconWrapper fill={fill} size={size} stroke={stroke} scale={scale}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
      >
        <path
          d='M12.5001 15.8337L6.66675 10.0003L12.5001 4.16699'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </IconWrapper>
  )
}

export default ArrowLeftIcon
