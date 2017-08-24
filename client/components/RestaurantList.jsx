import React from 'react'
import {connect} from 'react-redux'

import {getRestaurants} from '../actions/restaurants'

import RestaurantSingle from './RestaurantSingle'

const RestaurantList = ({restaurants, toggleSingleView, singleView, select}) => {
  return (
    <div>
      {restaurants.map((restaurant, i) => {
        return (
          <div key={i}>
            {restaurant.restaurant_name}
            <a onClick={() => select(restaurant) }>Details</a>
          </div>
        )
      })}
    </div>
  )
}

export default RestaurantList
