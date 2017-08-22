import React from 'react'
import {connect} from 'react-redux'
import {getRestaurants} from '../actions/restaurants'
import RestaurantList from './RestaurantList'
import RestaurantSingle from './RestaurantSingle'
import MainMap from './MainMap'


class Restaurant extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      singleView: false,
      selected: null
    }
    this.toggleSingleView = this.toggleSingleView.bind(this)
  }

  componentWillMount () {
    this.props.dispatch(getRestaurants())
  }

  toggleSingleView() {
    const newSingle = !this.state.singleView
    this.setState({singleView: newSingle})
  }

  selectRestaurant(selected) {
    this.setState({selected})
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-8 is-offset-2 box">
          Restaurants!!!
          <MainMap restaurants={this.props.restaurants} google={window.google}/>
          <RestaurantList restaurants={this.props.restaurants} toggleSingleView={this.state.toggleSingleView} singleView={this.state.singleView} select={this.selectRestaurant.bind(this)} />
            {this.state.selected && <RestaurantSingle selected={this.state.selected} select={this.selectRestaurant.bind(this)} /> }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {restaurants: state.restaurants}

}

export default connect(mapStateToProps)(Restaurant)
