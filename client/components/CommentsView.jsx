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
      <div className="comments-box container">

        {this.props.comments.map((comment, i) => {
          return (
          <div key={i} className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src="http://bulma.io/images/placeholders/64x64.png" alt="Image" />
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{comment.user_name} </strong>
                      <small>{comment.user_name+"@gmail.com"}</small>
                      <br />
                        {comment.content}
                    </p>
                    </div>
                    <nav className="level is-mobile">
                      <div className="level-left icon-links">

                        <a className="level-item black">
                          <span className="icon is-small">
                            <i className={(comment.is_pos ? "fa fa-thumbs-up" : "fa fa-thumbs-down")} label="is positive?"></i>
                          </span>
                        </a>

                        {(comment.is_pos ? this.renderFair() : this.renderExpensive() )}

                      </div>
                    </nav>
                  </div>
                </article>
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
