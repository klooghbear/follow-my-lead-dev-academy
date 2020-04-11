import { RECEIVE_DOGS, REQUEST_DOGS, ERROR } from '../actions/dogsAction'

const initialState = []

function dogReducer (state = initialState, action) {
  switch(action.type){
    case REQUEST_DOGS:
      return state
    case RECEIVE_DOGS:
      return action.payload
    case ERROR:
      return state.payload
    default:
      return state
  }
}

export default dogReducer