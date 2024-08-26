import { IconWrapper } from '@/components'

import { SvgProps } from './iconTypes'

const SendIcon: React.FC<SvgProps> = ({ fill, stroke, size, scale }) => {
  return (
    <IconWrapper fill={fill} stroke={stroke} size={size} scale={scale}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='21'
        height='20'
        viewBox='0 0 21 20'
        fill='none'
      >
        <path
          d='M3 3.3335H13.8333H3ZM3 6.66683H10.5H3ZM3 10.0002H8H3ZM11.3333 10.0002L14.6667 6.66683L11.3333 10.0002ZM14.6667 6.66683L18 10.0002L14.6667 6.66683ZM14.6667 6.66683V16.6668Z'
          fill='white'
        />
        <path
          d='M14.6667 6.66683V16.6668M3 3.3335H13.8333H3ZM3 6.66683H10.5H3ZM3 10.0002H8H3ZM11.3333 10.0002L14.6667 6.66683L11.3333 10.0002ZM14.6667 6.66683L18 10.0002L14.6667 6.66683Z'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </IconWrapper>
  )
}

export default SendIcon
