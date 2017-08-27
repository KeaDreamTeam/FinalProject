function comments (state = [], action) {
  switch(action.type) {
    case 'RECEIVE_COMMENTS':
      return action.comments
    case 'CREATE_NEWCOMMENT':
      return [...state, action.newComment]
    default:
      return state
  }
}


export default comments
