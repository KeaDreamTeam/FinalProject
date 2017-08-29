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
        {this.props.comments.map((comment, i) => {
          return (
            <div key={i} className="media-left">
              <div className="container">
                <div className="content has-text-centered">
                  <p>
                    <strong>{comment.user_name} </strong>
                    {comment.content}
                    <i className={(comment.is_pos ? "fa fa-thumbs-up" : "fa fa-thumbs-down")} label="is positive?"></i>
                    <i className={(comment.is_fair ? "fa fa-usd positive" : "fa fa-usd negative")} label="is positive?"></i>
                  </p>
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
