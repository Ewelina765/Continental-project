'use client'

import { useTranslations } from 'next-intl'

import { Divider, NavButton } from '@/components'

const Footer = () => {
  const t = useTranslations('navBar')

  return (
    <div className='flex h-20 min-h-20 justify-center bg-darkGrey px-10'>
      <div className='flex w-full max-w-full-screen justify-between'>
        <div className='flex items-center gap-x-10'>
          <NavButton name={t('privacyPolicy')} route='/' />
          <Divider />
          <NavButton name={t('contact')} route='/' />
        </div>
      </div>
    </div>
  )
}

export default Footer
