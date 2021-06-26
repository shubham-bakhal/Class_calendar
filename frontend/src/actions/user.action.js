import { userConstants } from './constanats';
import axios from '../axios';
import toast from '../Notification/Notificaiton';

export const searchAvailableTeachers = data => {
  return dispatch => {
    dispatch({ type: userConstants.GET_AVA_TEA_REQUEST });
    axios
      .post('/user/availableTeachers', { ...data })
      .then(res => {

        dispatch({
          type: userConstants.GET_AVA_TEA_SUCCESS,
          payload: {
            availableTeachers: res.data,
          },
        });
      })
      .catch(e => {

        const error = e;
        // toast.error(error);

        dispatch({
          type: userConstants.GET_AVA_TEA_FAILURE,
          payload: { error: error },
        });
      });
  };
};

export const searchTeachersEvent = data => {
  return dispatch => {
    dispatch({ type: userConstants.GET_SEARCHED_TEA_REQUEST });
    axios
      .post('/user/searchTeacherForEvent', { ...data })
      .then(res => {

        dispatch({
          type: userConstants.GET_SEARCHED_TEA_SUCCESS,
          payload: {
            teacherEvents: res.data,
          },
        });
      })
      .catch(e => {

        const error = e;
        // toast.error(error);

        dispatch({
          type: userConstants.GET_SEARCHED_TEA_FAILURE,
          payload: { error: error },
        });
      });
  };
};

export const setSearchedFalse = data => {
  return dispatch => {
    dispatch({
      type: userConstants.SET_SEARCHED,
      payload: {
        searched: data,
      },
    });
  };
};