import {
  GET_BUGS,
  GET_BUGS_SUCCESS,
  GET_BUGS_FAILURE,
  CREATE_BUG,
  CREATE_BUG_SUCCESS,
  CREATE_BUG_FAILURE,
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
  case CREATE_BUG:

 console.log('Create Bug')
    return{
      ... state,
      loading: true,
      error: null,
    };
 case CREATE_BUG_SUCCESS:
 console.log('Create Bug Succes')
  return{
    ... state,
    loading: false,
    error: null,
  };
  case CREATE_BUG_FAILURE:
  console.log('Create Bug Failure', action.payload)
   return{
     ... state,
     loading: false,
     error: action.payload,
   };

    default:
      return state;
  }
}
