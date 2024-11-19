import React, { useState } from 'react';


const Slideshow = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slideshow-container">
      <div className="slide">
        <img
          src={slides[currentIndex].image}
          alt={slides[currentIndex].title}
          className="slide-image"
        />
        <div className="slide-content">
          <h2>{slides[currentIndex].title}</h2>
          <p>{slides[currentIndex].description}</p>
        </div>
      </div>
      <button className="prev" onClick={goToPrevious}>
        ❮
      </button>
      <button className="next" onClick={goToNext}>
        ❯
      </button>
    </div>
  );
};

export default Slideshow;