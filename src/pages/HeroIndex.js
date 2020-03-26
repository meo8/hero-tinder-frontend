import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import {BrowserRouter as Router, Link} from "react-router-dom";

const HeroIndex = (props) => {
  return (
    <Router>
      <Row>
        {props.heroes.map((hero, index) => {
          return (
            <Col sm="4" key={index}>
              <Card body>
                <CardTitle>{hero.name}</CardTitle>
                <CardText>{hero.description}</CardText>
                  <Link to={`/hero/${hero.id}`}><Button>Learn More</Button></Link>
              </Card>
            </Col>
          );
        })}
      </Row>
      <Link to="/hero/new"><Button>Add New Hero</Button></Link>
    </Router>
  );
}

export default HeroIndex;
