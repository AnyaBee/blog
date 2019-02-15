import React, { Component } from 'react';
import Post from '../post/post';
import Sidebar from '../sidebar/sidebar';

class ContentBlock extends Component {
  render() {
    return(
      <div className='main-wrapper'>
        < Post />
        < Sidebar />
      </div>
    )
  }

}
export default ContentBlock;
