const initialFilterState = {
  is_meat: false,
  is_vegan: false,
  is_breakfast: false,
  is_dinner: false,
  is_dinein: false,
  is_takeaway: false
}

function filterReducer (state = initialFilterState, action) {
  switch(action.type) {
    case 'UPDATE_FILTER':
      return action.filterOptions

    default:
      return state
  }
}

export default filterReducer
