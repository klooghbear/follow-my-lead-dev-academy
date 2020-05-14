import { ActionTypes } from './types';

export const requestUser = () => {
  return {
    type: ActionTypes.REQUEST_USER,
  };
};

export const receivedUser = (user) => {
  return {
    type: ActionTypes.RECEIVED_USER,
    payload: user,
  };
};
