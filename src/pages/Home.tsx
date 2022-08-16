import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTokenNull } from '../stores/Token'

function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const logout = () => {
    dispatch(setTokenNull())
    navigate('login')
  }

  const createTodo = () => {
    navigate('new-todo')
  }

  return (
    <div className='homepage mw--100 mx-auto'>
      <div className='flex-center min-h-screen-main'>
        <button onClick={createTodo} className='btn btn-primary minw--25 me-3'>
          {t('home.new_todo')}
        </button>
        <button onClick={logout} className='btn btn-outline-primary minw--25'>
          {t('home.logout')}
        </button>
      </div>
    </div>
  )
}

export default Home
