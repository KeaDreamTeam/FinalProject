import React from 'react'
import {connect} from 'react-redux'
import {getComments} from '../actions/comments'

class CommentsView extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount () {
    this.props.dispatch(getComments(this.props.restaurantId))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.restaurantId != this.props.restaurantId) {
      this.props.dispatch(getComments(nextProps.restaurantId))
    }
  }

  render() {
    return (
      <div>
        {this.props.comments.map((comment, i) => {
          return (
            <div key={i}>
              <span>Comment: {comment.content} </span>
              <br />
              <span>Positive: {comment.is_pos ? 'yes' : '-'} </span>
              <span>Fair: {comment.is_fair ? 'yes' : '-'} </span>
              <br />
              <br />
            </div>
          )
        }
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {comments: state.comments}
}
export default connect(mapStateToProps)(CommentsView)
