import { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { store } from '../apps/store'
import { handleTheme } from '../stores/Theme'

function Header() {
  const dispatch = useDispatch()
  const userImage = store.getState().userInfo.image
  const userName = store.getState().userInfo.name
  const themeMode: string[] = ['Light', 'Dark']
  const [selectedTheme, setSelectedTheme] = useState<string>('Light')

  const changeMode = (mode: string) => {
    setSelectedTheme(mode)
    dispatch(handleTheme(mode))
    let body = document.body
    if (mode === 'Dark') {
      body.classList.add('dark-theme')
    } else {
      body.classList.remove('dark-theme')
    }
  }

  return (
    <div className='fixed-top border-bottom bg-success'>
      <div className='container'>
        <div className='d-flex align-items-center justify-content-end h--15'>
          <div className='user-info d-flex align-items-center me-3'>
            <div className='w--12 h--12 flex-fixed me-2'>
              <img className='rounded-circle' src={userImage} alt='' />
            </div>
            <div>{userName}</div>
          </div>

          <Dropdown>
            <Dropdown.Toggle className='minw--25' variant='secondary'>
              {selectedTheme}
            </Dropdown.Toggle>

            <Dropdown.Menu variant='dark'>
              {themeMode.map((mode: string, index: number) => {
                return (
                  <Dropdown.Item key={index} onClick={() => changeMode(mode)}>
                    {mode}
                  </Dropdown.Item>
                )
              })}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}

export default Header
