import React from 'react';

// window.onscroll = function() {scrollFunction()};
//
// function scrollFunction() {
// 	const logo = document.querySelector(".logo img");
//
// 	if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 350) {
// 		logo.style.width = "100px";
// 	} else {
// 		logo.style.width = "300px";
// 	}
// }

export default class Logo extends React.Component {
	render() {
		return (
			<div className='logo'>
				<img src={this.props.logo} alt='logo'/>
			</div>
		)
	}
}
