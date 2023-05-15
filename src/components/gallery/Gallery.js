import React, { useState } from "react";

const Gallery = ({ pictures }) => {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentPictureIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevClick = () => {
    setCurrentPictureIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gallery">
      <div className="gallery-image-container">
        {pictures.length > 1 && (
          <button className="gallery-prev-button" onClick={handlePrevClick}>
            <img src="../left.png" alt="left" />
          </button>
        )}
        <img
          className="gallery-image"
          src={pictures[currentPictureIndex]}
          alt={`${currentPictureIndex + 1}`}
        />
        {pictures.length > 1 && (
          <>
            <button className="gallery-next-button" onClick={handleNextClick}>
              <img src="../right.png" alt="right" />
            </button>
            <p className="gallery-counter">
              {currentPictureIndex + 1} / {pictures.length}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Gallery;
