import { ActionTypes } from "./types"

export const requestWalkers = () => {
  return {
    type: ActionTypes.REQUEST_USER,
  }
}

export const receivedWalkers = (users) => {
  return {
    type: ActionTypes.RECEIVED_USER,
    payload: users,
  }
}
