import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import * as serviceWorker from './serviceWorker';
import App from './App.js'


// Creates first robot card 
// Wrap in div for multiple cards
ReactDOM.render(<App />, 
	document.getElementById('root'));

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
