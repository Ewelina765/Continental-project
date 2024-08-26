import clsx from 'clsx'

type DividerProps = {
  height?: string
  bgColor?: `bg-${string}`
}

const Divider: React.FC<DividerProps> = ({
  height = 'h-7',
  bgColor = 'bg-gray-200',
}) => {
  return <div className={clsx('w-0.5', height, bgColor)}> </div>
}

export default Divider
