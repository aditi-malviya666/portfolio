import React, { useState } from 'react';
import { PERSONAL_INFO, CERTIFICATIONS } from '../data/portfolioData';
import { sound } from '../utils/sound';
import { Github, Linkedin, Mail, ArrowDown, MapPin, Sparkles, Award, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';

interface AboutSectionProps {
  darkMode: boolean;
  onNavigate?: (section: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ darkMode, onNavigate }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    sound.pop();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    confetti({ particleCount: 30, spread: 60, origin: { y: 0.6 } });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="about" className="py-8 sm:py-12 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Status & Location Pills in Dull / Neutral Dark Shades for Light Mode */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-pink-950/40 border border-slate-300/80 dark:border-pink-800/40 text-slate-700 dark:text-pink-300 text-xs font-mono shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open to Work</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-purple-950/40 border border-slate-300/70 dark:border-purple-800/40 text-slate-700 dark:text-purple-300 text-xs font-mono shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-slate-500 dark:text-pink-400" />
            <span>Delhi, India • University of Delhi FoT</span>
          </div>
        </div>

        {/* Two-column layout: Bio left, Quick Stats right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-start">
          {/* Left Column: Bio with Dark/Dull shades in light mode */}
          <div className="lg:col-span-3 space-y-5">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                Hey, I'm{' '}
                <span className="text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-pink-500 dark:via-purple-500 dark:to-indigo-500">
                  Aditi Malviya
                </span>{' '}
                👋
              </h1>

              <p className="text-base sm:text-lg font-medium font-sans text-slate-700 dark:text-purple-200/90 mt-2">
                B.Tech CSE student &amp; Full-Stack Developer
              </p>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed mt-3">
                Specializing in <strong className="font-semibold text-slate-900 dark:text-purple-100">scalable full-stack development</strong> and <strong className="font-semibold text-slate-900 dark:text-purple-100">algorithmic optimization</strong>. 
                GFG Institutional Rank #1 with 350+ DSA solved. Hands-on experience shipping production-ready mobile features and containerized systems. Adept at bridging backend architecture with modern developer workflows.
              </p>
            </div>

            {/* Social Pills: Dark / Dull Shades in Light Mode */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.click()}
                className="px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white dark:bg-purple-950/60 dark:hover:bg-purple-900/60 dark:text-purple-200 border border-slate-800 dark:border-purple-800/50 text-xs font-semibold transition-all shadow-xs flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Github className="w-3.5 h-3.5 text-slate-200 dark:text-purple-300" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.click()}
                className="px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white dark:bg-indigo-950/60 dark:hover:bg-indigo-900/60 dark:text-indigo-200 border border-slate-700 dark:border-indigo-800/50 text-xs font-semibold transition-all shadow-xs flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Linkedin className="w-3.5 h-3.5 text-slate-200 dark:text-indigo-300" />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 dark:bg-pink-950/60 dark:hover:bg-pink-900/60 dark:text-pink-200 dark:border-pink-800/50 text-xs font-medium transition-all shadow-2xs flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-slate-600 dark:text-pink-300" />
                <span>{copied ? '✨ Copied!' : PERSONAL_INFO.email}</span>
              </button>

              <a
                href="mailto:malviyaaditi2006@gmail.com?subject=Opportunity%20for%20Aditi%20Malviya"
                onClick={() => sound.sparkle()}
                className="px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white dark:bg-gradient-to-r dark:from-pink-500 dark:via-purple-500 dark:to-indigo-500 text-xs font-semibold transition-all shadow-xs flex items-center gap-1.5 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Attention Badges: Dull / Dark / Neutral Shades in Light Mode */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-purple-950/50 border border-slate-200 dark:border-purple-800/50 text-slate-700 dark:text-purple-300 flex items-center gap-1.5 shadow-2xs">
                <span>⚡</span> Powered by Curiosity
              </span>
              <span className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-pink-950/50 border border-slate-200 dark:border-pink-800/50 text-slate-700 dark:text-pink-300 flex items-center gap-1.5 shadow-2xs">
                <span>🏆</span> GFG FoT Rank #1
              </span>
              <span className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-violet-950/50 border border-slate-200 dark:border-violet-800/50 text-slate-700 dark:text-violet-300 flex items-center gap-1.5 shadow-2xs">
                <span>🏗️</span> 500K+ Learners Impacted
              </span>
              <span className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-rose-950/50 border border-slate-200 dark:border-rose-800/50 text-slate-700 dark:text-rose-300 flex items-center gap-1.5 shadow-2xs">
                <span>💻</span> ML + Full-Stack Systems
              </span>
            </div>

            {/* Navigate to Projects Button: Dull / Dark Shade in Light Mode */}
            <div className="pt-1">
              <button
                onClick={() => {
                  sound.click();
                  onNavigate?.('projects');
                }}
                className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white dark:bg-gradient-to-r dark:from-purple-600 dark:to-pink-500 dark:hover:from-purple-500 dark:hover:to-pink-400 text-xs font-semibold transition-all shadow-md active:scale-95 hover:scale-105 cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Stats + GitHub Grid */}
          <div className="lg:col-span-2 space-y-4">
            {/* Stats Cards: Clean Slate in Light Mode */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-white dark:from-pink-950/30 dark:to-slate-900/50 border border-slate-200 dark:border-pink-900/50 text-center shadow-xs hover:border-slate-300 transition-colors">
                <div className="text-2xl font-extrabold font-mono text-slate-900 dark:text-pink-400">#1</div>
                <div className="text-[11px] text-slate-500 dark:text-pink-300 font-sans mt-0.5 font-medium">GFG FoT Rank</div>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:from-purple-950/30 dark:to-slate-900/50 border border-slate-200 dark:border-purple-900/50 text-center shadow-xs hover:border-slate-300 transition-colors">
                <div className="text-2xl font-extrabold font-mono text-slate-900 dark:text-purple-400">350+</div>
                <div className="text-[11px] text-slate-500 dark:text-purple-300 font-sans mt-0.5 font-medium">DSA Solved</div>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:from-violet-950/30 dark:to-slate-900/50 border border-slate-200 dark:border-violet-900/50 text-center shadow-xs hover:border-slate-300 transition-colors">
                <div className="text-2xl font-extrabold font-mono text-slate-900 dark:text-violet-400">500K+</div>
                <div className="text-[11px] text-slate-500 dark:text-violet-300 font-sans mt-0.5 font-medium">Learners Impacted</div>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:from-rose-950/30 dark:to-slate-900/50 border border-slate-200 dark:border-rose-900/50 text-center shadow-xs hover:border-slate-300 transition-colors">
                <div className="text-2xl font-extrabold font-mono text-slate-900 dark:text-rose-400">8.7</div>
                <div className="text-[11px] text-slate-500 dark:text-rose-300 font-sans mt-0.5 font-medium">CGPA (DU FoT)</div>
              </div>
            </div>

            {/* GitHub Contribution Graph */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-purple-900/40 shadow-xs backdrop-blur-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-slate-800 dark:text-purple-300" />
                  <span className="text-xs font-semibold text-slate-900 dark:text-purple-200 font-mono">GitHub Activity</span>
                </div>
                <button
                  onClick={() => { sound.click(); onNavigate?.('git-grid'); }}
                  className="text-[10px] font-mono text-slate-600 hover:text-slate-900 dark:text-purple-400 dark:hover:text-pink-500 hover:underline flex items-center gap-0.5 cursor-pointer"
                >
                  Full Activity
                  <ExternalLink className="w-2.5 h-2.5" />
                </button>
              </div>
              <div className="rounded-lg overflow-hidden bg-white dark:bg-[#0d1117] border border-slate-200 dark:border-slate-800 p-1">
                <img
                  src={`https://ghchart.rshah.org/${darkMode ? 'c084fc' : '334155'}/aditi-malviya666`}
                  alt="GitHub Contribution Chart for aditi-malviya666"
                  className="w-full h-auto"
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent && !parent.querySelector('.gh-fallback')) {
                      const fallback = document.createElement('div');
                      fallback.className = 'gh-fallback p-3 text-center';
                      fallback.innerHTML = '<span class="text-xs text-slate-500 font-mono">GitHub activity verified • 350+ commits</span>';
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
              <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>Contributions last year</span>
                <span className="text-slate-900 dark:text-pink-500 font-semibold">aditi-malviya666</span>
              </div>
            </div>

            {/* Certifications preview */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-pink-900/40 shadow-xs backdrop-blur-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-slate-700 dark:text-pink-500" />
                  <span className="text-xs font-semibold text-slate-900 dark:text-pink-200 font-mono">Certifications</span>
                </div>
                <button
                  onClick={() => { sound.click(); onNavigate?.('certifications'); }}
                  className="text-[10px] font-mono text-slate-600 hover:text-slate-900 dark:text-pink-400 dark:hover:text-purple-500 hover:underline flex items-center gap-0.5 cursor-pointer"
                >
                  View All ({CERTIFICATIONS.length})
                  <ExternalLink className="w-2.5 h-2.5" />
                </button>
              </div>
              <div className="space-y-2">
                {CERTIFICATIONS.slice(0, 4).map((cert) => (
                  <div key={cert.id} className="flex items-start gap-2 p-2 rounded-lg bg-slate-50 dark:bg-pink-950/20 border border-slate-200/80 dark:border-pink-950/40">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-700 dark:bg-pink-500 mt-1 shrink-0" />
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] font-semibold text-slate-800 dark:text-slate-200 truncate">{cert.title}</div>
                      <div className="text-[10px] font-mono text-slate-500 dark:text-purple-400">{cert.issuer} · {cert.year}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
