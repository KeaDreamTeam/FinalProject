import {combineReducers} from 'redux'
import restaurants from './restaurants'
import ratings from './ratings'
import auth from './auth'
import filterReducer from './filter'

export default combineReducers({
  restaurants,
  ratings,
  auth,
  filterOptions: filterReducer
})
