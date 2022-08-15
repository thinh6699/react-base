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
  function RequireAuth({ children }: { children: JSX.Element }) {
    let token = store.getState().token
    let location = useLocation()

    if (!token) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to='/login' state={{ from: location }} replace />
    }
    return children
  }

  return (
    <Routes>
      <Route element={<LayoutAuth />}>
        <Route path='/login' element={<Login />} />
      </Route>
      <Route element={<LayoutMain />}>
        <Route
          path='/'
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path='/new-todo'
          element={
            <RequireAuth>
              <NewTodo />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  )
}

export default Routers
