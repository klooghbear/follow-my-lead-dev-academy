import { combineReducers } from "redux"

import dogs from "./dogs"
import users from "./users"

export default combineReducers({
  dogs,
  users,
})
