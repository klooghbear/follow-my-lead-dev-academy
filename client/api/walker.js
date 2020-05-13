import request from 'superagent';

import { requestWalker, receivedWalker, receivedError } from '../actions/index';
import { getEncodedToken } from 'authenticare/client';

const URL = '/api/walkers';

export const fetchWalkers = () => {
  return (dispatch) => {
    dispatch(requestWalker());
    return request
      .get(URL)
      .set({ Authorization: `Bearer ${getEncodedToken()}` })
      .set({ Accept: 'application/json' })
      .then((res) => {
        dispatch(receivedWalker(res));
      })
      .catch((logError) => {
        dispatch(receivedError(logError));
      });
  };
};

export function getWalker(id) {
  return request.get(URL + '/' + id).then((response) => response.body);
}
