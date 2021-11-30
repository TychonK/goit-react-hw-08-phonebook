import './App.scss';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { BrowserRouter, Route, Routes } from "react-router-dom"

import Navigation from './components/Navigation'
import NotFound from './components/NotFound';
import HomePage from './components/HomePage';
import Contacts from './components/Contacts';
import Register from './components/Register/Register';
import Login from './components/LogIn/Login';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
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