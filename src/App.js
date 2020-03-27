import React, { Component } from "react";
import './App.css'
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroIndex from "./pages/HeroIndex";
import HeroShow from "./pages/HeroShow";
import NewHero from "./pages/NewHero";
import mockData from "./mockData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allHeroes: mockData
    };
  }

  retrieveForm = (form) => {
    console.log(form)
  }

  render() {
    return (
      <React.Fragment>
          <Header />
          <Switch>
            <Route
              path="/hero/:id"
              render={(props) => <HeroShow {...props}
              heroes={this.state.allHeroes}/>}
            />
            <Route
              path="/new"
              render={(props) => <NewHero
              sendForm={this.retrieveForm} />}
            />
            <Route
              exact
              path="/"
              render={(props) => <HeroIndex
              heroes={this.state.allHeroes} />}
            />
          </Switch>
      </React.Fragment>
    );
  }
}

export default App;
