import React, { Component } from 'react';
import Header from './components/Header';
import mockData from './mockData';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allHeroes: mockData
    }
  }

  render() {
    return (
      <>
        <Header />
      </>
    );
  }
}

export default App;
