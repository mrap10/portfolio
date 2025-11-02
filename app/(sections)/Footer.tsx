"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Footer() {
    const { ref, isRevealed } = useScrollReveal();
    
    return (
        <div ref={ref} className={`scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
            this is a footer section
        </div>
    )
}