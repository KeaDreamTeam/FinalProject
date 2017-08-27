import React from 'react'
import test from 'ava'
import { shallow, mount } from 'enzyme'
import {Provider} from 'react-redux'
import nock from 'nock'

import './setup-dom'
import App from '../../client/components/App'
import store from '../../client/store'

App.prototype.componentDidMount = () => {}

// test('Hello World renders on App', t => {
//   nock('http://localhost:80')
//     .get('/api/restaurants')
//     .reply(200, [])
//   const wrapper = mount(<Provider store={store}><App /></Provider>)
//   console.log(wrapper.html())
// })
