import { ActionTypes } from "./types"

const { REQUEST_DOGS, RECEIVE_DOGS } = ActionTypes

export const requestDogs = () => {
  return {
    type: REQUEST_DOGS,
  }
}

export const receiveDogs = (dog) => {
  return {
    type: RECEIVE_DOGS,
    payload: dog,
  }
}

