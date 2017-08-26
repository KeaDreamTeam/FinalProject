function restaurants (state = [], action) {
  switch(action.type) {
    case 'RECEIVE_RESTAURANTS':
      return [...action.restaurants]
    // case 'UPDATE_FILTER':
    //   console.log('restaurants', state, action)
    //   return state.filterOptions
    default:
      return state
  }
}

export default restaurants
