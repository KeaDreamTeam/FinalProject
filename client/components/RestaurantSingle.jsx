import React from 'react'
import Ratings from './Ratings'
import {connect} from 'react-redux'

const RestaurantSingle = ({selected, select}) => {
  return (
    <div>
      <Ratings restaurantId={selected.restaurant_id}/>
      <h1>{selected.restaurant_name}</h1>
      <p>{selected.address}</p>
      <p>{selected.phone}</p>
      <p>{selected.description}</p>
      <img src={selected.image_url} />
      <a href="#" onClick={() => select(null)}>Close</a>
    </div>
  )
}

export default RestaurantSingle
