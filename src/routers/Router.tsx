import { useEffect } from 'react'
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate
} from 'react-router-dom'
import { store } from '../apps/store'
import LayoutAuth from '../layouts/LayoutAuth'
import LayoutMain from '../layouts/LayoutMain'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NewTodo from '../pages/NewTodo'

function Routers() {
  const RequireAuth = ({ children }: { children: JSX.Element }) => {
    let token = store.getState().token
    let location = useLocation()
    let navigate = useNavigate()

    useEffect(() => {
      if (!token) {
        const name = encodeURIComponent(location.pathname)
        navigate(`login?redirect=${name}`, {
          replace: true,
          state: { from: location }
        })
      }
    }, [])

    if (!token) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      // return <Navigate to='/login' state={{ from: location }} replace />
      return null
    }
    return children
  }

  return (
    <Routes>
      <Route element={<LayoutAuth />}>
        <Route path='login' element={<Login />} />
      </Route>
      <Route
        element={
          <RequireAuth>
            <LayoutMain />
          </RequireAuth>
        }
      >
        <Route path='/' element={<Home />} />
        <Route path='new-todo' element={<NewTodo />} />
      </Route>
    </Routes>
  )
}

export default Routers
