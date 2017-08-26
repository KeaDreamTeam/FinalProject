import request from 'superagent'

export const receiveRestaurants = (filterOptions) => {
  return {
    type: 'UPDATE_FILTER',
    filterOptions
  }
}
