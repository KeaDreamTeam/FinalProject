import React from 'react'
import Ratings from './Ratings'
import {connect} from 'react-redux'
import MapSingle from './MapSingle'
import CommentsView from './CommentsView'
import RatingCommentAdd from './RatingCommentAdd'


const RestaurantSingle = ({selected, select}) => {
  return (
    <div className="RestaurantSingle-container column is-10 is-offset-1">
      <div className="columns">
        <div className="column is-two-thirds">
          <h1 className="restaurantName title has-text-centered">{selected.restaurant_name}</h1>
          <h3 className="restaurantDescription">Restaurant description</h3>
          <p>{selected.description}</p>
          <h1 className="Address-title">Address</h1>
          <p className="address">{selected.address}, <a href={selected.phone}>{selected.phone}</a> </p>
          <MapSingle restaurant={selected} />
        </div>

        <div className="column is-one-third">
          <Ratings restaurantId={selected.restaurant_id} />
          <div class="card">
            <header className="card-header">
              <p class="card-header-title">

              </p>
            </header>
          </div>
          <h1 className="title">Comments</h1>
          <CommentsView restaurantId={selected.restaurant_id} />
        </div>
      </div>
      <div className="columns">
          <div className="restaurantAddComment-container">
            <RatingCommentAdd user_id={500} restaurant_id={selected.restaurant_id} />
          </div>
      </div>
      <a href="#" onClick={() => select(null)}>Close</a>
    </div>

  )
}

export default RestaurantSingle
