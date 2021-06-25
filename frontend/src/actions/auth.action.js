import { authConstants } from './constanats';
import axios from '../axios';
import toast from '../Notification/Notificaiton';

export const userLoginaction = data => {
  return dispatch => {
    dispatch({ type: authConstants.LOGIN_REQUEST });

    axios
      .post(
        '/auth/login',
        { ...data },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      )
      .then(res => {
        const { user } = res.data;
        dispatch({
          type: authConstants.LOGIN_SUCCESS,
          payload: {
            user: user,
          },
        });
      })
      .catch(e => {
        const error = e.response.data;
        toast.error(error);

        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: { error: error },
        });
      });
  };
};

export const userLogoutAction = () => {
  return dispatch => {
    dispatch({ type: authConstants.LOGOUT_REQUEST });

    axios
      .delete('/auth/logout')
      .then(res => {
        dispatch({
          type: authConstants.LOGOUT_SUCCESS,
        });
      })
      .catch(e => {
        toast.error('LOGOUT Failed');
        dispatch({
          type: authConstants.LOGOUT_FAILURE,
        });
      });
  };
};

export const userSignup = data => {
  return dispatch => {
    dispatch({ type: authConstants.SIGNUP_REQUEST });

    axios
      .post('/auth/signup', { ...data })
      .then(res => {
        const { user } = res.data;
        dispatch({
          type: authConstants.SIGNUP_SUCCESS,
          payload: {
            user: user,
          },
        });
      })
      .catch(e => {
        if (e.response.status === 422) {
          e.response.data.forEach(element => {
            toast.error(Object.entries(element)[0][1]);
          });
        } else {
          toast.error(e.response.data);
        }
        dispatch({
          type: authConstants.SIGNUP_FAILURE,
          payload: {
            error: e.response.data,
          },
        });
      });
  };
};


export const checkSession = () => {
  return dispatch => {
    dispatch({ type: authConstants.CHECK_SESSION_REQUEST });

    axios
      .get('/auth/checksession', { withCredentials: true })
      .then(res => {
        
        const { user, auth } = res.data;
        dispatch({
          type: authConstants.CHECK_SESSION_SUCCESS,
          payload: {
            user: user,
            auth: auth,
          },
        });
      })
      .catch(e => {
     
        dispatch({
          type: authConstants.CHECK_SESSION_FAILURE,
          payload: { error: e },
        });
      });
  };
};

