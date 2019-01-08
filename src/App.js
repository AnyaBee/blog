import React, { Component } from 'react';
import Navigation from './navigation/navigation';
import 'normalize.css';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <Navigation />
        </header>
      </div>
    );
  }
}

export default App;
