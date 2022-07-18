import React from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import { AllUsers, Auth, Profile, UserDetails, Registr } from './pages'
// Hooks
import { useSelector, useDispatch } from 'react-redux';
// Components
import { NavigationBar } from './components'

// Styles
import 'normalize.css';
// Selectors
import { selectIsAuth, resetAuthState, userLogout } from './store/auth/slice';

const App = () => {

  const isAuth = useSelector(selectIsAuth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logout = () => {
    localStorage.clear()
    dispatch(userLogout())
    dispatch(resetAuthState())
    window.location.reload(false)
    navigate('/')
  }

  return (
    <>
      <NavigationBar isAuth={isAuth} logout={logout} />
      <Routes>
        {
          isAuth ? <>
            <Route path='/' element={<Profile />} />
            <Route path='/all-users' element={<AllUsers />} />
            <Route path='/users-details/:id' element={<UserDetails />} />
            <Route
              path="*"
              element={<Profile />}
            />
          </> :
            <>
              <Route path='/' exact element={<Registr />} />
              <Route path='/sign-in' exact element={<Auth />} />
              <Route
                path="*"
                element={<Registr />}
              />
            </>
        }

      </Routes >
    </>
  );
}

export default App;