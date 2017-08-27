import request from 'superagent'

export const receiveComments = (comments) => {
  return {
    type: 'RECEIVE_COMMENTS',
    comments
  }
}
export function getComments (restaurantId) {
  return (dispatch) => {
    request
      .get('/api/restaurants/' + restaurantId + '/comments')
      .end((err, res) => {
        if (err) {
          alert(err.message)
          return
        }
        dispatch(receiveComments(res.body))
      })
  }
}


export const createComment = (newComment) => {
  return {
    type: "CREATE_NEWCOMMENT",
    newComment
  }
}
export function createNewUserComment (newComment) {
  return (dispatch) => {
    request
    .post('/api/comments')
    .send(newComment)
    .end((err, res) => {
      if (err) {
        alert(err.message)
        return
      }
      dispatch(createComment(newComment))
    })

  }
}
