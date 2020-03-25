import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import HeroIndex from "../HeroIndex";
import mockData from "../../mockData";

Enzyme.configure({ adapter: new Adapter() });

it('HeroIndex renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<HeroIndex heroes={ mockData }/>, div)
})

// it('HeroIndex renders content', () => {
//   const HeroIndex = mount(<HeroIndex />);
//   expect(HeroIndex.find('<CardTitle />').text()).toEqual('Special Title Treatment');
// });