"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Footer() {
    const { ref, isRevealed } = useScrollReveal();
    
    return (
        <footer className="bg-black text-white pt-8">
            <div ref={ref} className={`max-w-6xl mx-auto px-4 text-center scroll-reveal space-y-6 ${isRevealed ? 'revealed' : ''}`}>
                <div className="flex flex-col gap-5">
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
                        Fun Facts About Me
                    </h1>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        (Because who doesn't love random trivia?)
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-8">
                        <div className="border border-neutral-700 rounded-lg p-6 bg-neutral-900/50 backdrop-blur-sm hover:border-neutral-600 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                            <h3 className="font-semibold text-xl mb-4 text-cyan-400">Hobbies</h3>
                            <ul className="text-left space-y-2 text-neutral-300">
                                <li className="flex items-start gap-2">
                                    <span className="inline-block w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Love exploring UI design & animations</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="inline-block w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Binge-watching sci-fi movies & shows</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="inline-block w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Losing track of time customizing terminal themes</span>
                                </li>
                            </ul>
                        </div>

                        <div className="border border-neutral-700 rounded-lg p-6 bg-neutral-900/50 backdrop-blur-sm hover:border-neutral-600 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                            <h3 className="font-semibold text-xl mb-4 text-purple-400">Languages I Speak</h3>
                            <ul className="text-left space-y-2 text-neutral-300">
                                <li className="flex items-start gap-2">
                                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>English (Fluent)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Nepali (Native)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Hindi (Conversational)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Spanish & German (Learning... slowly 😅)</span>
                                </li>
                            </ul>
                        </div>

                        <div className="border border-neutral-700 rounded-lg p-6 bg-neutral-900/50 backdrop-blur-sm hover:border-neutral-600 transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                            <h3 className="font-semibold text-xl mb-4 text-amber-400">Achievements</h3>
                            <div className="text-left text-neutral-300">
                                <p className="mb-2 font-medium text-amber-300">IEEE Research Paper Published!</p>
                                <p className="text-sm text-neutral-400 mb-3">
                                    Comparative Study of Code Generation by AI Models
                                </p>
                                <a 
                                    href="https://ieeexplore.ieee.org/document/11052899" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm hover:underline"
                                >
                                    Read Paper →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t p-5 border-neutral-800">
                    <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                        Let's Connect
                    </h2>
                    <p className="text-neutral-400 mb-4 max-w-3xl mx-auto">
                        I am currently looking for real-world opportunities. Feel free to reach out for collaborations or just a friendly chat! My inbox is always open.
                    </p>
                    <div className="flex justify-center gap-4 mb-6">
                        <a 
                            href="https://github.com/mrap10" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-neutral-400 hover:text-white transition-colors duration-300"
                        >
                            GitHub
                        </a>
                        <span className="text-neutral-600">|</span>
                        <a 
                            href="https://www.linkedin.com/in/abhipanthi" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-neutral-400 hover:text-white transition-colors duration-300"
                        >
                            LinkedIn
                        </a>
                        <span className="text-neutral-600">|</span>
                        <a 
                            href="mailto:contact.abhii10@gmail.com"
                            className="text-neutral-400 hover:text-white transition-colors duration-300"
                        >
                            Email
                        </a>
                    </div>
                    <p className="text-neutral-500 text-sm">
                        © 2025 Abhinaya Panthi. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}