import { store } from '../apps/store'

function Header() {
  const userImage = store.getState().userInfo.image
  const userName = store.getState().userInfo.name

  return (
    <div className='fixed-top border-bottom bg-success'>
      <div className='container'>
        <div className='d-flex align-items-center justify-content-end h--15'>
          <div className='w--12 h--12 flex-fixed me-2'>
            <img className='rounded-circle' src={userImage} alt='' />
          </div>
          <div>{userName}</div>
        </div>
      </div>
    </div>
  )
}

export default Header
