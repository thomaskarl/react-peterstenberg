import React from 'react';

export default class About extends React.Component {
	render() {
		return (
			<div id={'about'} className='about'>
				<div className="about-container">
					<div className={'logo'}>
						<img src={this.props.logo} alt='logo'/>
					</div>
					<p className={'about-text'}>{this.props.contactInfo.aboutText}</p>

					<div className="social-media-container">
						<a href={this.props.contactInfo.contactFacebook}>
							<img className={'social-media-icon'} src={this.props.contactInfo.contactFacebookLogo} alt="Facebook logo"/>
						</a>

						<a href={this.props.contactInfo.contactInstagram}>
							<img className={'social-media-icon'} src={this.props.contactInfo.contactInstagramLogo} alt="Facebook logo"/>
						</a>

						<a href={this.props.contactInfo.contactFlickr}>
							<img className={'social-media-icon'} src={this.props.contactInfo.contactFlickrLogo} alt="Facebook logo"/>
						</a>
					</div>

					<p><a href={"mailto:" + this.props.contactInfo.contactMail}>{this.props.contactInfo.contactMail}</a></p>
					<p><a href={"tel:" + this.props.contactInfo.contactPhone}>{this.props.contactInfo.contactPhone}</a></p>
				</div>
			</div>
		)
	}
}
