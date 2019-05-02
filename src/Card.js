import React from 'react';

// Note only allows for one component
	// Classname bg-light-green dib br3 pa3 ma2 grow
	// background
	// dib?
	// br3: background
	// pa3: padding 
	// ma: margin
	// grow: animation
	// bw2: shadow
	// shadow-5: shadow

	// Original:

	// const Card = () => {
	// 	return (

	// 		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>

	// 			<img alt='robots' src='https://robohash.org/test?200x200'/>
	// 			<div>
	// 				<h2>Jane Doe</h2>
	// 				<p>jane.doe@email.com</p>
	// 			</div>

	// 		</div>
	// 		);
	// };

	// export default Card;

// With Props imported from index.js
// Wrapped in JS expression {}
// props.id requires tilde backtick and curly braces around src

const Card = (props) => {
		return (

			<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>

				<img alt='robots' src={`https://robohash.org/${props.id}?size=200x200`} />
				<div>
					<h2>{props.name}</h2>
					<p>{props.email}</p>
				</div>

			</div>
			);
	};

export default Card;
