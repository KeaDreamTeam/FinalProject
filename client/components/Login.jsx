import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loginUser } from '../actions/login'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user_name: '',
      password: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleClick () {
    const { user_name, password } = this.state
    const creds = {
      user_name: user_name.trim(),
      password: password.trim()
    }
    this.props.loginUser(creds)
  }

  render () {
    return (
      <div className="column">
        <h1>Login!</h1>
        <p><input name='user_name' onChange={this.handleChange} placeholder='Username' /></p>
        <p><input type='password' name='password' onChange={this.handleChange} placeholder='Password' /></p>
        <button onClick={this.handleClick}>Login</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: creds => {
      return dispatch(loginUser(creds))
    }
  }
}

export default connect(null, mapDispatchToProps)(Login)
