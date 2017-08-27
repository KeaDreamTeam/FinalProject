//only for pie chart rating excl comments
function ratings (state = {}, action) {
  switch(action.type) {
    case 'RECEIVE_RATING':
      return action.ratings
    default:
      return state
  }
}



export default ratings
