import { IconWrapper } from '@/components'

import { SvgProps } from './iconTypes'

const ArrowRightIcon: React.FC<SvgProps> = ({ fill, size, stroke, scale }) => {
  return (
    <IconWrapper fill={fill} size={size} stroke={stroke} scale={scale}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='18'
        height='16'
        viewBox='0 0 20 20'
        fill='none'
      >
        <path
          d='M7.49992 4.16634L13.3333 9.99967L7.49992 15.833'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </IconWrapper>
  )
}

export default ArrowRightIcon
