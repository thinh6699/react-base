import { ErrorMessage } from '@hookform/error-message'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { store } from '../apps/store'
import TodoItem from '../components/TodoItem'
import { Tasks } from '../models'
import { handleListTask } from '../stores/Tasks'

function NewTodo() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm({
    criteriaMode: 'all',
    mode: 'onSubmit',
    defaultValues: {
      task: ''
    }
  }) // define validation
  const taskValidate = {
    ...register('task', {
      required: 'Task is required'
    })
  }

  const addTask = (data: any) => {
    let lstTemp: Tasks[] = [...store.getState().tasks]
    const newTask = new Tasks({
      id: Math.floor(Math.random() * 1000),
      name: data.task
    })
    lstTemp.push(newTask)
    dispatch(handleListTask(lstTemp))
    setValue('task', '')
  }

  const backToHome = () => {
    navigate('/')
  }

  return (
    <div className='todo mw--150 mx-auto'>
      <h2 className='my-4 text-center text-center'>My Todos</h2>
      <div className='flex-center mb-6'>
        <button onClick={backToHome} className='btn btn-primary'>
          Go home
        </button>
      </div>
      <div className='todo-form border rounded p-4 mb-20'>
        <div className='add-todo d-flex flex-wrap justify-content-between align-items-baseline pe-3'>
          <div className='mt-3 flex-1 me-10'>
            <input
              type='text'
              className='form-control h--10'
              placeholder='Add your todo'
              {...taskValidate}
            />
            <ErrorMessage
              errors={errors}
              name='task'
              render={({ messages }) => {
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <p className='pt-1 text-danger mb-0' key={type}>
                        {message}
                      </p>
                    ))
                  : null
              }}
            />
          </div>
          <button
            onClick={handleSubmit(addTask)}
            className='btn btn-outline-primary mt-3 mb-3'
          >
            Add Task
          </button>
        </div>
        <TodoItem />
      </div>
    </div>
  )
}

export default NewTodo
