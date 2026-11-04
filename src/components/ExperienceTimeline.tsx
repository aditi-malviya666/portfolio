import React from 'react';
import { EXPERIENCES, PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/sound';
import { Briefcase, GraduationCap, Award, CheckCircle2, Trophy, Code2 } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush-100 dark:bg-purple-950/60 border border-blush-200 dark:border-purple-800/40 text-purple-700 dark:text-purple-300 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>TRAJECTORY • ENGINEERING &amp; CONTRIBUTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white">
            Experience &amp; Milestones
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 font-sans max-w-2xl">
            From deploying scalable mobile features for half a million learners to contributing core algorithmic optimizations to open source.
          </p>
        </div>

        {/* Experience Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Experience Column (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-blush-200 dark:border-slate-800 shadow-xs hover:border-purple-400 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-blush-100 dark:border-slate-800 gap-2">
                  <div>
                    <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-purple-600 dark:text-purple-400 font-sans">
                      {exp.company}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-blush-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                      {exp.period}
                    </span>
                    <div className="text-[11px] text-slate-400 mt-1 font-sans">
                      {exp.location} • {exp.type}
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  {exp.description}
                </p>

                <div className="mt-4 space-y-2">
                  {exp.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{ach}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-3 border-t border-blush-100 dark:border-slate-800/80 flex flex-wrap gap-1.5">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md bg-blush-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[11px] font-mono border border-blush-200/50 dark:border-transparent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education & Achievements Column (1 col) */}
          <div className="space-y-6">
            
            {/* Education Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-blush-200 dark:border-slate-800 shadow-xs">
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-3">
                <GraduationCap className="w-5 h-5" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">Formal Education</span>
              </div>
              <h4 className="text-base font-bold font-display text-slate-900 dark:text-white">
                {PERSONAL_INFO.education.institution}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                {PERSONAL_INFO.education.degree}
              </p>
              <div className="mt-4 p-3 rounded-xl bg-blush-50 dark:bg-purple-950/40 border border-blush-200 dark:border-purple-900/40 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-600 dark:text-slate-400">Cumulative CGPA:</span>
                <span className="text-purple-600 dark:text-purple-400 font-bold">{PERSONAL_INFO.education.cgpa}</span>
              </div>
              <div className="text-[11px] text-slate-400 mt-2 font-mono">
                Duration: {PERSONAL_INFO.education.period}
              </div>
            </div>

            {/* Honors & Accolades */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-blush-200 dark:border-slate-800 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-amber-500 mb-1">
                <Trophy className="w-5 h-5" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">Competitive Honors</span>
              </div>

              <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40">
                <div className="text-xs font-bold text-amber-900 dark:text-amber-200 font-sans">
                  🏆 GeeksforGeeks FoT Institutional Rank #1
                </div>
                <div className="text-[11px] text-amber-700 dark:text-amber-400 mt-0.5 font-mono">
                  Score: 853 • Solved 350+ DSA problems across LeetCode &amp; GFG
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60">
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200 font-sans">
                  🥈 2nd Runner-Up, Offline Coding Contest
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-sans">
                  University of Delhi, Faculty of Technology
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60">
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200 font-sans">
                  ⭐ Google Big Code Challenge Participant
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-sans">
                  Engaged in Google algorithmic optimization tracks
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
