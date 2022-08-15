import React from 'react';
import './login.scss';
import Logo from '../../assets/netflix.jpg';

const Login = () => {
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
          <button className="loginButton">Sign In</button>
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
