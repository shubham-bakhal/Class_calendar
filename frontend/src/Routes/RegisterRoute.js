import React from 'react';
import { useLocation } from 'react-router-dom';
import Loading from '../components/Loading'
import { Redirect, Route } from 'react-router-dom';


function RegisterRoute({ isAuth, component: Component, ...rest }) {
  const location = useLocation();
  if(location.state){
    var redirect = location.state.from.pathname + location.state.from.search
  }else{
    redirect = '/'
  }

  return (
    <Route
      {...rest}
      render={props => {
        if (isAuth.loading === true) {
          return <Loading/>;
        }
        if (!isAuth.auth) {
          return <Component />;
        } else {
          return (
            <Redirect
              to={redirect}
            />
          );
        }
      }}
    />
  );
}

export default RegisterRoute;
