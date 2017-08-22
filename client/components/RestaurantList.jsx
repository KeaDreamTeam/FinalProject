import React from 'react'
import {connect} from 'react-redux'

import {getRestaurants} from '../actions/restaurants'

const RestaurantList = ({restaurants, toggleSingleView, singleView, select}) => {
  return (
    <div className="columns is-multiline">
      {restaurants.map((restaurant, i) => {
        return (
          <div className="column is-half" key={i}>
            {restaurant.restaurant_name}
            <a onClick={() => select(restaurant) }>Details</a>
          </div>
        )
      })}
    </div>
  )
}

export default RestaurantList
