import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Greetings from './Greetings'
import Header from './Header'
import Filter from './Filter'
import MainMap from './MainMap'
import Restaurant from './Restaurant'
import Footer from './Footer'

const App = () => (
  <Router>
    <div className='app-container'>
      <Route path="/" component={Header} />

      <Route path="/" component={Filter} />
      <Route path="/" component={MainMap} />
      <Route path="/" component={Restaurant} />

      <Route path="/" component={Footer} />
    </div>
  </Router>
)

export default App
