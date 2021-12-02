import './App.scss';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { BrowserRouter, Route, Routes } from "react-router-dom"

import AppBar from './components/Navigation/AppBar'
import NotFound from './components/Not_Found/NotFound';
import HomePage from './components/HomePage';
import Contacts from './components/Contacts';
import Register from './components/Register/Register';
import Login from './components/LogIn/Login';

import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './redux/store'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchCurrentUser } from './redux/authActions'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch])

  return (
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <AppBar />
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/contacts" element={<Contacts/>} />
            <Route path="*" element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
    </PersistGate>
    )
}

export default App