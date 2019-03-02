import React, { Component } from 'react';
import Navigation from '../navigation/navigation';
import Promo from '../promo/promo';
import ContentBlock from '../ContentBlock/ContentBlock';

import '../../node_modules/normalize.css/normalize.css';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__wrapper">
          <header className="app__header">
            <Navigation />
          </header>
          <main>
            <Promo />
            < ContentBlock />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
