import { IconWrapper } from '@/components'

import { SvgProps } from './iconTypes'

const ChevronIcon: React.FC<SvgProps> = ({
  fill,
  size,
  stroke,
  rotate,
  scale,
}) => (
  <IconWrapper
    fill={fill}
    size={size}
    stroke={stroke}
    rotate={rotate}
    scale={scale}
  >
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='3'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M8.25 4.5l7.5 7.5-7.5 7.5'
      />
    </svg>
  </IconWrapper>
)
export default ChevronIcon
