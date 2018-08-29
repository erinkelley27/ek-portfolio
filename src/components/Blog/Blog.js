import React, { Component } from 'react'
import './Blog.css'

class Blog extends Component {
  render () {
    return (
      <div className='blog'>
        <div className='obsessed'>
          {/* <h4>OBSESSED WITH YOU GUYS</h4>
          <p>Description placeholder</p> */}
          <a href='http://obsessedwithyouguys.com/' target='_blank'><img src={require('./obsessed.png')} alt='obsessed with you guys' className='obsessed-img' /></a>
        </div>
      </div>
    )
  }
}

export default Blog
