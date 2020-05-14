import { ActionTypes } from '../actions/types'

const initialState = []

export const dogs = (state = initialState, action) => {
  switch(action.type){
    case ActionTypes.REQUEST_DOGS:
      return state
    case ActionTypes.RECEIVE_DOGS:
      return action.payload
    case ActionTypes.ERROR:
      return state.payload
    default:
      return state
  }
}

export default dogs