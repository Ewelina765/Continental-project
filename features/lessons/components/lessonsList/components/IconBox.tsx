import React from 'react'
import Image from 'next/image'

export type TechnologyProps = {
  id?: string
  name?: string
  description?: string
}

type IconBoxProps = {
  technology: TechnologyProps[]
}
const IconBox: React.FC<IconBoxProps> = ({ technology }) => {
  return (
    <div className='flex items-center gap-4'>
      {technology.map((icon) => {
        if (icon.name === 'HTML') {
          return (
            <div key={icon.id}>
              <Image src='/images/html.svg' alt='html' width={30} height={30} />
            </div>
          )
        } else if (icon.name === 'CSS') {
          return (
            <div key={icon.id}>
              <Image src='/images/css.svg' alt='css' width={30} height={30} />
            </div>
          )
        } else {
          return (
            <div key={icon.id}>
              <Image
                src='/images/javascript.svg'
                alt='css'
                width={30}
                height={30}
              />
            </div>
          )
        }
      })}
    </div>
  )
}

export default IconBox
