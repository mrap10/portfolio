"use client";

import { BackgroundLines } from "@/components/ui/background-lines";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { ArrowDownIcon, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
    const handleGithubClick = () => {
        window.open('https://github.com/mrap10', '_blank', 'noopener,noreferrer');
    };

    const handleLinkedinClick = () => {
        window.open('https://www.linkedin.com/in/abhipanthi', '_blank', 'noopener,noreferrer');
    };

    const handleMailClick = () => {
        window.location.href = 'mailto:contact.abhii10@gmail.com';
    };

    const handleScrollDown = () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <BackgroundLines className="relative flex items-center justify-center w-full min-h-screen flex-col px-4 bg-black">
            <div className="flex flex-col items-center justify-center flex-1">
                <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white text-3xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight animate-fade-in-up">
                    Hey, I'm Abhinaya. <br /> Full Stack Developer.
                </h2>
                <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-400 text-center animate-fade-in-up animation-delay-200">
                    Turning ideas into elegant, functional code. One commit at a time.
                </p>

                <div className="mt-10 flex items-center justify-center space-x-10 animate-fade-in-up animation-delay-400">
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="bg-black text-white flex items-center space-x-2 cursor-pointer"
                        onClick={scrollToProjects}
                    >
                        View Projects
                    </HoverBorderGradient>
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="bg-black text-white flex items-center space-x-2 cursor-pointer"
                        onClick={scrollToAbout}
                    >
                        About Me
                    </HoverBorderGradient>
                </div>

                <div className="mt-10 flex items-center justify-center space-x-5 z-10 animate-fade-in-up animation-delay-600">
                    <button 
                        onClick={handleGithubClick}
                        className="rounded-full border border-neutral-600 hover:border-white hover:bg-neutral-800 p-3 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
                    >
                        <Github className="w-5 h-5" />
                    </button>
                    <button 
                        onClick={handleLinkedinClick}
                        className="rounded-full border border-neutral-600 hover:border-blue-500 hover:bg-blue-500/10 p-3 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
                    >
                        <Linkedin className="w-5 h-5" />
                    </button>
                    <button 
                        onClick={handleMailClick}
                        className="rounded-full border border-neutral-600 hover:border-red-500 hover:bg-red-500/10 p-3 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
                    >
                        <Mail className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <button 
                onClick={handleScrollDown}
                className="absolute bottom-8 rounded-full border border-neutral-600 hover:border-white p-3 animate-pulse hover:animate-none hover:bg-neutral-800 cursor-pointer transition-all duration-300"
            >
                <ArrowDownIcon className="w-5 h-5" />
            </button>
        </BackgroundLines>
    )
}