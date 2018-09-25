import React, { Component } from 'react'
import './Resume.css'

class Resume extends Component {
  render () {
    return (
      <div className='resume'>
        <a href='https://drive.google.com/file/d/1Yhlx0YmF82zUQX5whfS7CXY9F0HinFf5/view?usp=sharing' target='_blank'><img src={require('./erinkelley_resume.png')} alt='resume' className='resume-img' /></a>
        <a href='https://drive.google.com/file/d/1Yhlx0YmF82zUQX5whfS7CXY9F0HinFf5/view?usp=sharing' target='_blank' className='click-for-site'><p className='click-for-site-text' id='resume-print-link'>Click for Printable View</p></a>
      </div>
    )
  }
}

export default Resume
