import { IconWrapper } from '@/components'

import { SvgProps } from './iconTypes'

const AdminPanelIcon: React.FC<SvgProps> = ({ fill, size, stroke, id }) => (
  <IconWrapper fill={fill} size={size} stroke={stroke} id={id}>
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        id='Vector'
        d='M7 10.1109L9 12.1109L13 8.11093M18.618 4.09493C15.4561 4.26285 12.3567 3.16954 10 1.05493C7.64327 3.16954 4.5439 4.26285 1.382 4.09493C1.12754 5.08005 0.999177 6.09348 1 7.11093C1 12.7019 4.824 17.4009 10 18.7329C15.176 17.4009 19 12.7029 19 7.11093C19 6.06893 18.867 5.05893 18.618 4.09493Z'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  </IconWrapper>
)

export default AdminPanelIcon
