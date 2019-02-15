import React, { Component } from 'react';
import Search from '../search/search';
import Archive from '../archive/archive';

class Sidebar extends Component {
  render() {
    return(
      <div className='sidebar'>
        < Search />
        < Archive />
      </div>
    )
  }
}
export default Sidebar;
