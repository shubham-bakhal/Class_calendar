import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import Loading from '../components/Loading'

function ProtectedRoute({ isAuth, component: Component, ...rest }) {
  const location = useLocation();
 
  return (
    <Route
      {...rest}
      render={props => {
        if (isAuth.loading === true) {
          return <Loading/>;
        }
        if (isAuth.auth) {
          return <Component />;
        } else {
          return (
            <Redirect
              to={{ pathname: '/login', state: { from:location } }}
            />
          );
        }
      }}
    />
  );
}

export default ProtectedRoute;
