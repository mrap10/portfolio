interface SkillsCardProps {
    skill: string;
    category?: 'frontend' | 'backend' | 'tools' | 'languages' | 'learning';
}

const categoryColors = {
    frontend: 'hover:border-cyan-500 hover:shadow-[0_0_10px_rgba(6,182,212,0.5)] hover:text-cyan-400',
    backend: 'hover:border-emerald-500 hover:shadow-[0_0_10px_rgba(16,185,129,0.5)] hover:text-emerald-400',
    tools: 'hover:border-amber-500 hover:shadow-[0_0_10px_rgba(245,158,11,0.5)] hover:text-amber-400',
    languages: 'hover:border-purple-500 hover:shadow-[0_0_10px_rgba(168,85,247,0.5)] hover:text-purple-400',
    learning: 'hover:border-pink-500 hover:shadow-[0_0_10px_rgba(236,72,153,0.5)] hover:text-pink-400',
};

export default function SkillsCard({ skill, category = 'frontend' }: SkillsCardProps) {
    const colorClass = categoryColors[category];

    return (
        <span 
            className={`bg-neutral-800 text-neutral-300 px-3 py-2 rounded-full text-sm border border-transparent ${colorClass} transition-all duration-300 cursor-default hover:scale-105`}
        >
            {skill}
        </span>
    );
}