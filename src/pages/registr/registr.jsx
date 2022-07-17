import React from 'react'
import { Link } from 'react-router-dom';
// Styles
import './registr.css'
import { Button } from '@mui/material';

const Registr = () => {
  return (
    <div>
      <Link className="button__in" to="/sign-in">Sign in</Link>
  
      <form className="form">
        <h1 className="form__title">
          Sign up
        </h1>
        <p className="form__description">
          Sign up and start managing your candidates!
        </p>
        <div className="row">
          <input id="firstName" type="text" className="name-field" placeholder="Enter first name" />
          <input id="lastName" type="text" className="surname-field" placeholder="Enter last name" />
        </div>

        <input id="gender" type="text" className="gender-field" placeholder="Enter gender" />
        <input id="age" type="text" className="age-field" placeholder="Enter age" />
        <input id="email" type="email" className="email-field" placeholder="Enter E-mail" />
        <input id="password" type="password" className="password-field" placeholder="Enter password" />

        <Button variant="contained" className="submit_button">Sign up</Button>
      </form>
    </div>
  )
}


export default Registr
