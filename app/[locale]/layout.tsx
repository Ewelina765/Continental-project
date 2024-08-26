import { Lexend_Deca } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import clsx from 'clsx'

import { AppProvider } from '@/context'

import './globals.css'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const lexendDeca = Lexend_Deca({ subsets: ['latin'] })

type RootLayoutProps = {
  children: React.ReactNode
  params: { locale: string }
}

const RootLayout = async ({
  children,
  params: { locale },
}: RootLayoutProps) => {
  let messages
  try {
    messages = (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body className={clsx('h-screen', lexendDeca.className)}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AppProvider>{children}</AppProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
export default RootLayout
