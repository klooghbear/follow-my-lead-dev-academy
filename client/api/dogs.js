import request from 'superagent';
import {
  requestDogs,
  receiveDogs,
  receivedError,
} from '../actions/index';

const URL = '/api/dogs';

export function fetchDogs() {
  return (dispatch) => {
    dispatch(requestDogs());
    return request
      .get(URL)
      .then((res) => {
        dispatch(receiveDogs(res.body));
      })
      .catch((err) => {
        dispatch(receivedError(err.message));
      });
  };
}
