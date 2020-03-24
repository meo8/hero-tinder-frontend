This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## App Set Up

```ssh
$ yarn create react-app cat-tinder-frontend
$ cd cat-tinder-frontend
$ yarn add react-router-dom
$ npm install --save bootstrap
$ npm install --save reactstrap react react-dom
$ yarn start
```

## Set Up

#### Delete unnecessary files
- React logos, images
- CSS, etc.

#### Import boostrap css to index.js
`import 'bootstrap/dist/css/bootstrap.min.css'`

#### Import React Router to src/App.js
`import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'`

#### Create directories in src
- pages
- components

#### Create mock data
- name
- age
- super power
- description

#### Import mock data and add to state
`import mockData from './mockData';`

```js
this.state = {
  allHeroes: mockData
}
```


## UI

#### App Header
- use Reactstrap to create header
- include app name and description
- `import Header from './components/Header';` to src/App.js

#### Index and Show files
- create HeroIndex component
- create HeroShow component
- import to src/App.js


## Set Up Enzyme & Test Environment

#### Download Enzyme
`$ yarn add -D enzyme react-test-renderer enzyme-adapter-react-16`

#### Create test directory
`src/pages/__test__`

#### Create test files

HeroIndex

`src/pages/__test__/HeroIndex.js`

#### Import dependencies and files
Import in `src/pages/__test__/HeroIndex.js`.

```
import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatIndex from '../CatIndex'

Enzyme.configure({ adapter: new Adapter() })
```
#### Add tests in App.test.js file
example:
```
it('HeroIndex renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<HeroIndex />, div)
})
```

#### Start test in terminal

`yarn test`

## User and Developer Stories
1. As a user we can see the header and a list of all the heroes
  - As a developer, we need to create a header component
  - As a developer, we need to create a hero index to list all heroes
2. As a user I can click on a hero profile
  - As a developer I can turn each list to a link
  - As a developer I can create a hero show component
