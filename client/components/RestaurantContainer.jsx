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
      selected: null,
      isClosing: false
    }
  }

  componentWillMount () {
    this.props.dispatch(getRestaurants())
  }

  selectRestaurant(selected) {
    if (!selected) {
      jump('.restaurantHero')
      setTimeout(() => this.setState({isClosing: true}), 1000)
    }

    else {
      jump('.singleAnchor')
      this.setState({selected})
    }
  }

  componentDidUpdate = () => {
    if (this.state.isClosing) {
      this.setState({selected: null, isClosing:false})
    }
  }

  render() {
    return (
      <div>

        <div className="MapHero hero is-fullheight">

          <MainMap restaurants={this.props.restaurants} select={this.selectRestaurant.bind(this)} />
          <Filter />

          <div className="columns">
            <div className="column"></div>
            <div className="Arrow column is-1">
              <div onClick={() => jump('.restaurantHero')}>
                <i className="fa fa-arrow-down fa-2x" aria-hidden="true"></i>
              </div>
            </div>
            <div className="Arrow column is-1">
              <div onClick={() => jump('.nav')}>
                <i className="fa fa-arrow-up fa-2x" aria-hidden="true"></i>
              </div>
            </div>
            <div className="column"></div>

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
