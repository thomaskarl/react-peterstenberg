import React from 'react';
import ReactDOM from 'react-dom';
import './loading.css';
import './styles.scss';
import Gallery from './components/Gallery';
import Slideshow from './components/Slideshow';
import Logo from './components/Logo';
import Navigation from './components/Navigation'
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";


class App extends React.Component {
	authenticate() {
		return new Promise(resolve => setTimeout(resolve, 2000))
	}

	constructor(props) {
		super(props);
		this.state = {
			logo: {},
			logoSmall: {},
			slideshow: [],
			icons: {},
			contactInfo: {}
		}
	}

	componentDidMount() {

		this.authenticate().then(() => {
			const ele = document.getElementById('ipl-progress-indicator')
			if (ele) {
				// fade out
				ele.classList.add('available')
				setTimeout(() => {
					// remove from DOM
					ele.outerHTML = ''
				}, 2000)
			}
		});

		let backgroundSlider = 'https://backend.peterstenberg.no/wp-json/acf/v3/options/options';
		fetch(backgroundSlider)
			.then(response => response.json())
			.then(response => {
				this.setState({
					logo: response.acf.logo,
					logoSmall: response.acf.logo_small,
					slideshow: response.acf.slideshow_first,
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
				<div className={'slideshow-container slideshow-first'}>
					<Slideshow images={this.state.slideshow}/>
					<Logo logo={this.state.logo}/>
				</div>
				<Gallery
					icons={this.state.icons}
				/>
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
