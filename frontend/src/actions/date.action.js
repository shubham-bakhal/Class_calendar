import { dateConstants } from './constanats';
import axios from '../axios';
import toast from '../Notification/Notificaiton';

export const setDateDisplay = data => {
  return dispatch => {
    dispatch({
      type: dateConstants.SET_DATE_DISPLAY,
      payload: {
        dateDisplay: data,
      },
    });
  };
};

export const setDayArr = data => {
  return dispatch => {
    dispatch({
      type: dateConstants.SET_DAY_ARRAY,
      payload: {
        dayArray: data,
      },
    });
  };
};

export const setClickeEvent = data => {
  return dispatch => {
    dispatch({
      type: dateConstants.SET_CLICKED_EVENT,
      payload: {
        clicked: data,
      },
    });
  };
};

export const setCalenderTypeStore = data => {
  return dispatch => {
    dispatch({
      type: dateConstants.SET_CALENDER_TYPE,
      payload: {
        type: data,
      },
    });
  };
};

export const setEvents = data => {
  return dispatch => {
    dispatch({ type: dateConstants.SET_EVENTS_REQUEST });

    axios
      .post('/events/create', { ...data })
      .then(res => {
        dispatch({
          type: dateConstants.SET_EVENTS_SUCCESS,
          payload: {
            newEvent: res.data,
          },
        });
      })
      .catch(e => {
        const error = e.response.data;
        toast.error(error);

        dispatch({
          type: dateConstants.SET_EVENTS_FAILURE,
          payload: { error: error },
        });
      });
  };
};

export const getAllEvents = () => {
  return dispatch => {
    dispatch({ type: dateConstants.GET_EVENTS_REQUEST });

    axios
      .get('/events/events')
      .then(res => {
        dispatch({
          type: dateConstants.GET_EVENTS_SUCCESS,
          payload: {
            Events: res.data,
          },
        });
      })
      .catch(e => {
        const error = e.response.data;
        toast.error(error);

        dispatch({
          type: dateConstants.GET_EVENTS_FAILURE,
          payload: { error: error },
        });
      });
  };
};

export const setDeleteEvent = data => {
  return dispatch => {
    dispatch({
      type: dateConstants.SET_DELETE_EVENT,
      payload: {
        deleteEvent: data,
      },
    });
  };
};
export const removeDeleteEvent = data => {
  return dispatch => {
    dispatch({
      type: dateConstants.REMOVE_DELETE_EVENT,
      payload: {
        deleteEvent: data,
      },
    });
  };
};
export const updateSelectedEvent = data => {
  return dispatch => {
    dispatch({ type: dateConstants.UPDATE_EVENTS_REQUEST });

    axios
      .patch('/events/update', { ...data })
      .then(res => {
        dispatch({
          type: dateConstants.UPDATE_EVENTS_SUCCESS,
          payload: {
            updatedEvent: res.data,
          },
        });
      })
      .catch(e => {
        const error = e.response.data;
        toast.error(error);

        dispatch({
          type: dateConstants.UPDATE_EVENTS_FAILURE,
          payload: { error: error },
        });
      });
  };
};
export const deleteSelectedEvent = data => {
  return dispatch => {
    dispatch({ type: dateConstants.DELETE_EVENTS_REQUEST });
    axios
      .delete('/events/delete', { data })
      .then(res => {
        dispatch({
          type: dateConstants.DELETE_EVENTS_SUCCESS,
          payload: {
            eventToDelete: data.id,
          },
        });
      })
      .catch(e => {
        const error = e.response.data;
        toast.error(error);

        dispatch({
          type: dateConstants.DELETE_EVENTS_FAILURE,
          payload: { error: error },
        });
      });
  };
};
export const getTodaysEvents = () => {
  return dispatch => {
    dispatch({ type: dateConstants.GET_TODAYS_EVENTS_REQUEST });
    axios
      .get('/events/todaysEvents')
      .then(res => {
        dispatch({
          type: dateConstants.GET_TODAYS_EVENTS_SUCCESS,
          payload: {
            todaysEvents: res.data,
          },
        });
      })
      .catch(e => {
        const error = e.response.data;
        toast.error(error);

        dispatch({
          type: dateConstants.GET_TODAYS_EVENTS_FAILURE,
          payload: { error: error },
        });
      });
  };
};

export const setNav = data => {
  return dispatch => {
    dispatch({
      type: dateConstants.SET_NAV,
      payload: {
        nav: data,
      },
    });
  };
};
