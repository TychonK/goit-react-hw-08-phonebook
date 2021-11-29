import './Register.scss'

import { useNavigate } from 'react-router';

export default function Register() {

    const navigate = useNavigate();

    const handleGoBack = () => {
     navigate(-1)
    }

    return (
        <>
          <button type="button" onClick={handleGoBack} className="btn btn-primary hBack">
              &larr; Go back 
          </button>
          <form className="register-form">
            <label className="register-label">
                <p class="label-txt">ENTER YOUR EMAIL</p>
                <input type="text" class="register-input"/>
                <div class="line-box">
                <div class="line"></div>
                </div>
            </label>
            <label className="register-label">
                <p class="label-txt">ENTER YOUR NAME</p>
                <input type="text" class="register-input"/>
                <div class="line-box">
                <div class="line"></div>
                </div>
            </label>
            <label className="register-label">
                <p class="label-txt">ENTER YOUR PASSWORD</p>
                <input type="text" class="register-input"/>
                <div class="line-box">
                <div class="line"></div>
                </div>
            </label>
            <button type="submit" className="register-button">submit</button>
          </form>
        </>
    )
}