'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { ArrowRightIcon } from '@/icons'

type BreadcrumpProps = {
  firstPart: string
  secondPart: string
  thirdPart: string
}

const Breadcrump: React.FC<BreadcrumpProps> = ({
  firstPart,
  secondPart,
  thirdPart,
}) => {
  const pathname = usePathname()
  const t = useTranslations('lessonsPage')

  let currentLink = ''
  const pathParts = pathname.split('/').filter((crumb) => crumb !== '')

  return (
    <div className='flex h-10 w-min shrink-0 items-center justify-center gap-4 rounded-lg bg-darkGrey px-5 py-3 text-sm font-medium text-white'>
      {pathParts?.map((crumb, index) => {
        currentLink += `/${crumb}`
        let crumbText = crumb
        if (index === 0) {
          crumbText = firstPart
        } else if (index === 1) {
          crumbText = secondPart
        } else if (index === 2) {
          crumbText = thirdPart
        }

        return (
          <div key={crumb} className='flex gap-4'>
            <Link href={currentLink}>{t(`${crumbText}`)}</Link>
            {index !== pathParts.length - 1 && (
              <ArrowRightIcon fill='none' size='20' scale={false} />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Breadcrump
