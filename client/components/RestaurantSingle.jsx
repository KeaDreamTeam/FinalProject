import React from 'react'
import Ratings from './Ratings'
import {connect} from 'react-redux'
import MapSingle from './MapSingle'
import CommentsView from './CommentsView'
import RatingCommentAdd from './RatingCommentAdd'

const RestaurantSingle = ({selected, select}) => {
  return (
    <div>
      <Ratings restaurantId={selected.restaurant_id} />
      <h1>{selected.restaurant_name}</h1>
      <p>{selected.address}</p>
      <p>{selected.phone}</p>
      <p>{selected.description}</p>
      <img src={selected.image_url} />
      <MapSingle restaurant={selected} />
      <RatingCommentAdd user_id={500} restaurant_id={selected.restaurant_id} />
      <CommentsView restaurantId={selected.restaurant_id} />
      <a href="#" onClick={() => select(null)}>Close</a>
    </div>
  )
}

export default RestaurantSingle
