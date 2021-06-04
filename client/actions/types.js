export const ActionTypes = {
  REQUEST_DOGS: "REQUEST_DOGS",
  RECEIVE_DOGS: "RECEIVE_DOGS",
  REQUEST_USERS: "REQUEST_USERS",
  RECEIVED_USERS: "RECEIVED_USERS",
  ERROR: "ERROR",
}

export const receivedError = (error) => {
  return {
    type: ActionTypes.ERROR,
    payload: error,
  }
}
