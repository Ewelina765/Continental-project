import clsx from 'clsx'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { PaperClipIcon, XMarkIcon } from '@/icons'
import HorizontalDivider from './HorizontalDivider'
import Button from './Button'

type TaskModalProps = {
  title: string
  difficultyLevel: string
  technology: string
  taskNumber: number
  status: string
  taskCategory: string
  result: string
  description: string
  handleClick?: React.MouseEventHandler<HTMLDivElement>
}

const TaskModal: React.FC<TaskModalProps> = ({
  title,
  status,
  difficultyLevel,
  technology,
  taskCategory,
  description,
  result,
  taskNumber,
  handleClick,
}) => {
  const [file, setFile] = useState<File | null>(null)
  const [files, setFiles] = useState<FileList | null>()
  const [file2, setFile2] = useState<File | null>(null)
  const t = useTranslations('lessonsPage')

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
      setFiles(e.target.files)
    }
  }

  const handleFile2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile2(e.target.files[0])
    }
  }

  const handleModalClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      handleClick?.(e)
    }
  }

  let fileNames: string[] = []
  if (files) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const fileName = file.name
      fileNames.push(fileName)
    }
  }

  const handleRemoveFile = () => {
    setFiles(null)
  }

  return (
    <div
      onClick={handleModalClick}
      className='fixed left-0 right-0 top-0 z-50  flex h-full max-h-full items-center justify-center overflow-y-auto overflow-x-hidden p-4 backdrop-blur md:inset-0'
    >
      <div className='flex w-175 flex-col gap-4 rounded-lg bg-darkGrey p-8 font-medium text-white'>
        <div className='flex items-center justify-between'>
          <h1 className='text-8'>{title}</h1>
          <div className='text-base'>Status: {t(`${status}`)}</div>
        </div>
        <HorizontalDivider />
        <div className='flex justify-between'>
          <div className='flex gap-1.5'>
            <div
              className={clsx(
                'w-max rounded-lg border-0.25 px-2 py-1 text-xs',
                {
                  'border-green text-green': difficultyLevel === 'MEDIUM',
                  'border-orange text-orange': difficultyLevel === 'HARD',
                  'border-red text-red': difficultyLevel === 'ADVANCED',
                }
              )}
            >
              {t('difficulty', { difficultyLevel })}
            </div>

            <div className='w-max rounded-lg border-0.25 border-blue px-2 py-1 text-xs text-blue'>
              {technology}
            </div>
            <div className='w-max rounded-lg border-0.25 border-aqua px-2 py-1 text-xs text-aqua'>
              {t(`${taskCategory}`)}
            </div>
          </div>
          <div className='flex h-max items-center rounded-lg border-0.25 px-2 py-1 text-xs'>
            {taskNumber}
          </div>
        </div>
        <HorizontalDivider />
        <span className='text-center text-xs'>{description}</span>
        <div className='flex justify-between'>
          <div
            className={clsx(
              'flex w-68.75 items-center justify-center rounded-lg border-0.25 px-2 py-1 text-xs',
              {
                'border-green text-green': result === 'POSITIVE',
                'border-orange text-orange': result === 'INPROGRESSREVIEW',
                'border-red text-red': result === 'NEGATIVE',
              }
            )}
          >
            {t(`${result}`)}
          </div>
          <form>
            <label
              htmlFor='formFile'
              className='flex w-68.75 cursor-pointer items-center justify-center gap-2 rounded-lg bg-blue py-2 text-center text-base font-medium text-white'
            >
              {t('addFile')}
              <PaperClipIcon fill='none' scale={false} />
            </label>
            <input
              id='formFile'
              type='file'
              onChange={handleFile}
              multiple
              className='hidden'
            ></input>
          </form>
        </div>
        <div className='flex justify-end'>
          {file && (
            <div className='flex w-68.75 flex-col gap-3'>
              {fileNames?.map((one, index) => (
                <div className='flex justify-between' key={index}>
                  <div className='flex flex-col text-xs'>{one}</div>
                  <XMarkIcon
                    fill='none'
                    scale={false}
                    size='12'
                    onClick={handleRemoveFile}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className='flex flex-col gap-8'>
          <label
            htmlFor='formFile2'
            className=' relative flex h-40 cursor-pointer items-center justify-center rounded-lg border-0.25 text-base'
          >
            {file2 ? (
              <Image
                alt='foto'
                src={URL.createObjectURL(file2)}
                fill
                style={{
                  objectFit: 'cover',
                }}
                className='rounded-lg'
              />
            ) : (
              <p className='text-base'>Content or image</p>
            )}
          </label>
          <input
            id='formFile2'
            type='file'
            onChange={handleFile2}
            className='hidden'
            accept='image/*'
          ></input>

          <Button variant='quaternary' name={t('enterTask')} />
        </div>
      </div>
    </div>
  )
}

export default TaskModal
