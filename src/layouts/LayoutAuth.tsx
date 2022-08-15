import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function LayoutAuth() {
  return (
    <div className='d-flex flex-column min-h-screen'>
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
