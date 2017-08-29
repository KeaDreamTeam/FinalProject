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
import request from '../utils/api'
import {receiveLogin} from './login'
export function registerUserRequest ({user_name, password}) {
  return (dispatch) => {
    console.log("creating user", user_name);
    request('post', 'auth/register', {user_name, password})
      .then((res) => {
          let user = saveUserToken(res.body.token)
          dispatch(receiveLogin(user))
          console.log("register response", res.body);
          alert("success")
          document.location = "/#/"
      })
      .catch(err => {
        console.log({err});
        if (err.status === 409) {
          alert("user exists")
        }
        else {
          alert("error:", err.message)
        }
      })
  }
}
