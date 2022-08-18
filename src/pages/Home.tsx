import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTokenNull } from '../stores/Token'
import Dropdown from 'react-bootstrap/Dropdown'
import { useEffect, useState } from 'react'
import i18next from 'i18next'
import SystemString from '../helpers/SystemString'
import ModalConfirm from '../components/ModalConfirm'
import { store } from '../apps/store'
import { setLoginFbDefault } from '../stores/UserInfo'

function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const systemString = SystemString
  const [selectedLanguage, setSelectedLanguage] = useState<string>('')
  const [show, setShow] = useState<boolean>(false)
  const lstLanguages: string[] = ['vi', 'en']

  useEffect(() => {
    setSelectedLanguage(i18next.resolvedLanguage)
  }, [])

  const changeTheLanguage = (language: string) => {
    i18next.changeLanguage(language) // i18next function to change language
    setSelectedLanguage(language)
  }

  const confirmLogout = () => {
    setShow(true)
  }

  const logout = () => {
    setShow(false)
    dispatch(setTokenNull())
    const isLoginFB = store.getState().userInfo.isLoginFB
    if (isLoginFB) {
      window.FB.logout()
      dispatch(setLoginFbDefault())
    }
    navigate('login')
  }

  const createTodo = () => {
    navigate('new-todo')
  }

  return (
    <div className='homepage mw--125 mx-auto'>
      <div className='flex-center min-h-screen-main'>
        <div className='flex-center flex-wrap'>
          <button
            onClick={createTodo}
            className='btn btn-primary minw--35 me-3 mt-3'
          >
            {t('home.new_todo')}
          </button>
          <Dropdown className='me-3 mt-3'>
            <Dropdown.Toggle className='minw--35' variant='secondary'>
              {systemString.languageDisplay(selectedLanguage)}
            </Dropdown.Toggle>

            <Dropdown.Menu variant='dark'>
              {lstLanguages.map((language: string, index: number) => {
                return (
                  <Dropdown.Item
                    key={index}
                    onClick={() => changeTheLanguage(language)}
                  >
                    {systemString.languageDisplay(language)}
                  </Dropdown.Item>
                )
              })}
            </Dropdown.Menu>
          </Dropdown>
          <button
            onClick={confirmLogout}
            className='btn btn-outline-primary minw--35 mt-3'
          >
            {t('home.logout')}
          </button>
        </div>
      </div>
      <ModalConfirm
        isShow={show}
        onOk={logout}
        onCancel={() => setShow(false)}
      />
    </div>
  )
}

export default Home
