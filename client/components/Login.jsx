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
    document.location = '/#/'
  }

  render () {
    return (
      <div className="column is-one-third is-offset-one-third">
        <div className="field">
          <div className="control has-icons-left">
            <input className="input" name='user_name' onChange={this.handleChange} placeholder='Username' />
            <span className="icon is-small is-left">
              <i className="fa fa-user"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <div className="control has-icons-left">
            <input className="input" type='password' name='password' onChange={this.handleChange} placeholder='Password' />
              <span className="icon is-small is-left">
                <i className="fa fa-lock"></i>
              </span>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className='button is-primary is-inverted' onClick={this.handleClick}>Login</button>
          </div>
        </div>

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
