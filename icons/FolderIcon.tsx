import { IconWrapper } from '@/components'

import { SvgProps } from './iconTypes'

const FolderIcon: React.FC<SvgProps> = ({ size, scale, fill }) => {
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
          d='M3.5 17V7C3.5 6.46957 3.71071 5.96086 4.08579 5.58579C4.46086 5.21071 4.96957 5 5.5 5H11.5L13.5 7H19.5C20.0304 7 20.5391 7.21071 20.9142 7.58579C21.2893 7.96086 21.5 8.46957 21.5 9V17C21.5 17.5304 21.2893 18.0391 20.9142 18.4142C20.5391 18.7893 20.0304 19 19.5 19H5.5C4.96957 19 4.46086 18.7893 4.08579 18.4142C3.71071 18.0391 3.5 17.5304 3.5 17Z'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </IconWrapper>
  )
}

export default FolderIcon
