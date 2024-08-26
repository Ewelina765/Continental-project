import { IconWrapper } from '@/components'

import { SvgProps } from './iconTypes'

const DoubleArrowLeftIcon: React.FC<SvgProps> = ({
  fill,
  size,
  stroke,
  scale,
}) => (
  <IconWrapper fill={fill} size={size} stroke={stroke} scale={scale}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='16'
      viewBox='0 0 18 16'
      fill='none'
    >
      <path
        d='M8.5 15L1.5 8L8.5 1M16.5 15L9.5 8L16.5 1'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  </IconWrapper>
)
export default DoubleArrowLeftIcon
