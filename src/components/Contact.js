import React, { useEffect } from 'react';
import ContactForm from './ContactForm';
import Fishes from './Fishes';

const Contact = () => {
  useEffect(() => {
    window.addEventListener('scroll', function(ev) {
      var someDiv = document.getElementById('contact');
      var distanceToTop = someDiv.getBoundingClientRect().top;

      if (distanceToTop <= 1000) {
        window.addEventListener(
          'scroll',
          () => {
            let parent = document.getElementById('parallax-container');
            let children = parent.getElementsByTagName('div');
            for (let i = 0; i < children.length; i++) {
              children[i].style.transform =
                'translateY(' + (distanceToTop * i) / children.length + 'px)';
            }
          },
          false,
        );
      }
    });
  });

  return (
    <div id="contact" className="contact">
      <ContactForm />
      <Fishes />
      <div id="parallax-container">
        <div className="background1"></div>
        <div className="background5"></div>
        <div className="background4"></div>
        <div className="background3"></div>
        <div className="background2"></div>
      </div>
    </div>
  );
};

export default Contact;
