import React from 'react';
import { motion } from 'motion/react';
import floral from '../assets/floral.png';

const InvitationDetail = () => {
    return (
        <section className="section" style={{ backgroundColor: '#fff', padding: '100px 0' }}>
            <div className="container">
                <div className="reveal" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    
                    {/* Shloka Section */}
                    <div style={{ marginBottom: '60px' }}>
                        <p style={{ fontSize: '1.4rem', color: 'var(--primary)', fontWeight: 'bold', marginBottom: '15px' }}>
                            ॥ श्री गणेशाय नमः ॥
                        </p>
                        <p style={{ 
                            fontSize: '1.1rem', 
                            color: 'var(--accent)', 
                            fontStyle: 'italic', 
                            lineHeight: 1.8,
                            maxWidth: '600px',
                            margin: '0 auto'
                        }}>
                            विघ्न हरण मंगल करण, श्री गणपति महाराज ।<br />
                            प्रथम निमंत्रण आपको, पूरण कीज्यो काज ॥
                        </p>
                    </div>

                    <div style={{ marginBottom: '50px' }}>
                        <h2 style={{ fontSize: '3.5rem', marginBottom: '20px', color: 'var(--primary)', fontFamily: 'var(--font-display)' }}>
                            A Wedding Invitation
                        </h2>
                        <p style={{ letterSpacing: '3px', textTransform: 'uppercase', fontSize: '1.1rem', color: 'var(--accent)', fontWeight: 'bold' }}>
                            Sunday, 19th April 2026
                        </p>
                    </div>

                    {/* Formal Invitation Text */}
                    <div style={{ marginBottom: '60px', padding: '0 20px' }}>
                        <p style={{ fontSize: '1.2rem', color: 'var(--secondary)', lineHeight: 1.8, fontFamily: 'var(--font-serif)' }}>
                            Mrs. Navita & Mr. Om Prakash Nagpal solicit your gracious presence and blessings on the auspicious occasion of the Wedding Ceremony of their beloved son
                        </p>
                        <h3 style={{ fontSize: '6rem', margin: '30px 0', color: 'var(--primary)', fontFamily: 'var(--font-display)' }}>
                            Anshul
                        </h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--accent)', marginBottom: '20px', fontStyle: 'italic' }}>
                            (Grand S/o Smt. Rajrani Nagpal & Late. Sh Manohar Lal Nagpal)
                        </p>
                        <p style={{ fontSize: '1.5rem', color: 'var(--accent)', margin: '20px 0', fontFamily: 'var(--font-display)' }}>
                            with
                        </p>
                        <h3 style={{ fontSize: '6rem', margin: '30px 0', color: 'var(--primary)', fontFamily: 'var(--font-display)' }}>
                            Garima
                        </h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--accent)', marginBottom: '40px', fontStyle: 'italic' }}>
                            (D/o Smt. Alka Sh Bharat Bhushan Arora)
                        </p>
                    </div>

                    {/* Family & RSVP Details Grid */}
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: '1fr 1fr', 
                        gap: '40px', 
                        textAlign: 'left',
                        background: '#FDFCFB',
                        padding: '60px',
                        borderRadius: '40px',
                        border: '1px solid rgba(131, 93, 47, 0.05)',
                        marginTop: '60px'
                    }}>
                        <div>
                            <h4 style={{ color: 'var(--primary)', fontSize: '1.2rem', marginBottom: '20px', borderBottom: '1px solid var(--accent)', display: 'inline-block' }}>R.S.V.P.</h4>
                            <ul style={{ listStyle: 'none', padding: 0, color: 'var(--secondary)', lineHeight: 2, fontSize: '0.95rem' }}>
                                <li>Nagpal Family</li>
                                <li>Arora Family</li>
                                <li>Mongia Family</li>
                                <li>Bewal Family</li>
                                <li>Khetarpal Family</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 style={{ color: 'var(--primary)', fontSize: '1.2rem', marginBottom: '20px', borderBottom: '1px solid var(--accent)', display: 'inline-block' }}>Cordial Invitation From:</h4>
                            <p style={{ color: 'var(--secondary)', fontWeight: 'bold', marginBottom: '10px' }}>Mrs. Navita & Mr. Om Prakash Nagpal</p>
                            <p style={{ color: 'var(--accent)', fontSize: '0.85rem' }}>
                                Mob.: 9811120592, 9999359385<br />
                                9873265046, 9811256185
                            </p>
                        </div>

                        <div>
                            <h4 style={{ color: 'var(--primary)', fontSize: '1.2rem', marginBottom: '20px', borderBottom: '1px solid var(--accent)', display: 'inline-block' }}>Sweet Invitation:</h4>
                            <p style={{ color: 'var(--secondary)', lineHeight: 1.6, fontSize: '0.9rem' }}>
                                Naman Nagpal, Evansh Khetarpal,<br />
                                Samarth Nagpal, Chaitanya Mongia,<br />
                                Misha Arora
                            </p>
                        </div>

                        <div>
                            <h4 style={{ color: 'var(--primary)', fontSize: '1.2rem', marginBottom: '20px', borderBottom: '1px solid var(--accent)', display: 'inline-block' }}>Best Compliments From:</h4>
                            <p style={{ color: 'var(--secondary)', fontSize: '0.9rem' }}>
                                All Relatives & Friends
                            </p>
                        </div>
                    </div>

                    {/* Closing Shloka */}
                    <div style={{ marginTop: '80px', opacity: 0.8 }}>
                        <p style={{ 
                            fontSize: '0.95rem', 
                            color: 'var(--accent)', 
                            lineHeight: 1.8,
                            fontStyle: 'italic'
                        }}>
                            ॥ श्री गणेशाय नमः ।। वक्रतुण्ड महाकाय, सूर्यकोटि समप्रभः । निर्विघ्नं कुरुमे देव सर्वकार्येषु सर्वदा ॥
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default InvitationDetail;
