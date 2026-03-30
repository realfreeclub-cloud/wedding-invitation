import React, { useState, useEffect } from 'react';
import img1 from '../assets/gallery-1.jpg';
import img2 from '../assets/gallery-2.jpg';
import img3 from '../assets/gallery-3.jpg';
import img4 from '../assets/gallery-4.jpg';
import img5 from '../assets/gallery-5.jpg';


const ImageSlider = () => {
    const images = [img1, img2, img3, img4, img5];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="slider-section reveal">
            <h2 className="slider-title">
                Capturing Our Love
            </h2>
            <div className="slider-container reveal">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`slider-slide ${index === currentIndex ? 'active' : ''}`}
                    >
                        {/* Soft blurred background for premium feel */}
                        <div 
                            className="slide-bg-blur"
                            style={{ backgroundImage: `url(${img})` }}
                        />
                        
                        {/* Main Image - NOT CROPPED */}
                        <div 
                            className="slide-img-main"
                            style={{ backgroundImage: `url(${img})` }}
                        />
                        
                        <div className="slide-overlay"></div>
                    </div>
                ))}

                <div className="slider-dots">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImageSlider;
