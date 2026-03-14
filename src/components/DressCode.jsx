import React from 'react';
import champagne from '../assets/champagne.png';

const DressCode = () => {
    return (
        <section className="section reveal" style={{ backgroundColor: '#F9F8F6', padding: '120px 0' }}>
            <div className="container">
                <div className="reveal">
                    <img src={champagne} alt="Champagne" className="decoration-img floating" style={{ width: '100px', marginBottom: '40px' }} />
                    <h2 style={{ fontSize: '5.5rem', marginBottom: '20px', color: 'var(--primary)' }}>Dress Code</h2>
                    <p style={{
                        maxWidth: '600px',
                        margin: '0 auto 60px auto',
                        fontSize: '1.2rem',
                        color: 'var(--accent)',
                        fontFamily: 'var(--font-serif)',
                        fontStyle: 'italic'
                    }}>
                        "Elegance is the only beauty that never fades"
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
                        {/* Day 1: Mehndi */}
                        <div style={{
                            padding: '40px 30px',
                            background: 'white',
                            borderRadius: '30px',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
                            border: '1px solid rgba(131, 93, 47, 0.05)',
                            textAlign: 'center'
                        }}>
                            <p style={{ fontFamily: 'var(--font-sans)', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.65rem', color: 'var(--accent)', marginBottom: '15px', fontWeight: 'bold' }}>
                                DAY 1: 18 APRIL, 2026
                            </p>
                            <h3 style={{ fontSize: '2.5rem', marginBottom: '10px', color: 'var(--primary)', fontFamily: 'var(--font-display)' }}>Mehndi</h3>
                            <div style={{ height: '1px', background: 'var(--accent)', width: '30px', margin: '0 auto 15px auto', opacity: 0.3 }}></div>
                            <p style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px' }}>Theme</p>
                            <p style={{ color: '#2D4B2D', fontSize: '1.2rem', fontWeight: '600', fontFamily: 'var(--font-serif)' }}>Forest Green</p>
                        </div>

                        {/* Day 1: Sagan/Cocktail */}
                        <div style={{
                            padding: '40px 30px',
                            background: 'white',
                            borderRadius: '30px',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
                            border: '1px solid rgba(131, 93, 47, 0.05)',
                            textAlign: 'center'
                        }}>
                            <p style={{ fontFamily: 'var(--font-sans)', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.65rem', color: 'var(--accent)', marginBottom: '15px', fontWeight: 'bold' }}>
                                DAY 1: 18 APRIL, 2026
                            </p>
                            <h3 style={{ fontSize: '2.5rem', marginBottom: '10px', color: 'var(--primary)', fontFamily: 'var(--font-display)' }}>Sagan / Cocktail</h3>
                            <div style={{ height: '1px', background: 'var(--accent)', width: '30px', margin: '0 auto 15px auto', opacity: 0.3 }}></div>
                            <p style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px' }}>Theme</p>
                            <p style={{ color: 'var(--primary)', fontSize: '1.2rem', fontWeight: '600', fontFamily: 'var(--font-serif)' }}>Glitz and Glamorous</p>
                        </div>

                        {/* Day 2: Haldi/Pool Party */}
                        <div style={{
                            padding: '40px 30px',
                            background: 'white',
                            borderRadius: '30px',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
                            border: '1px solid rgba(131, 93, 47, 0.05)',
                            textAlign: 'center'
                        }}>
                            <p style={{ fontFamily: 'var(--font-sans)', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.65rem', color: 'var(--accent)', marginBottom: '15px', fontWeight: 'bold' }}>
                                DAY 2: 19 APRIL, 2026
                            </p>
                            <h3 style={{ fontSize: '2.5rem', marginBottom: '10px', color: 'var(--primary)', fontFamily: 'var(--font-display)' }}>Haldi / Pool Party</h3>
                            <div style={{ height: '1px', background: 'var(--accent)', width: '30px', margin: '0 auto 15px auto', opacity: 0.3 }}></div>
                            <p style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px' }}>Theme</p>
                            <p style={{ color: '#D81B60', fontSize: '1.2rem', fontWeight: '600', fontFamily: 'var(--font-serif)' }}>The Pink</p>
                        </div>

                        {/* Day 2: Wedding */}
                        <div style={{
                            padding: '40px 30px',
                            background: 'white',
                            borderRadius: '30px',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
                            border: '1px solid rgba(131, 93, 47, 0.05)',
                            textAlign: 'center'
                        }}>
                            <p style={{ fontFamily: 'var(--font-sans)', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.65rem', color: 'var(--accent)', marginBottom: '15px', fontWeight: 'bold' }}>
                                DAY 2: 19 APRIL, 2026
                            </p>
                            <h3 style={{ fontSize: '2.5rem', marginBottom: '10px', color: 'var(--primary)', fontFamily: 'var(--font-display)' }}>Wedding</h3>
                            <div style={{ height: '1px', background: 'var(--accent)', width: '30px', margin: '0 auto 15px auto', opacity: 0.3 }}></div>
                            <p style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px' }}>Theme</p>
                            <p style={{ color: 'var(--primary)', fontSize: '1.2rem', fontWeight: '600', fontFamily: 'var(--font-serif)' }}>Royal Indian Tradition</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DressCode;
