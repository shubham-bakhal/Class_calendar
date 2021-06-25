import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { userSignup } from '../../actions/auth.action';
import '../../Styles/signup.css';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  var [Role, setRole] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();

  const signupSubmit = e => {
    if (Role) {
      Role = 'Admin';
    } else {
      Role = 'Teacher';
    }
    e.preventDefault();
    const signupData = {
      firstName,
      lastName,
      email,
      password,
      Role,
    };
    dispatch(userSignup(signupData));
  };

  return (
    <div id="signup">
      <form className="signupForm" onSubmit={signupSubmit}>
        <div>
          <span>First Name</span>
          <input
            type="text"
            required
            placeholder="John"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <span>Last Name</span>
          <input
            type="text"
            required
            placeholder="Doe"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </div>
        <div>
          <span>Email</span>
          <input
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
            id="password"
            required
            placeholder="**********"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div id="admin">
          <input
            type="checkbox"
            value={Role}
            onChange={e => setRole(e.target.value)}
          />
          <span>Make me admin</span>
        </div>

        <button id="signupBtn">Sign up</button>
      </form>
      <div id="donthave">
        <p>
          Already have an account?{' '}
          <Link
            className="redirect"
            to={{ pathname: '/login', state: { from: location } }}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
