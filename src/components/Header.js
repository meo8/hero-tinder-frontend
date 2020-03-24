import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Header = () => {
  return (
    <Jumbotron fluid>
      <Container fluid>
        <h1 className="display-3">Super Hero Tinder</h1>
        <p className="lead">The number one Super Hero dating app. Where you won't just find Thor-like heroes, <br/>but also everyday heroes like your local supermarket clerk who's risking their lives to provide necessities during this difficult time.</p>
        <p>Don't forget the nurses. Oh, and stay home. Wash your hands. Be on this app.</p>
      </Container>
    </Jumbotron>
  );
}

export default Header;
