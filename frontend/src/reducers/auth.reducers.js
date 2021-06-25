import { authConstants } from '../actions/constanats';

const authinitState = {
  auth: false,
  user: '',
  loading: false,
  checkloading: false,
};

const authReducres = (state = authinitState, action) => {
  switch (action.type) {
    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        auth: true,
        user: action.payload.user,
        loading: false,
      };
      break;
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case authConstants.LOGIN_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case authConstants.LOGOUT_SUCCESS:
      state = {
        ...state,
        auth: false,
        user: '',
        loading: false,
      };
      break;
    case authConstants.LOGOUT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case authConstants.LOGOUT_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case authConstants.SIGNUP_SUCCESS:
      state = {
        ...state,
        auth: true,
        user: action.payload.user,
        loading: false,
      };
      break;
    case authConstants.SIGNUP_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case authConstants.SIGNUP_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case authConstants.CHECK_SESSION_SUCCESS:
      state = {
        ...state,
        auth: action.payload.auth,
        user: action.payload.user,
        loading: false,
      };
      break;
    case authConstants.CHECK_SESSION_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case authConstants.CHECK_SESSION_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    default:
      return state;
  }
  return state;
};

export default authReducres;
