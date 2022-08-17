import React from 'react';
import './login.scss';
import Logo from '../../assets/netflix.jpg';

import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={Logo} alt="Netflix logo" />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="email or phone number" />
          <input type="password" placeholder="password" />
          <button
            onClick={() => {
              navigate('home');
            }}
            className="loginButton"
          >
            Sign In
          </button>
          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>

          <small>
            <span>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <b>Learn more.</b>
            </span>
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
