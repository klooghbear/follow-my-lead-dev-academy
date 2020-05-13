import { ActionTypes } from './types';

export const requestWalker = () => {
  return {
    type: ActionTypes.REQUEST_USER,
  };
};

export const receivedWalker = (user) => {
  return {
    type: ActionTypes.RECEIVED_USER,
    payload: user,
  };
};
