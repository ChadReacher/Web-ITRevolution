import React from 'react';
// Hooks
import {
  useDispatch,
  useSelector
} from 'react-redux';
// Selectors
import { selectAllUsers, selectAllUsersLoading, fetchAllUsers } from '../../store/all-users'
// Styles
import './all-users.css';

const AllUsers = () => {
    const users = useSelector(selectAllUsers);
    const loading = useSelector(selectAllUsersLoading);
  
    const dispatch = useDispatch();
  
    const handleClick = () => {
      dispatch(fetchAllUsers())
    }
  
    if (loading) {
      return <h1 className="center">Loading...</h1>
    }
  
    return (<div className="center" >
      <h1>Hi user list </h1>
  
      <button onClick={handleClick}>Fetch users</button>
      {users?.length ? users.map(item => <p className='center' key={item.id}>{item.username}</p>) : null}
    </div >
    );
}

export default AllUsers