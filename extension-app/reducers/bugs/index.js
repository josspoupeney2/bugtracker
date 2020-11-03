import {
  GET_BUGS,
  GET_BUGS_SUCCESS,
  GET_BUGS_FAILURE,
  CREATE_BUG,
  CREATE_BUG_SUCCESS,
  CREATE_BUG_FAILURE,
  UPDATE_BUG,
  UPDATE_BUG_SUCCESS,
  UPDATE_BUG_FAILURE,
  DELETE_BUG,
  DELETE_BUG_SUCCESS,
  DELETE_BUG_FAILURE
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
         console.log('Create Bug Success')
         return {
           ... state,
           loading: false,
           bugs: [...state.bugs, action.payload],
           error: null,
    };
   case CREATE_BUG_FAILURE:
        console.log('Create Bug Failure', action.payload)
        return{
         ... state,
        loading: false,
        error: action.payload,
   };

   case UPDATE_BUG:
       console.log('Update Bug')
       return{
        ... state,
        loading: true,
        error: null,
     };
     case UPDATE_BUG_SUCCESS:
          console.log('Update Bug Success')
          const updatedElementIndex = state.bugs.findIndex(element => element.id === action.payload.id);
          const newImmutableListOfBugs = [...state.bugs];
          newImmutableListOfBugs[updatedElementIndex] = action.payload;
          return {
            ... state,
            loading: false,
            bugs: newImmutableListOfBugs,
            error: null,
     };
    case UPDATE_BUG_FAILURE:
         console.log('Update Bug Failure', action.payload)
         return{
          ... state,
         loading: false,
         error: action.payload,
    };
    case DELETE_BUG:
        console.log('Delete Bug')
        return{
         ... state,
         loading: true,
         error: null,
      };
      case DELETE_BUG_SUCCESS:
           console.log('Delete Bug Success')
           return {
             ... state,
             loading: false,
             bugs: action.payload,
             error: null,
      };
      case DELETE_BUG_FAILURE:
           console.log('Delete Bug Failure', action.payload)
           return{
            ... state,
           loading: false,
           error: action.payload,
         }
    default:
      return state;
  }
}
