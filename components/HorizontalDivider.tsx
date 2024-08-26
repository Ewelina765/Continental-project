import clsx from 'clsx'

type HorizontalDividerProps = {
  width?: string
  bgColor?: string
}

const HorizontalDivider: React.FC<HorizontalDividerProps> = ({
  width = 'w-full',
  bgColor = 'bg-white',
}) => {
  return <div className={clsx('h-0.5', bgColor, width)}> </div>
}

export default HorizontalDivider
