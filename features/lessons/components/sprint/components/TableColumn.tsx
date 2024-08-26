import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { ReactSortable, SortableEvent } from 'react-sortablejs'

import { TaskType } from '../SprintDetails'
import CanbanTask from './CanbanTask'
import { useParams, useRouter } from 'next/navigation'

type TableColumnProps = {
  name: string
  task: TaskType
  canbanColId: string
}

export type ItemType = {
  title: string
  id: string
  taskNumber: number
  difficultyLevel: string
  status: string
  taskCategory: string
  technology: string
  result: string
  canbanColumnId: string
  description: string
}

const TableColumn: React.FC<TableColumnProps> = ({
  name,
  task,
  canbanColId,
}) => {
  const [state, setState] = useState(task)
  const { id, sprint } = useParams()
  const router = useRouter()
  const t = useTranslations('lessonsPage')


  const handleCardSwap = (evt: SortableEvent) => {
    const { oldIndex, newIndex } = evt
    if (typeof oldIndex !== 'number' || typeof newIndex !== 'number') {
      return
    }
    const updatedTask = [...state]
    const bigName = name.toUpperCase()
    const updatedItem = {
      status: bigName,
      canbanColumnId: canbanColId,
    }
    const [removed] = updatedTask.splice(oldIndex, 1)
    updatedTask.splice(newIndex, 0, {
      ...removed,
      ...updatedItem,
    })
    setState(updatedTask)
    handleSubmit(updatedTask)
  }

  const handleSubmit = async (item: any) => {
    if (!item.status || !item.canbanColumnId) {
      return
    }
    try {
      const response = await fetch(`/api/lessons/${id}/${sprint}`, {
        method: 'PUT',
        body: JSON.stringify({
          newStatus: item.status,
          canbanId: item.canbanColumnId,
        }),
      })
      if (!response.ok) {
        const errorData = await response.json()
        console.error(errorData)
      }
      router.refresh()
      return await response.json()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='relative flex-1 rounded-lg bg-grey'>
      <div className='flex h-10 items-center justify-center rounded-t-lg bg-orange'>
        <label className='text-base'>{t(`${name}`)}</label>
      </div>
      <ReactSortable
        list={state}
        setList={setState}
        animation={150}
        group={{ name: 'shared', put: true, pull: true }}
        onEnd={(e) => handleCardSwap(e)}
      >
        <div className='flex flex-col gap-4 p-4'>
          {state?.map(
            ({
              title,
              id,
              taskNumber,
              status,
              difficultyLevel,
              taskCategory,
              technology,
              result,
              description,
            }) => (
              <CanbanTask
                title={title}
                key={id}
                taskNumber={taskNumber}
                difficultyLevel={difficultyLevel}
                status={status}
                taskCategory={taskCategory}
                technology={technology}
                result={result}
                name={name}
                description={description}
                canbanColId={canbanColId}
              />
            )
          )}
        </div>
      </ReactSortable>
    </div>
  )
}

export default TableColumn
