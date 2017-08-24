import React from 'react'

const RestTest = ({restaurants}) => {
  const restaurantColumns = (restaurants) => {
    let restaurantArray = restaurants
    let newArray = []
    for (var i = 0; i < Math.round(restaurantArray.length/2); i++) {
      var innerArray = []
      for (var j = 0; j < 2; j++) {
        var idx = (i*2) + j
        if (restaurantArray[idx]) innerArray.push(restaurantArray[idx])
      }
      newArray.push(innerArray)
    }
    newArray.forEach(outer => {
      return (
        <div className="columns">
            {
              outer.forEach(inner => {
                return (
                  <div className="column">Hi</div>
                )
              })
            }
        </div>
      )

    })
  }
  return (
    <div>
      <a href="#" onClick={() => {restaurantColumns(restaurants)}}>Test the Rest</a>

      {restaurants.map((restaurant, i) => {
      return (
        <div key={i}>
          {restaurant.restaurant_name}
          <a onClick={() => select(restaurant) }>Details</a>
        </div>
      )
    })}</div>
  )
}

export default RestTest
