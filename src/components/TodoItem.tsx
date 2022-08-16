import { ChangeEvent, useEffect, useState } from 'react'
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
  }, [lstTasks])

  const setCompleted = (item: Tasks) => {
    item.isCompleted = !item.isCompleted
    item.isEdit = false
    dispatch(handleListTask([...listTasks]))
    setListTask([...listTasks])
  }

  const deleteTask = (item: Tasks) => {
    if (item.isCompleted) {
      const newList = listTasks.filter((task: Tasks) => task.id !== item.id)
      dispatch(handleListTask(newList))
      setListTask([...lstTasks])
    }
  }

  const setEdit = (item: Tasks) => {
    if (item.name !== '') {
      item.isEdit = !item.isEdit
      dispatch(handleListTask([...listTasks]))
      setListTask([...listTasks])
    }
  }

  const setValue = (e: ChangeEvent<HTMLInputElement>, item: Tasks) => {
    item.name = e.target.value
    setListTask([...listTasks])
  }

  return (
    <div className='list-todo'>
      <div className='maxh--137 overflow-auto'>
        {listTasks.map((item: Tasks) => {
          return (
            <div
              key={item.id}
              className='d-flex flex-wrap align-items-center py-3 border-bottom mt-3 pe-3'
            >
              {(() => {
                if (item.isEdit) {
                  return (
                    <div className='flex-1 me-3 mb-3'>
                      <input
                        className='form-control minw--25'
                        type='text'
                        value={item.name}
                        onChange={e => {
                          setValue(e, item)
                        }}
                      />
                    </div>
                  )
                } else {
                  return (
                    <div
                      className={
                        'flex-1 me-3 mb-3 py-2 px-4 minw--25 word-break ' +
                        (item.isCompleted ? 'text-line-through' : '')
                      }
                    >
                      {item.name}
                    </div>
                  )
                }
              })()}
              <div className='d-flex align-items-center mb-3'>
                <div className='me-2'>
                  <button
                    onClick={() => setEdit(item)}
                    className='btn btn-outline-info me-2'
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => setCompleted(item)}
                    className='btn btn-outline-success'
                  >
                    Complete
                  </button>
                </div>
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
      </div>
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
