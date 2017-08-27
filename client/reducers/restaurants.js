function restaurants (state = [], action) {
  switch(action.type) {
    case 'RECEIVE_RESTAURANTS':
      return [...action.restaurants]
    default:
      return state
  }
}

export default restaurants
