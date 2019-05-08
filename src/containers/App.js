import React, { Component }  from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import './App.css';


// Note: Component is from React.Component imported above
class App extends Component {

	// State defined here
	constructor(){

		// Super calls constructor
		super()
		// State can change and effect parent
		this.state={
			robots: [],
			searchfield: ''
		};
	};


	// Pulls in the robots from this API
	// https://jsonplaceholder.typicode.com/users

	componentDidMount(){
		// console.log('check');
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => { return response.json()})
		.then(users => { this.setState({ robots: users })});

		// To test loading remove this.setState... above
		// .then(users => { });


		}

	// "= (event) =>" Allows to use 'this' in method
	onSearchChange = (event) => {

		// console.log( this.state.robots);

		// To update state for filtering
		this.setState({searchfield: event.target.value }) 
		
	};

	render(){

		// Destructuring allows for this.state to be passed as object

		const { robots, searchfield } = this.state

		// Communicate event to filter Cards
		// Note that filtered robot self mae constructor doesn't use this
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());

		});

		// event.target.value returns event value
		// Each letter typed consoled
		// console.log(filteredRobots);	

		// If database has many objects, we can speed
		// it up with an ifelse using this state
		// If no robots, show loading screen
		if(!robots.length){
			return <h1> Loading...</h1>
		} else {

		return(

			// Centers search box
			// Cardlist needs to know which robots are active to search
			// See Scroll.js for `props.children` rendering
	
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />

				<Scroll>

					<CardList robots={filteredRobots} />

				</Scroll>

			</div>

			

			);

		};

	};

};

export default App;