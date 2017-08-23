import React from 'react'

const FilterOptions = props => {
  return (
    <div>
      Filter Options
      <br />
      <a href='#' onClick={props.toggleFilters}>
        Hide Filters
      </a>
    </div>
  )
}

export default FilterOptions
