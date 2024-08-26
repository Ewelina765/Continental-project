import Image from 'next/image'
import { useTranslations } from 'next-intl'

import RegistrationForm from './RegistrationForm'

const Registration = () => {
  const t = useTranslations('registrationPage')

  return (
    <section className='relative h-full'>
      <Image
        src='/images/heroImage.webp'
        alt='Hero image'
        fill
        loading='eager'
        style={{ objectFit: 'cover', zIndex: -1 }}
      />
      <div className='mx-auto flex w-175 flex-col items-center justify-center py-15'>
        <div
          className={
            'w-full rounded-lg bg-darkGrey shadow dark:border md:mt-0 xl:p-0'
          }
        >
          <div className='space-y-4 p-6 sm:p-8 md:space-y-8'>
            <h1 className='text-2xl font-extralight leading-tight tracking-tight text-white'>
              {t('register')}
            </h1>
            <RegistrationForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Registration
