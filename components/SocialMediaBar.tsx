'use client'

import clsx from 'clsx'
import { useSession } from 'next-auth/react'

import { SocialMediaIconPicker } from '@/components'

const socialMediasUrls: string[] = [
  'https://www.facebook.com/groups/3792300160870421',
  'https://www.instagram.com/',
  'https://www.linkedin.com/',
  'https://www.youtube.com/',
  'https://github.com',
  'https://www.tiktok.com',
]

const SocialMediaBar = () => {
  const { status } = useSession()

  return (
    <nav className='flex justify-center bg-black px-10 py-3'>
      <div
        className={clsx('flex w-full justify-end', {
          'max-w-full-screen': status === 'unauthenticated',
        })}
      >
        {status != 'loading' && (
          <div className='flex gap-8'>
            {socialMediasUrls.map((url) => (
              <SocialMediaIconPicker url={url} key={url} />
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default SocialMediaBar
