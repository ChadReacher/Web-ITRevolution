import {
  configureStore
} from '@reduxjs/toolkit';
// Redusers
import {
  allUsersReducer
} from './all-users'
import {
  authReducer
} from './auth'

export const store = configureStore({
  reducer: {
    allUsers: allUsersReducer,
    auth: authReducer,
  },
});