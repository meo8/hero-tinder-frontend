import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { mount } from "enzyme";
import { MemoryRouter } from 'react-router'
import Adapter from "enzyme-adapter-react-16";
import HeroIndex from "../HeroIndex";
import mockHeroes from "../../mockData";

Enzyme.configure({ adapter: new Adapter() });

it('HeroIndex renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MemoryRouter><HeroIndex heroes={ mockHeroes }/></MemoryRouter>, div)
})

it('Renders the heroes', () => {
  const component = mount(<MemoryRouter><HeroIndex heroes={ mockHeroes }/></MemoryRouter>)
  const cardTitle = component.find('CardTitle')
  // in the HeroIndex component, there are 5 total CardTitle components
  // 5 because there are 5 objects in the array that's iterated through
  expect(cardTitle.length).toBe(6)
})
