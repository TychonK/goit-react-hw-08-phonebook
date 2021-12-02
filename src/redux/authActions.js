import { createAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { baseUrl } from './api'

import { useSelector } from 'react-redux';

import swal from 'sweetalert';

export const fetchStart = createAction('auth/FETCH_START')
export const fetchSuccess = createAction('auth/FETCH_SUCCESS')
export const fetchFailure = createAction('auth/FETCH_FAILURE')

export const fetchOnUserRegister = args => dispatch => {
    dispatch(fetchStart())
    console.log(args)
    axios.post(`${baseUrl}/users/signup`, args)
        .then(response => response.data)
        .then(data => {
            dispatch(fetchSuccess(data))
            swal("Congratulations!", `You have created an account!`, "success");
        })
        .catch(err => {
            dispatch(fetchFailure())
            swal("Oops!", `Error ${err.response.status} occured.`, "error");
        })
}

export const fetchOnUserLogin = args => dispatch => {
    dispatch(fetchStart())
    console.log(args)
    axios.post(`${baseUrl}/users/login`, args)
        .then(response => response.data)
        .then(data => {
            dispatch(fetchSuccess(data))
            swal(`Hello, ${data.user.name}`, `You have logged into your account!`, "success");
        })
        .catch(err => {
            dispatch(fetchFailure())
            swal("Oops! Wrong mail or password.", `Error ${err.response.status} occured.`, "error");
        })
}

export const logoutFetchSuccess = createAction('logout/FETCH_SUCCESS')
export const logoutFetchFailure = createAction('logout/FETCH_FAILURE')

export const fetchOnUserLogout = config => dispatch => {
    dispatch(fetchStart())
    console.log(config)
    axios.post(`${baseUrl}/users/logout`, null, { headers: config })
        .then(response => response)
        .then(data => {
            dispatch(logoutFetchSuccess())
            swal(`Bye!`, `You have logged out of your account!`, "success");
        })
        .catch(err => {
            dispatch(logoutFetchFailure())
            console.log(err)
            //swal("Oops! Something went wrong", `Error ${err.response.status} occured.`, "error");
        })
}