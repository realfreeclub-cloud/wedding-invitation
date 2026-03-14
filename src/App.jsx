import React, { useEffect, useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Timeline from './components/Timeline';
import Venue from './components/Venue';
import DressCode from './components/DressCode';
import RSVP from './components/RSVP';
import Envelope from './components/Envelope';
import Countdown from './components/Countdown';
import ImageSlider from './components/ImageSlider';
import InvitationDetail from './components/InvitationDetail';
import LanguageSwitcher from './components/LanguageSwitcher';
import floral from './assets/floral.png';
import paperTexture from './assets/paper-texture.png';
import weddingLogo from './assets/wedding_logo.png';
import weddingMusic from './assets/wedding-music.mp3';

function App() {
  const [showInvitation, setShowInvitation] = useState(() => {
    // Check if user has already opened the invitation before
    return localStorage.getItem('invitation_opened') === 'true';
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(weddingMusic));

  useEffect(() => {
    if (showInvitation) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }
  }, [showInvitation]);

  useEffect(() => {
    audio.loop = false; // Changed to false to play through only once per visit
    return () => {
      audio.pause();
    };
  }, [audio]);

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(e => console.log("Audio play failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  const handleOpenInvitation = () => {
    localStorage.setItem('invitation_opened', 'true');
    setShowInvitation(true);
    // Start music on open
    audio.play().catch(e => console.log("Auto-play blocked:", e));
    setIsPlaying(true);
    // Scroll to top when opening
    window.scrollTo(0, 0);
  };

  return (
    <div className="app">
      {!showInvitation && <Envelope onOpen={handleOpenInvitation} />}

      <div className="background-overlay">
        <div className="watercolor-spot spot1"></div>
        <div className="watercolor-spot spot2"></div>
      </div>

      <div className="petals-container" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 10 }}>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="floating-petal"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              transform: `scale(${0.5 + Math.random()})`
            }}
          />
        ))}
      </div>

      {/* Floating UI Elements from Reference */}

      <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 300, visibility: showInvitation ? 'visible' : 'hidden' }}>
        <button 
          onClick={toggleMusic}
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'white',
            border: 'none',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            color: 'var(--primary)',
            transition: 'all 0.3s ease'
          }}
        >
          <span style={{ fontSize: '1.2rem' }}>{isPlaying ? '🔊' : '🔇'}</span>
        </button>
      </div>

      <div style={{ visibility: showInvitation ? 'visible' : 'hidden', opacity: showInvitation ? 1 : 0, transition: 'opacity 1s ease-in' }}>
        <Hero />
        <Countdown />
        <Welcome />
        <InvitationDetail />

        {/* Decorative Flower PNG spacer */}
        <div className="section" style={{ padding: '0' }}>
          <img src={floral} alt="" className="decoration-img floating" style={{ width: '180px', marginTop: '40px', marginBottom: '40px' }} />
        </div>

        <Venue />
        <Timeline />
        <DressCode />
        <RSVP />

        <footer className="footer-section" style={{ 
          backgroundImage: `url(${paperTexture})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#FDFCFB',
          padding: '120px 0 80px 0',
          position: 'relative',
          overflow: 'hidden',
          borderTop: '1px solid rgba(131, 93, 47, 0.05)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          {/* Subtle floral accents in corners to match screenshot "embossed" look */}
          <img src={floral} alt="" style={{ 
            position: 'absolute', 
            top: '-20px', 
            left: '-20px', 
            width: '250px', 
            opacity: 0.05, 
            transform: 'rotate(-15deg)',
            pointerEvents: 'none'
          }} />
          <img src={floral} alt="" style={{ 
            position: 'absolute', 
            top: '-20px', 
            right: '-20px', 
            width: '250px', 
            opacity: 0.05, 
            transform: 'rotate(15deg) scaleX(-1)',
            pointerEvents: 'none'
          }} />

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              gap: '15px' 
            }}>
              {/* Wedding Logo */}
              <div style={{ marginBottom: '20px' }}>
                <img 
                  src={weddingLogo} 
                  alt="Anshul & Garima Wedding Logo" 
                  style={{ 
                    width: '350px', 
                    maxWidth: '85%', 
                    opacity: 0.9,
                    mixBlendMode: 'multiply'
                  }} 
                />
              </div>

              {/* Date */}
              <p style={{ 
                fontFamily: 'var(--font-sans)', 
                fontWeight: '700', 
                fontSize: '1.4rem', 
                color: '#C5A46D', 
                marginTop: '10px',
                letterSpacing: '3px'
              }}>
                19 April 2026
              </p>

              {/* Credit */}
              <p style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: '1rem', 
                color: '#9E896A',
                marginTop: '60px',
                opacity: 0.8
              }}>
                Made with love by <a href="#" style={{ color: '#9E896A', textDecoration: 'underline', fontWeight: 'bold' }}>The Digital Yes</a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
