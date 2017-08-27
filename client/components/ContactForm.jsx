import React from 'react'

const ContactForm = ({toggleContactForm}) => {
  return (
    <div className = 'wallpaper-no-border'>
      <div className='container contact'>
        <form method="POST" action="http://formspree.io/mjgiergiczny@gmail.com">
          <input type="email" name="email" placeholder="Your email" />
          <textarea name="message" placeholder="Your message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      <a href='#' onClick={toggleContactForm}>
        Hide ContactForm
      </a>
    </div>
  )
}


export default ContactForm
