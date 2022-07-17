import React from 'react'
// Styles
import './auth.css'

const Auth = () => {
  return (
    <div>
      <a className="button__in" href="#">Sign in</a>
      <div className="form">
        <h1 className="form__title">
          Sign up
        </h1>
        <p className="form__description">
          Sign up and start managing your candidates!
        </p>
        <input id="email" type="text" className="email-field" placeholder="Enter E-mail" />
        <input id="password" type="text" className="password-field" placeholder="Enter password" />
        <label>
          <input type="checkbox" name="rememberUser" defaultValue="remember" className="checkbox" />
          <span className="remember">Remember me</span>
        </label>
        <a className="form__button" href="#">Sign up</a>
      </div>
    </div>

  )
}


export default Auth
