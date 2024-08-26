import clsx from 'clsx'

import { DoubleArrowLeftIcon, DoubleArrowRightIcon } from '@/icons'

type ExtendedViewButtonProps = {
  extendedView: boolean
  setExtendedView: React.Dispatch<React.SetStateAction<boolean>>
}

const ExtendedViewButton: React.FC<ExtendedViewButtonProps> = ({
  extendedView,
  setExtendedView,
}) => {
  return (
    <button
      className={clsx(
        'flex h-10 w-10 items-center justify-center rounded-lg bg-darkGrey',
        { 'ml-2.5': extendedView }
      )}
      type='button'
      onClick={() => setExtendedView((prev) => !prev)}
    >
      {extendedView ? (
        <DoubleArrowLeftIcon fill='none' />
      ) : (
        <DoubleArrowRightIcon fill='none' />
      )}
    </button>
  )
}

export default ExtendedViewButton
