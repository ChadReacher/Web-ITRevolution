import React, { useEffect } from 'react';
// Hooks
import {
  useDispatch,
  useSelector
} from 'react-redux';
import { useNavigate } from "react-router-dom";
// Selectors
import { selectAllUsers, selectAllUsersLoading, fetchAllUsers } from '../../store/all-users'
// Components
import { ListItem } from '../../components'
// Styles
import { Typography } from '@mui/material';
import './all-users.css';

const AllUsers = () => {
  const users = useSelector(selectAllUsers);
  const loading = useSelector(selectAllUsersLoading);

  const navigate = useNavigate()

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [])

  if (loading) {
    return <h1 className="center">Loading...</h1>
  }

  const onCardClick = (id) => {
    navigate(`/users-details/${id}`)
  }

  const getAbbr = (name = '') => {
    const [firstName, lastName] = name.split(' ')

    return `${firstName?.[0]}${lastName?.[0]}`
  }

  return (<div className="container" >
    <Typography className='title' variant='h4' color="#5ea4a4">All users</Typography>
      {users?.map(item => <ListItem
        onClick={() => onCardClick(item.id)}
        abbreviation={getAbbr(item.name)}
        name={item.name}
        key={item.id}
      />)}


  </div >
  );
}

export default AllUsers