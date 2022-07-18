import {
    createAsyncThunk,
    createSlice
} from '@reduxjs/toolkit';
import axios from 'axios';

// Name of the slice
const ALL_USERS_SLICE_NAME = 'allUsers'

const initialState = {
    users: null,
    loading: false,
    error: false,
};

// Async action
export const fetchAllUsers = createAsyncThunk(
    `${ALL_USERS_SLICE_NAME}/fetch`,
    async () => {
        const response = await axios.get('https://webitrevolution.herokuapp.com/api/v1/users');
        return response.data;
    }
);

// Slice
export const allUsersSlice = createSlice({
    name: ALL_USERS_SLICE_NAME,
    initialState,
    reducers: {},
    extraReducers: {
        [fetchAllUsers.pending]: (state) => {
            state.loading = true
        },
        [fetchAllUsers.rejected]: (state) => {
            state.loading = false
            state.error = true
        },
        [fetchAllUsers.fulfilled]: (state, action) => {
            state.users = action.payload
            state.loading = false
        },
    },
});

// Selectors
export const selectAllUsers = (state) => state.allUsers.users;
export const selectAllUsersLoading = (state) => state.allUsers.loading;

// Reducer
export const allUsersReducer = allUsersSlice.reducer;