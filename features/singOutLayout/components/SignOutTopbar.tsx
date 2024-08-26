'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next-intl/client'
import { useTranslations } from 'next-intl'

import { Button, Divider, NavButton } from '@/components'

const SignOutTopbar = () => {
  const t = useTranslations('navBar')
  const path = usePathname()

  return (
    <div>
      <nav className='left-0 top-0 bg-darkGrey px-10 py-5'>
        <div className='mx-auto flex max-w-full-screen flex-wrap items-center justify-between'>
          <Link href={'/landing'}>
          </Link>
          <div className='flex gap-10 md:order-2'>
            <div className='flex items-center gap-10'>
              <Divider />
              <NavButton
                name={t('signIn')}
                route='/login'
                variant={path === '/login' ? 'active' : 'primary'}
              />
            </div>
            <Link href='/register'>
              <Button
                name={t('registration')}
                variant={path === '/register' ? 'active' : 'primary'}
              />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default SignOutTopbar
