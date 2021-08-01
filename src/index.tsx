import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Test} from './01-hello-tests/01';
import {User} from "./05/06";


//
var sentence='Hellow my friends!';
let  result=Test(sentence);


ReactDOM.render(<User />,  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
