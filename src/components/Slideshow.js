import React from 'react';
import {Zoom} from 'react-slideshow-image';
// https://www.npmjs.com/package/react-slideshow-image

const zoomOutProperties = {
	duration: 5000,
	transitionDuration: 4000,
	infinite: true,
	indicators: true,
	scale: 1.2,
	arrows: true
};

export default class Slideshow extends React.Component {
	render() {

		if (this.props.images.length > 0) {
			return (
				<Zoom {...zoomOutProperties}>
					{
						this.props.images.map((image, index) => <div key={index} style={{
							width: '100%',
							height: '100vh',
							backgroundImage: 'url("' + image.url + '")',
							backgroundSize: 'cover',
							backgroundPosition: 'center center',
							backgroundRepeat: 'repeat-y',
							backgroundAttachment: 'fixed'
						}}/>)
					}
				</Zoom>
			)
		} else {
			return null // TODO sfsd sfs
		}
	}
}




