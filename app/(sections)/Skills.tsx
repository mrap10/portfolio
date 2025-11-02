"use client";

import SkillsCard from "@/components/ui/skills-card";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Skills() {
    const { ref, isRevealed } = useScrollReveal();
    
    const skillsData = [
        {
            category: "Frontend",
            skills: ["React", "Next.js", "Tailwind CSS", "Zustand", "Framer Motion"],
            type: 'frontend' as const,
            gradient: 'from-cyan-400 to-blue-600'
        },
        {
            category: "Backend",
            skills: ["Node.js", "Express.js", "Hono", "Websockets", "PostgreSQL", "Prisma", "REST APIs"],
            type: 'backend' as const,
            gradient: 'from-emerald-400 to-green-600'
        },
        {
            category: "Tools & Platforms",
            skills: ["Git", "Docker", "Bash", "Vim", "AWS"],
            type: 'tools' as const,
            gradient: 'from-amber-400 to-yellow-600'
        },
        {
            category: "Languages",
            skills: ["Javascript", "Typescript", "Java", "SQL"],
            type: 'languages' as const,
            gradient: 'from-purple-400 to-pink-600'
        },
        {
            category: "Currently Learning",
            skills: ["AI/ML Integration", "System Design"],
            type: 'learning' as const,
            gradient: 'from-pink-400 to-rose-600'
        }
    ];

    return (
        <div className="py-10 flex flex-col items-center justify-center px-4">
            <div ref={ref} className={`scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
                <h1 className="font-bold text-3xl mb-8 text-center">Skills & Technologies</h1>
            </div>
            
            <div className={`max-w-6xl w-full border border-neutral-700 rounded-lg p-8 bg-neutral-900/50 backdrop-blur-sm hover:border-neutral-600 transition-all duration-300 scroll-reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '0.2s' }}>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                    {skillsData.map((skillGroup) => (
                        <div 
                            key={skillGroup.category}
                            className="flex flex-col items-center text-center"
                        >
                            <h2 className={`font-bold text-lg mb-3 bg-clip-text text-transparent bg-gradient-to-r ${skillGroup.gradient}`}>
                                {skillGroup.category}
                            </h2>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {skillGroup.skills.map((skill) => (
                                    <SkillsCard 
                                        key={skill}
                                        skill={skill}
                                        category={skillGroup.type}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}