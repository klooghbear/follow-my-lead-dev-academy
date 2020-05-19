import request from 'superagent';
import {
  receivedError,
  requestWalkers,
  receivedWalkers,
} from '../actions/index';
import { getEncodedToken } from 'authenticare/client';

const URL = '/api/walker';

export const fetchWalkers = () => {
  return (dispatch) => {
    dispatch(requestWalkers());
    return request
      .get(URL)
      .set({ Authorization: `Bearer ${getEncodedToken()}` })
      .set({ Accept: 'application/json' })
      .then((res) => {
        console.log(res);
        return res.body;
      })
      .then((walker) => {
        console.log(walker);
        dispatch(receivedWalkers(walker));
      })
      .catch((err) => {
        console.log(err);
        dispatch(receivedError(err));
      });
  };
};

export function getWalker(id) {
  return request
    .get(URL + id)
    .then(response => response.body)
}

export function addWalker(newWalker) {
  return request
    .post(URL)
    .set({ Authorization: `Bearer ${getEncodedToken()}` })
    .set({ 'Content-Type': 'application/json' })
    .send(newWalker)
    .catch((err) => {
      dispatch(receivedError(err));
    });
}

export function getUserDetails(id) {
  return request
    .get(`/user/${id}`)
    .set({ Authorization: `Bearer ${getEncodedToken()}` })
    .set({ 'Content-Type': 'application/json' })
    .then((res) => {
      return res.body;
    });
}
