import React from 'react'
import {connect} from 'react-redux'
import {getRatings} from '../actions/ratings'


class Ratings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount () {
    this.props.dispatch(getRatings(this.props.restaurantId))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.restaurantId != this.props.restaurantId) {
      this.props.dispatch(getRatings(nextProps.restaurantId))
    }
  }

  render() {
    let {positive_vote, negative_votes} = this.props.ratings
    console.log(typeof positive_vote, typeof negative_votes);
    let sum = positive_vote + negative_votes
    let posPercentage = sum / positive_vote
    console.log({posPercentage, sum});
    return (
        <div>
          <div style={{width: sum / positive_vote * 100, backgroundColor: 'blue'}} >hello</div>
            {this.props.ratings.positive_vote} /
            {this.props.ratings.negative_votes}
            {this.props.ratings.restaurant_name}
        </div>
    )
  }

}


const mapStateToProps = (state) => {
      console.log(state)
  return {ratings: state.ratings}
}

export default connect(mapStateToProps)(Ratings)
