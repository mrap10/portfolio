"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function MoveToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const githubStatsSection = document.querySelector('#github-stats');
            if (githubStatsSection) {
                const rect = githubStatsSection.getBoundingClientRect();
                setIsVisible(rect.top <= window.innerHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    if (!isVisible) return null;

    return (
        <button 
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 rounded-full border border-neutral-600 hover:border-white p-3 bg-black/80 backdrop-blur-sm animate-pulse hover:animate-none hover:bg-neutral-800 cursor-pointer transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Scroll to top"
        >
            <ArrowUp className="w-5 h-5 text-white" />
        </button>
    );
}