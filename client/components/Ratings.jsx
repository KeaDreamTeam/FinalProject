import React from 'react'
import {connect} from 'react-redux'

import {getRarings} from '../actions/ratings'



class Ratings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    console.log(this.state.ratings);
    return (
      <div>Rating</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {ratings: state.ratings}
}

export default connect(mapStateToProps)(Ratings)
