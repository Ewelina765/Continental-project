import CheckIcon from './CheckIcon'
import { SvgProps } from './iconTypes'

const CheckBadge: React.FC<SvgProps> = ({ size, stroke, scale = false }) => (
  <div className='flex justify-center items-center p-1 rounded-lg bg-green'>
    <CheckIcon fill='none' size={size} stroke={stroke} scale={scale} />
  </div>
)

export default CheckBadge
