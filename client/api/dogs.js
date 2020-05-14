import request from 'superagent';
import {
  requestDogs,
  receiveDogs,
  receivedError,
} from '../actions/index';

const URL = '/dogs';

export function fetchDogs() {
  return (dispatch) => {
    dispatch(requestDogs());
    return request
      .get(URL)
      .then((res) => res.body)
      .then(dogs => {
        dispatch(receiveDogs(dogs))
      })
      .catch((err) => {
        console.log(err)
        dispatch(receivedError(err));
      });
  };
}
