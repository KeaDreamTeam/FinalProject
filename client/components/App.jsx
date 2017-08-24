import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Header from './Header'
import Filter from './Filter'
import MainMap from './MainMap'
import Restaurant from './Restaurant'
import Footer from './Footer'

class App extends React.Component {

  render() {
  return (
    <Router>
      <div className='app-container'>
        <Route path="/" component={Header} />

        <Route path="/" component={Filter} />
        <Route path="/" component={(props) => <Restaurant />} />
        <Route path="/" component={Footer} />
      </div>
    </Router>
  )
}
}


export default connect()(App)
