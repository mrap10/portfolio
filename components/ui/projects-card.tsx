"use client";

import { ArrowRightIcon } from "lucide-react";

interface ProjectsCardProps {
    title: string;
    description: string;
    imageUrl?: string;
    projectUrl: string;
    languages: string[];
    icon?: React.ReactNode;
    liveUrl?: string;
    glowColor?: 'emerald' | 'amber' | 'cyan' | 'red';
}

const colorThemes = {
    emerald: {
        shadow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]',
        gradient: 'from-emerald-500/10 via-transparent to-green-500/10',
        titleHover: 'group-hover:text-emerald-400',
        iconHover: 'group-hover:text-emerald-400',
        languageBorder: 'hover:border-emerald-500 hover:shadow-[0_0_10px_rgba(16,185,129,0.5)]',
        liveBg: 'from-emerald-600/20 to-green-600/20 hover:from-emerald-600/40 hover:to-green-600/40',
        liveBorder: 'hover:border-emerald-500',
        liveShadow: 'hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]',
    },
    amber: {
        shadow: 'hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]',
        gradient: 'from-amber-500/10 via-transparent to-yellow-500/10',
        titleHover: 'group-hover:text-amber-400',
        iconHover: 'group-hover:text-amber-400',
        languageBorder: 'hover:border-amber-500 hover:shadow-[0_0_10px_rgba(245,158,11,0.5)]',
        liveBg: 'from-amber-600/20 to-yellow-600/20 hover:from-amber-600/40 hover:to-yellow-600/40',
        liveBorder: 'hover:border-amber-500',
        liveShadow: 'hover:shadow-[0_0_15px_rgba(245,158,11,0.4)]',
    },
    cyan: {
        shadow: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]',
        gradient: 'from-cyan-500/10 via-transparent to-purple-500/10',
        titleHover: 'group-hover:text-cyan-400',
        iconHover: 'group-hover:text-cyan-400',
        languageBorder: 'hover:border-cyan-500 hover:shadow-[0_0_10px_rgba(6,182,212,0.5)]',
        liveBg: 'from-cyan-600/20 to-blue-600/20 hover:from-cyan-600/40 hover:to-blue-600/40',
        liveBorder: 'hover:border-cyan-500',
        liveShadow: 'hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]',
    },
    red: {
        shadow: 'hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]',
        gradient: 'from-red-500/10 via-transparent to-rose-500/10',
        titleHover: 'group-hover:text-red-400',
        iconHover: 'group-hover:text-red-400',
        languageBorder: 'hover:border-red-500 hover:shadow-[0_0_10px_rgba(239,68,68,0.5)]',
        liveBg: 'from-red-600/20 to-rose-600/20 hover:from-red-600/40 hover:to-rose-600/40',
        liveBorder: 'hover:border-red-500',
        liveShadow: 'hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]',
    }
};

export default function ProjectsCard({ title, description, imageUrl, projectUrl, languages, icon, liveUrl, glowColor = 'cyan' }: ProjectsCardProps) {
    const theme = colorThemes[glowColor];
    const handleLiveClick = () => {
        if (liveUrl) {
            window.open(liveUrl, '_blank', 'noopener,noreferrer');
        }
    };

    const handleSourceClick = () => {
        window.open(projectUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className={`group flex flex-col border border-neutral-700 rounded-lg p-6 gap-4 max-w-md relative overflow-hidden transition-all duration-300 hover:border-neutral-500 ${theme.shadow} hover:-translate-y-1 bg-neutral-900/50 backdrop-blur-sm`}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} blur-xl`}></div>
            </div>

            <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <h1 className={`text-2xl font-bold ${theme.titleHover} transition-colors duration-300`}>{title}</h1>
                    {icon && (
                        <div className={`text-neutral-500 ${theme.iconHover} transition-colors duration-300`}>
                            {icon}
                        </div>
                    )}
                </div>
                <p className="text-justify text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{description}</p>
                <div>
                    {languages.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                            {languages.map((lang) => (
                                <span 
                                    key={lang} 
                                    className={`bg-neutral-800 text-neutral-300 px-2 py-1 rounded-full text-sm border border-transparent ${theme.languageBorder} transition-all duration-300 cursor-default`}
                                >
                                    {lang}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <div className="mt-auto flex gap-2">
                    {liveUrl && (
                        <button 
                            onClick={handleLiveClick}
                            className={`w-full p-2 flex justify-between items-center rounded-lg cursor-pointer border border-neutral-600 text-neutral-300 bg-gradient-to-r ${theme.liveBg} ${theme.liveBorder} hover:text-white ${theme.liveShadow} transition-all duration-300`}
                        >
                            Live site <ArrowRightIcon className="w-4 h-4" />
                        </button>
                    )}
                    <button 
                        onClick={handleSourceClick}
                        className="w-full p-2 flex justify-between items-center rounded-lg cursor-pointer border border-neutral-600 text-neutral-300 bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/40 hover:to-pink-600/40 hover:border-purple-500 hover:text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300"
                    >
                        View Source <ArrowRightIcon className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    )
}