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
      <>
        <Header />

        <Router>
          <Switch>
            <Route exact path="/hero/:id" component={HeroShow} />
            <Route exact path="/" component={HeroIndex} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
