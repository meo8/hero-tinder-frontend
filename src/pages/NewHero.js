import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

class NewHero extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        name: '',
        age: '',
        superPower: '',
        description: ''
      }
    }
  }

  handleChange = (e) => {
    let { form } = this.state;
    form[e.target.name] = e.target.value;
    this.setState({form: form});
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label htmlFor="name" id="name">Name</Label>
          <Input
            type="text"
            name="name"
            value={this.state.form.name}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="age" id="age">Age</Label>
          <Input
            type="text"
            name="age"
            value={this.state.form.age}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="superPower" id="superPower">Super Power</Label>
          <Input
            type="text"
            name="superPower"
            value={this.state.form.superPower}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description" id="description">Description</Label>
          <Input
            type="text"
            name="description"
            value={this.state.form.description}
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button id="submit">Submit</Button>
      </Form>
    );
  }
}

export default NewHero
