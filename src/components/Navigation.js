import React from 'react';

const Navigation = (props) => {
  return (
    <div className={'navigation'}>
      <div className="logo-small">
        <a href="#home">
          <img src={props.logoSmall} alt="small logo" />
        </a>
      </div>
      <ul className="main-menu">
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
