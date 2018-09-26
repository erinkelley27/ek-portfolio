import React, { Component } from 'react'
import './About.css'

class About extends Component {
  render () {
    return (
      <div className='box'>
        <p className='about-header'>HEY GUYS,</p>
        <p className='about-desc'>Full stack web developer with a passion for implementing cutting edge ideas through succinct, creative solutions. My past experience in event management and design has honed a unique blend of innate logistical instincts and detail orientation with a focus on client experience that I bring to projects of any nature.</p>
        <img src={require('./headshot.jpg')} alt='me' className='head-shot' />
      </div>
    )
  }
}

export default About
