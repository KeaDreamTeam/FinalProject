import request from '../utils/api'
import {getRatings} from './ratings'

export const receiveComments = (comments) => {
  return {
    type: 'RECEIVE_COMMENTS',
    comments
  }
}
export function getComments (restaurantId) {
  return (dispatch) => {
    request('get', '/restaurants/' + restaurantId + '/comments')
      .then(res => {
        dispatch(receiveComments(res.body))
      })
      .catch(err => {
        alert(err.message)
        return
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
    request('post', 'comments', newComment)
    .then(res => {
      dispatch(createComment(res.body))
      dispatch(getRatings(newComment.restaurant_id))
    })
    .catch(err => {
      alert(err.message)
      return
    })

  }
}
