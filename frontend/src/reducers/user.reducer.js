import { userConstants } from '../actions/constanats';

const userinitState = {
    availableTeachers: [],
    loading: false,
    teacherEvents: '',
    searched: false
};

const userReducres = (state = userinitState, action) => {
  switch (action.type) {
    case userConstants.SET_SEARCHED:
      state = {
        ...state,
        searched:action.payload.searched
      };
      break;
    case userConstants.GET_AVA_TEA_SUCCESS:
      state = {
        ...state,
        loading: false,
        availableTeachers: action.payload.availableTeachers
      };
      break;
    case userConstants.GET_AVA_TEA_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case userConstants.GET_AVA_TEA_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case userConstants.GET_SEARCHED_TEA_SUCCESS:
      state = {
        ...state,
        loading: false,
        searched: true,
        teacherEvents: action.payload.teacherEvents
      };
      break;
    case userConstants.GET_SEARCHED_TEA_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case userConstants.GET_SEARCHED_TEA_FAILURE:
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

export default userReducres;
