import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Add tachyons
import 'tachyons';

// Note: destructured with {} because then have different default 
import { robots } from './robots.js'

import * as serviceWorker from './serviceWorker';

import CardList from './CardList.js';

// Creates first robot card 
// Wrap in div for multiple cards
ReactDOM.render(<CardList robots={robots} />, document.getElementById('root'));

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
