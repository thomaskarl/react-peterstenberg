import React from "react";

const About = props => {
  return (
    <div id="about" className="about">
      <div className="about-container">
        <div className="logo">
          <img src={props.logo} alt="logo" />
        </div>
        <p className={"about-text"}>{props.contactInfo.aboutText}</p>

        <div className="social-media-container">
          <a href={props.contactInfo.contactFacebook}>
            <img
              className={"social-media-icon"}
              src={props.contactInfo.contactFacebookLogo}
              alt="Facebook logo"
            />
          </a>

          <a href={props.contactInfo.contactInstagram}>
            <img
              className={"social-media-icon"}
              src={props.contactInfo.contactInstagramLogo}
              alt="Instagram logo"
            />
          </a>

          <a href={props.contactInfo.contactFlickr}>
            <img
              className={"social-media-icon"}
              src={props.contactInfo.contactFlickrLogo}
              alt="Flickr logo"
            />
          </a>
        </div>

        <p>
          <a href={"mailto:" + props.contactInfo.contactMail}>
            {props.contactInfo.contactMail}
          </a>
        </p>
        <p>
          <a href={"tel:" + props.contactInfo.contactPhone}>
            {props.contactInfo.contactPhone}
          </a>
        </p>
        <a href="https://backend.peterstenberg.no/wp-admin/">
          <img
            className={"anchor"}
            src="https://backend.peterstenberg.no/wp-content/uploads/2019/06/anchor_white.png"
            alt="diver"
          />
        </a>
      </div>
    </div>
  );
};

export default About;
