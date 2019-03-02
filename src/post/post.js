import React, { Component } from 'react';
import Button from '../button/button';
import calendar from '../assets/images/calendar.png';
import user from '../assets/images/user.png';
import comments from '../assets/images/comments.png';


class Post extends Component {
  render() {
    return(
      <article className='blog-post'>
        <Button className='blog-post__featured-button' text='Featured' />
        <Button className='blog-post__button' text='Edit' />
        <Button className='blog-post__button' text='Delete' />
        <h2 className='blog-post__title'>Title of the post</h2>
        <img className='blog-post__icon' src={calendar} alt='calendar' width='15'/>
        <span className='blog-post__date'>December 29, 2013</span>
        <img className='blog-post__icon' src={user} alt='user' width='15'/>
        <span className='blog-post__author'>User Name</span>
        <img className='blog-post__icon' src={comments} alt='comments' width='15'/>
        <span className='blog-post__comments'>0 Comments</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Nulla pharetra diam sit amet. Dolor sit amet consectetur adipiscing. Aenean euismod elementum
          nisi quis. Suspendisse potenti nullam ac tortor vitae purus. Volutpat lacus laoreet non curabitur gravida
          arcu. Euismod nisi porta lorem mollis. Vulputate mi sit amet mauris commodo quis imperdiet. Rhoncus est
          pellentesque elit ullamcorper dignissim cras tincidunt. Vitae justo eget magna fermentum iaculis eu non
          diam phasellus. Eu sem integer vitae justo. Ornare lectus sit amet est placerat in egestas erat imperdiet.
          Eget arcu dictum varius duis at consectetur. Velit sed ullamcorper morbi tincidunt ornare massa eget. Egestas
          quis ipsum suspendisse ultrices gravida dictum fusce. Hendrerit dolor magna eget est lorem ipsum dolor sit
          amet. Et pharetra pharetra massa massa.

          Laoreet non curabitur gravida arcu ac tortor dignissim convallis. In cursus turpis massa tincidunt dui
          ut ornare. Gravida arcu ac tortor dignissim convallis aenean et. In ornare quam viverra orci sagittis eu.
          Ullamcorper morbi tincidunt ornare massa eget egestas. Tellus cras adipiscing enim eu turpis. Lectus sit
          amet est placerat in egestas erat imperdiet. Nunc aliquet bibendum enim facilisis gravida neque convallis
          a cras. Dui ut ornare lectus sit. Gravida quis blandit turpis cursus in hac habitasse. Amet consectetur
          adipiscing elit duis tristique sollicitudin. Mus mauris vitae ultricies leo integer malesuada nunc vel.
          Urna nunc id cursus metus aliquam eleifend mi. Morbi tristique senectus et netus et malesuada fames ac.
          Tortor consequat id porta nibh. Et magnis dis parturient montes nascetur ridiculus mus mauris vitae.
        </p>
      </article>

    )
  }

}
export default Post;
