import React from 'react';
import venueSketch from '../assets/venue-sketch.png';

const Venue = () => {
    return (
        <section className="section" style={{
            backgroundColor: '#C5A46D',
            padding: '100px 0',
            color: '#fff'
        }}>
            <div className="container">
                <div className="reveal" style={{ marginBottom: '40px' }}>
                    <h2 style={{
                        fontSize: '5rem',
                        marginBottom: '10px',
                        color: '#fff',
                        fontFamily: 'var(--font-display)'
                    }}>
                        The Venue
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: '#fff',
                        marginBottom: '40px',
                        textTransform: 'uppercase',
                        letterSpacing: '3px',
                        fontWeight: '500'
                    }}>
                        Where we celebrate
                    </p>
                </div>

                <div className="reveal" style={{
                    backgroundColor: '#fff',
                    borderRadius: '20px',
                    padding: '40px',
                    maxWidth: '850px',
                    margin: '0 auto',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
                    textAlign: 'center'
                }}>
                    <img
                        src={venueSketch}
                        alt="Venue Sketch"
                        style={{
                            width: '100%',
                            height: 'auto',
                            marginBottom: '30px',
                            borderRadius: '10px'
                        }}
                    />

                    <h3 style={{
                        fontSize: '3rem',
                        color: 'var(--primary)',
                        fontFamily: 'var(--font-display)',
                        marginBottom: '40px'
                    }}>
                        Vanashraya Corbett
                    </h3>

                    <div style={{ height: '1px', background: '#eee', width: '100%', marginBottom: '40px' }}></div>

                    <div style={{ marginBottom: '40px' }}>
                        <p style={{ fontSize: '1.1rem', marginBottom: '10px', color: 'var(--primary)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 'bold' }}>
                            19 April 2026 — 10:00 AM
                        </p>
                        <div style={{ height: '1px', background: 'var(--accent)', width: '60px', margin: '20px auto', opacity: 0.3 }}></div>
                        <p style={{ fontSize: '1.4rem', color: 'var(--primary)', fontWeight: 'bold', fontFamily: 'var(--font-serif)' }}>
                            Jim Corbett National Park, Bail Parao
                        </p>
                        <p style={{ fontSize: '1rem', color: '#666', marginTop: '5px' }}>
                            Ramnagar, Uttarakhand 262401
                        </p>
                    </div>

                    <div style={{
                        width: '100%',
                        height: '350px',
                        borderRadius: '15px',
                        overflow: 'hidden',
                        border: '1px solid #eee',
                        marginBottom: '40px'
                    }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3479.7725925340625!2d79.19019167530638!3d29.2890085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a6de6e2655461%3A0x5128e2f3cbad9f04!2sVanashraya%20Corbett%20-%20Best%20resort%20%26%20Hotel%20in%20Jim%20Corbett%20%7C%20Best%20wedding%20destination%20in%20Jim%20Corbett!5e0!3m2!1sen!2sin!4v1741965213601!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>

                    <a
                        href="https://maps.app.goo.gl/NtkTNDovN1YPrv5Q9"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            color: 'var(--primary)',
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            letterSpacing: '2px'
                        }}
                    >
                        <span style={{ fontSize: '1.2rem' }}>📍</span> OPEN IN MAPS
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Venue;
