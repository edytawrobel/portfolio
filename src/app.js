import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css'
import './styles/styles.scss';

// console.log(square(4));

//console.log(validator.isEmail('test'));

//const template = React.createElement('p', {}, 'testing');


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

