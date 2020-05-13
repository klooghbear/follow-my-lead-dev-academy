const ActionTypes = {
  REQUEST_DOGS: 'REQUEST_DOGS',
  RECEIVE_DOGS: 'RECEIVE_DOGS',
  REQUEST_USER: 'REQUEST_USER',
  RECEIVED_USER: 'RECEIVED_USER',
  ERROR: 'ERROR',
};

const receivedError = (error) => {
  return {
    type: ActionTypes.ERROR,
    payload: error,
  };
};

module.exports = { ActionTypes, receivedError };
