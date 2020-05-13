import { ActionTypes } from './types';

export const requestDogs = () => {
  return {
    type: ActionTypes.REQUEST_DOGS,
  };
};

export const receiveDogs = (dog) => {
  return {
    type: ActionTypes.RECEIVE_USERS,
    payload: dog,
  };
};

