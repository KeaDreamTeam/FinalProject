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
      .get('restaurants/' + restaurantId + '/ratings')
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveRating(res.body))
      })
  }
}
