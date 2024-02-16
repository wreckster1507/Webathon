import React, { useState } from 'react';

const Image = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="image-carousel">
            <button onClick={prevImage}>Previous</button>
            <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
            <button onClick={nextImage}>Next</button>
        </div>
    );
};

export default Image;
