'use client'

import { useTranslations } from 'next-intl'
import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { enqueueSnackbar } from 'notistack'

import { Input, Checkbox, Button, TextLink } from '@/components'

type LoginFormData = { email: string; password: string }

const registrationSchema = z.object({
  email: z.string().email({
    message: 'wrongEmail',
  }),
  password: z.string().nonempty({
    message: 'passwordRequired',
  }),
  remember: z.boolean(),
})

const LoginForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<z.infer<typeof registrationSchema>>({
    resolver: zodResolver(registrationSchema),
  })
  const t = useTranslations('loginForm')

  const { push } = useRouter()

  const loginUser: SubmitHandler<LoginFormData> = async (data) => {
    try {
      const response = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      })

      if (response?.error)
        //TODO:change to (!response.ok) when useAuth will fix this bug
        enqueueSnackbar(t(response?.error), { variant: 'error' })

      if (!response?.error) {
        //TODO:change to (!response.ok) when useAuth will fix this bug
        enqueueSnackbar(t('successLogin'), { variant: 'success' })
        push('/dashboard')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <form
        className='space-y-6 md:space-y-8'
        onSubmit={handleSubmit(loginUser)}
      >
        <div className='flex flex-col gap-8'>
          <Input
            label={t('email')}
            {...register('email')}
            type='email'
            placeholder='name@example.com'
            errorMessage={errors.email?.message && t(errors.email?.message)}
          />
          <Input
            label={t('password')}
            {...register('password')}
            type='password'
            colSpan={2}
            errorMessage={
              errors.password?.message && t(errors.password?.message)
            }
            testId='password'
          />
          <Checkbox label={t('rememberMe')} {...register('remember')} />
        </div>
        <div className='flex flex-col gap-8'>
          <div>
            <Button
              name={t('signIn')}
              className='w-full justify-center'
              type='submit'
              testId='submit'
              variant='primary'
            />
            <Link
              href='/login'
              className='mt-2 text-sm font-medium text-blue underline'
            >
              {t('forgotPassword')}
            </Link>
          </div>
          <Button
            name={t('githubLogin')}
            className='justify-center'
            variant='github'
            onClick={() => signIn('github', { callbackUrl: '/dashboard' })}
          />
        </div>
        <TextLink
          text={t('stillDontHaveAccount')}
          linkName={t('register')}
          href='/register'
        />
      </form>
    </>
  )
}

export default LoginForm
