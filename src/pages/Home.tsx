import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTokenNull } from '../stores/Token'
import Dropdown from 'react-bootstrap/Dropdown'
import { useEffect, useState } from 'react'
import { SimpleModel } from '../models'
import { languageChange } from '../stores/Language'
import { changeLanguage } from 'i18next'
import { store } from '../apps/store'

function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const [selectedLanguage, setSelectedLanguage] = useState<string>('')
  const lstLanguages: SimpleModel[] = [
    {
      text: 'English',
      code: 'en'
    },
    {
      text: 'Vietnamese',
      code: 'vi'
    }
  ]

  useEffect(() => {
    setSelectedLanguage(store.getState().language.text)
  })

  const changeTheLanguage = (language: any) => {
    changeLanguage(language.code) // i18next function to change language
    setSelectedLanguage(language.text)
    dispatch(languageChange(language)) // save language object to localStorage
  }

  const logout = () => {
    dispatch(setTokenNull())
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
              {selectedLanguage}
            </Dropdown.Toggle>

            <Dropdown.Menu variant='dark'>
              {lstLanguages.map((language: any, index: number) => {
                return (
                  <Dropdown.Item
                    key={index}
                    onClick={() => changeTheLanguage(language)}
                  >
                    {language.text}
                  </Dropdown.Item>
                )
              })}
            </Dropdown.Menu>
          </Dropdown>
          <button
            onClick={logout}
            className='btn btn-outline-primary minw--35 mt-3'
          >
            {t('home.logout')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
