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
    isAuthError: false,
    logoutError: false,
};

// Async action
export const auth = createAsyncThunk(
    `${AUTH_SLICE_NAME}/fetch-auth`,
    async (data) => {
        console.log(data)
        const response =  await axios.post('https://webitrevolution.herokuapp.com/login', {...data});
        return response.data;
    }
);



export const register = createAsyncThunk(
    `${AUTH_SLICE_NAME}/fetch-register`,
    async (data) => {
        const response = await axios.post('https://webitrevolution.herokuapp.com/auth', {...data});
        console.log(data)
        return response.data;
    }
);

export const updateUser = createAsyncThunk(
    `${AUTH_SLICE_NAME}/fetch-update`,
    async (data) => {
        console.log(data)
        const response = await axios.post('https://webitrevolution.herokuapp.com/api/v1/users/update', {...data});
        return response.data;
    }
);

export const getUserData = createAsyncThunk(
    `${AUTH_SLICE_NAME}/fetch-userData`,
    async (data) => {
        const response =  await axios.get('https://webitrevolution.herokuapp.com/api/v1/profile');
        return response.data;
    }
);

export const getIsAuth = createAsyncThunk(
    `${AUTH_SLICE_NAME}/fetch-isAuth`,
    async () => {
        const response =  await axios.get('https://webitrevolution.herokuapp.com/api/v1/isAuthenticated');
        return response.data;
    }
);

export const userLogout = createAsyncThunk(
    `${AUTH_SLICE_NAME}/fetch-logout`,
    async () => {
        await axios.post('https://webitrevolution.herokuapp.com/logout');
    }
);

export const deleteUser = createAsyncThunk(
    `${AUTH_SLICE_NAME}/fetch-logout`,
    async (id) => {
        await axios.post(`https://webitrevolution.herokuapp.com/delete/${id}`);
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
            state.userData = action.payload
            state.isAuth = true
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
            state.userData = action.payload
            state.isAuth = true;
            state.loading = false
        },

        [getIsAuth.pending]: (state) => {
            state.loading = true
        },
        [getIsAuth.rejected]: (state) => {
            state.isAuthError = true
            state.loading = false
        },
        [getIsAuth.fulfilled]: (state, action) => {
            state.isAuth = action.payload?.isAuth;
            state.loading = false
        },
        
        [userLogout.pending]: (state) => {
            state.loading = true
        },
        [userLogout.rejected]: (state) => {
            state.logoutError = true
            state.loading = false
        },
        [userLogout.fulfilled]: (state, action) => {
            state.isAuth = false;
            state.loading = false
        },

        [getUserData.pending]: (state) => {
            state.loading = true
        },
        [getUserData.rejected]: (state) => {
            state.authError = true
            state.loading = false
        },
        [getUserData.fulfilled]: (state, action) => {
            state.userData = action.payload
            state.loading = false
        },

        [deleteUser.pending]: (state) => {
            state.loading = true
        },
        [deleteUser.rejected]: (state) => {
            state.authError = true
            state.loading = false
        },
        [deleteUser.fulfilled]: (state, action) => {
            state.loading = false
            state.isAuth = false
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