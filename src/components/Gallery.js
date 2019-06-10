import React from 'react';
import Lightbox from "react-simple-lightbox";
// https://github.com/ttristan/react-simple-lightbox

export default class Gallery extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			photos: [],
			visible: 12,
			photoURL: {}
		};
		this.loadMore = this.loadMore.bind(this);
	}

	loadMore() {
		this.setState((prev) => {
			return {visible: prev.visible + 4};
		});
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
		return (
			<div className={'gallery-container'}>
				<div className='gallery' id={'gallery'}>
					{this.state.photos.slice(0, this.state.visible).map((photos, index) => {
						return (
							<div className={'photo'} key={index}>
								<Lightbox>
									<img className={'photo-image'} src={photos.acf.photo.url} alt={photos.acf.photo.alt}/>
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
											<span className={'photo-info-text'}>{photos.acf.photo_location}</span>
										</div>
									</div>
								</Lightbox>
							</div>
						);
					})}
				</div>
				{this.state.visible < this.state.photos.length &&
				<button onClick={this.loadMore} type='button' className={'load-more'}>Load more +</button>
				}
			</div>
		);
	}
}
