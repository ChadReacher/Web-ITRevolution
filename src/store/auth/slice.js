import {
    createAsyncThunk,
    createSlice
} from '@reduxjs/toolkit';
import axios from 'axios';

// Name of the slice
const AUTH_SLICE_NAME = 'auth'

const initialState = {
    userData: null,
    isAuth: false,
    loading: false,
    authError: false,
    registerError: false,
    updateUserError: false,
};

// Async action
export const auth = createAsyncThunk(
    `${AUTH_SLICE_NAME}/fetch-auth`,
    async (data) => {
        const response = await axios.post('https://webitrevolution.herokuapp.com/login', data); // TODO: replace
        console.log(data)
        return response.data;
    }
);

export const register = createAsyncThunk(
    `${AUTH_SLICE_NAME}/fetch-register`,
    async (data) => {
        const response = await axios.post('https://webitrevolution.herokuapp.com/auth', {...data}); // TODO: replace
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
        [auth.rejected]: (state) => {
            state.authError = true
            state.loading = false
        },
        [auth.fulfilled]: (state, action) => {
            state.userData = action.payload?.user
            state.isAuth = action.payload?.auth
            state.loading = false
            
        },
        [register.pending]: (state) => {
            state.loading = true
        },
        [register.rejected]: (state) => {
            state.registerError = true
            state.loading = false
        },
        [register.fulfilled]: (state, action) => {
            state.userData = action.payload?.user
            state.isAuth = action.payload?.auth
            state.loading = false
        },
        [updateUser.pending]: (state) => {
            state.loading = true
        },
        [updateUser.rejected]: (state) => {
            state.updateUserError = true
            state.loading = false
        },
        [updateUser.fulfilled]: (state, action) => {
            state.userData = action.payload?.user
            state.isAuth = action.payload?.auth
            state.loading = false
        },
    },
});

// Selectors
export const selectAuthLoading = (state) => state.auth.loading;
export const selectIsAuth = (state) => state.auth.isAuth;
export const selectRegisterError = (state) => state.auth.registerError;
export const selectAuthError = (state) => state.auth.authError;
export const selectUpdateUserError = (state) => state.auth.updateUserError;
export const selectUserData= (state) => state.auth.userData;

export const {resetAuthState} = authSlice.actions


// Reducer
export const authReducer = authSlice.reducer;