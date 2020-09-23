import {
  GET_BUGS,
  GET_BUGS_SUCCESS,
  GET_BUGS_FAILURE,
} from './types';

const INITIAL_STATE = {
  bugs: null,
  loading: true,
  error: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_BUGS:
      return {
        ...state,
        bugs: null,
        loading: true,
        error: null,
      };
    case GET_BUGS_SUCCESS:
      return {
        ...state,
        bugs: action.payload,
        loading: false,
        error: null,
      };
    case GET_BUGS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
