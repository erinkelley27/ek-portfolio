import React, { Component } from 'react'
import './Blog.css'

class Blog extends Component {
  render () {
    return (
      <div className='blog'>
        <div className='obsessed'>
          <a href='http://obsessedwithyouguys.com/' target='_blank' className='click-for-site'><p className='blog-header'>OBSESSED WITH YOU GUYS</p></a>
          <p className='blog-desc'>When I’m not at my laptop obsessing about code, I enjoy traveling the world, inventing new recipes and hosting dinner parties for my family and friends. Some of the most memorable experiences occur beyond the screen, and some of the most meaningful connections are made when sharing a meal. I love to create the opportunity for people to come together.</p>
          <p className='blog-desc'>...And then go back to my laptop and write about it.</p>
          <a href='http://obsessedwithyouguys.com/' target='_blank'><img src={require('./obsessed.png')} alt='obsessed with you guys' className='blog-img' /></a>
          <a href='http://obsessedwithyouguys.com/' target='_blank' className='click-for-site'><p className='click-for-site-text'>Click for Site</p></a>
        </div>
      </div>
    )
  }
}

export default Blog
