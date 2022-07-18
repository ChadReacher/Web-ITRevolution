import {
    createAsyncThunk,
    createSlice
} from '@reduxjs/toolkit';
import axios from 'axios';

// Name of the slice
const AUTH_SLICE_NAME = 'auth'

const initialState = {
    data: null,
    isAuth: false,
    loading: false,
};

// Async action
export const auth = createAsyncThunk(
    `${AUTH_SLICE_NAME}/fetch-auth`,
    async (data) => {
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', {...data}); // TODO: replace
        console.log(data)
        return response.data;
    }
);

export const register = createAsyncThunk(
    `${AUTH_SLICE_NAME}/fetch-register`,
    async (data) => {
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', {...data}); // TODO: replace
        console.log(data)
        return response.data;
    }
);

export const updateUser = createAsyncThunk(
    `${AUTH_SLICE_NAME}/fetch-update`,
    async (data) => {
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', {...data}); // TODO: replace
        console.log(data)
        return response.data;
    }
);

// Slice
export const authSlice = createSlice({
    name: AUTH_SLICE_NAME,
    initialState,
    reducers: {
        resetAuthState: (state) => {
            state = initialState
        }
    },
    extraReducers: {
        [auth.pending]: (state) => {
            state.loading = true
        },
        [auth.fulfilled]: (state, action) => {
            state.data = action.payload
            state.isAuth = Boolean(action.payload?.id)
            state.loading = false
        },
        [register.pending]: (state) => {
            state.loading = true
        },
        [register.fulfilled]: (state, action) => {
            state.data = action.payload
            state.isAuth = Boolean(action.payload?.id)
            state.loading = false
        },
        [updateUser.pending]: (state) => {
            state.loading = true
        },
        [updateUser.fulfilled]: (state, action) => {
            state.data = action.payload
            state.isAuth = Boolean(action.payload?.id)
            state.loading = false
        },
    },
});

// Selectors
export const selectAuthLoading = (state) => state.auth.loading;
export const selectIsAuth = (state) => state.auth.isAuth;


export const {resetAuthState} = authSlice.actions


// Reducer
export const authReducer = authSlice.reducer;