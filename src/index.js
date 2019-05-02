import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';

// Add tachyons
import 'tachyons';

// Note: destructured with {} because then have different default 
import { robots } from './robots.js'

import * as serviceWorker from './serviceWorker';

// Creates first robot card 
// Wrap in div for multiple cards
ReactDOM.render(<div>

					<Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
					<Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
					<Card id={robots[3].id} name={robots[2].name} email={robots[2].email} />

				</div>, document.getElementById('root'));

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
