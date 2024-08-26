import Image from 'next/image'
import { useTranslations } from 'next-intl'

import LoginForm from './LoginForm'

const Login = () => {
  const t = useTranslations('loginPage')

  return (
    <section suppressHydrationWarning className='relative h-full'>
      <Image
        src='/images/heroImage.webp'
        alt='Hero image'
        fill
        loading='eager'
        style={{ objectFit: 'cover', zIndex: -1 }}
      />
      <div className='mx-auto flex flex-col items-center justify-center px-6 py-15'>
        <div
          className={
            'w-full max-w-md rounded-lg bg-darkGrey shadow dark:border md:mt-0 xl:p-0'
          }
        >
          <div className='space-y-4 p-6 sm:p-8 md:space-y-8'>
            <h1 className='text-2xl font-extralight leading-tight tracking-tight text-white '>
              {t('signIn')}
            </h1>
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
