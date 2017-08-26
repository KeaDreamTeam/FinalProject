import React from 'react'

class FilterOptions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterOptions: [
        {filter_name: "is_meat", filter_value: true, filter_displayname: "has meat options"},
        {filter_name: "is_vegan", filter_value: true, filter_displayname: "has vegan options"},
        {filter_name: "is_breakfast", filter_value: true, filter_displayname: "has breakfast"},
        {filter_name: "is_dinner", filter_value: true, filter_displayname: "has dinner options"},
        {filter_name: "is_dinein", filter_value: true, filter_displayname: "dine in"},
        {filter_name: "is_takeaway", filter_value: true, filter_displayname: "take away"}
      ]
    }
  }

  render() {
    return (
      <div className="filterOptions-container">

        <div className="toggle">
          Filter Options
          <br />
          <a href='#' onClick={this.props.toggleFilters}>
            Hide Filters
          </a>
        </div>

        <div className="columns is-multiline">

            {this.renderFilterOptions()}

        </div>

      </div>
    )
  }

  renderFilterOptions() {
    return (
      this.state.filterOptions.map((option, i) =>
      <button  className="column is-half filterButton" key={i}>{option.filter_displayname}</button> )
    )
  }


}



// const mapStateToProps = (state) => {
//   return {restaurants: state.restaurants}
// }



export default FilterOptions
