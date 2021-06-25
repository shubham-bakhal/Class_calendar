import React, { useState } from 'react';
import '../../Styles/login.css';
import { Link, useLocation } from 'react-router-dom';
import { userLoginaction } from '../../actions/auth.action';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const dispatch = useDispatch();

  const userLogin = e => {
    e.preventDefault();
    const loginData = {
      email,
      password,
    };
    dispatch(userLoginaction(loginData));
  };

  return (
    <div id="login">
      <form className="loginform" onSubmit={userLogin}>
        <div>
          <span>Email</span>
          <input
            id="email"
            type="email"
            required
            placeholder="xyz@service.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <span>Password</span>
          <input
            type="password"
            required
            id='password'
            placeholder="**********"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <button id="loginBtn">Login</button>
      </form>
      <div id="donthave">
        <p>
          Don't have an account?
          <Link
            className="redirect"
            to={{ pathname: '/signup', state: { from: location } }}
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
