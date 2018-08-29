import React, { Component } from 'react'
import './Contact.css'

class Contact extends Component {
  render () {
    return (
      <div className='contact'>
        <form className='contact-me'action='https://formspree.io/erinkelley27@gmail.com'
          method='POST'>
          <p className='input-header'>Name:</p>
          <textarea type='text' name='name' placeholder='Name' className='input-field' />
          <p className='input-header'>Email:</p>
          <textarea type='text' name='_replyto' placeholder='Email Address' className='input-field' />
          <p className='input-header'>Subject:</p>
          <textarea type='text' name='subject' placeholder='Subject' className='input-field' />
          <p className='input-header'>Message:</p>
          <textarea type='text' name='message' placeholder='Message' className='input-field' id='message-field' />
          <br />
          <input type='submit' value='SEND' className='submit-button' />
        </form>
      </div>
    )
  }
}

export default Contact
