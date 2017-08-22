import React from 'react'

import RestaurantSingle from './RestaurantSingle'

class RestaurantList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      singleView: false
    }
    this.toggleSingleView = this.toggleSingleView.bind(this)
  }

  toggleSingleView() {
    const newSingle = !this.state.singleView
    this.setState({singleView: newSingle})
  }

  render() {
    return (
      <div>
        <h1 className="">Food Cafe</h1>
        {
          this.state.singleView ? <RestaurantSingle toggleSingleView={this.toggleSingleView} /> : <a href="#" onClick={this.toggleSingleView}>Details</a>
        }
      </div>
    )
  }
}

export default RestaurantList
