import { weekConstants } from './constanats';

export const setWeek = data => {
  return dispatch => {
    dispatch({
      type: weekConstants.SET_WEEK,
      payload: {
        week: data,
      },
    });
  };
};
export const setWeekCounter = data => {
  return dispatch => {
    dispatch({
      type: weekConstants.SET_WEEK_COUNTER,
      payload: {
        weekCounter: data,
      },
    });
  };
};

export const setDayCounter = data => {
  return dispatch => {
    dispatch({
      type: weekConstants.SET_DAY_COUNTER,
      payload: {
        dayCounter: data,
      },
    });
  };
};

export const setDay = data => {
  return dispatch => {
    dispatch({
      type: weekConstants.SET_DAY,
      payload: {
        day: data,
      },
    });
  };
};
