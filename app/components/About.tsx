"use client";

import abhi from "@/public/pfp.gif";
import ImagePortal from "@/components/ui/image-portal";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export default function About() {
    return (
        <div className="min-h-screen bg-black text-white pt-20 px-4">
            <div className="max-w-6xl mx-auto md:flex md:flex-col items-center justify-center space-y-7">
                <div className="md:flex gap-20">
                    <div className="flex items-center justify-center mb-16">
                        <ImagePortal 
                            imageSrc={abhi}
                            alt="Profile Image"
                            imageSize={350}
                        />
                    </div>

                    <div>
                        <h2 className="pl-5 text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                            About Me
                        </h2>
                        <p className="text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                            Full-stack developer with a knack for crafting clean, efficient, and user-focused web applications. Skilled in React, Next.js, Express, and PostgreSQL, I enjoy building seamless digital experiences from frontend to backend. Passionate about modern technologies, continuous learning, and delivering impactful solutions that make a real difference.
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <div className="px-15 py-7 text-center text-neutral-300 border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 rounded-lg max-w-4xl mx-auto">
                        <div className="md:flex justify-around items-center gap-10">
                            <div className="flex flex-col gap-3 items-center justify-center">
                                <h1 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-600">Education</h1>
                                <p className="mt-3 font-semibold">B.Tech Computer Science and Engineering</p>
                                <p>Jain University, Bengaluru, Karnataka</p>
                                <p className="text-neutral-400">Aug 2022 - Jul 2026</p>
                                <p className="text-cyan-500">Current CGPA: 9.0</p>
                            </div>
                            <hr className="mt-5 border-neutral-700 md:hidden" />
                            <div className="border-l border-neutral-700 h-52 hidden md:block" />
                            <div className="flex flex-col gap-3 items-center justify-center">
                                <h1 className="mt-4 text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-600">Contact</h1>
                                <p>Bangalore, India</p>
                                <p className="flex items-center gap-2">
                                    <Mail className="text-red-500 w-4 h-4" /> contact.abhii10@gmail.com
                                </p>
                                <p className="flex items-center gap-2 hover:underline cursor-pointer">abhi.codes <ArrowUpRight className="text-blue-500 w-4 h-4" /></p>
                                <div className="flex justify-between items-center gap-5">
                                    <button className="rounded-full border border-neutral-600 hover:border-white p-2 mt-2 flex items-center justify-center gap-2 cursor-pointer">
                                        <Github className="w-5 h-5" />
                                    </button>
                                    <button className="rounded-full border border-neutral-600 hover:border-white p-2 mt-2 flex items-center justify-center gap-2 cursor-pointer">
                                        <Linkedin className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}