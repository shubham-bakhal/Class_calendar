import { weekConstants } from '../actions/constanats';

const weekinitState = {
  week: [],
  weekCounter: 0,
  day: '',
  dayCounter: 0,
};

const weekReducres = (state = weekinitState, action) => {
  switch (action.type) {
    case weekConstants.SET_WEEK:
      state = {
        ...state,
        week: action.payload.week,
      };
      break;
    case weekConstants.SET_WEEK_COUNTER:
      state = {
        ...state,
        weekCounter: action.payload.weekCounter,
      };
      break;

    case weekConstants.SET_DAY:
      state = {
        ...state,
        day: action.payload.day,
      };
      break;
    case weekConstants.SET_DAY_COUNTER:
      state = {
        ...state,
        dayCounter: action.payload.dayCounter,
      };
      break;
    default:
      return state;
  }
  return state;
};

export default weekReducres;
