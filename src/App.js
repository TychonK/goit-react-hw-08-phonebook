import './App.scss';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { BrowserRouter, Route, Routes } from "react-router-dom"

import AppBar from './components/Navigation/AppBar'
import NotFound from './components/NotFound';
import HomePage from './components/HomePage';
import Contacts from './components/Contacts';
import Register from './components/Register/Register';
import Login from './components/LogIn/Login';

function App() {
  return (
    <BrowserRouter>
      <AppBar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route component={NotFound}/>
        </Routes>
    </BrowserRouter>
    )
}

export default App