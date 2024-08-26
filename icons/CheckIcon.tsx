import { IconWrapper } from '@/components'

import { SvgProps } from './iconTypes'

const CheckIcon: React.FC<SvgProps> = ({ fill, size, stroke, scale }) => (
  <IconWrapper fill={fill} size={size} stroke={stroke} scale={scale}>
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none'>
      <path
        d='M5 13L9 17L19 7'
        stroke='fff'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  </IconWrapper>
)

export default CheckIcon
