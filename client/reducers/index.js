import {combineReducers} from 'redux'

import dogs from './dogs'
import walkers from './walkers'

export default combineReducers({
  dogs,
  walkers
})
