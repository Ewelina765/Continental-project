'use client'

import { useState } from 'react'
import clsx from 'clsx'

import {
  AdminPanelIcon,
  CalendarIcon,
  LessonIcon,
  MainPanelIcon,
  RankingIcon,
  SettingsIcon,
  TaskIcon,
} from '@/icons'
import SidebarIconPicker from '@/features/signInLayout/components/SidebarIconPicker'
import { SvgProps } from '@/icons/iconTypes'

import ExtendedViewButton from './ExtendedViewButton'

export type SidebarItem = {
  message: string
  href: string
  icon: React.ReactElement<SvgProps>
}

type SidebarItems = {
  firstGroupItems: SidebarItem[]
  secondGroupItems: SidebarItem[]
}

const sidebarItems: SidebarItems = {
  firstGroupItems: [
    {
      message: 'mainPanel',
      href: '/dashboard',
      icon: <MainPanelIcon />,
    },
    {
      message: 'ranking',
      href: '/ranking',
      icon: <RankingIcon />,
    },
    {
      message: 'lessons',
      href: '/lessons',
      icon: <LessonIcon />,
    },
    {
      message: 'calendar',
      href: '/calendar',
      icon: <CalendarIcon />,
    },
    {
      message: 'task',
      href: '/task',
      icon: <TaskIcon />,
    },
  ],
  secondGroupItems: [
    {
      message: 'settings',
      href: '/settings',
      icon: <SettingsIcon />,
    },
    {
      message: 'adminPanel',
      href: '/admin-panel',
      icon: <AdminPanelIcon />,
    },
  ],
}

const { firstGroupItems, secondGroupItems } = sidebarItems

const Sidebar = () => {
  const [extendedView, setExtendedView] = useState<boolean>(false)

  return (
    <div
      className={clsx(
        { 'w-15 items-center': !extendedView },
        'flex min-h-full flex-col space-y-8 bg-black pt-8 '
      )}
    >
      <ExtendedViewButton
        extendedView={extendedView}
        setExtendedView={setExtendedView}
      />
      <SidebarIconPicker
        sidebarItemsArray={firstGroupItems}
        extendedView={extendedView}
      />
      <div className='flex w-full flex-col items-center space-y-8 border-y border-gray-700 py-4'>
        <SidebarIconPicker
          sidebarItemsArray={secondGroupItems}
          extendedView={extendedView}
        />
      </div>
    </div>
  )
}

export default Sidebar
