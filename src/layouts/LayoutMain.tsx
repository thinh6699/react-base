import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

function LayoutMain() {
  return (
    <div className='d-flex flex-column min-h-screen'>
      <Header />
      <main className='flex-1 mt-15'>
        <div className='container'>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default LayoutMain
