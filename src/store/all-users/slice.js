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
};

// Async action
export const fetchAllUsers = createAsyncThunk(
    `${ALL_USERS_SLICE_NAME}/fetch`,
    async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users'); // TODO: replace
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