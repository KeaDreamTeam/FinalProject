import request from '../utils/api'
import {saveUserToken} from '../utils/auth'

export function registerUserRequest ({user_name, password}) {
  return (dispatch) => {
    console.log("creating user", user_name);
    request('post', 'auth/register', {user_name, password})
      .then((res) => {
          let user = saveUserToken(res.body.token)
          dispatch(receiveLogin(user))
          console.log("register response", res.body);
          alert("success")
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
