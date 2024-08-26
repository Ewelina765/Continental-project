import { Breadcrump } from '@/components'

type LessonsLayoutProps = {
  children: React.ReactNode
}

const LessonsLayout: React.FC<LessonsLayoutProps> = ({ children }) => {
  return (
    <div className='flex h-full w-full flex-col gap-6 overflow-auto bg-black p-8'>
      <Breadcrump firstPart='modules' secondPart='module' thirdPart='sprint' />
      {children}
    </div>
  )
}

export default LessonsLayout
