import React from 'react'
// Selectors
import { selectAllUsers } from '../../store/all-users'
// Hooks
import {
  useSelector
} from 'react-redux';
// Styles
import './user-details.css'
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const users = useSelector(selectAllUsers);
  const {id} = useParams()
  console.log(id)
  const user = users.find(item => +item.id === +id)
  console.log(user, users)

  const getAbbr = (name = '') => {
    const [firstName, lastName] = name.split(' ')

    return `${firstName?.[0]}${lastName?.[0]}`
  }

  return (
    <div className='user-details-container'>
      <div className="user-details-logo">
        {getAbbr(user.name)}
      </div>
      <p className="user-details-info">{user.name}</p>
      <p className="user-details-info">{user.email}</p>
      <p className="user-details-info">{user.phone}</p>
      <p className="user-details-info">Male</p>
    </div>
  )
}

export default UserDetails