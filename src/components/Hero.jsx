import React from 'react';
import rings from '../assets/rings.png';
import heroVideo from '../assets/hero-video-ref.mp4';
import { motion } from 'motion/react';

const Hero = () => {
    return (
        <section className="section" style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            padding: 0
        }}>
            <div className="hero-video-container">
                <video
                    className="hero-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={heroVideo} type="video/mp4" />
                </video>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ zIndex: 2, textAlign: 'center', color: '#fff' }}
            >
                <p style={{
                    fontSize: '1rem',
                    letterSpacing: '8px',
                    textTransform: 'uppercase',
                    marginBottom: '40px',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: '700',
                    color: '#FFFFFF',
                    opacity: 1
                }}>
                    We're Getting Married
                </p>

                <h1 style={{
                    fontSize: 'clamp(5rem, 15vw, 8rem)',
                    color: '#fff',
                    textShadow: '0 10px 40px rgba(0,0,0,0.15)',
                    lineHeight: '0.8',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px',
                    fontWeight: '300'
                }}>
                    <span>Anshul</span>
                    <span style={{ fontSize: '0.3em', opacity: 0.6, fontFamily: 'var(--font-serif)', fontStyle: 'italic', margin: '15px 0' }}>&</span>
                    <span>Garima</span>
                </h1>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '30px',
                    marginTop: '40px'
                }}>
                    <div style={{ height: '0.5px', background: 'rgba(255,255,255,0.3)', width: '80px' }}></div>
                    <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>✦</div>
                    <div style={{ height: '0.5px', background: 'rgba(255,255,255,0.3)', width: '80px' }}></div>
                </div>

                <p style={{
                    fontSize: '1.5rem',
                    fontFamily: 'var(--font-serif)',
                    marginTop: '25px',
                    color: '#FFFFFF',
                    letterSpacing: '5px',
                    fontWeight: '700',
                    opacity: 1
                }}>
                    19 April 2026
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                style={{
                    position: 'absolute',
                    bottom: '20px',
                    color: '#fff',
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '2px',
                    pointerEvents: 'none',
                    userSelect: 'none'
                }}
            >
                <p style={{
                    fontSize: '0.6rem',
                    letterSpacing: '5px',
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 'bold',
                    opacity: 0.9
                }}>
                    RSVP
                </p>
                <div style={{
                    fontSize: '1rem',
                    animation: 'bounce 2s infinite',
                    opacity: 0.8
                }}>
                    ⌄
                </div>
            </motion.div>

            <style>
                {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
            40% {transform: translateY(-8px);}
            60% {transform: translateY(-4px);}
          }
        `}
            </style>
        </section>
    );
};

export default Hero;
