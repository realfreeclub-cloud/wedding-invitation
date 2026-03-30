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
        <section className="section reveal" style={{ padding: '0 20px 120px 20px', textAlign: 'center' }}>
            <h2 style={{
                fontSize: '3.5rem',
                marginBottom: '60px',
                color: 'var(--primary)',
                fontFamily: 'var(--font-display)'
            }}>
                Capturing Our Love
            </h2>
            <div className="reveal" style={{
                width: '100%',
                maxWidth: '1000px',
                margin: '0 auto',
                height: '700px',
                position: 'relative',
                borderRadius: '40px',
                overflow: 'hidden',
                boxShadow: '0 40px 100px rgba(0,0,0,0.15)',
                border: '15px solid white'
            }}>
                {images.map((img, index) => (
                    <div
                        key={index}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url(${img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: index === currentIndex ? 1 : 0,
                            transform: index === currentIndex ? 'scale(1.05)' : 'scale(1)',
                            transition: 'opacity 1.5s ease-in-out, transform 8s ease-out'
                        }}
                    >
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            height: '30%',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)',
                            zIndex: 1
                        }}></div>
                    </div>
                ))}

                <div style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: '15px',
                    zIndex: 2
                }}>
                    {images.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            style={{
                                width: index === currentIndex ? '30px' : '10px',
                                height: '10px',
                                borderRadius: '10px',
                                backgroundColor: index === currentIndex ? '#fff' : 'rgba(255,255,255,0.5)',
                                transition: 'all 0.5s ease',
                                cursor: 'pointer'
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImageSlider;
