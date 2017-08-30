
function applyFilter(restaurants, filterOptions) {
  return restaurants.filter((restaurant) => (
    compareOption(restaurant.is_meat, filterOptions.is_meat) &&
    compareOption(restaurant.is_vegan, filterOptions.is_vegan) &&
    compareOption(restaurant.is_breakfast, filterOptions.is_breakfast) &&
    compareOption(restaurant.is_dinner, filterOptions.is_dinner) &&
    compareOption(restaurant.is_dinein, filterOptions.is_dinein) &&
    compareOption(restaurant.is_takeaway, filterOptions.is_takeaway)
  ))
}

function compareOption(val, filterOption) {
  if (val == 0 && filterOption == 1) {
    return false
  }
    return true
}


export default applyFilter
