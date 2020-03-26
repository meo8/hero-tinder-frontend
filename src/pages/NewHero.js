import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

class NewHero extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label htmlFor="name" id="name">Name</Label>
          <Input
            type="text"
            name="name"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="age" id="age">Age</Label>
          <Input
            type="text"
            age="age"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="superPower" id="superPower">Super Power</Label>
          <Input
            type="text"
            superPower="superPower"
          />
        </FormGroup>
        <Button id="submit">Add New Hero</Button>
      </Form>
    );
  }
}

export default NewHero
