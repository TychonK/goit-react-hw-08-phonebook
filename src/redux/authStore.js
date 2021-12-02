import { createSlice } from '@reduxjs/toolkit'

import * as registerActions from './authActions'

const userSlice = createSlice({
    name: 'register',
    initialState: {
        user: { name: '', email: '' },
        token: '',
        isLoggedIn: false,
        loading: false,
    },
    extraReducers: {
        [registerActions.fetchStart]: (state, action) => {
            return {
                ...state,
                loading: true,
            }
        },
        [registerActions.fetchSuccess]: (state, action) => {
            return {
                ...state,
                loading: false,
                isLoggedIn: true,
                token: action.payload.token,
                user: {name: action.payload.user.name, email: action.payload.user.email,},
            }
        },
        [registerActions.fetchFailure]: (state, action) => {
            return {
                ...state,
                loading: false,
            }
        },
        [registerActions.logoutFetchSuccess]: (state, action) => {
            return {
                ...state,
                user: { name: '', email: '' },
                token: '',
                isLoggedIn: false,
                loading: false,
            }
        },
        [registerActions.logoutFetchFailure]: (state, action) => {
            return {
                ...state,
                loading: false,
            }
        },
        [registerActions.fetchCurrentUser.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
        }
    }
});

export default userSlice.reducer

export const { setUser } = userSlice.actions