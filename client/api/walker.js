import request from 'superagent';
import {
  receivedError,
  requestWalkers,
  receivedWalkers,
} from '../actions/index';
import { getEncodedToken } from 'authenticare/client';

const URL = '/walkers';

export const fetchWalkers = () => {
  return (dispatch) => {
    dispatch(requestWalkers());
    return request
      .get(URL)
      .set({ Authorization: `Bearer ${getEncodedToken()}` })
      .set({ Accept: 'application/json' })
      .then((res) => res.body)
      .then((walker) => {
        console.log(walker)
        dispatch(receivedWalkers(walker));
      })
      .catch((err) => {
        console.log(err);
        dispatch(receivedError(err));
      });
  };
};

export function fetchWalker(id) {
  return (dispatch) => {
    dispatch(requestWalkers());
    return (
      request
        .get(URL + '/' + id)
        // .set({ Authorization: `Bearer ${getEncodedToken()}` })
        // .set({ Accept: 'application/json' })
        .then((res) => res.body)
        .then((walker) => {
          console.log(walker);
          dispatch(receivedWalkers(walker.body));
        })
        .catch((err) => {
          console.log(err);
          dispatch(receivedError(err));
        })
    );
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
