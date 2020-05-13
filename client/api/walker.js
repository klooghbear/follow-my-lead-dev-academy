import request from 'superagent';

import { requestWalker, receivedWalker, receivedError } from '../actions/index';
import { getEncodedToken } from 'authenticare/client';

const URL = '/walkers';

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

export function addWalker(walker) {
  return request
    .post(URL)
    .set({ Authorization: `Bearer ${getEncodedToken()}` })
    .set({ 'Content-Type': 'application/json' })
    .send(walker);
}

export function getUserDetails(id) {
  return request
    .get('/api/user/' + id)
    .set({ Authorization: `Bearer ${getEncodedToken()}` })
    .set({ 'Content-Type': 'application/json' })
    .then((res) => {
      return res.body;
    });
}

export function editWalker(id, walker) {
  return request
    .put(URL + id + '/edit') // this needs an id
    .set({ Authorization: `Bearer ${getEncodedToken()}` })
    .set({ Accept: 'application/json' })
    .send(walker)
    .then((res) => res.body.walker)
    .catch((err) => console.log(err));
}
