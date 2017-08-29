import React from 'react'
import test from 'ava'
import { shallow, mount, render } from 'enzyme'
import {Provider} from 'react-redux'
import nock from 'nock'
import './setup-dom'
import store from '../../client/store'
import sinon from 'sinon'
import jsdom from 'jsdom'

import App from '../../client/components/App'
import HeaderBody  from '../../client/components/HeaderBody'
import Footer from '../../client/components/Footer'
import ContactForm from '../../client/components/ContactForm'
import Filter from '../../client/components/Filter'
// import RestaurantList  from '../../client/components/RestaurantList '

App.prototype.componentDidMount = () => {}

test('className renders on App', t => {
  const wrapper =  mount(<Provider store={store}><App /></Provider>)
  const testClassInner = wrapper.find('.app-container')
  t.is(testClassInner.is('.app-container'), true)
})

test("What's For Lunch? renders on HeaderBody", t => {
  const wrapper =  mount(<Provider store={store}><HeaderBody /></Provider>)
  const testClassInner = wrapper.find('.app-container')
  t.is(wrapper.find('h1').text(), "What's For Lunch?")
 })

 test("Filter has <div>", t => {
   const wrapper =  mount(<Provider store={store}><Filter /></Provider>)
    t.is(wrapper.find('div').length, 4)
  })

  test("ContactForm has a form", t => {
    const wrapper =  mount(<Provider store={store}><ContactForm /></Provider>)
    t.is(wrapper.find('form').length,1)
})


 // test.only('Footer renders a ContactForm, through a button click', t => {
 //   Footer.prototype.componentDidMount = () => {}
 //   const wrapper = mount(<Provider store={store}><Footer /></Provider>)
 //   wrapper.setState({contactFormVisible: false})
 //   wrapper.find('button').simulate('click')
 //   t.is(wrapper.find('form').exists(), true)
 // })



// test.only("What's For Lunch?", t => {
//   nock('http://localhost:80')
//     .get('/api/restaurants')
//     .reply(200, [])
//   const wrapper = mount(<Provider store={store}><App /></Provider>)
//   console.log(wrapper.html())
// })
