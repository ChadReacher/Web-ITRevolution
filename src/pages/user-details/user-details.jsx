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

  const user = users.find(item => +item.userId === +id)

  const getAbbr = (name = '') => {
    const [firstName, lastName] = name.split(' ')

    return `${firstName?.[0]}${lastName?.[0]}`
  }

  return (
    <div className='user-details-container'>
      <div className="user-details-logo">
        {getAbbr(`${user.firstName} ${user.lastName}`)}
      </div>
      <p className="user-details-info">ID: {user.userId}</p>
      <p className="user-details-info">{`${user.firstName} ${user.lastName}`}</p>
      <p className="user-details-info">{user.email}</p>
      <p className="user-details-info">{user.gender}</p>
      <p className="user-details-info">Age: {user.age}</p>
    </div>
  )
}

export default UserDetails