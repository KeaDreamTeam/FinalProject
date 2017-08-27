import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {HashRouter as Router, Route} from 'react-router-dom'
import jump from 'jump.js'

import Login from './Login'
import Logout from './Logout'
import Register from './Register'
import HeaderBody from './HeaderBody'

const Header = ({isAuthenticated}) => (

  <section className="hero is-primary is-fullheight">
    <div className="hero-head">
      <div className="nav">
        <div className="container">
          <div className="nav-left">
            <div className="nav-item">
              <Link exact to="/">Logo</Link>
            </div>
            </div>
            <span className="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div className="nav-right nav-menu">
              {!isAuthenticated && (
                <div>
                <div className="nav-item NavItem">
                  <Route path='/' render={() => (
                    <Link to="/login">
                      Login
                    </Link>
                  )} />
                </div>
                <div className="nav-item NavItem">
                  <Route path='/' render={() => (
                    <Link to="/register">
                      Register
                    </Link>
                  )} />
                </div>
                </div>
                        )}
                {isAuthenticated &&
                  <div className="nav-item">
                    <Logout />
                  </div>
                }
            </div>
        </div>
      </div>
    </div>

    <div className="hero-body">
      <div className="container has-text-centered">
        <Route exact path="/" render={() => (
            <HeaderBody />
        )} />
      <Route exact path="/login" render={() => (
            <Login />
        )} />
      <Route exact path="/register" render={() => (
            <Register />
        )} />
      </div>
    </div>

</section>
)

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(Header)
