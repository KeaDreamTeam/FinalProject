import React from 'react'

const RestaurantSingle = props => {
  return (
    <div>
      Food Cafe
      Address: salkjasjflskf
      Ph: 34092340234
      <br />
        <a href='#' onClick={props.toggleSingleView}>
          Close
        </a>
    </div>
  )
}

export default RestaurantSingle
