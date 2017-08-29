import React from 'react'
import {connect} from 'react-redux'
import {createNewUserComment} from '../actions/comments'

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
    // console.log(e.target);
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
    console.log(this.state);
    return (
      <div className="section">
        <div className="container">
            <h2 className="AddComment-title title">Add your comment</h2>
            {this.props.auth.isAuthenticated
              ? <form onSubmit={this.submitDetails.bind(this)}>
                  <span>Was the price fair for the portion?</span>

                  <label className="radio">{"Yes "}
                    <input type="radio" name="is_fair" value={1} onClick={this.updateDetails.bind(this)} />
                  </label>

                  <label className="radio">{"No "}
                    <input type="radio" name="is_fair" value={0} onClick={this.updateDetails.bind(this)}/>
                  </label>
                  <br />
                  <span>Would you reccommend the restaurant?</span>

                  <label className="radio">{"Yes "}
                    <input type="radio" name="is_pos" value={1} onClick={this.updateDetails.bind(this)} />
                  </label>

                  <label className="radio">{"No "}
                    <input type="radio" name="is_pos" value={0} onClick={this.updateDetails.bind(this)}/>
                  </label>
                  <br />
                  <span>Your comment:</span>
                  <br />
                  <textarea class="textarea" placeholder="Add your comment here ..." rows="4" cols="100" className="Comment-content" name="content" onChange={this.updateDetails.bind(this)}></textarea>
                  <input type="submit" value="submit"/>
              </form>
              : <h1>Please Login to post a review</h1>
            }
        </div>
      </div>
    )
  }

}
const mapStateToProps = (state) => {
  // console.log(state.auth);
  return {auth: state.auth, newComment: state.newComment}
}
export default connect(mapStateToProps)(RatingCommentAdd)
