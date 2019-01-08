import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <div>
        <div>NISARG</div>
        <nav>
          <ul>
            <li>home</li>
            <li>blog</li>
            <li>archive</li>
            <li>older posts</li>
          </ul>
        </nav>
        <a href='#'>Login</a>
        <a href='#'>about</a>
      </div>
    );
  }
}

export default Navigation;
