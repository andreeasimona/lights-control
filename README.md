# Lights

A dynamic lights controller

## Install in local enviroment.
   - npm install

## Run in local enviroment.
   - start the lights-api Api
   - Type in the root folder of the client project: npm run

## Test in local enviroment. Type in the root folder of the project:
   - for javascript tests: npm test
   - for eslint check: npm run linter

## Structure
   - components folder: All React components
   - api/lights.js: Handler to interact with the backend.
   - state folder: contains the redux action, reducer and store
   - style folder: css for the components
   - tests folder: contains the mocha tests for the api, redux state and components
   - .eslintrc: file with the eslint rules

## Libraries used for development
   - [Create React App](https://github.com/mochajs/mocha) used to create the project with no build configuration
   - [Redux](https://redux.js.org/) used to manage the state of the project and to simulate the backend
   - [lodash.throttle](https://github.com/lodash/lodash) used to throttle the user interaction with the application
   - [rendition](https://github.com/resin-io-modules/rendition) a library of UI components

## Libraries used for testing
   - [mocha](https://github.com/facebook/create-react-app) feature-rich JavaScript test framework running
   - [fetch-mock](https://github.com/wheresrhys/fetch-mock) mock http requests made using fetch
   - [enzyme](https://github.com/airbnb/enzyme) a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.
   - [enzyme-adapter-react-16](https://github.com/airbnb/enzyme) Adapter for enzyme with React 16
   - [chai](https://github.com/chaijs/chai) an assertion library. It makes testing much easier by giving you lots of assertions you can run against your code.
   - [eslint](https://github.com/eslint/eslint) is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.