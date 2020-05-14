import {combineReducers} from 'redux'

import dogs from './dogs'
import users from './user'

export default combineReducers({
  dogs,
  users
})
