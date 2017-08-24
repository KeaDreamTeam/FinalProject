import React from 'react'

const RestaurantSingle = ({selected, select}) => {
  return (
    <div>
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
