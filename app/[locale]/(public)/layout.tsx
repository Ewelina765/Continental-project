import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

import SignOutLayout from '@/features/singOutLayout/layout'
import { authOptions } from '@/lib/authOptions'

type PublicLayoutProps = {
  children: React.ReactNode
}

const PublicLayout = async ({ children }: PublicLayoutProps) => {
  const session = await getServerSession(authOptions)

  if (session?.user) return redirect('/dashboard')

  return <SignOutLayout>{children}</SignOutLayout>
}

export default PublicLayout
