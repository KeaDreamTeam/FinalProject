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
    jump(".ContactForm")
  }
  render() {
    return (
      <div className="footer has-text-centered columns">
        <div className="column is-one-third is-offset-one-third">
        <span className="">

          <p className="">
            <i className="fa fa-heart is-small is-right red" aria-hidden="true"></i>
            made with love
            <i className="fa fa-heart is-small is-left red" aria-hidden="true"></i>
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
        </div>
      )
    }
  }



  export default Footer
