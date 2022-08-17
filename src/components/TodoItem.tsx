import { ErrorMessage } from '@hookform/error-message'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { store } from '../apps/store'
import { Tasks } from '../models'
import { handleListTask } from '../stores/Tasks'

function TodoItem() {
  const dispatch = useDispatch()
  const lstTasks = store.getState().tasks
  const [listTasks, setListTask] = useState<Tasks[]>([])
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    criteriaMode: 'all',
    mode: 'onSubmit'
  }) // define validation

  useEffect(() => {
    const lstTemp: Tasks[] = lstTasks.map((task: Tasks) => {
      return new Tasks({
        id: task.id,
        name: task.name,
        isCompleted: task.isCompleted,
        isEdit: task.isEdit
      })
    })
    setListTask(lstTemp)
  }, [lstTasks])

  const setCompleted = (item: Tasks) => {
    if (!item.isEdit) {
      item.isCompleted = !item.isCompleted
      item.isEdit = false
      dispatch(handleListTask([...listTasks]))
      setListTask([...lstTasks])
    }
  }

  const deleteTask = (item: Tasks) => {
    if (item.isCompleted) {
      const newList = listTasks.filter((task: Tasks) => task.id !== item.id)
      dispatch(handleListTask(newList))
      setListTask([...newList])
    }
  }

  const setEdit = (item: Tasks, data: any) => {
    item.isEdit = !item.isEdit
    if (!item.isEdit) {
      item.name = data[`task${item.id}`]
      dispatch(handleListTask([...listTasks]))
      setListTask([...listTasks])
    }
  }

  // const setValue = (e: ChangeEvent<HTMLInputElement>, item: Tasks) => {
  //   item.name = e.target.value
  //   setListTask([...listTasks])
  // }

  return (
    <div className='list-todo'>
      <div className='maxh--137 overflow-auto'>
        {listTasks.map((item: Tasks) => {
          return (
            <div
              key={item.id}
              className='d-flex flex-wrap align-items-baseline py-3 border-bottom mt-3 pe-3'
            >
              {(() => {
                if (item.isEdit) {
                  return (
                    <div className='flex-1 me-3 mb-3'>
                      <input
                        defaultValue={item.name}
                        className='form-control minw--25'
                        type='text'
                        {...register(`task${item.id}`, {
                          required: `Task${item.id} is required`
                        })}
                        onKeyUp={handleSubmit((data: any, e: any) => {
                          if (e.key === 'Enter') {
                            setEdit(item, data)
                          }
                        })}
                      />
                      <ErrorMessage
                        errors={errors}
                        name={`task${item.id}`}
                        render={({ messages }) => {
                          return messages
                            ? Object.entries(messages).map(
                                ([type, message]) => (
                                  <p
                                    className='pt-1 text-danger mb-0'
                                    key={type}
                                  >
                                    {message}
                                  </p>
                                )
                              )
                            : null
                        }}
                      />
                    </div>
                  )
                } else {
                  return (
                    <div
                      className={
                        'flex-1 me-3 mb-3 py-2 px-4 minw--25 word-break text-truncate ' +
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
                    onClick={handleSubmit(async (data: any) => {
                      setEdit(item, data)
                    })}
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
