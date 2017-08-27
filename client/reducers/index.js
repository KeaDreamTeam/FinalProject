import {combineReducers} from 'redux'
import restaurants from './restaurants'
import ratings from './ratings'
import auth from './auth'
import filterReducer from './filter'
import comments from './comments'

export default combineReducers({
  restaurants,
  ratings,
  comments,
  auth,
  filterOptions: filterReducer
})
