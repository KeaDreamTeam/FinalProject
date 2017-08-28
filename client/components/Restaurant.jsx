import React from 'react'
import {connect} from 'react-redux'
import {getRestaurants} from '../actions/restaurants'
import jump from 'jump.js'
import RestaurantList from './RestaurantList'
import RestaurantSingle from './RestaurantSingle'
import MainMap from './MainMap'
import applyFilter from '../utils/filter'
import Filter from './Filter'


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
    this.setState({selected, jumpReady: true})
    jump('.singleAnchor')
  }

  render() {
    return (
      <div>
        <div className="hero is-fullheight">
          <div className="">
            <MainMap restaurants={this.props.restaurants} />
            <Filter />
            <div onClick={() => jump('.restaurant-container')}>Continue</div>
            <div onClick={() => jump('.nav')}>Back</div>
          </div>

        </div>

          <RestaurantList restaurants={this.props.restaurants} select={this.selectRestaurant.bind(this)} />

          <div className="singleAnchor">
            {this.state.selected && <RestaurantSingle selected={this.state.selected} select={this.selectRestaurant.bind(this)} /> }
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
