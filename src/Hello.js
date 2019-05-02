// Allows us to destructure with `Component.___` versus `React.Component.__`
// Note that "," is needed to work properly
import React, {Component} from 'react';
import './Hello.css';

// Here`className='f1 tc` styles and centers div using Tachyons syntax
// More here: https://tachyons.io/docs/elements/forms/
// If 'class' used [reserved for JS classes], it works, but causes DOM error. Better to use 'className' for react apps
// The below code is "JSX" -- components doesn't break 'separation of concerns'
// "this"  in last <p> tag is from Hello extention of Compent
// `render()` is required below as Component--note the diff in commented out version below

class Hello extends Component{
	render(){
		return (

			<div className='f1 tc'>
				<h1>Hello World from App</h1>
				<p> We're working between brackets.</p>
				<p><font color="blue">{this.props.greeting}</font></p>
			</div>

			);
	};
};

export default Hello


// Similar function version without Component
// React is just using functions -- highlighed below without 'this'
// props are parameters being rendered
// const Hello = (props) => {

// 	return (

// 			<div className='f1 tc'>
// 				<h1>Hello World from App</h1>
// 				<p> We're working between brackets.</p>
// 				<p><font color="blue">{props.greeting}</font></p>
// 				<p><font color="blue">{props.anything}</font></p>

// 			</div>

// 			);

// };

// export default Hello