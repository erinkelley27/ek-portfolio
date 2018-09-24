import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'

import Home from '../Home/Home'
import About from '../About/About'
import Work from '../Work/Work'
import Resume from '../Resume/Resume'
import Blog from '../Blog/Blog'
import Contact from '../Contact/Contact'

class App extends Component {
  render () {
    return (
      <div className='ek-portfolio'>
        <div className='title'>
          <Link to='/' className='nav-link'>
            <h1>ERIN KELLEY</h1>
          </Link>
        </div>
        <div class='line' />
        <nav>
          <ul className='navBar'>
            <li><Link to='/about' className='nav-link'>
              ABOUT
            </Link></li>
            <li><Link to='/work' className='nav-link'>
              WORK
            </Link></li>
            <li><Link to='/resume' className='nav-link'>
              RESUME
            </Link></li>
            <li><Link to='/blog' className='nav-link'>
              BLOG
            </Link></li>
            <li><Link to='/contact' className='nav-link'>
              CONTACT
            </Link></li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route
              exact
              path='/'
              component={Home}
            />
            <Route
              exact
              path='/about'
              component={About}
            />
            <Route
              exact
              path='/work'
              component={Work}
            />
            <Route
              exact
              path='/resume'
              component={Resume}
            />
            <Route
              exact
              path='/blog'
              component={Blog}
            />
            <Route
              exact
              path='/contact'
              component={Contact}
            />
          </Switch>
        </main>
        <footer>
          <div className='logos'>
            <a href='mailto:erinkelley27@gmail.com' target='_blank'>
              <img src={require('./email-gray.png')} alt='Email' className='logo' />
            </a>
            <a href='https://github.com/erinkelley27' target='_blank'>
              <img src={require('./github-gray.png')} alt='Github' className='logo' />
            </a>
            <a href='https://www.linkedin.com/in/erinmargaretkelley/' target='_blank'>
              <img src={require('./linkedin-gray.png')} alt='LinkedIn' className='logo' />
            </a>
            <a href='https://www.instagram.com/obsessedwithyouguys/' target='_blank'>
              <img src={require('./instagram-gray.png')} alt='Instagram' className='logo' />
            </a>
          </div>
          {/* <br />
          <p className='react'>Built with ReactJS</p> */}
        </footer>
      </div>
    )
  }
}

export default App
