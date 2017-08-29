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
      <div className="footer">
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
