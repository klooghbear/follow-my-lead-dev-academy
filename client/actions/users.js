import { ActionTypes } from "./types"

const { REQUEST_USER, RECEIVED_USER } = ActionTypes

export const requestUsers = () => {
  return {
    type: REQUEST_USER,
  }
}

export const receivedUsers = (users) => {
  return {
    type: RECEIVED_USER,
    payload: users,
  }
}
