import './App.css'
import React from 'react';
import image1 from './images/abeja-1.jpg';
import image2 from './images/abeja-2.jpg';
import image3 from './images/abeja-3.jpg';

const ImageGallery = () => {
  const images = [
    image1,image2,image3
    // Agrega más URLs de imágenes aquí
  ];

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index}`} />
      ))}
    </div>
  );
};

export default ImageGallery;



