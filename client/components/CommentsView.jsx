import React from 'react'
import {connect} from 'react-redux'
import {getComments} from '../actions/comments'

class CommentsView extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
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
                <div className="Comments box columns">
                  <div className="column">
                    <strong>{comment.user_name}: </strong>
                    {comment.content}
                  </div>
                  <div className="column is-1">
                    <i className={(comment.is_pos ? "fa fa-thumbs-up" : "fa fa-thumbs-down")} label="is positive?"></i>
                  </div>
                  <div className="column is-1">
                    <i className={(comment.is_fair ? "fa fa-usd positive" : "fa fa-usd negative")} label="is positive?"></i>
                  </div>
                </div>
            </div>
          )})}
        </div>
      )
    }
  }


  const mapStateToProps = (state) => {
    return {comments: state.comments}
  }
  export default connect(mapStateToProps)(CommentsView)
