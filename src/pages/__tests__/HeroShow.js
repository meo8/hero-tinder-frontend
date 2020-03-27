import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { mount } from "enzyme";
import { MemoryRouter } from 'react-router'
import Adapter from "enzyme-adapter-react-16";
import HeroShow from "../HeroShow";
import mockHeroes from "../../mockData";

Enzyme.configure({ adapter: new Adapter() });

// when a component takes in props and renders it, pass in those props here as well
it('HeroShow renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MemoryRouter><HeroShow heroes={ mockHeroes } match={{params: {id: 1}}}/></MemoryRouter>, div)
})

// when testing for a single object, include an object sample using the match attribute
it('Renders the hero', () => {
  const component = mount(<MemoryRouter><HeroShow heroes={ mockHeroes } match={{params: {id: 2}}}/></MemoryRouter>)
  const headings = component.find('h1')
  // counts how many h1 are in the component
  expect(headings.length).toBe(1)
})

// pass in any id as long as the received result is the same
it('Renders the hero', () => {
  const component = mount(<MemoryRouter><HeroShow heroes={ mockHeroes } match={{params: {id: 3}}}/></MemoryRouter>)
  const heroName = component.find('h1')
  // expects the hero with an id of 3 to have an h1 with content/string to equal Hulk
  expect(heroName.text()).toEqual('Hulk')
})
