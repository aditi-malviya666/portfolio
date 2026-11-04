import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Palette, Code, Server, Cpu, Check } from 'lucide-react';

export const SkillsGrid: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'palette': return <Palette className="w-5 h-5 text-indigo-500" />;
      case 'code': return <Code className="w-5 h-5 text-sky-500" />;
      case 'server': return <Server className="w-5 h-5 text-emerald-500" />;
      case 'cpu': return <Cpu className="w-5 h-5 text-amber-500" />;
      default: return <Code className="w-5 h-5 text-indigo-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush-100 dark:bg-purple-950/60 border border-blush-200 dark:border-purple-800/40 text-purple-700 dark:text-purple-300 text-xs font-mono mb-3">
            <span>TOOLING &amp; CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white">
            Technical &amp; UX Toolkit
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 font-sans">
            A comprehensive matrix balancing human interaction design with high-performance production engineering.
          </p>
        </div>

        {/* 4 Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((cat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-blush-200 dark:border-slate-800 shadow-xs hover:border-purple-300 dark:hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 shrink-0">
                  {getIcon(cat.icon)}
                </div>
                <div>
                  <h3 className="text-base font-bold font-display text-slate-900 dark:text-white">
                    {cat.title}
                  </h3>
                  <div className="text-xs text-slate-500 font-sans">
                    {cat.subtitle}
                  </div>
                </div>
              </div>

              <div className="mt-5 space-y-3.5">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex items-center justify-between text-xs font-sans mb-1">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        {skill.name}
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">
                        {skill.note}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-sky-400 transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
