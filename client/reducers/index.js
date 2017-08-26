import {combineReducers} from 'redux'
import restaurants from './restaurants'
import ratings from './ratings'
import auth from './auth'

export default combineReducers({
  restaurants,
  ratings,
  auth
})
