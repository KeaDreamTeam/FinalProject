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
import FilterOptions from '../../client/components/FilterOptions'
import RestaurantList from '../../client/components/RestaurantList'


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
    t.is(wrapper.find('div').length, 10)
  })

  test("ContactForm has a form", t => {
    const wrapper =  mount(<Provider store={store}><ContactForm /></Provider>)
    t.is(wrapper.find('form').length,1)
})

 test('Footer renders a ContactForm, through a link click', t => {
   Footer.prototype.componentDidMount = () => {}
   const wrapper = mount(<Provider store={store}><Footer /></Provider>)
   wrapper.setState({contactFormVisible: false})
   wrapper.find('a').simulate('click')
   t.is(wrapper.find('form').exists(), true)
 })

 test("FilterOptions has a button", t => {
   const wrapper =  mount(<Provider store={store}><FilterOptions /></Provider>)
   t.is(wrapper.find('button').length,6)
 })

 test('ContactForm contains an a tag', t => {
   const wrapper = mount(<Provider store={store}><ContactForm /></Provider>)
   t.is(wrapper.find('a').exists(), true)
 })

 test('RestaurantList contains an a tag', t => {
   const wrapper = mount(<Provider store={store}><RestaurantList restaurants={[{name: 'Harrisons hamburgers'}]} /></Provider>)
   t.is(wrapper.find('a').exists(), true)
 })

 test('RestaurantList has <div>', t => {
   RestaurantList.prototype.componentDidMount = () => {}
   const wrapper = mount(<Provider store={store}><RestaurantList restaurants={[{restaurant_name: 'Deluxe cafe'}]} /></Provider>)
   t.is(wrapper.find('div').length, 7)
 })
