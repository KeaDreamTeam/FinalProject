import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="navbar mHeader">
  <h1>What's for Lunch?</h1>
  <Link to="/login"><button>Login</button></Link>
  </div>
)



export default connect()(Header)
