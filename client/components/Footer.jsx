import React from 'react'
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
        ContactForm |
        {
          this.state.contactFormVisible ?
          <ContactForm toggleContactForm={this.toggleContactForm} /> :
            <a href='#' onClick={this.toggleContactForm}>
              Show ContactForm
            </a>
          }
        </div>
      )
    }
  }



  export default Footer
