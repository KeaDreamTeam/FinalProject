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
      <div className="container">
        <div className="columns">
          <div className="">name and comment</div>
          <div>is positive?</div>
          <div>is fair?</div>
        </div>
        {this.props.comments.map((comment, i) => {
          return (
            <div key={i}>
              <div className="container">
                <div className="columns">
                  <div className="column is-4">
                    <strong>{comment.user_name}: </strong>
                    {comment.content}
                  </div>
                  <div className="column is-1">
                    <i className={(comment.is_pos ? "fa fa1 fa-thumbs-up" : "fa fa-thumbs-down")} label="is positive?"></i>
                  </div>
                  <div className="column is-1">
                    <i className={(comment.is_fair ? "fa fa-usd positive" : "fa fa-usd negative")} label="is positive?"></i>
                  </div>
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
