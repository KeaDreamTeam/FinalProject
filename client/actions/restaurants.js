import request from 'superagent'

export const receiveRestaurants = (restaurants) => {
  return {
    type: 'RECEIVE_RESTAURANTS',
    restaurants
  }
}

export function getRestaurants () {
  return (dispatch) => {
    request
      .get('/api/v1/restaurants')
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveRestaurants(res.body))
      })
  }
}
