import React from "react";
import { Zoom } from "react-slideshow-image";

const Slideshow = props => {
  const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 4000,
    infinite: true,
    indicators: true,
    scale: 1.2,
    arrows: true
  };

  if (props && props.images.length > 0) {
    return (
      <Zoom {...zoomOutProperties}>
        {props.images.map((image, index) => (
          <div
            className={"slide-images"}
            key={index}
            style={{
              width: "100%",
              height: "100vh",
              backgroundImage: 'url("' + image.url + '")',
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "repeat-y",
              backgroundAttachment: "fixed"
            }}
          />
        ))}
      </Zoom>
    );
  } else {
    return null;
  }
};

export default Slideshow;
