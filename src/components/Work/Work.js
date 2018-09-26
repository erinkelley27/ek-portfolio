import React, { Component } from 'react'
import './Work.css'

class Work extends Component {
  render () {
    return (
      <div className='box'>

        <div className='work-block'>
          <a href='http://roadie-recs.surge.sh/' target='_blank' className='click-for-site'>
            <p className='work-header'>ROADIE</p></a>
          <p className='work-desc'>Roadie is a full stack application that allows users to locate diners, food joints and other lesser known rest stops while on a road trip. No one wants to eat run-of-the-mill highway fast food after a long day on the road. Roadie helps users find options that are off the beaten path.</p>
          <p className='technologies'>Created with MongoDB, Express, ReactJS, NodeJS and CSS</p>
          <a href='http://roadie-recs.surge.sh/' target='_blank'><img src={require('./roadie.png')} alt='roadie' className='app-img' /></a>
          <a href='http://roadie-recs.surge.sh/' target='_blank' className='click-for-site'><p className='click-for-site-text'>Click for Site</p></a>
        </div>

        <div className='work-block'>
          <a href='https://bunble.herokuapp.com/' target='_blank' className='click-for-site'><p className='work-header'>BUNBLE</p></a>
          <p className='work-desc'>Bunble is a full stack web application that allows users to scroll through a variety of cheeseburgers and match with burgers they deem to be delicious. The concept derived from the idea of matching with a meal in the same way a user would a dating application. Why limit yourself to a romantic partner when you can find out where to get or how to make the cheeseburger of your dreams at the touch of a screen?</p>
          <p className='technologies'>Created with MongoDB, Express, Handlebars, NodeJS and CSS</p>
          <a href='https://bunble.herokuapp.com/' target='_blank'><img src={require('./bunble.png')} alt='bunble' className='app-img' /></a>
          <a href='https://bunble.herokuapp.com/' target='_blank' className='click-for-site'><p className='click-for-site-text'>Click for Site</p></a>
        </div>

        <div className='work-block'>
          <a href='#' target='_blank' className='click-for-site'><p className='work-header'>HANGMAN</p></a>
          <p className='work-desc'>Hangman single-page, two player game. Player One enters a word for their opponent to guess. Player Two has the opportunity to enter up to seven incorrect letters before a hangman appears and the game starts over.</p>
          <p className='technologies'>Created with HTML, CSS and JavaScript</p>
          <a href='#' target='_blank'><img src={require('./hangman.png')} alt='hangman' className='app-img' /></a>
          <a href='#' target='_blank' className='click-for-site'><p className='click-for-site-text'>Click for Site</p></a>
        </div>

        <div className='work-block'>
          <a href='http://helium-vacations.surge.sh/' target='_blank' className='click-for-site'><p className='work-header'>LOVE AWAY VACATIONS</p></a>
          <p className='work-desc'>Love Away Vacations is a site where users can browse romantic destinations throughout the world, reading city recommendations from other users in addition to submitting feedback themselves. </p>
          <p className='technologies'>Created with MongoDB, Express, ReactJS, NodeJS and CSS</p>
          <a href='http://helium-vacations.surge.sh/' target='_blank'><img src={require('./love-away.png')} alt='love away vacations' className='app-img' /></a>
          <a href='http://helium-vacations.surge.sh/' target='_blank' className='click-for-site'><p className='click-for-site-text'>Click for Site</p></a>
        </div>

      </div>
    )
  }
}

export default Work
