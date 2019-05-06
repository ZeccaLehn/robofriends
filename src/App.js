import React from 'react';
import CardList from './CardList.js';
import { robots } from './robots.js';
import SearchBox from './SearchBox.js';

const App = () => {

	return(
		<div className='tc'>
			<h1>RoboFriends</h1>
			<SearchBox />
			<CardList robots={robots} />
		</div>

		);
};

export default App;