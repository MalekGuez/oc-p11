import { useState } from 'react';

const Carousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };
  
    const handleNext = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };
  
    return (
        <div className="kasa-carousel">
            <div className="kasa-carousel__content">
                <img className="kasa-carousel__image" src={images[currentImageIndex]} alt="Image"/>

                {images.length > 1 && (
                    <>
                        <button className="kasa-carousel__arrow kasa-carousel__arrow--left" onClick={handlePrev}>
                            <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
                            </svg>
                        </button>
                        <button className="kasa-carousel__arrow kasa-carousel__arrow--right" onClick={handleNext}>
                            <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
                            </svg>
                        </button>
                    </>
                )}
            </div>
            {images.length > 1 && (
                <div className="kasa-carousel__counter">{`${currentImageIndex + 1} / ${images.length}`}</div>
            )}
        </div>
    );
  };
  
  export default Carousel;