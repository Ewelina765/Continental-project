'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { enqueueSnackbar } from 'notistack'

import { Input, Checkbox, Button, TextLink, Modal } from '@/components'

const registrationSchema = z
  .object({
    email: z.string().email({
      message: 'wrongEmail',
    }),
    password: z
      .string()
      .min(8, {
        message: 'shortPassword',
      })
      .refine(
        (password) =>
          /[A-Z]/.test(password) &&
          /[a-z]/.test(password) &&
          /[0-9]/.test(password) &&
          /[^a-zA-Z0-9]/.test(password),
        {
          message: 'passwordComposition',
        }
      ),
    confirmPassword: z.string(),
    nick: z.string().nonempty({
      message: 'nickRequired',
    }),
    name: z.string().nonempty({
      message: 'nameRequired',
    }),
    lastName: z.string().nonempty({
      message: 'lastNameRequired',
    }),
    acceptTerms: z.boolean().refine((accept) => accept === true, {
      message: 'termsRequired',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'samePasswords',
    path: ['confirmPassword'],
  })

const RegistrationForm = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<z.infer<typeof registrationSchema>>({
    resolver: zodResolver(registrationSchema),
  })
  const t = useTranslations('registrationForm')
  const { push } = useRouter()

  const onUserRegister = async (data: any) => {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorData = await response.json()
        enqueueSnackbar(t(errorData.message), { variant: 'error' })
      }
      if (response.ok) setIsModalOpen(true)

      return await response.json()
    } catch (error) {
      console.error(error)
    }
  }

  const mutation = useMutation({
    mutationFn: (data) => onUserRegister(data),
  })

  const onSubmit = (data: any) => mutation.mutate({ ...data, eneabled: true })

  const handleModalClose = () => {
    push('/login')
    setIsModalOpen((prev) => !prev)
  }

  return (
    <>
      <form
        className='space-y-6 md:space-y-8'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='grid grid-cols-2 grid-rows-4 gap-x-9 gap-y-8'>
          <Input
            label={t('nick')}
            type='text'
            placeholder={t('nick')}
            testId='nick'
            // todo: Bart verify
            errorMessage={errors.nick?.message && t(errors.nick?.message)}
            {...register('nick')}
          />
          <Input
            label={t('name')}
            type='text'
            testId='name'
            placeholder={t('name')}
            errorMessage={errors.name?.message && t(errors.name?.message)}
            {...register('name')}
          />
          <Input
            label={t('lastName')}
            type='text'
            testId='lastName'
            placeholder={t('lastName')}
            errorMessage={
              errors.lastName?.message && t(errors.lastName?.message)
            }
            {...register('lastName')}
          />
          <Input
            label={t('email')}
            type='email'
            testId='email'
            placeholder='label@example.com'
            errorMessage={errors.email?.message && t(errors.email?.message)}
            {...register('email')}
          />
          <Input
            label={t('password')}
            type='password'
            testId='password'
            colSpan={2}
            errorMessage={
              errors.password?.message && t(errors.password?.message)
            }
            {...register('password')}
          />
          <Input
            label={t('confirmPassword')}
            type='password'
            testId='confirmPassword'
            colSpan={2}
            errorMessage={
              errors.confirmPassword?.message &&
              t(errors.confirmPassword?.message)
            }
            {...register('confirmPassword')}
          />
        </div>
        <Checkbox
          label={t('agree')}
          linkName={t('terms')}
          errorMessage={
            errors.acceptTerms?.message && t(errors.acceptTerms?.message)
          }
          {...register('acceptTerms')}
        />
        <div className='flex gap-9'>
          <Button
            name={t('register')}
            className='w-full justify-center'
            type='submit'
            variant='primary'
          />
        </div>
        <TextLink
          text={t('doYouHaveAccount')}
          linkName={t('signIn')}
          href='/login'
        />
      </form>
      {isModalOpen && (
        <Modal
          title={t('confirmRegistration')}
          buttonName={t('resubmit')}
          firstParagraph={t('weSendLink')}
          secondParagrah={t('didNotReach')}
          handleClick={handleModalClose}
        />
      )}
    </>
  )
}

export default RegistrationForm
