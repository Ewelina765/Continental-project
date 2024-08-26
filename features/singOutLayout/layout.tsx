'use client'

import SocialMediaBar from '@/components/SocialMediaBar'

import SignOutTopbar from './components/SignOutTopbar'
import Footer from './components/Footer'

type SignOutLayoutProps = {
  children: React.ReactNode
}

const SignOutLayout: React.FC<SignOutLayoutProps> = ({ children }) => {
  return (
    <section className='flex h-full flex-col'>
      <SocialMediaBar />
      <div className='flex-grow'>
        <SignOutTopbar />
        <div className='h-content-container'>{children}</div>
      </div>
      <Footer />
    </section>
  )
}

export default SignOutLayout
