import { useLanguage } from '../hooks/useLanguage';

const LanguageSwitcher = ({ show }) => {
    const { language, setLanguage } = useLanguage();

    return (
        <div style={{
            position: 'fixed',
            top: '30px',
            right: '30px', 
            zIndex: 1000,
            display: 'flex',
            gap: '5px',
            background: 'rgba(131, 93, 47, 0.8)',
            padding: '4px',
            borderRadius: '50px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            backdropFilter: 'blur(5px)',
            visibility: show ? 'visible' : 'hidden',
            opacity: show ? 1 : 0,
            transition: 'opacity 0.5s ease'
        }}>
            <button
                onClick={() => setLanguage('en')}
                style={{
                    padding: '6px 12px',
                    borderRadius: '50px',
                    border: 'none',
                    background: language === 'en' ? '#fff' : 'transparent',
                    color: language === 'en' ? 'var(--primary)' : '#fff',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.7rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                }}
            >
                EN
            </button>
            <button
                onClick={() => setLanguage('hi')}
                style={{
                    padding: '6px 12px',
                    borderRadius: '50px',
                    border: 'none',
                    background: language === 'hi' ? '#fff' : 'transparent',
                    color: language === 'hi' ? 'var(--primary)' : '#fff',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.7rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                }}
            >
                HI
            </button>
        </div>
    );
};

export default LanguageSwitcher;
