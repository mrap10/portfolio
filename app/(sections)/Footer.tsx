"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Footer() {
    const { ref, isRevealed } = useScrollReveal();
    
    return (
        <footer className="bg-black text-white">
            <div ref={ref} className={`max-w-6xl mx-auto px-4 text-center scroll-reveal space-y-6 ${isRevealed ? 'revealed' : ''}`}>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-8 max-w-5xl mx-auto mt-8">
                        <div>
                            <h3 className="font-semibold mb-4 text-xl text-gray-200">Languages I speak: </h3>
                            <p className="text-neutral-400 text-base"> English (Professional), Nepali (Native), Hindi (Conversational), German (Learning)</p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-xl mb-4 text-gray-200">Publications:</h3>
                            <div className="flex justify-between items-center text-left text-neutral-300">
                                <p className="text-sm text-neutral-400 mr-3">
                                    Comparative Study of Code Generation by AI Models (IEEE Xplore, 2025)
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
                    <div className="flex justify-center items-center">
                        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-gray-200">
                            Let's Connect
                        </h2>
                        <div className="inline-block border-2 border-green-600 bg-emerald-400/30 ml-10 px-3 py-1 rounded-full text-sm font-medium mb-4">
                            <span className="inline-block w-3 h-3 rounded-full bg-green-600 mr-2"></span> Open to work
                        </div>
                    </div>
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
                        © {new Date().getFullYear()} Abhinaya Panthi. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}