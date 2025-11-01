"use client";

import { BackgroundLines } from "@/components/ui/background-lines";
import { Button } from "@/components/ui/button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { ArrowDownIcon, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
    return (
        <BackgroundLines className="relative flex items-center justify-center w-full min-h-screen flex-col px-4 bg-black">
            <div className="flex flex-col items-center justify-center flex-1">
                <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                    Hey, I'm Abhinaya. <br /> Full Stack Developer.
                </h2>
                <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-400 text-center">
                    Turning ideas into elegant, functional code. One commit at a time.
                </p>

                <div className="mt-10 flex items-center justify-center space-x-10">
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="bg-black text-white flex items-center space-x-2 cursor-pointer"
                    >
                        View Projects
                    </HoverBorderGradient>
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="bg-black text-white flex items-center space-x-2 cursor-pointer"
                    >
                        About Me
                    </HoverBorderGradient>
                </div>

                <div className="mt-10 flex items-center justify-center space-x-5">
                    <Button 
                        variant="outline" 
                        size="icon" 
                        className={cn(
                            "rounded-full cursor-pointer transition-colors",
                            "hover:!bg-neutral-800 dark:hover:!bg-neutral-700"
                        )}
                        onClick={() => window.open("https://github.com/mrap10", "_blank")}
                    >
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path fill="white" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                    </Button>
                    <Button 
                        variant="outline" 
                        size="icon" 
                        className={cn(
                            "rounded-full cursor-pointer transition-colors",
                            "hover:!bg-blue-500/20 dark:hover:!bg-blue-700"
                        )}
                    >
                        <Linkedin />
                    </Button>
                    <Button 
                        variant="outline" 
                        size="icon" 
                        className={cn(
                            "rounded-full cursor-pointer transition-colors", 
                            "hover:!bg-neutral-800 dark:hover:!bg-neutral-700"
                        )}
                    >
                        <Mail />
                    </Button>
                </div>
            </div>

            <Button 
                variant="outline" 
                size="icon" 
                className={cn(
                    "absolute bottom-8 rounded-full animate-pulse hover:animate-none cursor-pointer transition-colors",
                    "hover:bg-neutral-800 dark:hover:bg-neutral-700"
                )}
            >
                <ArrowDownIcon />
            </Button>
        </BackgroundLines>
    )
}