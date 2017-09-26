import React from 'react'
import FilterOptions from './FilterOptions'

class Filter extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            filtersVisible: true
        }
        this.toggleFilters = this.toggleFilters.bind(this)
    }

    toggleFilters() {
      const newFilter = !this.state.filtersVisible
        this.setState({
            filtersVisible: newFilter
        })
    }

    render() {
      return (
        <div className="FilterCont columns">
          <div className="column is-10 is-offset-1 box">
              {
                this.state.filtersVisible ?
                <FilterOptions toggleFilters={this.toggleFilters} /> :
                <a href='#' onClick={this.toggleFilters}>Show Filters</a>
              }
          </div>
        </div>
      )
    }
}



export default Filter
