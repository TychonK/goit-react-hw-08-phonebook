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

export const fetchStart = createAction('contacts/FETCH_START')
export const fetchSuccess = createAction('contacts/FETCH_SUCCESS')
export const fetchFailure = createAction('contacts/FETCH_FAILURE')
export const deleteFetchSuccess = createAction('contacts/FETCH_DELETE_SUCCESS')

export const fetchOnPageLoad = args => dispatch => {
  dispatch(fetchStart());

  axios.get('/contacts')
    .then(r => r.data)
      .then(data => {
          console.log(data)
          dispatch(fetchSuccess(data))
      })
      .catch(err => {
          console.log("Error fetching contacts:", err)
          dispatch(fetchFailure(err))
      });
};

export const addContact = args => dispatch => {
    dispatch(fetchStart())
    axios.post('/contacts', args)
        .then(r => r.data)
        .then(data => {
            console.log(data)
            dispatch(fetchSuccess([data]))
        })
      .catch(err => {
          console.log("Error posting contact:", err)
          dispatch(fetchFailure(err))
      });
}

export const deleteContact = args => dispatch => {
    const contactId = args.target.id
    axios
        .delete(`/contacts/${contactId}`)
        .then(dispatch(fetchStart()))
        .then(r => r.data)
        .then(data => dispatch(deleteFetchSuccess(contactId)))
        .catch(err => {
            console.log("Error deleting contact:", err)
            dispatch(fetchFailure(err))
        });
}