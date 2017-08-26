import React from 'react'
import {connect} from 'react-redux'
import {postContactForm} from '../actions/contactForm'

class ContactForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      form: {},
      submitted: false,
      message: '',
      errorMessage: ''
    }
  }

  updateFormDetails (e) {
    let form = this.state.form
    form[e.target.name] = e.target.value
    this.setState({form})
  }
  validateForm (form) {
    return form.name && form.email && form.comments
  }
  submitForm (e) {
    e.preventDefault()
    if (this.validateForm(this.state.form)) postContactForm(this.state.form, this.callbackResponse.bind(this))
    else this.setState({errorMessage: 'Fill in all fields'})
  }
  callbackResponse (err, message) {
    if (err) this.setState({errorMessage: message || err.message})
    else this.setState({message, submitted: true, errorMessage: ''})
  }
  renderMessage () {
    return <p className='contact-submit-message'>{this.state.message}</p>
  }
  renderForm () {
    return (
      <form className='contact-form' onSubmit={(e) => this.submitForm(e)}>
        <fieldset>
          <h4 className='contact-us'>Contact us</h4>
          <hr className='orange-hr' />
          <label className="labelone" htmlFor="name">Name: </label>
          <input name="name" onChange={(e) => this.updateFormDetails(e)}/>
          <label className="labelone" htmlFor="email">Email: </label>
          <input name="email" onChange={(e) => this.updateFormDetails(e)} />
          <label className="labelone" htmlFor="comments">Comments: </label>
          <textarea name="comments" onChange={(e) => this.updateFormDetails(e)}></textarea>
        </fieldset>
        <div className="send">
          <p className="contact-error-message">{this.state.errorMessage}</p>
          <button className="btn" type="submit" >Send Message</button><br/>
          <button className="btn" type="reset">Reset form</button>
        </div>
      </form>
    )
  }
  render () {
    return (
      <div className = 'wallpaper-no-border'>
        <div className='container contact'>
          {this.state.submitted
            ? this.renderMessage()
            : this.renderForm()
          }
        </div>
      </div>
    )
  }
}

export default connect()(ContactForm)
