import React from 'react'
import {connect} from 'react-redux'
import {getRatings} from '../actions/ratings'
import {Doughnut} from 'react-chartjs-2';

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
      let data = {
          	labels: [
          		'Positive reviews',
              'Negative reviews'
          	],
          	datasets: [{
          		data: [positive_vote, negative_votes],
          		backgroundColor: [
          		'#36A2EB',
          		'#FF6384'
          		],
          		hoverBackgroundColor: [
          		'#777b82',
          		'#777b82'
          		]
          	}]
          };

      return (
          <div className="ratings">
             <Doughnut
               data={data}
               width={250}
  	           height={250}
  	           options={{maintainAspectRatio: false}}/>
              {/* <div style={{width: sum / positive_vote * 100, backgroundColor: 'blue'}} >hello</div> */}
          </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {ratings: state.ratings}
}

export default connect(mapStateToProps)(Ratings)
