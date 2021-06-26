import React, { useState } from 'react';
import '../Styles/navbar.css';
import search from '../assets/search.svg';
import profile from '../assets/profile.svg';
import { useDispatch, useSelector } from 'react-redux';
import { searchTeachersEvent } from '../actions/user.action';
import { userLogoutAction } from '../actions/auth.action';

const Navbar = () => {
  const auth = useSelector(state => state.auth);
  const [searchStr, setSearchStr] = useState('');
  const dispatch = useDispatch();

  const searchTeacher = e => {
    e.preventDefault();
    if (searchStr.length < 1) {
    } else {
      dispatch(searchTeachersEvent({ searchStr }));
      setSearchStr('');
    }
  };

  const logout = () => {
    dispatch(userLogoutAction());
  };

  return (
    <div id="navbar">
      <h2>
        {' '}
        <a id="logo" href="/">
          ClassCal
        </a>{' '}
      </h2>
      {auth.auth && (
        <form onSubmit={searchTeacher} className="search">
          <input
            value={searchStr}
            onChange={e => setSearchStr(e.target.value)}
            required
            type="text"
            placeholder="Search teachers"
          />

          <img onClick={searchTeacher} src={search} alt="" />
        </form>
      )}
      {auth.auth && <img onClick={logout} src={profile} alt="" />}
    </div>
  );
};

export default Navbar;
