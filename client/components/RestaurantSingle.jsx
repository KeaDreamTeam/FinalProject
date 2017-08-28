import React from 'react'
import Ratings from './Ratings'
import {connect} from 'react-redux'
import MapSingle from './MapSingle'
import CommentsView from './CommentsView'
import RatingCommentAdd from './RatingCommentAdd'


const RestaurantSingle = ({selected, select}) => {
  const divStyle = {
    backgroundImage: selected.image_url,
  }
  return (
    // <div className="columns">
      <div className="RestaurantSingle-container column is-10 is-offset-1" style={divStyle}>
        {/* <div className="columns"> */}
          {/* <div className="column is-8"> */}
            <h1 className="restaurantName title">{selected.restaurant_name}</h1>
            <Ratings restaurantId={selected.restaurant_id} />
            <h3 className="restaurantDescription">Restaurant description</h3>
            <p>{selected.description}</p>
            <MapSingle restaurant={selected} />
            <div className="restaurantContact-container">
              <h1 className="Address-title">Address</h1>
              <p className="address">{selected.address}, <a href={selected.phone}>{selected.phone}</a> </p>
            </div>
          {/* </div> */}
          {/* <div className="column is-4"> */}
            <div className="restaurantComments-container">
              <h1 className="Comments-title title has-text-centered">Comments</h1>
              <div className="Comments-list">
                <CommentsView restaurantId={selected.restaurant_id} />
              </div>
            </div>
            <div className="restaurantAddComment-container">
              <h1 className="AddComment-title">Add comment and rating</h1>
                <RatingCommentAdd user_id={500} restaurant_id={selected.restaurant_id} />
            </div>
          {/* </div> */}
        {/* </div> */}


        <a href="#" onClick={() => select(null)}>Close</a>
      </div>
    // </div>
  )
}

export default RestaurantSingle
