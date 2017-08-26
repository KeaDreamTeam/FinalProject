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
    // console.log(typeof positive_vote, typeof negative_votes);
    // let sum = positive_vote + negative_votes
    // let posPercentage = sum / positive_vote
    let data = {
        	labels: [
        		'Negative reviews',
        		'Positive reviews'
        	],
        	datasets: [{
        		data: [positive_vote, negative_votes],
        		backgroundColor: [
        		'#FF6384',
        		'#36A2EB'
        		],
        		hoverBackgroundColor: [
        		'black',
        		'black'
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
      console.log(state)
  return {ratings: state.ratings}
}

export default connect(mapStateToProps)(Ratings)


// colors set:
// '#FF6384',
// '#36A2EB',
// '#FFCE56'
