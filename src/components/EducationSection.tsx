import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/sound';
import { GraduationCap, Award, BookOpen, Trophy, CheckCircle2, Star, Calendar, MapPin } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 relative animate-fadeIn">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blush-100 dark:bg-purple-950/60 border border-blush-200 dark:border-purple-800/40 text-purple-700 dark:text-purple-300 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION &amp; SCHOLARSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Education &amp; Academic Honors
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 font-sans max-w-2xl">
            Pursuing Computer Science &amp; Engineering at the University of Delhi, combining high academic standing (8.7 CGPA) with competitive programming excellence.
          </p>
        </div>

        {/* Primary University Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-blush-200 dark:border-slate-800 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-blush-100 dark:border-slate-800 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-600 dark:text-purple-400 font-bold mb-1">
                <span>UNDERGRADUATE DEGREE</span>
              </div>
              <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
                {PERSONAL_INFO.education.institution}
              </h3>
              <p className="text-base text-slate-700 dark:text-slate-300 font-medium mt-1">
                {PERSONAL_INFO.education.degree}
              </p>
              <div className="flex items-center gap-4 text-xs text-slate-500 font-sans mt-2">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-pink-500" /> Delhi, India
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-purple-500" /> {PERSONAL_INFO.education.period}
                </span>
              </div>
            </div>

            {/* CGPA Badge */}
            <div className="p-4 rounded-xl bg-gradient-to-tr from-purple-50 to-pink-50 dark:from-purple-950/40 dark:to-pink-950/30 border border-purple-200 dark:border-purple-800/40 text-center min-w-[140px]">
              <div className="text-3xl font-extrabold font-mono text-purple-600 dark:text-purple-400">
                {PERSONAL_INFO.education.cgpa}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-sans font-medium mt-0.5">
                Cumulative CGPA
              </div>
              <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono mt-1 font-semibold">
                Top 5% of Cohort
              </div>
            </div>
          </div>

          {/* Core Coursework Grid */}
          <div className="pt-6">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-purple-500" />
              <span>Key Technical Coursework &amp; Fundamentals</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {PERSONAL_INFO.education.courses.map((course, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-blush-50/60 dark:bg-slate-800/60 border border-blush-200/60 dark:border-slate-700/60 text-xs font-sans text-slate-800 dark:text-slate-200 flex items-center gap-2"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 shrink-0" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Academic & Competitive Honors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Hackathons & Competitions */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-blush-200 dark:border-slate-800 shadow-sm space-y-3.5">
            <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-2">
              <Trophy className="w-5 h-5 text-amber-500" />
              <h4 className="text-base font-bold font-display text-slate-900 dark:text-white">
                Competitive Milestones &amp; Hackathons
              </h4>
            </div>

            <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40">
              <div className="text-xs font-bold text-amber-900 dark:text-amber-200 font-sans flex items-center justify-between">
                <span>🏆 GFG FoT Institutional Rank #1</span>
                <span className="font-mono text-amber-700 dark:text-amber-400">Score: 853</span>
              </div>
              <p className="text-[11px] text-amber-800/80 dark:text-amber-300/80 mt-1 font-sans">
                Ranked #1 out of all students across Faculty of Technology with 350+ solved algorithmic problems.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60">
              <div className="text-xs font-bold text-slate-900 dark:text-slate-200 font-sans">
                🥈 2nd Runner-Up, Offline CP Contest
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                Faculty of Technology, University of Delhi (Annual Technical Festival).
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60">
              <div className="text-xs font-bold text-slate-900 dark:text-slate-200 font-sans">
                🚀 FoT Hackathon (Internal Hackathon, SIH 2024)
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                Participated at Faculty of Technology, University of Delhi on September 6, 2024.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60">
              <div className="text-xs font-bold text-slate-900 dark:text-slate-200 font-sans">
                🧠 IISc Hackathon — Adaptly AI
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                Developed autonomous competency parser mapping dynamic DAG training roadmaps.
              </p>
            </div>
          </div>

          {/* Certifications & Bootcamps */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-blush-200 dark:border-slate-800 shadow-sm space-y-3.5">
            <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-2">
              <Award className="w-5 h-5 text-purple-500" />
              <h4 className="text-base font-bold font-display text-slate-900 dark:text-white">
                Technical Certifications
              </h4>
            </div>

            <div className="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs font-bold text-blue-900 dark:text-blue-200 font-sans">
                    IBM — Applied Artificial Intelligence Professional
                  </div>
                  <div className="text-[11px] text-blue-700 dark:text-blue-300 font-mono mt-0.5">
                    Machine Learning, Deep Learning &amp; Computer Vision (2025)
                  </div>
                </div>
                <span className="text-xs text-blue-600 dark:text-blue-400">📜</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-2 font-sans">
                Professional credential covering neural networks, computer vision models, NLP pipelines, and ethical AI deployment.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-purple-50/60 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900/40">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs font-bold text-purple-900 dark:text-purple-200 font-sans">
                    GeeksforGeeks — Data Structures &amp; Algorithms
                  </div>
                  <div className="text-[11px] text-purple-700 dark:text-purple-300 font-mono mt-0.5">
                    Python &amp; Advanced Algorithms Track (2025–2026)
                  </div>
                </div>
                <span className="text-xs text-purple-600 dark:text-purple-400">📜</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-2 font-sans">
                Rigorous mastery of tree traversals, dynamic programming, backtracking, and graph theory.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-pink-50/60 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-900/40">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs font-bold text-pink-900 dark:text-pink-200 font-sans">
                    GeeksforGeeks — Data Science Bootcamp
                  </div>
                  <div className="text-[11px] text-pink-700 dark:text-pink-300 font-mono mt-0.5">
                    Machine Learning, PyTorch &amp; Analytics (2025–2026)
                  </div>
                </div>
                <span className="text-xs text-pink-600 dark:text-pink-400">📜</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-2 font-sans">
                Hands-on model evaluation, convolutional neural networks, and privacy-preserving federated aggregation.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60">
              <div className="text-xs font-bold text-slate-900 dark:text-slate-200 font-sans">
                Google Big Code Challenge
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-sans">
                Active participant in Google code optimization algorithms &amp; benchmark challenges.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
