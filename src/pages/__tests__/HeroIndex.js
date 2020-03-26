import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import HeroIndex from "../HeroIndex";
import mockHeroes from "../../mockData";

Enzyme.configure({ adapter: new Adapter() });

it('HeroIndex renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<HeroIndex heroes={ mockHeroes }/>, div)
})

it('Renders the heroes', () => {
  const component = mount(<HeroIndex heroes={ mockHeroes }/>)
  const cardTitle = component.find('CardTitle')
  // in the HeroIndex component, there are 5 total CardTitle components
  // 5 because there are 5 objects in the array that's iterated through
  expect(cardTitle.length).toBe(5)
})
