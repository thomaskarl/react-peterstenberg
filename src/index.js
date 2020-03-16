import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/Gallery';
import Slideshow from './components/Slideshow';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import './loading.css';
import './styles.scss';

const App = () => {
  const [appState, setAppState] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // Disable right mouse click
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });

  const removeLoadingScreen = () => {
    const ele = document.getElementById('ipl-progress-indicator');
    if (ele) {
      // fade out
      ele.classList.add('available');
      setTimeout(() => {
        // remove from DOM
        ele.outerHTML = '';
      }, 500);
    }
  };

  useEffect(() => {
    const fetchAppAssets = async () => {
      const appAssets = 'https://backend.peterstenberg.no/wp-json/acf/v3/options/options';
      await fetch(appAssets)
        .then((response) => response.json())
        .then((response) => {
          setAppState({
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
              aboutText: response.acf.about_text,
            },
          });
          setIsLoading(false);
          removeLoadingScreen();
        });
    };
    fetchAppAssets();
  }, []);

  return (
    <>
      {isLoading ? (
        <div />
      ) : (
        <div id="home" className="page-container">
          <Navigation logoSmall={appState.logoSmall} />
          <div className="slideshow-container slideshow-first">
            <Slideshow images={appState.slideshow} />
            <Logo logo={appState.logo} />
          </div>
          <Gallery icons={appState.icons} />
          <Contact />
          <About logo={appState.logo} contactInfo={appState.contactInfo} />
          <Footer />
        </div>
      )}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
