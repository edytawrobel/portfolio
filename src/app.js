import { square } from './utils.js';
import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';

// console.log(square(4));

//console.log(validator.isEmail('test'));

//const template = React.createElement('p', {}, 'testing');

const template = <p>THIS IS JSX WORKING</p>

ReactDOM.render(template, document.getElementById('app'));

