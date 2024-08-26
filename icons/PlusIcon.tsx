import { IconWrapper } from '@/components'

import { SvgProps } from './iconTypes'

const PlusIcon: React.FC<SvgProps> = ({ fill, size, stroke }) => (
  <IconWrapper fill={fill} size={size} stroke={stroke}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='21'
      height='20'
      viewBox='0 0 21 20'
      fill='none'
    >
      <path
        d='M10.5 5V10M10.5 10V15M10.5 10H15.5M10.5 10H5.5'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  </IconWrapper>
)
export default PlusIcon
