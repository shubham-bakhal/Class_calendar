import React from 'react';
import { useSelector } from 'react-redux';
import Dashboard from '../components/Dashboard';
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';
import Protectedroute from './Protectedroute';
import RegisterRoute from './RegisterRoute';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const Routes = () => {
  const auth = useSelector(state => state.auth);
  return (
    <Router>
      <Switch>
        <Protectedroute path="/" exact component={Dashboard} isAuth={auth} />
        <RegisterRoute path="/login" exact component={Login} isAuth={auth} />
        <RegisterRoute path="/signup" exact component={Signup} isAuth={auth} />
      </Switch>
    </Router>
  );
};

export default Routes;
