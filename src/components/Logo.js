import React from 'react';

const Logo = (props) => {
  return (
    <div className="logo">
      <img src={props.logo} alt="logo" />
    </div>
  );
};

export default Logo;
