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

  renderFair() {
    return (
      <div>
        <a className="level-item">
          <span className="icon is-small">
            <i className="fa fa-usd"></i>
          </span>
        </a>
      </div>
    )
  }

  renderExpensive() {
    return (
      <div className="level-left icon-links">
        <a className="level-item">
          <span className="icon is-small">
            <i className="fa fa-usd"></i>
          </span>
        </a>
        <a className="level-item">
          <span className="icon is-small">
            <i className="fa fa-usd"></i>
          </span>
        </a>
      </div>
    )
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
