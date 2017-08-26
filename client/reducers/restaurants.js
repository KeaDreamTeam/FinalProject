function restaurants (state = [], action) {
  switch(action.type) {
    case 'RECEIVE_RESTAURANTS':
      return [...action.restaurants]
    case 'UPDATE_FILTER':
      console.log(state, action);
      return state
    default:
      return state
  }
}

export default restaurants
