import request from 'superagent';

import { requestUser, receivedUser, receivedError } from '../actions/index';
import { getEncodedToken } from 'authenticare/client';

const URL = '/walkers';

export const getWalkers = () => {
  return (dispatch) => {
    dispatch(requestUser());
    return request
      .get(URL)
      .set({ Authorization: `Bearer ${getEncodedToken()}` })
      .set({ Accept: 'application/json' })
      .then((res) => {
        dispatch(receivedUser(res));
      })
      .catch((logError) => {
        dispatch(receivedError(logError));
      });
  };
};

export function getWalker(id) {
  console.log(id);
  return (dispatch) => {
    dispatch(requestUser());
    return request
      .get(URL + '/' + id)
      .set({ Authorization: `Bearer ${getEncodedToken()}` })
      .set({ Accept: 'application/json' })
      .then((walker) => {
        dispatch(receivedUser(walker.body));
      })
      .catch((logError) => {
        dispatch(receivedError(logError));
      });
  };
  // return request.get(URL + '/' + id).then((response) => response.body);
}

export function addWalker(walker) {
  return (dispatch) => {
    dispatch(requestUser());
    return request
      .post(URL)
      .set({ Authorization: `Bearer ${getEncodedToken()}` })
      .set({ 'Content-Type': 'application/json' })
      .send(walker)
      .then((res) => res.body)
      .then((walker) => {
        dispatch(receivedUser(walker));
      })
      .catch((err) => {
        dispatch(receivedError(err));
      });
  };
}

export function getUserDetails(id) {
  return (dispatch) => {
    dispatch(requestUser());
    return request
      .get('/user/' + id)
      .set({ Authorization: `Bearer ${getEncodedToken()}` })
      .set({ 'Content-Type': 'application/json' })
      .then((res) => {
        return res.body;
      });
    // .then((user) => {
    //   dispatch(receivedUser(user));
    // })
    // .catch((err) => {
    //   dispatch(receivedError(err));
    // });
  };
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
