import React, { Component } from 'react';
import landscape from '../assets/images/landscape4.jpg';
import Button from "../button/button";

class Promo extends Component {
  render() {
    return(
      <section className='promo'>
        <div className='promo__container'>
          <img src={landscape} alt='landscape view'/>
          <h1 className='promo__title'>Title of the blog</h1>
          <Button className='promo__edit-button' text='Edit' />
        </div>

      </section>
    )
  }
}

export default Promo;
