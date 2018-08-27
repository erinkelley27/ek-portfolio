import React, { Component } from 'react'
import './Contact.css'

class Contact extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  setName (e) {
    this.setState({name: e.target.value})
  }

  setEmail (e) {
    this.setState({email: e.target.value})
  }

  setSubject (e) {
    this.setState({subject: e.target.value})
  }

  setMessage (e) {
    this.setState({message: e.target.value})
  }

  // handleSubmit (e) {
  //   e.preventDefault()
  // }

  render () {
    return (
      <div className='contact'>
        <form className='contact-me'>
          <p className='input-header'>Name:</p>
          <input type='text' placeholder='Name' className='input-field' onChange={this.setName} />
          <p className='input-header'>Email:</p>
          <input type='text' placeholder='Email Address' className='input-field' onChange={this.setEmail} />
          <p className='input-header'>Subject:</p>
          <input type='text' placeholder='Subject' className='input-field' onChange={this.setSubject} />
          <p className='input-header'>Message:</p>
          <textarea type='text' placeholder='Message' className='input-field' id='message-field' onChange={this.setMessage} />
          <br />
          <input type='submit' value='SUBMIT' className='submit-button' onClick={this.handleSubmit} />
        </form>
      </div>
    )
  }
}

export default Contact
