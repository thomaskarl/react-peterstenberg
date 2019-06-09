import React from 'react';

export default class Gallery extends React.Component {
	constructor() {
		super();
		this.state = {
			photos: []
		}
	}

	componentDidMount() {
		let pagesURL = 'https://backend.peterstenberg.no/wp-json/wp/v2/photos/?per_page=100';
		fetch(pagesURL)
			.then(response => response.json())
			.then(response => {
				this.setState({
					photos: response
				})
			});
	}

	render() {
		let photos = this.state.photos.map((photos, index) => {
			return (
				<div className={'photo'} key={index}>
					<a href={photos.acf.photo.url}>
						<img src={photos.acf.photo.sizes.thumbnail} alt={photos.acf.photo.alt}/>
						<div className={'photo-info-container'}>
							<div className={'photo-info-content'}>
								<img className={'photo-info-icon'} src={this.props.icons.cameraIcon} alt="Camera icon"/>
								<span className={'photo-info-text'}>{photos.title.rendered}</span></div>
							<div className={'photo-info-content'}>
								<img className={'photo-info-icon'} src={this.props.icons.anchorIcon} alt="Anchor icon"/>
								<span className={'photo-info-text'}>{photos.acf.photo_deep}</span></div>
							<div className={'photo-info-content'}>
								<img className={'photo-info-icon'} src={this.props.icons.calenderIcon} alt="Calender icon"/>
								<span className={'photo-info-text'}>{photos.acf.photo_when}</span></div>
							<div className={'photo-info-content'}>
								<img className={'photo-info-icon'} src={this.props.icons.locationIcon} alt="Location icon"/>
								<span className={'photo-info-text'}>{photos.acf.photo_location}</span></div>
						</div>
					</a>
				</div>

			)
		});
		return (
			<div className='gallery' id={'gallery'}>
				{photos}
			</div>
		)
	}
}
