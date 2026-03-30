import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from "motion/react";
import { Mail } from "lucide-react";
import './Envelope.css';
import weddingLogo from '../assets/wedding_logo.png';

export default function Envelope({ onOpen }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isExiting, setIsExiting] = useState(false);
    const coupleNames = "Anshul & Garima";
    const weddingDate = "2026-04-19";

    const handleOpen = () => {
        setIsOpen(true);
        // Wait for the flap and card animation to finish before exiting the intro
        setTimeout(() => {
            setIsExiting(true);
            setTimeout(onOpen, 1000); // Final fade out
        }, 2500);
    };

    return (
        <AnimatePresence>
            {!isExiting && (
                <Motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="fixed inset-0 z-[200] bg-[#fdfcf0] flex items-center justify-center overflow-hidden"
                >
                    {/* Subtle Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }} />

                    <div className="relative w-full max-w-lg px-6 flex flex-col items-center">

                        {/* Envelope Container */}
                        <div className="relative w-full aspect-[4/3] [perspective:1000px]">

                            {/* Invitation Card (Slides Up) */}
                            <Motion.div
                                initial={{ y: 0, opacity: 0 }}
                                animate={isOpen ? { y: -250, opacity: 1 } : { y: 0, opacity: 0 }}
                                transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                                className="absolute inset-x-4 top-4 bottom-4 bg-white shadow-lg rounded-sm p-8 flex flex-col items-center justify-center text-center border border-stone-100 z-[15]"
                            >
                                <div className="mb-6">
                                    <img 
                                        src={weddingLogo} 
                                        alt="Logo" 
                                        className="w-32 h-auto" 
                                        style={{ mixBlendMode: 'multiply' }}
                                    />
                                </div>
                                <h2 className="text-4xl md:text-5xl font-display text-stone-800 mb-4 leading-tight">
                                    {coupleNames}
                                </h2>
                                <div className="h-px w-24 bg-gold/40 mb-6" />
                                <p className="text-stone-500 uppercase tracking-[0.2em] text-xs mb-2">Save The Date</p>
                                <p className="text-gold font-serif text-2xl">
                                    {new Date(weddingDate).toLocaleDateString('en-US', {
                                        month: 'long', day: 'numeric', year: 'numeric'
                                    })}
                                </p>
                            </Motion.div>

                            {/* Envelope Back/Body */}
                            <div className="absolute inset-0 bg-[#f4f1e0] shadow-2xl rounded-lg overflow-hidden border border-stone-200 z-[5]">
                                {/* Envelope Inner Shadow/Depth */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent pointer-events-none" />

                                {/* Decorative Seal (Visible when closed) */}
                                {!isOpen && (
                                    <Motion.div
                                        initial={{ scale: 1 }}
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ repeat: Infinity, duration: 3 }}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 flex flex-col items-center"
                                    >
                                        <div className="w-16 h-16 bg-gold rounded-full shadow-lg flex items-center justify-center border-4 border-white/20">
                                            <Mail className="text-white w-8 h-8" />
                                        </div>
                                    </Motion.div>
                                )}
                            </div>

                            {/* Envelope Flap (Top) */}
                            <Motion.div
                                className="absolute top-0 left-0 w-full h-1/2 bg-[#ece8d0] origin-top z-30 rounded-t-lg border-b border-stone-300/50"
                                style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
                                animate={isOpen ? { rotateX: -180, zIndex: 0 } : { rotateX: 0 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                            />

                            {/* Envelope Flaps (Sides & Bottom - Visual only) */}
                            <div className="absolute inset-0 z-20 pointer-events-none">
                                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#f4f1e0]" style={{ clipPath: 'polygon(0 100%, 100% 100%, 50% 0)' }} />
                                <div className="absolute top-0 left-0 h-full w-1/2 bg-[#f4f1e0]/80" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 50%)' }} />
                                <div className="absolute top-0 right-0 h-full w-1/2 bg-[#f4f1e0]/80" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 50%)' }} />
                            </div>
                        </div>

                        {/* Open Button */}
                        {!isOpen && (
                            <Motion.button
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                onClick={handleOpen}
                                className="mt-12 px-10 py-4 bg-gold text-white rounded-full font-bold uppercase tracking-[0.3em] text-sm shadow-xl hover:bg-gold/90 hover:scale-105 transition-all active:scale-95 cursor-pointer"
                            >
                                Open Invitation
                            </Motion.button>
                        )}

                        {/* Footer Text */}
                        {!isOpen && (
                            <Motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.4 }}
                                transition={{ delay: 1 }}
                                className="mt-6 text-stone-600 text-[10px] uppercase tracking-widest"
                            >
                                A special delivery for you
                            </Motion.p>
                        )}
                    </div>
                </Motion.div>
            )}
        </AnimatePresence>
    );
}
