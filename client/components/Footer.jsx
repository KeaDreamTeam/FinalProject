import React from 'react'
import jump from 'jump.js'


import ContactForm from './ContactForm'

class Footer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      contactFormVisible: false
    }
    this.toggleContactForm = this.toggleContactForm.bind(this)
  }

  toggleContactForm() {
    const newContact = !this.state.contactFormVisible
    this.setState({
      contactFormVisible: newContact
    })
  }
  render() {
    return (
      <div className="footer has-text-centered">
        <span className="">

          <p className="">
            <img className="logo-footer" src="logo.png"></img>
            made with love
            <img className="logo-footer" src="logo.png"></img>
          </p>
          <p className="">
            by Usha, Magda and Ania
          </p>
        </span>
        {
          this.state.contactFormVisible ?
          <ContactForm toggleContactForm={this.toggleContactForm} /> :
            <a onClick={this.toggleContactForm}>
              Contact Form
            </a>
          }
        </div>
      )
    }
  }



  export default Footer
