import React from 'react';

export default class Navigation extends React.Component {
	render() {

		return (
			<div className={'navigation'}>
				<div className='logo-small'>
					<a href="#home"><img src={this.props.logoSmall} alt='small logo'/></a>
				</div>
				<ul className={'main-menu'}>
					<li><a href="#gallery">Gallery</a></li>
					<li><a href="#contact">Contact</a></li>
					<li><a href="#about">About</a></li>
				</ul>
			</div>
		)
	}
}
