import request from 'superagent';

export const REQUEST_DOGS = 'REQUEST_DOGS'
export const RECEIVE_DOGS = 'RECEIVE_DOGS'
export const ERROR = 'ERROR'

const URL = '/dogs'

export const requestDogs = () => {
  return {
    type: REQUEST_DOGS
  }
}

export const receiveDogs = (dog) => {
  return {
    type: RECEIVE_USERS,
    payload: dog/*users.map(user => users.data)*/
  }
}

export const receiveError = (err) => {
  return {
    type: ERROR,
    payload: err
  }
}

export function fetchDogs(argument) {
  return (dispatch) => {
    dispatch(requestDogs());
    return request
      .get(URL)
      .then((res) => {
        dispatch(receiveDogs(res.body));
      })
      .catch((err) => {
        dispatch(reveiveError(err.message));
      });
  };
}
