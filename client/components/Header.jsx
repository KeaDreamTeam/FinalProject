import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {HashRouter as Router, Route} from 'react-router-dom'


import Login from './Login'
import Logout from './Logout'
import Register from './Register'

const Header = ({isAuthenticated}) => (
  <div className="navbar mHeader columns">
    <div className="">
      <div className="column is-one-third">
        <h1>What's for Lunch?</h1>
      </div>
      {!isAuthenticated && (
        <div>
        <Route path='/' render={() => (
          <div>
            <Link to='Login' />
            <Login />
          </div>
        )} />
        <Route path='/' render={() => (
          <div>
            <Link to='Register' />
            <Register />
          </div>
        )} />
        </div>
                )}

                {isAuthenticated &&
                  <div className="column"><Logout /></div>
                }
    </div>

  </div>
)

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(Header)
