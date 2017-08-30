import test from 'ava'
import nock from 'nock'
import jwt from 'jsonwebtoken'

import './setup-dom'
import request from '../../client/utils/api'
import token from '../../server/auth/token'
import * as auth from '../../client/utils/auth'

test('isAuthenticated returns false if user not logged in', t => {
 t.is(auth.isAuthenticated(), false)
})

// test.only('isAuthenticated returns true if user logged in', t => {
//   global.window.localStorage.setItem('token', token.createToken({ user_name: 'Magda' }, 'secret'))
//   t.is(auth.isAuthenticated(), true)
//   global.window.localStorage.setItem('token', '')
// })

test('isAuthenticated returns false if user token expired', t => {
  global.window.localStorage.setItem('token', jwt.sign({ user_name: 'Liam' }, 'secret', {
    expiresIn: 0
  }))
  t.is(auth.isAuthenticated(), false)
  global.window.localStorage.setItem('token', '')
})

test('saveUserToken saves to storage and returns decoded token', t => {
  let decoded = auth.saveUserToken(token.createToken({ user_name: 'Liam' }, 'imasecret'))
  let storage = global.window.localStorage
  t.not(storage.getItem('token'), '')
  t.is(decoded.user_name, 'Liam')
})

// test.only('getUserTokenInfo returns decoded token', t => {
//   global.window.localStorage.setItem('token', token.createToken({ user_name: 'Liam' }, 'secret'))
//   let info = auth.getUserTokenInfo()
//   t.is(info.user_name, 'Liam')
// })

test('getUserTokenInfo returns null if no token exists', t => {
  global.window.localStorage.setItem('token', '')
  let info = auth.getUserTokenInfo()
  t.is(info, null)
})
