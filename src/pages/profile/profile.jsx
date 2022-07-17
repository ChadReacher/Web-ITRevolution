import React from 'react'
import UpgradeIcon from '@mui/icons-material/Upgrade';
// Styles
import './profile.css'

const Profile = () => {
  return (
    <div>
      <header className="header">
        <div className="row">
          <h1 className="header__title">User profile</h1>
          <div className='row_profile' onClick={()=> {}}>
            UPDATE PROFILE
            <UpgradeIcon sx={{color: '#fff'}}/>
          </div>
        </div>
      </header>
      <main className="main">
        <div className="data">

          <h1 className="title__data">User data</h1>


          <div className="photo">
            AV
          </div>
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
      </main>
    </div>

  )
}

export default Profile