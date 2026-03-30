import React, { useState, useEffect } from 'react';

const TimeBlock = ({ value, label }) => (
    <div style={{ padding: '20px', minWidth: '120px' }}>
        <div style={{
            fontSize: '4.5rem',
            fontFamily: 'var(--font-serif)',
            color: 'var(--primary)',
            fontWeight: '300',
            lineHeight: '1',
            marginBottom: '10px'
        }}>
            {value}
        </div>
        <div style={{
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            color: 'var(--accent)',
            fontFamily: 'var(--font-sans)',
            fontWeight: '600'
        }}>
            {label}
        </div>
    </div>
);

const Countdown = () => {
    const targetDate = new Date('April 19, 2026 00:00:00').getTime();
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(timer);
            } else {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000)
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);



    return (
        <section className="section reveal">
            <div className="container">
                <h2 style={{ fontSize: '3rem', marginBottom: '60px', color: 'var(--text-dark)' }}>Counting Down to Our Day</h2>

                <div style={{
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    background: 'rgba(255, 255, 255, 0.4)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '30px',
                    padding: '40px',
                    display: 'inline-flex',
                    border: '1px solid rgba(131, 93, 47, 0.05)',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.05)'
                }}>
                    <TimeBlock value={timeLeft.days} label="Days" />
                    <div style={{ fontSize: '3rem', padding: '20px 0', opacity: 0.2, color: 'var(--primary)' }}>:</div>
                    <TimeBlock value={timeLeft.hours} label="Hours" />
                    <div style={{ fontSize: '3rem', padding: '20px 0', opacity: 0.2, color: 'var(--primary)' }}>:</div>
                    <TimeBlock value={timeLeft.minutes} label="Minutes" />
                    <div style={{ fontSize: '3rem', padding: '20px 0', opacity: 0.2, color: 'var(--primary)' }}>:</div>
                    <TimeBlock value={timeLeft.seconds} label="Seconds" />
                </div>
            </div>
        </section>
    );
};

export default Countdown;
