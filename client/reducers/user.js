import { ActionTypes } from '../actions/index'

const initialState = []

function users (state = initialState, action) {
  switch(action.type){
    case ActionTypes.REQUEST_USER:
      return state
    case ActionTypes.RECEIVE_USER:
      return action.payload
    case ActionTypes.ERROR:
      return state.payload
    default:
      return state
  }
}

export default users