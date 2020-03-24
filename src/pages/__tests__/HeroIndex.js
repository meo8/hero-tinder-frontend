import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import HeroIndex from "../HeroIndex";

Enzyme.configure({ adapter: new Adapter() });

it("HeroIndex renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<HeroIndex />, div);
});
