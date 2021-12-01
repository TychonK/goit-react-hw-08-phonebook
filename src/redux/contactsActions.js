import { createAction } from '@reduxjs/toolkit'
import axios from 'axios'

// const addContact = (value) => ({
//     type: 'form/addContact',
//     payload: value,
// })

// const deleteContact = (value) => ({
//     type: 'form/deleteContact',
//     payload: value,
// })

// const filter = (value) => ({
//     type: 'filter/changeFilter',
//     payload: value,
// })

// const pageLoaded = (value) => ({
//     type: 'page/pageLoaded',
//     payload: value,
// })

//export const addContact = createAction('form/addContact')
//export const pageLoaded = createAction('page/pageLoaded')
//export const deleteContact = createAction('form/deleteContact')

export const filter = createAction('filter/changeFilter')

export const fetchStart = createAction('page/FETCH_START')
export const fetchSuccess = createAction('page/FETCH_SUCCESS')
export const fetchFailure = createAction('page/FETCH_FAILURE')
export const deleteFetchSuccess = createAction('page/FETCH_DELETE_SUCCESS')

export const fetchOnPageLoad = args => dispatch => {
  dispatch(fetchStart());

  axios('https://6196735baf46280017e7e0cd.mockapi.io/phonebook/contacts')
    .then(r => r.data)
    .then(data => dispatch(fetchSuccess(data)))
      .catch(err => {
          console.log("Error fetching contacts:", err)
          dispatch(fetchFailure(err))
      });
};

export const addContact = args => dispatch => {
    axios
        .post('https://6196735baf46280017e7e0cd.mockapi.io/phonebook/contacts', args)
        .then(dispatch(fetchStart()))
        .then(r => r.data)
        .then(data => dispatch(fetchSuccess([data])))
      .catch(err => {
          console.log("Error posting contact:", err)
          dispatch(fetchFailure(err))
      });
}

export const deleteContact = args => dispatch => {
    const contact = args.target.id
    axios
        .delete(`https://6196735baf46280017e7e0cd.mockapi.io/phonebook/contacts/${contact}`)
        .then(dispatch(fetchStart()))
        .then(r => r.data)
        .then(data => dispatch(deleteFetchSuccess(data)))
        .catch(err => {
            console.log("Error deleting contact:", err)
            dispatch(fetchFailure(err))
        });
}