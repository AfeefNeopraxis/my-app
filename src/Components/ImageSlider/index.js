// Import React and useState hook
import React, { useState, useRef } from "react";
import s from './styles.module.css'

// Define the images array
const images = [
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
  "https://images.unsplash.com/photo-1505118380757-91f5f5632de0",
];

// Define the ImageSlider component
const ImageSlider = () => {
  // Define the current index state
  const [current, setCurrent] = useState(0);

  // Define the ref for the image element
  const sliderRef = useRef(null);

  // Define the handler for going to the next image
  const next = () => {
    // Set the current index to the next one
    var nextIndex = (current + 1) % images.length

    sliderRef.current.style.transform = `translateX(-${nextIndex * 100}vw)`;
    setCurrent(nextIndex);
  };


  // Define the handler for going to the previous image
  const prev = () => {
    // Set the current index to the previous one
    var prevIndex = (current - 1 + images.length) % images.length

    sliderRef.current.style.transform = `translateX(-${prevIndex * 100}vw)`;
    setCurrent(prevIndex)
  };


  // Return the JSX element
  return (
    <div className={s.container}>
      <div className={s.slides}
        ref={sliderRef}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`slider-${index}`}
          />
        ))}
      </div>
      <div className={s.controls}>
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

// Export the component
export default ImageSlider;
