import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Header = () => {
  return (
    <Jumbotron fluid>
      <Container fluid>
        <h1 className="display-3">Super Hero Tinder</h1>
        <p className="lead">The number one Super Hero dating app. Where you won't just find Thor-like heroes, <br/>but also your everyday heroes who's risking their lives (most without hazard pay) just to provide necessities for everyone during this difficult time.</p>
        <p>The supermarket clerk, the nurses, doctors, first responders, restaurant workers, and many many more.</p>
        <br />
        <h4>Stay home. Wash your hands. Use this app. Be a Hero, meet a Hero.</h4>
      </Container>
    </Jumbotron>
  );
}

export default Header;
