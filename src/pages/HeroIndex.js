import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
import { Link } from "react-router-dom";

const HeroIndex = (props) => {
  return (
    <Container>
      <Link to="/new"><Button id="newHeroBtn">Add New Hero</Button></Link>
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
  );
}

export default HeroIndex;
