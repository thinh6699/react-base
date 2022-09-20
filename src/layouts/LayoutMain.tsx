import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

function LayoutMain() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1'>
        <div className='container'>
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default LayoutMain
