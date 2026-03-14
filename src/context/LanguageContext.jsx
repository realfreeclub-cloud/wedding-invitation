import React, { createContext, useState, useContext } from 'react';

const translations = {
    en: {
        welcome_title: "Welcome!",
        welcome_desc: "We warmly invite you to celebrate our wedding day with us. We look forward to sharing this unforgettable moment with our most special people.",
        hero_rsvp: "RSVP",
        countdown_title: "Counting Down to Our Day",
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds",
        venue_title: "The Venue",
        venue_subtitle: "Where we celebrate",
        open_maps: "OPEN IN MAPS",
        timeline_title: "The Celebration",
        timeline_subtitle: "Our Schedule of Events",
        dress_code_title: "Dress Code",
        rsvp_title: "Join Us",
        rsvp_deadline: "Kindly respond by April 1st, 2026",
        rsvp_fullname: "Full Name",
        rsvp_email: "Email Address",
        rsvp_attendance: "Attendance",
        rsvp_guest_count: "Guest Count",
        rsvp_submit: "Send Response",
        rsvp_success: "Thank you for your response!"
    },
    hi: {
        welcome_title: "स्वागत है!",
        welcome_desc: "हम आपको अपने विवाह के इस शुभ अवसर पर दिल से आमंत्रित करते हैं। हम इस अविस्मरणीय पल को अपने सबसे प्रिय लोगों के साथ साझा करने के लिए उत्सुक हैं।",
        hero_rsvp: "आरएसवीपी",
        countdown_title: "हमारे खास दिन की गिनती",
        days: "दिन",
        hours: "घंटे",
        minutes: "मिनट",
        seconds: "सेकंड",
        venue_title: "कार्यक्रम का स्थान",
        venue_subtitle: "जहाँ हम जश्न मनाएंगे",
        open_maps: "मैप में देखें",
        timeline_title: "उत्सव",
        timeline_subtitle: "कार्यक्रमों की सूची",
        dress_code_title: "ड्रेस कोड (परिधान)",
        rsvp_title: "हमारे साथ जुड़ें",
        rsvp_deadline: "कृपया 1 अप्रैल, 2026 तक सूचित करें",
        rsvp_fullname: "पूरा नाम",
        rsvp_email: "ईमेल पता",
        rsvp_attendance: "उपस्थिति",
        rsvp_guest_count: "मेहमानों की संख्या",
        rsvp_submit: "जवाब भेजें",
        rsvp_success: "आपकी प्रतिक्रिया के लिए धन्यवाद!"
    }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const t = (key) => translations[language][key] || key;

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
