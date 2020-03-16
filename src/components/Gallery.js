import React, { useState, useEffect } from 'react';
import Lightbox from 'react-simple-lightbox';

const Gallery = (props) => {
  const [visible, setVisible] = useState(12);
  const [photos, setPhotos] = useState([]);

  function loadMore() {
    setVisible(visible + 4);
  }

  useEffect(() => {
    let pagesURL = 'https://backend.peterstenberg.no/wp-json/wp/v2/photos/?per_page=100';
    fetch(pagesURL)
      .then((response) => response.json())
      .then((response) => {
        setPhotos(response);
      });
  }, []);

  return (
    <div className={'gallery-container'}>
      <div className="gallery" id={'gallery'}>
        {photos.slice(0, visible).map((photos, index) => {
          return (
            <div className="photo" key={index}>
              <Lightbox>
                <img
                  className="photo-image"
                  src={photos.acf.photo.url}
                  alt={photos.acf.photo.alt}
                />
                <div className="photo-info-container">
                  <div className="photo-info-content">
                    <img
                      className="photo-info-icon"
                      src={props.icons.cameraIcon}
                      alt="Camera icon"
                    />
                    <span className="photo-info-text">{photos.title.rendered}</span>
                  </div>
                  <div className="photo-info-content">
                    <img
                      className="photo-info-icon"
                      src={props.icons.anchorIcon}
                      alt="Anchor icon"
                    />
                    <span className="photo-info-text">{photos.acf.photo_deep}</span>
                  </div>
                  <div className="photo-info-content">
                    <img
                      className="photo-info-icon"
                      src={props.icons.calenderIcon}
                      alt="Calender icon"
                    />
                    <span className="photo-info-text">{photos.acf.photo_when}</span>
                  </div>
                  <div className="photo-info-content">
                    <img
                      className="photo-info-icon"
                      src={props.icons.locationIcon}
                      alt="Location icon"
                    />
                    <span className="photo-info-text">{photos.acf.photo_location}</span>
                  </div>
                </div>
              </Lightbox>
            </div>
          );
        })}
      </div>
      {visible < photos.length && (
        <button onClick={() => loadMore()} type="button" className="load-more">
          Load more +
        </button>
      )}
    </div>
  );
};

export default Gallery;
