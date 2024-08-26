'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next-intl/client'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import { white, orange } from '@/styles/colors'
import { Tooltip } from '@/components'

import { SidebarItem } from './Sidebar'

type SideBarIconPickerProps = {
  sidebarItemsArray: SidebarItem[]
  extendedView: boolean
}
const SidebarIconPicker: React.FC<SideBarIconPickerProps> = ({
  sidebarItemsArray,
  extendedView,
}) => {
  const path = usePathname()
  const t = useTranslations('sidebar')

  const hoverEffect = (id: string, enter?: boolean) => {
    const iconElement = document.getElementById(`icon-${id}`)
    if (iconElement) {
      iconElement.className = clsx('transition-transform duration-300', {
        'scale-150': enter,
        'hover:scale-150': !enter,
      })
    }
  }

  return (
    <>
      {sidebarItemsArray.map(({ message, href, icon }) => (
        <Link
          key={message}
          href={href}
          className='flex items-center text-white'
        >
          <div className='w-15 flex justify-center'>
            <Tooltip
              message={message}
              extendedView={extendedView}
              key={message}
            >
              {React.cloneElement(icon, {
                fill: 'none',
                stroke: path.includes(href) ? orange : white,
                id: `icon-${href}`,
              })}
            </Tooltip>
          </div>
          {extendedView && (
            <div
              className={clsx(
                'flex items-center pl-6 pr-5.25 h-4.5 text-sm w-40',
                {
                  'text-orange': path === href,
                }
              )}
              onMouseEnter={() => hoverEffect(href, true)}
              onMouseLeave={() => hoverEffect(href)}
            >
              {t(message)}
            </div>
          )}
        </Link>
      ))}
    </>
  )
}

export default SidebarIconPicker
