import { IconWrapper } from '@/components'

import { SvgProps } from './iconTypes'

const XMarkIcon: React.FC<SvgProps> = ({ fill, scale, stroke, size, onClick }) => (
  <IconWrapper fill={fill} stroke={stroke} scale={scale} size={size} onClick={onClick}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='2'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M6 18L18 6M6 6l12 12'
      />
    </svg>
  </IconWrapper>
)

export default XMarkIcon
