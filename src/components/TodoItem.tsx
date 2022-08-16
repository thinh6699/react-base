import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { store } from '../apps/store'
import { Tasks } from '../models'
import { handleListTask } from '../stores/Tasks'

function TodoItem() {
  const dispatch = useDispatch()
  const lstTasks = store.getState().tasks
  const [listTasks, setListTask] = useState<Tasks[]>([])

  useEffect(() => {
    setListTask(lstTasks)
  }, [lstTasks.length])

  const setCompleted = (item: Tasks) => {
    item.isCompleted = true
    dispatch(handleListTask([...listTasks]))
    setListTask([...listTasks])
  }

  const deleteTask = (item: Tasks) => {
    if (item.isCompleted) {
      let newList = listTasks.filter((task: Tasks) => task.id !== item.id)
      dispatch(handleListTask(newList))
      setListTask(lstTasks)
    }
  }

  return (
    <div className='list-todo'>
      {listTasks.map((item: Tasks) => {
        return (
          <div
            key={item.id}
            className='d-flex flex-wrap align-items-center py-3 border-bottom mt-3'
          >
            <div
              className={
                'flex-1 me-3 ms-3 mb-3 ' +
                (item.isCompleted ? 'text-line-through' : '')
              }
            >
              {item.name}
            </div>
            <div className='d-flex align-items-center mb-3'>
              {item.isCompleted ? null : (
                <div className='me-2'>
                  <button className='btn btn-outline-info me-2'>Edit</button>
                  <button
                    onClick={() => setCompleted(item)}
                    className='btn btn-outline-success'
                  >
                    Complete
                  </button>
                </div>
              )}
              <button
                onClick={() => deleteTask(item)}
                className='btn btn-outline-danger'
              >
                Delete
              </button>
            </div>
          </div>
        )
      })}
      {(() => {
        let inCompletedTask = listTasks.filter(
          (item: Tasks) => !item.isCompleted
        ).length
        if (inCompletedTask > 0) {
          return (
            <div className='pt-5'>
              You have {inCompletedTask} tasks incompleted
            </div>
          )
        } else {
          return ''
        }
      })()}
    </div>
  )
}

export default TodoItem
