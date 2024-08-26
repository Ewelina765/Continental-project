import SocialMediaBar from '@/components/SocialMediaBar'

import Sidebar from './components/Sidebar'
import SignInTopBar from './components/SignInTopBar'

type SignInLayoutProps = {
  children: React.ReactNode
}

const SignInLayout: React.FC<SignInLayoutProps> = ({ children }) => {
  return (
    <section className='flex h-full flex-col'>
      <SocialMediaBar />
      <div className='flex-grow overflow-auto'>
        <SignInTopBar />
        <div className='h-content-container'>
          <div className='flex h-full'>
            <Sidebar />
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignInLayout
