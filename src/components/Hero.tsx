import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/sound';
import { Sparkles, Sliders, ArrowDown, ExternalLink, Github, Award, Terminal, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

interface HeroProps {
  accentColor: string;
  setAccentColor: (color: string) => void;
  borderRadius: number;
  setBorderRadius: (radius: number) => void;
}

export const Hero: React.FC<HeroProps> = ({
  accentColor,
  setAccentColor,
  borderRadius,
  setBorderRadius,
}) => {
  const [copied, setCopied] = useState(false);

  const colors = [
    { label: 'Google Blue', value: '#1a73e8' },
    { label: 'Google Green', value: '#34a853' },
    { label: 'Google Yellow', value: '#fbbc04' },
    { label: 'Google Red', value: '#ea4335' },
    { label: 'Creative Violet', value: '#6366f1' },
  ];

  const handleCopyEmail = () => {
    sound.pop();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    confetti({ particleCount: 25, spread: 60, origin: { y: 0.7 } });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Background ambient gradient glow */}
      <div 
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full blur-[120px] opacity-20 pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: accentColor }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Availability Badge */}
        <div className="flex items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>OPEN FOR GOOGLE UI/UX &amp; FRONTEND ROLES</span>
          </div>
          <span className="hidden sm:inline-block text-xs font-mono text-slate-400">
            Delhi, India • B.Tech CSE (DU FoT)
          </span>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight leading-[1.08]">
            Designing intuitive systems.{' '}
            <span 
              className="text-transparent bg-clip-text bg-gradient-to-r transition-all duration-500"
              style={{
                backgroundImage: `linear-gradient(to right, ${accentColor}, #ec4899, #8b5cf6)`
              }}
            >
              Engineering interactive delight.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 font-sans leading-relaxed max-w-3xl">
            Hi, I'm <strong className="font-semibold text-slate-900 dark:text-white">Aditi Malviya</strong>. 
            I bridge the divide between human-centered interaction design and high-performance engineering. 
            Equipped with algorithmic rigor (<span className="text-indigo-600 dark:text-indigo-400 font-mono font-semibold">GFG Institutional Rank #1, 350+ DSA</span>) and hands-on experience shipping features to <span className="font-semibold text-slate-900 dark:text-white">500K+ learners</span>.
          </p>
        </div>

        {/* Primary CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            onClick={() => sound.click()}
            style={{ borderRadius: `${borderRadius}px` }}
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-semibold text-sm transition-all shadow-md active:scale-95 flex items-center gap-2"
          >
            <span>Explore Case Studies</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <button
            onClick={handleCopyEmail}
            style={{ borderRadius: `${borderRadius}px` }}
            className="px-5 py-3 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 text-sm font-medium transition-all shadow-xs active:scale-95 flex items-center gap-2"
          >
            <span>{copied ? 'Copied to Clipboard! 🎉' : 'Copy Email (malviyaaditi2006@gmail.com)'}</span>
          </button>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            onClick={() => sound.click()}
            style={{ borderRadius: `${borderRadius}px` }}
            className="p-3 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-colors"
            title="GitHub Profile (aditi-malviya666)"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>

        {/* Real-Time Google Design Token Playground */}
        <div 
          className="mt-12 p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 shadow-xl"
          style={{ borderRadius: `${Math.max(16, borderRadius * 1.3)}px` }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 gap-3">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-indigo-500" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                Google Material 3 Live Token Playground
              </span>
            </div>
            <span className="text-[11px] text-slate-400 font-sans">
              Test dynamic tokens live across this portfolio
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-5">
            {/* Left: Dynamic Color Accent Selector */}
            <div>
              <label className="text-xs font-medium text-slate-700 dark:text-slate-300 block mb-2 font-sans">
                Material You Seed Color:
              </label>
              <div className="flex items-center gap-2.5">
                {colors.map((c) => (
                  <button
                    key={c.value}
                    onClick={() => { sound.click(); setAccentColor(c.value); }}
                    style={{ backgroundColor: c.value }}
                    className={`w-7 h-7 rounded-full transition-transform active:scale-90 ${
                      accentColor === c.value ? 'ring-4 ring-slate-400/30 scale-110 shadow-md' : 'opacity-85 hover:opacity-100'
                    }`}
                    title={c.label}
                  />
                ))}
              </div>
            </div>

            {/* Right: Corner Radius Slider */}
            <div>
              <div className="flex items-center justify-between text-xs font-medium text-slate-700 dark:text-slate-300 mb-2 font-sans">
                <span>Corner Shape Token:</span>
                <span className="font-mono text-indigo-500 font-bold">{borderRadius}px</span>
              </div>
              <input
                type="range"
                min="4"
                max="28"
                value={borderRadius}
                onChange={(e) => {
                  sound.click();
                  setBorderRadius(Number(e.target.value));
                }}
                className="w-full accent-indigo-600 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Metrics Banner */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {PERSONAL_INFO.metrics.map((metric, i) => (
            <div
              key={i}
              style={{ borderRadius: `${borderRadius}px` }}
              className="p-4 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/80 dark:border-slate-800/80 text-center"
            >
              <div 
                className="text-2xl sm:text-3xl font-extrabold font-mono transition-colors"
                style={{ color: accentColor }}
              >
                {metric.value}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-sans mt-0.5">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
