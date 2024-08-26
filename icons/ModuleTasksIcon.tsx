import { IconWrapper } from '@/components'

import { SvgProps } from './iconTypes'

const ModuleTasksIcon: React.FC<SvgProps> = ({ size, scale, fill }) => {
  return (
    <IconWrapper size={size} scale={scale} fill={fill}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='25'
        height='24'
        viewBox='0 0 25 24'
        fill='none'
      >
        <path
          d='M8.16675 7V15C8.16675 15.5304 8.37746 16.0391 8.75253 16.4142C9.12761 16.7893 9.63632 17 10.1667 17H16.1667M8.16675 7V5C8.16675 4.46957 8.37746 3.96086 8.75253 3.58579C9.12761 3.21071 9.63632 3 10.1667 3H14.7527C15.0179 3.00006 15.2723 3.10545 15.4597 3.293L19.8737 7.707C20.0613 7.89449 20.1667 8.1488 20.1667 8.414V15C20.1667 15.5304 19.956 16.0391 19.581 16.4142C19.2059 16.7893 18.6972 17 18.1667 17H16.1667M8.16675 7H6.16675C5.63632 7 5.12761 7.21071 4.75253 7.58579C4.37746 7.96086 4.16675 8.46957 4.16675 9V19C4.16675 19.5304 4.37746 20.0391 4.75253 20.4142C5.12761 20.7893 5.63632 21 6.16675 21H14.1667C14.6972 21 15.2059 20.7893 15.581 20.4142C15.956 20.0391 16.1667 19.5304 16.1667 19V17'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </IconWrapper>
  )
}

export default ModuleTasksIcon
