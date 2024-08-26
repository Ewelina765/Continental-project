import { IconWrapper } from '@/components'

import { SvgProps } from './iconTypes'

const DoubleArrowRightIcon: React.FC<SvgProps> = ({
  fill,
  size,
  stroke,
  scale,
}) => (
  <IconWrapper fill={fill} size={size} stroke={stroke} scale={scale}>
    <svg
      width='18'
      height='16'
      viewBox='0 0 18 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        id='Vector'
        d='M9.5 1L16.5 8L9.5 15M1.5 1L8.5 8L1.5 15'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  </IconWrapper>
)
export default DoubleArrowRightIcon
