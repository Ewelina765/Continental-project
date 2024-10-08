import { IconWrapper } from '@/components'

import { SvgProps } from './iconTypes'

const LessonIcon: React.FC<SvgProps> = ({ fill, size, stroke, id }) => (
  <IconWrapper fill={fill} size={size} stroke={stroke} id={id}>
    <svg
      width='20'
      height='19'
      viewBox='0 0 20 19'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        id='Vector'
        d='M10 11L19 6L10 1L1 6L10 11ZM10 11L16.16 7.578C16.9705 9.63609 17.2005 11.8772 16.825 14.057C14.2886 14.3032 11.8972 15.3536 10 17.055C8.10305 15.3538 5.71208 14.3034 3.176 14.057C2.8002 11.8772 3.03023 9.63603 3.841 7.578L10 11ZM6 17V9.5L10 7.278'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  </IconWrapper>
)
export default LessonIcon
