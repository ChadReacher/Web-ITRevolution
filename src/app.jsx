import React from 'react';
import { Routes, Route } from "react-router-dom";
import { AllUsers, Auth, Profile, UserDetails } from './pages'

const App = () => {

  const isAuth = true; // Todo: replace when data is received

  return (
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
  );
}

export default App;