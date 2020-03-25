import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const HeroIndex = (props) => {
  return (
    <Row>
      {props.heroes.map((hero, index) => {
        return (
          <Col sm="4">
            <Card body key={index}>
              <CardTitle>{hero.name}</CardTitle>
              <CardText>{hero.description}</CardText>
              <Button>Go somewhere</Button>
            </Card>
          </Col>
        )
      })}
    
    </Row>
  );
}

export default HeroIndex;
