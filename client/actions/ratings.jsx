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
      .get('/api/restaurants/' + restaurantId + '/ratings')
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        console.log(res.body);
        dispatch(receiveRating(res.body))
      })
  }
}
