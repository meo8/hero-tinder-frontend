import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const HeroIndex = (props) => {
  return (
    <Row>
      {props.heroes.map((hero, index) => {
        return (
          <Col sm="4" key={index}>
            <Card body>
              <CardTitle>{hero.name}</CardTitle>
              <CardText>{hero.description}</CardText>
              <Button>Learn More</Button>
            </Card>
          </Col>
        )
      })}

    </Row>
  );
}

export default HeroIndex;
