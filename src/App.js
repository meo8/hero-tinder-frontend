import React, { Component } from 'react';
import Header from './components/Header';
import HeroIndex from './pages/HeroIndex.js';w
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

        <Router>
          <Switch>
            <Route exact path="/hero/:id" component={ HeroShow } />
            <Route exact path="/" component={ HeroIndex } />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
