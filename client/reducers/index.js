import {combineReducers} from 'redux'
import restaurants from './restaurants'
import ratings from './ratings'
import filterReducer from './filter'

export default combineReducers({
  restaurants,
  ratings,
  filterOptions: filterReducer
})
