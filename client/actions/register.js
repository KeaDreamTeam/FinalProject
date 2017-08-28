import request from 'superagent'
import {saveUserToken} from '../utils/auth'


export function requestRegister (creds) {
  return {
    type: 'REGISTER_REQUEST',
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

export function registerError (message) {
  return {
    type: 'REGISTER_FAILURE',
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function registerUserRequest ({user_name, password}) {
  return (dispatch) => {
    request
      .post('/api/v1/auth/register')
      .send({
        user_name, password
      })
      .end((res) => {
          saveUserToken(res.body.token)
          alert("success")
      })
      .catch(err => {
        if (err.status === 409) {
          alert("user exists")
        }
        else {
          alert("error")
        }
      })
  }
}
