import { RestClient } from 'symphony-bdk-ui-toolkit';
import {
  GET_BUGS,
  GET_BUGS_SUCCESS,
  GET_BUGS_FAILURE,
  CREATE_BUG,
  CREATE_BUG_SUCCESS,
  CREATE_BUG_FAILURE,

} from './types';

export function getBugs() {

  return (dispatch) => {
    dispatch({ type: GET_BUGS });
    return RestClient.get('/api/bugs')
      .then(res => dispatch({ type: GET_BUGS_SUCCESS, payload: res.data }))
      .catch(error => dispatch({ type: GET_BUGS_FAILURE, payload: error.data }));
  };
}

export function createBug(bug) {
  return (dispatch) => {
    dispatch({ type: CREATE_BUG });
    return RestClient.post('/api/bug', bug)
      .then((res) => {
        dispatch({ type: CREATE_BUG_SUCCESS, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: CREATE_BUG_FAILURE, payload: error });
      });
  };
}
