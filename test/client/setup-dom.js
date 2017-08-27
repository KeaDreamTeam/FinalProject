require('babel-register')

const { JSDOM } = require('jsdom')

const dom = new JSDOM('<body></body>')


const localStorage = {}
dom.window.localStorage = {
  getItem: (key) => {

  },
  setItem: (key, value) => {

  },
  removeItem: (key) => {

  }
}



global.window = dom.window
global.document = dom.window.document
global.navigator = dom.window.navigator
