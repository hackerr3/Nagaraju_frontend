// src/assets/components/Slider.js (or Slider.jsx)
import React, { useState, useEffect } from 'react';
import './Slider.css';

const Slider = ({ slides }) => {
    // 1. Call useState unconditionally at the top level
    const [currentSlide, setCurrentSlide] = useState(0);

    // 2. Define totalSlides (handle potential undefined/null slides gracefully)
    //    Use optional chaining or default to an empty array
    const actualSlides = Array.isArray(slides) ? slides : [];
    const totalSlides = actualSlides.length;

    // 3. Call useEffect unconditionally at the top level
    useEffect(() => {
        // Only set up interval if there are slides
        if (totalSlides > 0) {
            const interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % totalSlides);
            }, 4000); // Change slide every 4 seconds
            return () => clearInterval(interval); // Cleanup on component unmount
        }
        // If no slides, no interval is needed, so no cleanup is needed for this case
    }, [totalSlides]); // Depend on totalSlides

    const goToPrevSlide = () => {
        // Ensure totalSlides is greater than 0 before calculating
        if (totalSlides > 0) {
            setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
        }
    };

    const goToNextSlide = () => {
        // Ensure totalSlides is greater than 0 before calculating
        if (totalSlides > 0) {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }
    };

    // 4. Now, perform your conditional render based on actualSlides (after hooks are called)
    if (totalSlides === 0) {
        return (
            <div className="slider-placeholder" style={{ height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0', color: '#555', marginTop: '100px' }}>
                <p>Loading slides or no slides available.</p>
            </div>
        );
    }

    return (
        <div className="slider-container">
            {actualSlides.map((slide, index) => ( // Use actualSlides here
                <div
                    key={index}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${slide.imageUrl})` }}
                >
                    <div className="slide-content">
                        {slide.title && <h2 className="slide-title">{slide.title}</h2>}
                        {slide.description && <p className="slide-description">{slide.description}</p>}
                    </div>
                </div>
            ))}

            <button className="slider-button prev" onClick={goToPrevSlide}>
                &#10094; {/* Left arrow character */}
            </button>
            <button className="slider-button next" onClick={goToNextSlide}>
                &#10095; {/* Right arrow character */}
            </button>

            <div className="slider-dots">
                {actualSlides.map((_, index) => ( // Use actualSlides here
                    <span
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Slider;