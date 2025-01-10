import React from 'react';
import '../components/GridGallery.css';

const GridGallery = ({ images }) => {
  return (
    <div className="grid-gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image.src} alt={image.alt} />
          <div className="info">
            <p>{image.price}</p>
            <p>{image.stock}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridGallery;
