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

#### Delete unneccessary
- React logos, images
- CSS, etc.

#### Import boostrap css to index.js
`import 'bootstrap/dist/css/bootstrap.min.css'`

#### Create directories in src
- pages
- components

#### Create mock data
- name
- age
- super power
- description



## User and Developer Stories
1. As a user we can see the header and a list of all the heroes
  - As a developer, we need to create a header component
  - As a developer, we need to create a hero index to list all heroes
2. As a user I can click on a hero profile
  - As a developer I can turn each list to a link
  - As a developer I can create a hero show component
