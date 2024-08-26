import Image from 'next/image'
import { TechnologyProps } from '../../lessonsList/components/IconBox'

type IconBoxProps = {
  technology: TechnologyProps[]
}
const IconBox: React.FC<IconBoxProps> = ({ technology }) => {
  return (
    <div className='flex flex-wrap justify-end gap-8'>
      {technology.map((icon) => {
        return (
          <div
            key={icon.id}
            className='flex w-1/4 shrink-0 flex-col gap-6 rounded-lg bg-grey p-4 font-medium text-white'
          >
            <div className='flex gap-6'>
              {icon.name === 'HTML' && (
                <Image
                  src='/images/html.svg'
                  alt='html'
                  width={30}
                  height={30}
                />
              )}
              {icon.name === 'CSS' && (
                <Image src='/images/css.svg' alt='css' width={30} height={30} />
              )}
              {icon.name === 'JavaScript' && (
                <Image
                  src='/images/javascript.svg'
                  alt='css'
                  width={30}
                  height={30}
                />
              )}
              <h1 className='text-lg'>{icon.name}</h1>
            </div>
            <span className='text-xs'>{icon.description}</span>
          </div>
        )
      })}
    </div>
  )
}

export default IconBox
