import { createAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { baseUrl } from './api'

import swal from 'sweetalert';

export const fetchStart = createAction('register/FETCH_START')
export const fetchSuccess = createAction('register/FETCH_SUCCESS')
export const fetchFailure = createAction('register/FETCH_FAILURE')

export const fetchOnUserRegister = args => dispatch => {
    dispatch(fetchStart())
    console.log(args)
    axios.post(`${baseUrl}/users/signup`, args)
        .then(response => response)
        .then(data => {
            dispatch(fetchSuccess())
            console.log(data)
            swal("Congratulations!", `You have created an account!`, "success");
        })
        .catch(err => {
            dispatch(fetchFailure())
            swal("Oops!", `Error ${err.response.status} occured.`, "error");
        })
}