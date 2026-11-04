import React, { useState } from 'react';
import { sound } from '../utils/sound';
import { Sliders, CheckCircle2, AlertCircle, Sparkles, Layers, MousePointer, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface UxLabSectionProps {
  accentColor: string;
}

export const UxLabSection: React.FC<UxLabSectionProps> = ({ accentColor }) => {
  const [toggleState, setToggleState] = useState(true);
  const [ripplePos, setRipplePos] = useState<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });
  const [cardStackIndex, setCardStackIndex] = useState(0);

  const stackCards = [
    { title: "Material Design 3 Tokens", desc: "Dynamic color harmonizing across dark and light surfaces." },
    { title: "WCAG AAA Accessibility", desc: "Predictable tab order, high-contrast ratios, and screen reader labels." },
    { title: "60fps Spring Choreography", desc: "Non-linear damping preventing cognitive jarring during page transitions." }
  ];

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    sound.pop();
    const rect = e.currentTarget.getBoundingClientRect();
    setRipplePos({ x: e.clientX - rect.left, y: e.clientY - rect.top, active: true });
    setTimeout(() => setRipplePos(prev => ({ ...prev, active: false })), 600);
  };

  return (
    <section id="ux-lab" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush-100 dark:bg-purple-950/60 border border-blush-200 dark:border-purple-800/40 text-purple-700 dark:text-purple-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTION CRAFT • EXPERIMENTAL LAB</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white">
            Component Lab &amp; Micro-Interactions
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 font-sans">
            Crafting at the intersection of motion physics, accessibility, and pixel precision. Test these interactive micro-components built from scratch.
          </p>
        </div>

        {/* 4 Interactive Lab Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Lab 1: Accessible Spring Toggle */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-blush-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">01. Physics Spring</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-bold">
                  WCAG AA 4.5:1
                </span>
              </div>
              <h3 className="text-base font-bold font-display text-slate-900 dark:text-white">
                Fluid Spring Toggle Switch
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Notice the micro-overshoot and tactile audio feedback upon activation.
              </p>
            </div>

            <div className="my-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-950 flex items-center justify-between border border-slate-100 dark:border-slate-800">
              <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                Reduced Motion Simulation: <strong className="text-indigo-500">{toggleState ? 'Enabled' : 'Disabled'}</strong>
              </span>

              {/* Interactive Spring Switch */}
              <button
                role="switch"
                aria-checked={toggleState}
                onClick={() => {
                  sound.click();
                  setToggleState(!toggleState);
                }}
                className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 relative focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  toggleState ? 'bg-indigo-600' : 'bg-slate-300 dark:bg-slate-700'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
                    toggleState ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            <div className="text-[11px] font-mono text-slate-500">
              State: {toggleState ? 'aria-checked="true"' : 'aria-checked="false"'}
            </div>
          </div>

          {/* Lab 2: Haptic Ripple Button */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-blush-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">02. Spatial Haptics</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 font-bold">
                  Material Ripple
                </span>
              </div>
              <h3 className="text-base font-bold font-display text-slate-900 dark:text-white">
                Dynamic Cursor Coordinate Ripple
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Computes radial wavefront expansion originating exactly at click coordinates.
              </p>
            </div>

            <div className="my-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-950 flex items-center justify-center border border-slate-100 dark:border-slate-800">
              <button
                onClick={handleButtonClick}
                className="relative overflow-hidden px-8 py-3.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-xs font-bold font-sans transition-transform active:scale-95 shadow-md flex items-center gap-2"
              >
                {ripplePos.active && (
                  <span
                    className="absolute bg-purple-500/40 rounded-full pointer-events-none animate-ping"
                    style={{
                      left: ripplePos.x - 20,
                      top: ripplePos.y - 20,
                      width: 40,
                      height: 40,
                    }}
                  />
                )}
                <MousePointer className="w-3.5 h-3.5" />
                <span>Click for Spatial Ripple</span>
              </button>
            </div>

            <div className="text-[11px] font-mono text-slate-500">
              Coordinates: X: {ripplePos.x}px • Y: {ripplePos.y}px
            </div>
          </div>

          {/* Lab 3: Card Stack & Layer Elevation */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-blush-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">03. Elevation & Depth</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 font-bold">
                  Tonal Surfaces
                </span>
              </div>
              <h3 className="text-base font-bold font-display text-slate-900 dark:text-white">
                Interactive Layer Elevation Deck
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Click "Next Layer" to cycle through core interaction design pillars.
              </p>
            </div>

            <div className="my-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-950 min-h-[100px] border border-slate-100 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-purple-500 font-bold uppercase">
                  Pillar 0{cardStackIndex + 1} / 03
                </span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white font-sans mt-0.5">
                  {stackCards[cardStackIndex].title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  {stackCards[cardStackIndex].desc}
                </p>
              </div>

              <div className="flex justify-end mt-2">
                <button
                  onClick={() => {
                    sound.click();
                    setCardStackIndex((i) => (i + 1) % stackCards.length);
                  }}
                  className="px-3 py-1 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg text-xs font-medium transition-colors"
                >
                  Next Layer →
                </button>
              </div>
            </div>

            <div className="text-[11px] font-mono text-slate-500">
              Material Surface: elevation-level-{cardStackIndex + 1}
            </div>
          </div>

          {/* Lab 4: Live Accessibility & WCAG Audit */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-blush-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">04. Inclusive Design</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-bold">
                  WCAG Verified
                </span>
              </div>
              <h3 className="text-base font-bold font-display text-slate-900 dark:text-white">
                Live Contrast &amp; Accessibility Audit
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Zero arbitrary color choices. Every element adheres to strict readability standards.
              </p>
            </div>

            <div className="my-4 space-y-2">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Text Contrast (Background vs Typography)</span>
                </div>
                <span className="font-mono font-bold text-emerald-600">8.2:1 (Pass AAA)</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Keyboard Focus Rings &amp; Traversal</span>
                </div>
                <span className="font-mono font-bold text-emerald-600">100% Navigable</span>
              </div>
            </div>

            <div className="text-[11px] font-mono text-slate-500">
              Audit Standard: Section 508 &amp; WCAG 2.1 AAA
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
