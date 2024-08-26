import type { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import CredentialsProvider from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'
import bcrypt from 'bcrypt'

import prisma from '@/lib/prismadb'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: String(process.env.GITHUB_ID),
      clientSecret: String(process.env.GITHUB_SECRET),
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { type: 'email' },
        password: { type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Please enter an email and password')
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        })

        if (!user || !user?.password) {
          throw new Error('No user found')
        }

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          String(user?.password)
        )

        if (!passwordMatch) {
          throw new Error('Incorrect password')
        }

        if (!user.eneabled) {
          throw new Error('This account was blocked')
        }

        return user
      },
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days, matches
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return { ...token, id: user.id }
      }
      return token
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      }
    },
  },
  debug: process.env.NODE_ENV === 'development',
}
