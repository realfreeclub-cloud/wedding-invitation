import { motion as Motion } from 'motion/react';
import { useLanguage } from '../hooks/useLanguage';
import img2 from '../assets/gallery-2.jpg';
import img3 from '../assets/gallery-3.jpg';
import img4 from '../assets/gallery-4.jpg';
import weddingLogo from '../assets/wedding_logo.png';

const Welcome = () => {
    const { t } = useLanguage();
    // Doubling images for seamless infinite loop
    const galleryImages = [img2, img3, img4, img2, img3, img4, img2, img3, img4, img2, img3, img4];

    return (
        <section className="section" style={{ backgroundColor: '#fff', padding: '100px 0', overflow: 'hidden' }}>
            <div className="container" style={{ maxWidth: '1400px' }}>
                <div className="reveal" style={{ textAlign: 'center', marginBottom: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img 
                        src={weddingLogo} 
                        alt="Anshul & Garima Wedding Logo" 
                        style={{ 
                            width: '450px', 
                            maxWidth: '90%', 
                            display: 'block',
                            margin: '0 auto 20px auto',
                            mixBlendMode: 'multiply'
                        }} 
                    />
                    <h2 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '6rem',
                        color: 'var(--primary)',
                        marginBottom: '30px',
                        fontWeight: 'normal'
                    }}>
                        {t('welcome_title')}
                    </h2>
                    <p style={{
                        maxWidth: '900px',
                        margin: '0 auto',
                        fontSize: '1.2rem',
                        color: 'var(--primary)',
                        lineHeight: '1.8',
                        fontFamily: 'var(--font-serif)',
                        opacity: 0.8
                    }}>
                        {t('welcome_desc')}
                    </p>
                </div>

                {/* Infinite Horizontal Slider */}
                <div className="reveal" style={{ width: '100%', position: 'relative' }}>
                    <Motion.div
                        style={{
                            display: 'flex',
                            gap: '20px',
                            width: 'max-content'
                        }}
                        animate={{
                            x: [0, -1500] // Adjust based on total width
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30,
                                ease: "linear",
                            },
                        }}
                    >
                        {galleryImages.map((img, index) => (
                            <div key={index} style={{
                                width: '300px',
                                aspectRatio: '2/3',
                                overflow: 'hidden',
                                borderRadius: '15px',
                                boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
                                flexShrink: 0
                            }}>
                                <img
                                    src={img}
                                    alt={`Gallery ${index}`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        filter: index % 4 === 1 ? 'grayscale(100%)' : 'none'
                                    }}
                                />
                            </div>
                        ))}
                    </Motion.div>
                </div>
            </div>
        </section>
    );
};

export default Welcome;
