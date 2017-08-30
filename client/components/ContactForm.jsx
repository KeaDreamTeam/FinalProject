import React from 'react'
import jump from 'jump.js'

class ContactForm extends React.Component {
componentDidMount = () => {
  jump('.ContactForm')
}

  render = () => {
    let {toggleContactForm} = this.props
    return (
      <div className="ContactForm columns">
        <div className="column">
          <a onClick={toggleContactForm}>
            Contact Form
          </a>
          <form method="POST" action="http://formspree.io/mjgiergiczny@gmail.com">
            <div className="field">
              <div className="control">
                <input className="input" type="email" name="email" placeholder="Your email" />
                </div>
            </div>
            <div className="field">
              <div className="control">
                <textarea className="textarea" name="message" placeholder="Your message"></textarea>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button className="button is-primary" type="submit">Send</button>
              </div>
            </div>
          </form>
          </div>
        </div>
    )
  }
}


export default ContactForm
