"use client";

import ProjectsCard from "@/components/ui/projects-card"
import { Keyboard, Building2, Sparkles, IndianRupee, Star, Code2, Terminal, TreePine } from "lucide-react"
import { useScrollReveal } from "../hooks/useScrollReveal";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { useState } from "react";

export default function Projects() {
    const { ref, isRevealed } = useScrollReveal();
    const [showAll, setShowAll] = useState(false);


    const projectsData = [
        {
            title: "ReqRes",
            description: "LeetCode-style challenges, but for Express.js. Build real APIs, implement auth flows, and get instant feedback.",
            projectUrl: "https://github.com/mrap10/reqres",
            liveUrl: "https://reqres.online",
            languages: ["Typescript", "Next.js", "Express.js", "Prisma", "PostgreSQL", "Docker", "Redis", "BullMQ", "Sentry"],
            icon: <Code2 className="w-6 h-6" />,
            glowColor: "indigo" as const
        },
        {
            title: "Touch Type Pro",
            description: "A web application to help users improve their typing speed and accuracy through interactive lessons and real-time feedback.",
            projectUrl: "https://github.com/mrap10/touch-type-pro",
            liveUrl: "https://touchtypepro.vercel.app/",
            languages: ["Next.js", "Typescript", "Prisma", "PostgreSQL", "Socket.io", "Docker", "Tailwind CSS"],
            icon: <Keyboard className="w-6 h-6" />,
            glowColor: 'emerald' as const
        }, {
            title: "Tazapay Wallet App",
            description: "A turbo repo based monorepo project for a digital wallet application with user, merchant apps and bank webhook simulations",
            projectUrl: "https://github.com/mrap10/tazapay",
            languages: ["Next.js", "Typescript", "Turborepo", "Prisma", "PostgreSQL", "NextAuth", "Recoil", "Tailwind CSS"],
            icon: <IndianRupee className="w-6 h-6" />,
            glowColor: 'violet' as const
        }, {
            title: "Hostel Management System",
            description: "A full stack project for Wardens and Students to manage hostel related operations like handling complaints, leaves, issuing notices, student management and more",
            projectUrl: "https://github.com/mrap10/hostel-ms",
            languages: ["React.js", "Typescript", "Express.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
            icon: <Building2 className="w-6 h-6" />,
            glowColor: 'amber' as const
        }, {
            title: "Create-Express-Preset",
            description: "A production-ready CLI tool for scaffolding modern Express.js applications with TypeScript, Prisma ORM, JWT authentication, and modular addons.",
            projectUrl: "https://github.com/mrap10/create-express-preset",
            liveUrl: "https://www.npmjs.com/package/create-express-preset",
            languages: ["Typescript", "Express.js", "Prisma", "PostgreSQL", "Zod", "Swagger", "Jest", "Resend"],
            icon: <Terminal className="w-6 h-6" />,
            glowColor: 'cyan' as const
        }, {
            title: "Git Naughty-or-Nice",
            description: "A fun christmas app to check if your GitHub contributions this year were naughty or nice, whether you deserve coal or cookies!",
            projectUrl: "https://github.com/mrap10/git-naughty-or-nice",
            liveUrl: "https://gitkarma.vercel.app",
            languages: ["Next.js", "Typescript",  "Tailwind CSS", "Github API", "Motion"],
            icon: <TreePine className="w-6 h-6" />,
            glowColor: 'rose' as const
        }, {
            title: "Netflix-GPT",
            description: "An AI-powered Netflix-like web application that allows user to browse through movie and tv-shows lists, view their details and also get AI-based personalized movie and TV show recommendations",
            projectUrl: "https://github.com/mrap10/netflix-gpt",
            languages: ["React.js", "Firebase", "Gemini API", "React redux", "Tailwind CSS"],
            icon: <Sparkles className="w-6 h-6" />,
            glowColor: 'red' as const
        }, {
            title: "Store Ratings Management System",
            description: "A full stack  role-based web application that allows users to rate and review stores, providing valuable feedback for both store owners and customers along with admin controls.",
            projectUrl: "https://github.com/mrap10/store-rating-management-system",
            languages: ["React.js", "Typescript", "Express.js", "Prisma", "PostgreSQL", "Zustand", "Tailwind CSS"],
            icon: <Star className="w-6 h-6" />,
            glowColor: 'cyan' as const
        }
    ];

    return (
        <div id="projects" className="my-10 pt-5 flex flex-col items-center justify-center">
            <div ref={ref} className={`scroll-reveal ${isRevealed ? 'revealed' : ''}`}>
                <h1 className="text-3xl font-bold text-center text-gray-200 mb-1">Featured Projects</h1>
                <p className="text-neutral-400 text-center sm:px-0 px-2">Some of my projects that showcase my skills and expertise in web development.</p>
            </div>
            <div className={`grid md:grid-cols-2 gap-8 mt-8 scroll-reveal ${isRevealed ? 'revealed' : ''}`} style={{ transitionDelay: '0.2s' }}>
                {projectsData.slice(0, showAll ? projectsData.length : 4).map((project) => (
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
            <div className="mt-8">
                <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="bg-black text-white flex items-center space-x-2 cursor-pointer"
                    onClick={() => setShowAll(!showAll)}
                >
                    {showAll ? 'Show Less' : 'View More Projects'}
                </HoverBorderGradient>
            </div>
        </div>
    )
}