import { useState } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Slider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;
  // useMemo
  //   Previous

  const prevImage = () => {
    setCurrentIndex(currentIndex === 0 ? totalImages - 1 : currentIndex - 1);
  };

  //   Next

  const nextImage = () => {
    setCurrentIndex(currentIndex === totalImages - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="slider">
      <img
        key={currentIndex}
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="slider__image fade-in"
      />

      {/* Show only if there are multiple images  */}
      {totalImages > 1 && (
        <>
          {/* LEFT */}

          <button className="arrow arrow-left" onClick={prevImage}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {/* RIGHT */}

          <button className="arrow arrow-right" onClick={nextImage}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

          {/* Number */}
          <div className="slider__number">
            {currentIndex + 1} / {totalImages}
          </div>
        </>
      )}
    </div>
  );
}

Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
