import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";

class HeroShow extends Component{
  render(){
    const { id } = this.props.match.params
    const hero = this.props.heroes.find((hero) => hero.id === parseInt(id))

    return(
      <React.Fragment>
        <h1>{hero.name}</h1>
        <h2>{hero.age}</h2>
        <h2>{hero.superPower}</h2>
        <h2>{hero.description}</h2>
        <Router>
            <Link to="/">Go Back</Link>
        </Router>
      </React.Fragment>
    )
  }
}

export default HeroShow
