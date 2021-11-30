import './Register.scss'

import { useState } from 'react';

import { useNavigate } from 'react-router';

import { setUser } from '../../redux/registration'

import { useDispatch, useSelector } from "react-redux";

export default function Register() {
    const [ name, setName ] = useState('')
    const [ mail, setMail ] = useState('')
    const [ password, setPassword ] = useState('')

    const { location } = useSelector(state=>state)
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleGoBack = () => {
     navigate(-1)
    }

    const handleChange = (e) => {
        e.target.name === "name" && setName(e.target.value)
        e.target.name === "mail" && setMail(e.target.value)
        e.target.name === "password" && setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name === '' || mail === '' || password === '') {
            alert("Enter complete data please")
            return
        }
        dispatch(setUser({name: name, mail: mail, password: password }))
        setName('')
        setMail('')
        setPassword('')
    }

    return (
        <>
          <button type="button" onClick={handleGoBack} className="btn btn-primary hBack">
              &larr; Go back 
          </button>
          <form className="register-form" onSubmit={handleSubmit} onChange={handleChange}>
            <label className="register-label">
                <p className="label-txt">ENTER YOUR EMAIL</p>
                    <input type="text" className="register-input" name="name" value={ name }/>
                <div className="line-box">
                <div className="line"></div>
                </div>
            </label>
            <label className="register-label">
                <p className="label-txt">ENTER YOUR NAME</p>
                <input type="text" className="register-input" name="mail" value={ mail }/>
                <div className="line-box">
                <div className="line"></div>
                </div>
            </label>
            <label className="register-label">
                <p className="label-txt">ENTER YOUR PASSWORD</p>
                <input type="text" className="register-input" name="password" value={ password }/>
                <div className="line-box">
                <div className="line"></div>
                </div>
            </label>
            <button type="submit" className="register-button">Register</button>
          </form>
        </>
    )
}