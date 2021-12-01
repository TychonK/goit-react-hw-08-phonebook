import { createSlice } from '@reduxjs/toolkit'

import * as registerActions from './registerActions'

const userSlice = createSlice({
    name: 'register',
    initialState: {
        users: {},
        loading: false,
    },
    reducers: {
        setUser: (state, action) => {
            state.users = action.payload;
        },
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
            }
        },
        [registerActions.fetchFailure]: (state, action) => {
            return {
                ...state,
                loading: false,
            }
        },
    }
});

export default userSlice.reducer

export const { setUser } = userSlice.actions