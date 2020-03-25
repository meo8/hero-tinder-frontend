import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroIndex from "./pages/HeroIndex";
import HeroShow from "./pages/HeroShow";
import mockData from "./mockData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allHeroes: mockData
    };
  }

  render() {
    return (
      <React.Fragment>
        <Header />

        <Router>
          <Switch>
            <Route exact path="/hero/:id" render={(props) => <HeroShow {...this.props} {...props} heroes={this.state.allHeroes} /> } />
            <Route exact path="/" render={(props) => <HeroIndex heroes={this.state.allHeroes} /> } />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
