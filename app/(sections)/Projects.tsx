"use client";

import ProjectsCard from "@/components/ui/projects-card"
import { Keyboard, Building2, Star, Sparkles } from "lucide-react"
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Projects() {
    const { ref, isRevealed } = useScrollReveal();
    
    const projectsData = [
        {
            title: "Touch Type Pro",
            description: "A web application to help users improve their typing speed and accuracy through interactive lessons and real-time feedback.",
            projectUrl: "https://github.com/mrap10/touch-type-pro",
            liveUrl: "https://touchtypepro.vercel.app/",
            languages: ["Next.js", "Typescript", "Prisma", "PostgreSQL", "Socket.io", "Docker", "Tailwind CSS"],
            icon: <Keyboard className="w-6 h-6" />,
            glowColor: 'emerald' as const
        }, {
            title: "Hostel Management System",
            description: "A full stack project for Wardens and Students to manage hostel related operations like handling complaints, leaves, issuing notices, student management and more",
            projectUrl: "https://github.com/mrap10/hostel-ms",
            languages: ["React.js", "Typescript", "Express.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
            icon: <Building2 className="w-6 h-6" />,
            glowColor: 'amber' as const
        }, {
            title: "Store Ratings Management System",
            description: "A full stack  role-based web application that allows users to rate and review stores, providing valuable feedback for both store owners and customers along with admin controls.",
            projectUrl: "https://github.com/mrap10/store-rating-management-system",
            languages: ["React.js", "Typescript", "Express.js", "Prisma", "PostgreSQL", "Zustand", "Tailwind CSS"],
            icon: <Star className="w-6 h-6" />,
            glowColor: 'cyan' as const
        }, {
            title: "Netflix-GPT",
            description: "An AI-powered Netflix-like web application that allows user to browse through movie and tv-shows lists, view their details and also get AI-based personalized movie and TV show recommendations",
            projectUrl: "https://github.com/mrap10/netflix-gpt",
            languages: ["React.js", "Firebase", "Gemini API", "React redux", "Tailwind CSS"],
            icon: <Sparkles className="w-6 h-6" />,
            glowColor: 'red' as const
        }
    ]

    return (
        <div id="projects" className="my-10 pt-5 flex flex-col items-center justify-center">
            <div ref={ref} className={`scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
                <h1 className="text-3xl font-bold text-center">Featured Projects</h1>
                <p className="text-neutral-400 text-center">Some of my projects that showcase my skills and expertise in web development.</p>
            </div>
            <div className={`grid md:grid-cols-2 gap-8 mt-8 scroll-reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '0.2s' }}>
                {projectsData.map((project) => (
                    <ProjectsCard 
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        projectUrl={project.projectUrl}
                        liveUrl={project.liveUrl}
                        languages={project.languages}
                        icon={project.icon}
                        glowColor={project.glowColor}
                    />
                ))}
            </div>
        </div>
    )
}