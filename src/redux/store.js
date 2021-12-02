// import { createStore } from 'redux';
import { configureStore, createReducer } from '@reduxjs/toolkit'
import * as actions from './contactsActions'
import logger from 'redux-logger'
import userReducer from './authStore'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const initialState = { contacts: [], filter: '', loading: false, }

const contacts = createReducer(initialState, {
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
        const newContacts = state.contacts.filter(contact => contact.id != action.payload)
        return {
            ...state,
            loading: false,
            contacts: newContacts
        }
    },
})

const authPersistConfig = {
    key: "auth",
    storage,
    whitelist: ['token'],
}

const store = configureStore({
    reducer: {
        contacts: contacts,
        userReducer: persistReducer(authPersistConfig, userReducer)
    },
    devTools: process.env.NODE_ENV === "development",
})

export const persistor = persistStore(store)

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