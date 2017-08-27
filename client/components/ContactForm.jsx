import React from 'react'


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

  render () {
    return (
      <div className = 'wallpaper-no-border'>
        <div className='container contact'>
          <form method="POST" action="http://formspree.io/mjgiergiczny@gmail.com">
            <input type="email" name="email" placeholder="Your email" />
            <textarea name="message" placeholder="Your message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    )
  }
}

export default ContactForm
