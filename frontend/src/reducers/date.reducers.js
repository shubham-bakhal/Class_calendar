import { dateConstants } from '../actions/constanats';

const datainitState = {
  nav: 0,
  clicked: '',
  deleteEvent: '',
  events: [],
  dateDisplay: '',
  days: [],
  loading: false,
  availableTeachers: [],
  todaysEvents: [],
  type: ''
};

const dateReducres = (state = datainitState, action) => {
  switch (action.type) {
    // for client side state

    case dateConstants.SET_DATE_DISPLAY:
      state = {
        ...state,
        dateDisplay: action.payload.dateDisplay,
      };
      break;
    case dateConstants.SET_DAY_ARRAY:
      state = {
        ...state,
        days: action.payload.dayArray,
      };
      break;
    case dateConstants.SET_CLICKED_EVENT:
      state = {
        ...state,
        clicked: action.payload.clicked,
      };
      break;
    case dateConstants.SET_DELETE_EVENT:
      state = {
        ...state,
        deleteEvent: action.payload.deleteEvent,
      };
      break;
    case dateConstants.REMOVE_DELETE_EVENT:
      state = {
        ...state,
        deleteEvent: action.payload.deleteEvent,
      };
      break;
    case dateConstants.SET_NAV:
      state = {
        ...state,
        nav: action.payload.nav,
      };
      break;
    case dateConstants.SET_CALENDER_TYPE:
      state = {
        ...state,
        type: action.payload.type,
      };
      break;

    // for both client and server
    case dateConstants.SET_EVENTS_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case dateConstants.SET_EVENTS_SUCCESS:
      state = {
        ...state,
        loading: false,
        events: [...state.events, action.payload.newEvent],
      };
      break;
    case dateConstants.SET_EVENTS_FAILURE:
      state = {
        ...state,
        loading: false,
      };
      break;
    case dateConstants.GET_EVENTS_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case dateConstants.GET_EVENTS_SUCCESS:
      state = {
        ...state,
        loading: false,
        events: action.payload.Events,
      };
      break;
    case dateConstants.GET_EVENTS_FAILURE:
      state = {
        ...state,
        loading: false,
      };
      break;
    case dateConstants.GET_TODAYS_EVENTS_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case dateConstants.GET_TODAYS_EVENTS_SUCCESS:
      state = {
        ...state,
        loading: false,
        todaysEvents: action.payload.todaysEvents,
      };
      break;
    case dateConstants.GET_TODAYS_EVENTS_FAILURE:
      state = {
        ...state,
        loading: false,
      };
      break;

    case dateConstants.DELETE_EVENTS_SUCCESS:
      const filteredevents = state.events.filter(
        event => event.id !== action.payload.eventToDelete
      );
      state = {
        ...state,
        events: filteredevents,
      };
      break;

    case dateConstants.DELETE_EVENTS_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;

    case dateConstants.DELETE_EVENTS_FAILURE:
      state = {
        ...state,
        loading: false,
      };
      break;
    case dateConstants.UPDATE_EVENTS_SUCCESS:


      const UpdatedEvents = state.events.map(e =>
        e.id === action.payload.updatedEvent.id
          ? action.payload.updatedEvent
          : e
      );

      state = {
        ...state,
        events: UpdatedEvents,
      };
      break;

    case dateConstants.UPDATE_EVENTS_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;

    case dateConstants.UPDATE_EVENTS_FAILURE:
      state = {
        ...state,
        loading: false,
      };
      break;

    default:
      return state;
  }
  return state;
};

export default dateReducres;
