import React, { Component } from 'react';
import logo from '../assets/images/logo_transparent.png';

class Navigation extends Component {
  render() {
    return (
      <div className='nav-wrapper'>
        <div className='logo-wrapper'>
          <img src={logo} alt='logo' width='200'/>
        </div>
        <nav className='navigation'>
          <ul className='navigation__list'>
            <li className='navigation__item'><a className="navigation__link" href="foo">home</a></li>
            <li className='navigation__item'><a className="navigation__link" href="foo">blog</a></li>
            <li className='navigation__item'><a className="navigation__link" href="foo">archive</a></li>
            <li className='navigation__item'><a className="navigation__link" href="foo">older posts</a></li>
            <li className='navigation__item'><a className="navigation__link navigation__link--button" href="foo">login</a></li>
            <li className='navigation__item'><a className="navigation__link navigation__link--button" href="foo">about</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;
