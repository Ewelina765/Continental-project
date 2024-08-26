import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

import SignInLayout from '@/features/signInLayout/layout'
import { authOptions } from '@/lib/authOptions'

type PrivateLayoutProps = {
  children: React.ReactNode
}

const PrivateLayout = async ({ children }: PrivateLayoutProps) => {
  const session = await getServerSession(authOptions)

  if (!session?.user) return redirect('/login')

  return <SignInLayout>{children}</SignInLayout>
}

export default PrivateLayout
