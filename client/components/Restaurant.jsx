import React from 'react'
import {connect} from 'react-redux'
import {getRestaurants} from '../actions/restaurants'
import jump from 'jump.js'
import RestaurantList from './RestaurantList'
import RestaurantSingle from './RestaurantSingle'
import MainMap from './MainMap'
import applyFilter from '../utils/filter'

class Restaurant extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      singleView: false,
      selected: null,
      jumpReady: false
    }
  }

  componentWillMount () {
    this.props.dispatch(getRestaurants())
  }

componentWillUpdate() {
  if (this.state.jumpReady) {
    this.setState({jumpReady: false})
  }
}

  selectRestaurant(selected) {
    this.setState({selected, jumpReady: true})
    jump('.singleAnchor')
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-8 is-offset-2 box">
          Restaurants!!!
          <MainMap restaurants={this.props.restaurants} />
          <RestaurantList restaurants={this.props.restaurants} select={this.selectRestaurant.bind(this)} />

          <div className="singleAnchor">
            {this.state.selected && <RestaurantSingle selected={this.state.selected} select={this.selectRestaurant.bind(this)} /> }
          </div>


        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: applyFilter(state.restaurants, state.filterOptions)}
}

export default connect(mapStateToProps)(Restaurant)
