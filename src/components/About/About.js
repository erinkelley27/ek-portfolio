import React, { Component } from 'react'
import './About.css'

class About extends Component {
  render () {
    return (
      <div className='about'>
        <p className='about-header'>HEY GUYS,</p>
        <p className='about-desc'>About me placeholder - need to add more text</p>
        <img src={require('./headshot.jpg')} alt='me' className='head-shot' />
      </div>
    )
  }
}

export default About
