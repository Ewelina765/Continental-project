import TableColumn from './TableColumn'
import { CanbanColumnType } from '../SprintDetails'

type TasksTableProps = {
  canbanColumn: CanbanColumnType
}

const TasksTable: React.FC<TasksTableProps> = ({ canbanColumn }) => {
  const sortedColumns = [...canbanColumn].sort(
    (a, b) => a.columnIndex - b.columnIndex
  )

  return (
    <div className='flex h-max gap-4 px-4 py-8'>
      {sortedColumns?.map(({ id: canbanColId, columnIndex, name, task }) => (
        <TableColumn
          name={name}
          key={columnIndex}
          task={task}
          canbanColId={canbanColId}
        />
      ))}
    </div>
  )
}

export default TasksTable
