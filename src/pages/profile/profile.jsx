import React from 'react'
// Styles
import './profile.css'

const Profile = () => {
  return (
    <div>
      <header className="header">
        <h1 className="header__title">User profile</h1>
        <a href="#" className="header__btn">User list</a>
      </header>
      <main className="main">
        <div className="photo">
          <img className="photo__user" src="ava.png" alt="ava" />
        </div>
        <div className="data">
          <h1 className="title__data">User data</h1>
          <a href="#"><img className="img__edit" src="Edit_Notepad_Icon.svg" alt="edit-img" /></a>
          <ul className="user__data">
            <li className="data__item">Email</li>
            <li className="data__user">petrov@gmail.com</li>
            <li className="data__item">Name</li>
            <li className="data__user">Ivan</li>
            <li className="data__item">Last name</li>
            <li className="data__user">Ivanov</li>
            <li className="data__item">Age</li>
            <li className="data__user">17</li>
            <li className="data__item">Gender</li>
            <li className="data__user">Male</li>
          </ul>
        </div>
        <img className="bottom__bg" src="bottom.svg" alt="bottom-bg" />
      </main>
    </div>

  )
}

export default Profile