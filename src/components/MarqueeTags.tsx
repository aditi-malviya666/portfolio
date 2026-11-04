import React from 'react';
import { sound } from '../utils/sound';

interface TechItem {
  name: string;
  color: string;
  svg: React.ReactNode;
}

export const MarqueeTags: React.FC = () => {
  const techStackRow1: TechItem[] = [
    {
      name: "React 18",
      color: "text-cyan-500",
      svg: (
        <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      )
    },
    {
      name: "Next.js 14",
      color: "text-slate-900 dark:text-white",
      svg: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.1" />
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3.8 13.8L9.5 7.5h1.8l4.9 6.8zM9.5 16.5V9.2h1.6v7.3z" />
        </svg>
      )
    },
    {
      name: "TypeScript",
      color: "text-blue-500",
      svg: (
        <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
          <rect x="2" y="2" width="20" height="20" rx="4" fill="currentColor" fillOpacity="0.15" />
          <path d="M7 8h6v2h-2v6H9v-6H7V8zm8.5 2.5c.8 0 1.5.4 1.5 1.2 0 .9-.6 1.3-1.4 1.5l-.8.2c-.5.1-.8.3-.8.6 0 .3.3.5.7.5.5 0 1-.2 1.3-.4v1.4c-.4.2-.9.3-1.5.3-1.3 0-2.1-.7-2.1-1.7 0-.9.6-1.4 1.5-1.6l.8-.2c.4-.1.7-.2.7-.5 0-.3-.3-.4-.6-.4-.5 0-.9.2-1.2.4V10.8c.4-.2.9-.3 1.5-.3z" />
        </svg>
      )
    },
    {
      name: "Tailwind CSS",
      color: "text-sky-500",
      svg: (
        <svg className="w-4 h-4 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5 1 .2 1.7 1 2.5 1.8 1.3 1.3 2.8 2.7 6 2.7 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-1-.2-1.7-1-2.5-1.8C16.7 7.4 15.2 6 12 6zM5 12c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5 1 .2 1.7 1 2.5 1.8 1.3 1.3 2.8 2.7 6 2.7 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-1-.2-1.7-1-2.5-1.8C9.7 13.4 8.2 12 5 12z" />
        </svg>
      )
    },
    {
      name: "Framer Motion",
      color: "text-blue-600",
      svg: (
        <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 2h16v8h-8zM4 10h8l8 8H4zM4 18h8v4L4 18z" />
        </svg>
      )
    },
    {
      name: "Node.js",
      color: "text-emerald-600",
      svg: (
        <svg className="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2zm0 2.3L5 8.3v7.4l7 4 7-4V8.3l-7-4z" />
        </svg>
      )
    },
    {
      name: "Express",
      color: "text-slate-700 dark:text-slate-300",
      svg: (
        <span className="font-mono font-bold text-xs text-slate-800 dark:text-slate-200">ex</span>
      )
    },
    {
      name: "MongoDB",
      color: "text-green-600",
      svg: (
        <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C10.5 5 6 9.5 6 15c0 3.3 2.7 6 6 6s6-2.7 6-6c0-5.5-4.5-10-6-13zm0 17c-2.2 0-4-1.8-4-4 0-3.5 2.5-6.5 4-8.5 1.5 2 4 5 4 8.5 0 2.2-1.8 4-4 4z" />
        </svg>
      )
    },
    {
      name: "PostgreSQL",
      color: "text-indigo-600",
      svg: (
        <svg className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3a9 9 0 0 0-9 9c0 4 2.6 7.4 6.3 8.6.5.1.7-.2.7-.5v-1.8c-2.5.5-3-1.2-3-1.2-.4-1-1-1.3-1-1.3-.8-.5.1-.5.1-.5.9.1 1.4.9 1.4.9.8 1.4 2.1 1 2.6.8.1-.6.3-1 .6-1.2-2-.2-4.1-1-4.1-4.5 0-1 .4-1.8 1-2.4-.1-.2-.4-1.2.1-2.4 0 0 .8-.3 2.6 1 .8-.2 1.6-.3 2.4-.3.8 0 1.6.1 2.4.3 1.8-1.3 2.6-1 2.6-1 .5 1.2.2 2.2.1 2.4.6.6 1 1.4 1 2.4 0 3.5-2.1 4.3-4.1 4.5.3.3.6.8.6 1.7v2.5c0 .3.2.6.7.5 3.7-1.2 6.3-4.6 6.3-8.6a9 9 0 0 0-9-9z" />
        </svg>
      )
    }
  ];

  const techStackRow2: TechItem[] = [
    {
      name: "Python 3",
      color: "text-blue-500",
      svg: (
        <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a5 5 0 0 0-5 5v2h5v1H5a5 5 0 0 0-5 5 5 5 0 0 0 5 5h2v-2a3 3 0 0 1 3-3h5a3 3 0 0 0 3-3V7a5 5 0 0 0-5-5h-1zm-2 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 18a5 5 0 0 0 5-5v-2h-5v-1h7a5 5 0 0 0 5-5 5 5 0 0 0-5-5h-2v2a3 3 0 0 1-3 3h-5a3 3 0 0 0-3 3v5a5 5 0 0 0 5 5h1zm2-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
        </svg>
      )
    },
    {
      name: "PyTorch & DL",
      color: "text-rose-500",
      svg: (
        <svg className="w-4 h-4 text-rose-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a7 7 0 0 0-7 7c0 2.4 1.2 4.5 3 5.7V18l4 4 4-4v-3.3c1.8-1.2 3-3.3 3-5.7a7 7 0 0 0-7-7zm2 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
        </svg>
      )
    },
    {
      name: "FastAPI",
      color: "text-teal-500",
      svg: (
        <svg className="w-4 h-4 text-teal-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L3 14h7v8l9-12h-7V2z" />
        </svg>
      )
    },
    {
      name: "Docker Containers",
      color: "text-blue-500",
      svg: (
        <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 13c-.3 0-.6.1-.9.2-.5-.8-1.3-1.4-2.3-1.7-.5-1.7-2-3-3.8-3.3V7h-3v2h-2V7H7v2H5V7H2v8c0 3.3 2.7 6 6 6h8c3.3 0 6-2.7 6-6 0-.7-.1-1.3-.4-1.9.3-.1.4-.1.4-.1z" />
        </svg>
      )
    },
    {
      name: "Git & GitHub",
      color: "text-orange-600",
      svg: (
        <svg className="w-4 h-4 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 12a3 3 0 0 0-2.8 2H14a3 3 0 0 0-3-3V9.8a3 3 0 1 0-2 0V15a3 3 0 1 0 2 0v-2a1 1 0 0 1 1-1h2.2A3 3 0 1 0 19 12zM8 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm11-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
        </svg>
      )
    },
    {
      name: "Drizzle ORM",
      color: "text-amber-500",
      svg: (
        <svg className="w-4 h-4 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3L2 12h5v9h10v-9h5L12 3z" />
        </svg>
      )
    },
    {
      name: "Material Design 3",
      color: "text-purple-500",
      svg: (
        <svg className="w-4 h-4 text-purple-500" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M12 7v10M7 12h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: "REST & WebSockets",
      color: "text-emerald-500",
      svg: (
        <svg className="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 12h16M16 6l4 6-4 6" />
        </svg>
      )
    }
  ];

  return (
    <div className="py-6 overflow-hidden select-none space-y-3">
      {/* Row 1: Flowing Left */}
      <div className="flex gap-3 overflow-hidden">
        <div className="flex gap-3 shrink-0 animate-[shimmer_28s_linear_infinite] hover:[animation-play-state:paused]">
          {[...techStackRow1, ...techStackRow1].map((tech, i) => (
            <div
              key={i}
              onClick={() => sound.pop()}
              className="px-4 py-2 rounded-full bg-white dark:bg-[#111622] border border-slate-200/90 dark:border-slate-800 shadow-2xs text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2.5 shrink-0 hover:scale-105 transition-all cursor-pointer"
            >
              <div className="shrink-0 flex items-center justify-center">
                {tech.svg}
              </div>
              <span className="font-sans tracking-tight">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Flowing Right (Reverse) */}
      <div className="flex gap-3 overflow-hidden">
        <div className="flex gap-3 shrink-0 animate-[shimmer_34s_linear_infinite_reverse] hover:[animation-play-state:paused]">
          {[...techStackRow2, ...techStackRow2].map((tech, i) => (
            <div
              key={i}
              onClick={() => sound.pop()}
              className="px-4 py-2 rounded-full bg-white dark:bg-[#111622] border border-slate-200/90 dark:border-slate-800 shadow-2xs text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2.5 shrink-0 hover:scale-105 transition-all cursor-pointer"
            >
              <div className="shrink-0 flex items-center justify-center">
                {tech.svg}
              </div>
              <span className="font-sans tracking-tight">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
