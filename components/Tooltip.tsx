import { useTranslations } from 'next-intl'
import clsx from 'clsx'
import React from 'react'

type TooltipProps = {
  children: React.ReactNode
  message: string
  extendedView: boolean
  editor?: boolean
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  message,
  extendedView,
  editor,
}) => {
  const messageCategory = editor ? 'codeEditor' : 'sidebar'
  const t = useTranslations(messageCategory)
  const [showTooltip, setShowTooltip] = React.useState(false)

  const handleMouse = () => setShowTooltip((prev) => !prev)

  return (
    <>
      <div className='relative group'>
        <div
          className='cursor-pointer'
          onMouseEnter={handleMouse}
          onMouseLeave={handleMouse}
        >
          {children}
        </div>
        {!extendedView && showTooltip && (
          <div
            className={clsx(
              'flex items-center absolute h-10 min-w-max px-3 py-2 text-sm font-medium text-black border-0.125 border-gray-10 bg-white rounded shadow opacity-0 z-0 group-hover:opacity-100 group-hover:z-20 transition-opacity duration-300 transform',
              { 'left-10 -top-3': !editor },
              { '-left-60 -top-2': editor }
            )}
          >
            <div
              className={clsx(
                'tooltip-arrow bg-white w-2 h-6 absolute top-4 ml-2',
                { '-right-1': editor },
                { '-left-3': !editor }
              )}
            ></div>
            {t(message)}
          </div>
        )}
      </div>
    </>
  )
}

export default Tooltip
