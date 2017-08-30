
import React from 'react'
import {connect} from 'react-redux'
import {registerUserRequest} from '../actions/register'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_name: '',
      password: '',
      confirm: ''
    }
   }

   updateField(e) {
     this.setState({
       [e.target.name]: e.target.value
     })
   }

   handleSubmit(e) {
     e.preventDefault()
     if (this.state.password != this.state.confirm) {
        alert('passwords don\'t match, please try again')
        this.setState({ password: '', confirm: '' })
     } else {
       const {user_name, password} = this.state
      this.props.onSubmit({user_name, password})
      this.setState({user_name: '', password: '', confirm: '' })
      // document.location = '/#/'
     }
   }

   render() {
     return (
       <div className="column is-one-third is-offset-one-third">
         <form onSubmit={this.handleSubmit.bind(this)}>
           <div className="field">
             <div className="control">
               <input className="input" type="text" name="user_name" value={this.state.user_name} placeholder="Username" onChange={this.updateField.bind(this)} />
             </div>
           </div>
           <div className="field">
             <div className="control">
               <input className="input" type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.updateField.bind(this)} />
             </div>
           </div>
           <div className="field">
             <div className="control">
               <input className="input" type="password" name="confirm" value={this.state.confirm} placeholder="Confirm Password" onChange={this.updateField.bind(this)} />
             </div>
           </div>
           <div className="field">
             <div className="control">
               <button className='button is-primary is-inverted' onClick={this.handleClick}>Register</button>
             </div>
           </div>
         </form>
       </div>
     )
   }
}

function mapDispatchToProps(dispatch) {
    return {
      onSubmit: (creds) => {dispatch(registerUserRequest(creds))}
    }
}

export default connect(undefined, mapDispatchToProps)(Register)
