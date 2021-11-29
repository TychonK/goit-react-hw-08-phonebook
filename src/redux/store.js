// import { createStore } from 'redux';
import { configureStore, createReducer } from '@reduxjs/toolkit'
import * as actions from './actions'
import logger from 'redux-logger'

const initialState = { contacts: [], filter: '', loading: false, }

const reducer = createReducer(initialState, {
    [actions.filter]: (state, action) => {
        return {
            ...state,
            filter: action.payload.target.value
        };
    },
    [actions.fetchStart]: (state, action) => {
        return {
            ...state,
            loading: true,
        }
    },
    [actions.fetchSuccess]: (state, action) => {
        return {
            ...state,
            loading: false,
            contacts: [...state.contacts, ...action.payload],
        }
    },
    [actions.fetchFailure]: (state, action) => {
        return {
            ...state,
            loading: false,
        }
    },
    [actions.deleteFetchSuccess]: (state, action) => {
        const newContacts = state.contacts.filter(contact => contact.name != action.payload.name)
        return {
            ...state,
            loading: false,
            contacts: newContacts
        }
    },
})

const store = configureStore({
    reducer: reducer,
    devTools: process.env.NODE_ENV === "development",
})

export default store;

// const reducer = (state = initialState, action) => {
//     console.log(action)
//     switch (action.type) {
//         case 'form/addContact':
//             return {
//                 ...state,
//                 contacts: [...state.contacts, action.payload]
//             };

//         case 'form/deleteContact':
//             const contactsList = state.contacts.filter(contact => contact.name !== action.payload.target.id);
//             return {
//                 ...state,
//                 contacts: contactsList
//             };
        
//         case 'filter/changeFilter':
//             return {
//                 ...state,
//                 filter: action.payload.target.value
//             };
        
//         case 'page/pageLoaded':
//             return {
//                 ...state,
//                 contacts: action.payload
//             }
        
//         default:
//             return state;
//     }
// };

// const store = createStore(reducer, composeWithDevTools());