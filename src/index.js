import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './App';
import Hello from './Hello.js';

// Add tachyons
import 'tachyons';

import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<h2> Removed App tag and commented out import </h2>, document.getElementById('root'));
// "Props" here within Hello Component are unique to React
// Props use curly brackets
// Prop "greetings" can be anything
ReactDOM.render(<Hello greeting={'Hello' + 'Ninja using JavaScript'} />, document.getElementById('root'));
ReactDOM.render(<Hello anything={'Antying else applies here...'} />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
