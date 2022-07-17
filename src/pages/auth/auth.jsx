import React from 'react'
// Styles
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Auth = () => {
  return (
    <div>
      <Link className="button__in" to="/">Sign up</Link>
      <form className="form">
        <h1 className="form__title">
          Sign in
        </h1>
        <p className="form__description">
          Sign in and start managing your candidates!
        </p>
        <input id="email" type="text" className="email-field" placeholder="Enter E-mail" />
        <input id="password" type="text" className="password-field" placeholder="Enter password" />
        <Button variant="contained" className="submit_button">Sign in</Button>
      </form>
    </div>

  )
}


export default Auth
