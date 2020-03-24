import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('HeroIndex renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<HeroIndex />, div)
})
