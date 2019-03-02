import React, { Component } from 'react';
import logo from '../assets/images/logo_transparent.png';
import Button from '../button/button';
import Modal from '../modal/modal';

class Navigation extends Component {
  state = {
    show: false
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

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
          </ul>
        </nav>
        <Modal show={this.state.show} handleClose={this.hideModal} />
        <Button className='navigation__link--button' text='Login' onClick={this.showModal} />
        <Button className="navigation__link navigation__link--button" text="About" />
      </div>
    );
  }
}

export default Navigation;
