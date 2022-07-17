import {
  configureStore
} from '@reduxjs/toolkit';
// Redusers
import {
  allUsersReducer
} from './all-users'

export const store = configureStore({
  reducer: {
    allUsers: allUsersReducer
  },
});