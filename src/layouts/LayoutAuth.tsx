import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function LayoutAuth() {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='fixed top-0 left-0 right-0 z-1030 border-b border-solid border-border-color bg-white'>
        <div className='container'>
          <div className='flex items-center justify-between h-20'>
            <div className='logo flex-shrink-0 cursor-pointer'>
              <img src={require('../assets/images/mashup-logo.png')} alt='' />
            </div>
          </div>
        </div>
      </div>
      <main className='flex-1'>
        <div className='container'>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default LayoutAuth
