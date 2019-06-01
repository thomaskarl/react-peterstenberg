import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import Gallery from './components/Gallery';
import Slideshow from './components/Slideshow';
import Logo from './components/Logo';
import Navigation from './components/Navigation'
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			logo: {},
			logoSmall: {},
			slideshowFirst: [],
			slideshowSecond: [],
			icons: {},
			contactInfo: {}
		}
	}

	componentDidMount() {
		let backgroundSlider = 'http://peterstenberg.local/wp-json/acf/v3/options/options';
		fetch(backgroundSlider)
			.then(response => response.json())
			.then(response => {
				this.setState({
					logo: response.acf.logo,
					logoSmall: response.acf.logo_small,
					slideshowFirst: response.acf.slideshow_first,
					slideshowSecond: response.acf.slideshow_second,
					icons: {
						cameraIcon: response.acf.icon_camera.url,
						anchorIcon: response.acf.icon_anchor.url,
						calenderIcon: response.acf.icon_calender.url,
						locationIcon: response.acf.icon_location.url,
					},
					contactInfo: {
						contactPhone: response.acf.contact_phone,
						contactMail: response.acf.contact_mail,
						contactFacebook: response.acf.contact_facebook,
						contactInstagram: response.acf.contact_instagram,
						contactFlickr: response.acf.contact_flickr,
						contactFacebookLogo: response.acf.contact_facebook_logo.url,
						contactInstagramLogo: response.acf.contact_instagram_logo.url,
						contactFlickrLogo: response.acf.contact_flickr_logo.url,
						aboutText: response.acf.about_text
					}
				})
			})
	}

	render() {
		return (
			<div id={'home'} className={'page-container'}>
				<Navigation logoSmall={this.state.logoSmall}/>
				<div className={'slideshow-container'}>
					<Slideshow images={this.state.slideshowFirst}/>
					<Logo logo={this.state.logo}/>
				</div>
				<Gallery
					icons={this.state.icons}
				/>
				<div className={'slideshow-container'}>
					<Slideshow images={this.state.slideshowSecond}/>
				</div>
				<Contact/>
				<About
					logo={this.state.logo}
					contactInfo={this.state.contactInfo}
				/>
				<Footer/>
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));