import React, { Component } from 'react'
import './Resume.css'

class Resume extends Component {
  render () {
    return (
      <div className='resume'>
        <a href='https://drive.google.com/file/d/1eG44L6tsXHLZ4AaB-Mav5yOFeZXfsiy2/view?usp=sharing' target='_blank'><img src={require('./erinkelley_resume.png')} alt='resume' className='resume-img' /></a>
        <a href='https://drive.google.com/file/d/1eG44L6tsXHLZ4AaB-Mav5yOFeZXfsiy2/view?usp=sharing' target='_blank' className='resume-link'><p>Click for Printable View</p></a>
      </div>
    )
  }
}

export default Resume
