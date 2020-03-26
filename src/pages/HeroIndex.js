import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
import {BrowserRouter as Router, Link} from "react-router-dom";

const HeroIndex = (props) => {
  return (
    <Router>
      <Link to="/new"><Button id="newHeroBtn">Add New Hero</Button></Link>
      <Container>
        <Row>
          {props.heroes.map((hero, index) => {
            return (
              <Col sm="5" key={index}>
                <Card body>
                  <CardTitle>{hero.name}</CardTitle>
                  <CardText>{hero.description}</CardText>
                    <Link to={`/hero/${hero.id}`}><Button>Learn More</Button></Link>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Router>
  );
}

export default HeroIndex;
