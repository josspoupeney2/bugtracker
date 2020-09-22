import { RestClient } from 'symphony-bdk-ui-toolkit';
import {
  GET_BUGS,
  GET_BUGS_SUCCESS,
  GET_BUGS_FAILURE,
} from './types';

export function getBUGS() {
  return (dispatch) => {
    dispatch({ type: GET_BUGS });
    return RestClient.get('/api/bugs')
      .then(res => dispatch({ type: GET_BUGS_SUCCESS, payload: res.data }))
      .catch(error => dispatch({ type: GET_BUGS_FAILURE, payload: error.data }));
  };
}
