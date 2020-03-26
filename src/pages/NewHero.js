import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';

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
    this.baseState = this.state
  }

  handleChange = (e) => {
    e.preventDefault();
    let { form } = this.state;
    form[e.target.name] = e.target.value;
    this.setState({form: form});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.sendForm(this.state.form);
  }

  render() {
    return (
      <Container>
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

          <Link to="/"><Button id="cancelBtn">Cancel</Button></Link>
          <Button id="submit" type="submit" onClick={this.handleSubmit}>Submit</Button>

        </Form>
      </Container>
    );
  }
}

export default NewHero;
