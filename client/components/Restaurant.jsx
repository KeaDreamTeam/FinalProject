import React from 'react'
import {connect} from 'react-redux'
import {getRestaurants} from '../actions/restaurants'
import RestaurantList from './RestaurantList'
import RestaurantSingle from './RestaurantSingle'
import MainMap from './MainMap'
import applyFilter from '../utils/filter'

class Restaurant extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      singleView: false,
      selected: null
    }
  }

  componentWillMount () {
    this.props.dispatch(getRestaurants())
  }
  
  selectRestaurant(selected) {
    this.setState({selected})
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-8 is-offset-2 box">
          Restaurants!!!
          <MainMap restaurants={this.props.restaurants}/>
          <RestaurantList restaurants={this.props.restaurants} select={this.selectRestaurant.bind(this)} />
          {this.state.selected && <RestaurantSingle selected={this.state.selected} select={this.selectRestaurant.bind(this)} /> }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {restaurants: applyFilter(state.restaurants, state.filterOptions)}
}

export default connect(mapStateToProps)(Restaurant)
