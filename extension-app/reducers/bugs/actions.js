import { RestClient } from 'symphony-bdk-ui-toolkit';
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
  DELETE_BUG_FAILURE,

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

export function  updateBug(bug) {
  return (dispatch) => {
    console.log('/api/bug/${bug.id}', bug)
    dispatch({ type: UPDATE_BUG });
    return RestClient.put(`/api/bug/${bug.id}`, bug)
      .then((res) => {
        dispatch({ type: UPDATE_BUG_SUCCESS, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: UPDATE_BUG_FAILURE, payload: error });
      });
  };
}

export function  deleteBug(bug) {
  return (dispatch) => {
    console.log('/api/bug/${bug.id}', bug)
    dispatch({ type: DELETE_BUG });
    return RestClient.delete(`/api/bug/${bug.id}`, bug)
      .then((res) => {
        dispatch({ type: DELETE_BUG_SUCCESS, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: DELETE_BUG_FAILURE, payload: error });
      });
  };
}
