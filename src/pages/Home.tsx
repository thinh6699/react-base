import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTokenNull } from '../stores/Token'
import Dropdown from 'react-bootstrap/Dropdown'
import { useEffect, useRef, useState } from 'react'
import i18next from 'i18next'
import SystemString from '../helpers/SystemString'
import ModalConfirm from '../components/ModalConfirm'
import { store } from '../apps/store'
import { setLoginFbDefault } from '../stores/UserInfo'

function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const fileInput = useRef<any>(null)
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
    store.dispatch(setTokenNull())
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

  const resetValue = () => {
    fileInput.current!.value = null
  }

  const onFileChange = (e: any) => {
    const fileType = ['image/png']
    const files: File[] = e.target.files || e.dataTransfer.files
    const file: File = files[0]
    if (!files.length) {
      return
    }
    if (!fileType.includes(file.type)) {
      console.log('error')
      return
    }
    console.log(file)
  }

  return (
    <div className='homepage mw--125 mx-auto'>
      <div className='flex-center min-h-screen-main'>
        <div className='flex-center flex-wrap'>
          <input
            id='file'
            ref={fileInput}
            type='file'
            className='h--0 w--0 overflow-hidden'
            accept='*'
            onClick={resetValue}
            onChange={onFileChange}
          />
          <label
            htmlFor='file'
            className='minw--25 py-2 flex-center bg-success rounded position-relative cursor-pointer mb-0 mt-3 me-3'
          >
            Choose File
          </label>
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
