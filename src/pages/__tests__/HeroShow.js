import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import HeroShow from "../HeroShow";
import mockHeroes from "../../mockData";

Enzyme.configure({ adapter: new Adapter() });

it('HeroShow renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<HeroShow heroes={ mockHeroes } match={{params: {id: 1}}}/>, div)
})
