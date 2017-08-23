import {combineReducers} from 'redux'
import restaurants from './restaurants'
import ratings from './ratings'

export default combineReducers({
  restaurants,
  ratings
})
