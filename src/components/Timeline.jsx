import React from 'react';
import floral from '../assets/floral.png';

const Timeline = () => {
    const events = [
        {
            day: 'Saturday, April 18th',
            title: 'Mehndi Ceremony',
            time: '11:00 AM',
            description: 'A vibrant start with henna and traditional music amidst a Forest Green theme.'
        },
        {
            day: 'Saturday, April 18th',
            title: 'Sagan & Cocktail',
            time: '07:30 PM',
            description: 'An evening of Glitz and Glamour with dinner and drinks.'
        },
        {
            day: 'Sunday, April 19th',
            title: 'Haldi & Pool Party',
            time: '10:00 AM',
            description: 'Fueling the fun with "The Pink" theme and joyous celebrations.'
        },
        {
            day: 'Sunday, April 19th',
            title: 'The Wedding',
            time: '07:30 PM',
            description: 'The Royal Indian Wedding Ceremony where two souls become one.'
        }
    ];

    return (
        <section className="section reveal" style={{ backgroundColor: '#F9F8F6', padding: '120px 0' }}>
            <div className="container">
                <div style={{ marginBottom: '80px' }}>
                    <img src={floral} alt="Floral" className="decoration-img floating" style={{ width: '100px', marginBottom: '30px' }} />
                    <h2 style={{ fontSize: '5rem', color: 'var(--primary)' }}>The Celebration</h2>
                    <p style={{ letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.9rem', color: 'var(--accent)', marginTop: '10px' }}>
                        Our Schedule of Events
                    </p>
                </div>

                <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
                    {/* Vertical Line */}
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '2px',
                        height: '100%',
                        background: 'linear-gradient(to bottom, transparent, var(--accent), transparent)',
                        opacity: '0.3'
                    }}></div>

                    {events.map((event, index) => (
                        <div key={index} className="reveal" style={{
                            display: 'flex',
                            justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                            textAlign: index % 2 === 0 ? 'right' : 'left',
                            marginBottom: '60px',
                            width: '100%',
                            position: 'relative'
                        }}>
                            {/* Dot */}
                            <div style={{
                                position: 'absolute',
                                left: '50%',
                                top: '40px',
                                transform: 'translateX(-50%)',
                                width: '16px',
                                height: '16px',
                                background: 'var(--primary)',
                                borderRadius: '50%',
                                zIndex: 10,
                                border: '3px solid white',
                                boxShadow: '0 0 10px rgba(0,0,0,0.1)'
                            }}></div>

                            {/* Card */}
                            <div style={{
                                width: '42%',
                                padding: '40px',
                                background: 'white',
                                borderRadius: '30px',
                                boxShadow: '0 20px 60px rgba(0,0,0,0.04)',
                                border: '1px solid rgba(131, 93, 47, 0.05)',
                                transition: 'transform 0.3s ease',
                                cursor: 'default'
                            }}>
                                <p style={{
                                    fontFamily: 'var(--font-sans)',
                                    fontSize: '0.75rem',
                                    color: 'var(--accent)',
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                    letterSpacing: '3px',
                                    marginBottom: '15px'
                                }}>
                                    {event.day}
                                </p>
                                <h3 style={{ 
                                    fontSize: '2.4rem', 
                                    margin: '0 0 10px 0', 
                                    lineHeight: 1.1,
                                    color: 'var(--primary)',
                                    fontFamily: 'var(--font-display)'
                                }}>
                                    {event.title}
                                </h3>
                                <p style={{
                                    fontSize: '1.1rem',
                                    color: 'var(--secondary)',
                                    fontStyle: 'italic',
                                    marginBottom: '15px',
                                    fontWeight: '500'
                                }}>
                                    {event.time}
                                </p>
                                <p style={{
                                    fontSize: '1rem',
                                    color: '#777',
                                    lineHeight: 1.6,
                                    fontFamily: 'var(--font-sans)'
                                }}>
                                    {event.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
