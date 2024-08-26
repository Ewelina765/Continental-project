'use client'

import Image from 'next/image'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { useTranslations } from 'next-intl'

import { Divider, NavButton, Button } from '@/components'

const SignInTopBar = () => {
  const t = useTranslations('navBar')

  return (
    <div>
      <nav className='left-0 top-0 bg-darkGrey px-10 py-5'>
        <div className='mx-auto flex flex-wrap items-center justify-between'>
          <Link href={'/dashboard'}>
            <Image
              priority
              src='/images/navbarLogo.svg'
              width={120}
              height={44}
            />
          </Link>
          <div className='flex gap-5 md:order-2'>
            <div className='flex items-center gap-x-10'>
              <NavButton
                name=''
                redirect
              />
              <Divider />
              <div className='relative h-11 w-11 rounded-full'>
                <Image
                  src='/images/avatar.webp'
                  alt='avatar'
                  priority
                  fill
                  sizes='44'
                />
              </div>
              <Button
                name={t('signOut')}
                onClick={() => signOut()}
                className='hover:scale-120 transition-transform duration-300'
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default SignInTopBar
