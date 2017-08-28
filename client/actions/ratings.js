import request from 'superagent'

export const receiveRating = (ratings) => {
  return {
    type: 'RECEIVE_RATING',
    ratings
  }
}

export function getRatings (restaurantId) {
  return (dispatch) => {
    request
      .get('/api/v1/restaurants/' + restaurantId + '/ratings')
      .end((err, res) => {
        if (err) {
          alert(err.message)
          return
        }
        dispatch(receiveRating(res.body))
      })
  }
}


export const addRatingAction = (newRating) => {
  return {
    type: 'ADD_RATING',
    newRating
  }
}

export function addRatingComment (newRatingWithComment) {
  return (dispatch) => {
    request
      .post('api/v1/comments')
      .end((err, res) => {
        if (err) {
          alert('error when posting the comment!')
          return
        }
        dispatch(addRatingAction(newRatingWithComment))
      })
  }

}
