import React from 'react'
import {connect} from 'react-redux'

import {getRestaurants} from '../actions/restaurants'

const RestaurantList = ({restaurants, toggleSingleView, singleView, select}) => {
  return (
    <div className="hero is-fullheight">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="columns is-multiline restaurant-container">
            {restaurants.map((restaurant, i) => {
              return (
                <div className="has-text-centered column is-half box" key={i}>
                  <a onClick={() => select(restaurant) }>{restaurant.restaurant_name}</a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
  </div>
  )
}

export default RestaurantList
