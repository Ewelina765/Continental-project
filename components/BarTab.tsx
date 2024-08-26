'use client'

import clsx from 'clsx'

type BarTabProps = {
  name: string
  index: number
  checked?: number
  setChecked?: React.Dispatch<React.SetStateAction<number>>
  disabled: boolean
  variant?: 'timer' | 'tab'
}

const BarTab: React.FC<BarTabProps> = ({
  name,
  index,
  checked = 0,
  setChecked,
  disabled,
  variant = 'tab',
}) => {
  const state = checked === index

  const style = clsx(
    'h-full text-xs text-white flex justify-center items-center',
    {
      'w-24': variant === 'tab',
      'w-full': variant === 'timer',
    },
    {
      'bg-blue shadow-innerShadow': state,
      'bg-lightBlue shadow-customShadow': !disabled && !state,
      'bg-grey shadow-innerShadow': disabled && !state,
    }
  )

  return (
    <>
      {setChecked ? (
        <button
          disabled={disabled}
          onClick={() => setChecked(index)}
          className={style}
          type='button'
        >
          {name}
        </button>
      ) : (
        <div className={style}>{name}</div>
      )}
    </>
  )
}

export default BarTab
