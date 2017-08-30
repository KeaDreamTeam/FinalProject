import React from 'react'
import {connect} from 'react-redux'
import {createNewUserComment} from '../actions/comments'
import jump from 'jump.js'
import {Link} from 'react-router-dom'

class RatingCommentAdd extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
          newComment:  {
            restaurant_id: props.restaurant_id,
            content: "",
            is_pos: 1,
            is_fair: 1,
          }
      }
  }

  updateDetails = (e) => {
    let {newComment} = this.state
    newComment[e.target.name] = e.target.value
    this.setState({newComment})
  }

  submitDetails = (e) => {
    e.preventDefault()
    e.target.reset()
    let {newComment} = this.state
    this.props.dispatch(createNewUserComment(newComment))
  }

  render() {
    return (
      <div className="column box">
            <h2 className="AddComment-title title">Add your comment</h2>
            {this.props.auth.isAuthenticated
              ? <form className="" onSubmit={this.submitDetails.bind(this)}>
                <div className="field">
                  <div className="control">
                    <label className="label">Was the price fair for the portion?</label>
                    <label className="radio">{"Yes "}
                      <input type="radio" name="is_fair" value={1} onClick={this.updateDetails.bind(this)} />
                    </label>
                    <label className="radio">{"No "}
                      <input type="radio" name="is_fair" value={0} onClick={this.updateDetails.bind(this)}/>
                    </label>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <label className="label">Would you reccommend the restaurant?</label>
                    <label className="radio">{"Yes "}
                      <input type="radio" name="is_pos" value={1} onClick={this.updateDetails.bind(this)} />
                    </label>

                    <label className="radio">{"No "}
                      <input type="radio" name="is_pos" value={0} onClick={this.updateDetails.bind(this)}/>
                    </label>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <label className="label">Your comment</label>
                    <textarea className="textarea Comment-content" placeholder="Add your comment here ..." rows="4" cols="100" name="content" onChange={this.updateDetails.bind(this)}></textarea>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <button className="button is-primary">Submit</button>
                  </div>
                </div>
              </form>
              : <h1>Please <Link onClick={() => jump(".nav")} to="/login">Login</Link> to post a review</h1>
            }
      </div>
    )
  }

}
const mapStateToProps = (state) => {
  return {auth: state.auth, newComment: state.newComment}
}
export default connect(mapStateToProps)(RatingCommentAdd)
