import React from 'react';
import { Routes, Route } from "react-router-dom";
import { AllUsers, Auth, Profile, UserDetails } from './pages'
// Components
import { NavigationBar } from './components'
// Styles
import 'normalize.css';

const App = () => {

  const isAuth = true; // Todo: replace when data is received

  return (
    <>
      <NavigationBar isAuth={isAuth}/>
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
              <Route path='/' exact element={<Auth />} />
              <Route
                path="*"
                element={<Auth />}
              />
            </>
        }

      </Routes >
    </>
  );
}

export default App;