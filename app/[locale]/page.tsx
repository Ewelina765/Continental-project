import { getServerSession } from 'next-auth'

import SignInLayout from '@/features/signInLayout/layout'
import SignOutLayout from '@/features/singOutLayout/layout'
import { authOptions } from '@/lib/authOptions'
import { Landing } from '@/features/landing'

const Home = async () => {
  const session = await getServerSession(authOptions)

  if (!session?.user)
    return (
      <SignOutLayout>
        <main>
          <Landing />
        </main>
      </SignOutLayout>
    )

  return (
    <SignInLayout>
      <main className='w-full'>
        <Landing />
      </main>
    </SignInLayout>
  )
}

export default Home
