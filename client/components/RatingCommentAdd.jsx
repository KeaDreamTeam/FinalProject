import React from 'react'
import {connect} from 'react-redux'
import {createNewUserComment} from '../actions/comments'

class RatingCommentAdd extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
          newComment:  {
            user_id: props.user_id,
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
    let {newComment} = this.state
    this.props.dispatch(createNewUserComment(newComment))
  }

  render() {
    return (
      <div className="RatingCommentAdd-container">
        <div>Rating</div>
        <form onSubmit={this.submitDetails.bind(this)}>
          <select name="is_fair" onChange={this.updateDetails.bind(this)}>
            <option selected value="true">yes</option>
            <option value="false">no</option>
          </select>
          <select name="is_pos" onChange={this.updateDetails.bind(this)}>
            <option selected value="true">yes</option>
            <option value="false">no</option>
          </select>
          <input type="text" name="content" onChange={this.updateDetails.bind(this)}></input>
          <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }

}
const mapStateToProps = (state) => {
  return {newComment: state.newComment}
}
export default connect(mapStateToProps)(RatingCommentAdd)
