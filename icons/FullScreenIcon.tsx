import IconWrapper from '@/components/IconWrapper'

import { SvgProps } from './iconTypes'

const FullScreenIcon: React.FC<SvgProps> = ({ size, fill, stroke }) => (
  <IconWrapper size={size} fill={fill} stroke={stroke}>
    <svg
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M17 17H13M1 5V1V5ZM1 1H5H1ZM1 1L6 6L1 1ZM17 5V1V5ZM17 1H13H17ZM17 1L12 6L17 1ZM1 13V17V13ZM1 17H5H1ZM1 17L6 12L1 17ZM17 17L12 12L17 17ZM17 17V13V17Z'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  </IconWrapper>
)

export default FullScreenIcon
