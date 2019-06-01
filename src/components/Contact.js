import React from 'react';

window.addEventListener('scroll', function (ev) {

	var someDiv = document.getElementById('contact');
	var distanceToTop = someDiv.getBoundingClientRect().top;


	if (distanceToTop <= 500) {
		window.addEventListener('scroll', () => {
			let parent = document.getElementById('parallax-container');
			let children = parent.getElementsByTagName('div');
			for (let i = 0; i < children.length; i++) {
				children[i].style.transform = 'translateY(' + (distanceToTop * i / children.length) + 'px)';
			}
		}, false);
	}
});

export default class Contact extends React.Component {
	render() {
		return (
			<div id={'contact'} className='contact'>

				<div id="parallax-container">
					<div className={'background1'}></div>
					<div className={'background5'}></div>
					<div className={'background4'}></div>
					<div className={'background3'}></div>
					<div className={'background2'}></div>
				</div>

			</div>
		)
	}
}
