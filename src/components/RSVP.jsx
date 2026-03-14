import React, { useState } from 'react';

const RSVP = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Thank you for your response!');
    };

    return (
        <section className="section" style={{ backgroundColor: '#fff', padding: '120px 0' }}>
            <div className="container">
                <div className="reveal" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '6rem', color: 'var(--primary)', marginBottom: '20px' }}>Join Us</h2>
                    <p style={{
                        marginBottom: '60px',
                        color: 'var(--accent)',
                        fontFamily: 'var(--font-serif)',
                        letterSpacing: '3px',
                        fontSize: '1.2rem',
                        fontStyle: 'italic'
                    }}>
                        Kindly respond by April 1st, 2026
                    </p>

                    <form onSubmit={handleSubmit} style={{
                        textAlign: 'left',
                        background: '#FDFCFB',
                        padding: '80px',
                        borderRadius: '50px',
                        boxShadow: '0 40px 100px rgba(131, 93, 47, 0.04)',
                        border: '1px solid rgba(131, 93, 47, 0.08)'
                    }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '30px' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '12px', fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent)' }}>Full Name</label>
                                <input type="text" required style={{ width: '100%', padding: '18px', border: '1px solid rgba(131, 93, 47, 0.1)', borderRadius: '15px', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', background: 'white' }} placeholder="Your Name" />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '12px', fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent)' }}>Email Address</label>
                                <input type="email" required style={{ width: '100%', padding: '18px', border: '1px solid rgba(131, 93, 47, 0.1)', borderRadius: '15px', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', background: 'white' }} placeholder="Your Email" />
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '40px' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '12px', fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent)' }}>Attendance</label>
                                <select required style={{ width: '100%', padding: '18px', border: '1px solid rgba(131, 93, 47, 0.1)', borderRadius: '15px', fontFamily: 'var(--font-serif)', fontSize: '1.1rem', appearance: 'none', backgroundColor: '#fff' }}>
                                    <option value="">Select an option</option>
                                    <option value="yes">Joyfully Accept</option>
                                    <option value="no">Regretfully Decline</option>
                                </select>
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '12px', fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent)' }}>Guest Count</label>
                                <input type="number" min="1" max="10" defaultValue="1" style={{ width: '100%', padding: '18px', border: '1px solid rgba(131, 93, 47, 0.1)', borderRadius: '15px', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', background: 'white' }} />
                            </div>
                        </div>

                        <button type="submit" style={{
                            width: '100%',
                            padding: '22px',
                            background: 'var(--primary)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '50px',
                            fontFamily: 'var(--font-sans)',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            letterSpacing: '4px',
                            cursor: 'pointer',
                            fontSize: '0.8rem',
                            boxShadow: '0 15px 40px rgba(131, 93, 47, 0.25)',
                            transition: 'all 0.3s ease'
                        }}>
                            Send Response
                        </button>

                        {status && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{ marginTop: '30px', textAlign: 'center', color: 'var(--primary)', fontWeight: 'bold' }}
                            >
                                {status}
                            </motion.p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default RSVP;
