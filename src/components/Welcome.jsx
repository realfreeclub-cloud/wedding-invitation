import { useLanguage } from '../hooks/useLanguage';
import weddingLogo from '../assets/wedding_logo.png';

const Welcome = () => {
    const { t } = useLanguage();
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
            </div>
        </section>
    );
};

export default Welcome;
