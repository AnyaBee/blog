import React, { Component } from 'react';
import searchIcon from '../assets/images/search.png';

class Search extends Component {
  constructor (){
    super();

    this.state = {
      inputValue: ''
    };

    this.onClickMe = this.onClickMe.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }


  onClickMe(event){
    const postcodeVal = this.state.inputValue;
    console.log('hello'+ postcodeVal);
    event.preventDefault();
    const url = 'https://pcls1.craftyclicks.co.uk/json/rapidaddress';
    const data = {
      postcode: postcodeVal,
      response: 'data_formatted',
      lines: '2',
      sort: 'asc',
      key: '980ec-8d681-5632b-030f2'
    };

    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(response => console.log('Success:'+data, JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
  }


  render() {
    return (
      <form >
        <div className='search__container'>
          <label htmlFor='search__input'>
          <input
            className='search__input'
            name='search__input'
            placeholder='search here'
            value={this.state.inputValue}
            onChange={evt => this.updateInputValue(evt)}
            type='text' maxLength='8'/>
          </label>
          <button className='button search__button' type='submit'>
            <img className='button__icon' src={searchIcon} alt='calendar' width='15'/>
          </button>
        </div>
      </form>
    )
  }
}

export default Search;
