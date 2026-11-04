import React, { useState } from 'react';
import { sound } from '../utils/sound';
import { Heart, Moon, Sun, Sparkles, Coffee, Gift, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export const AnimalSanctuary: React.FC = () => {
  const [isAsleep, setIsAsleep] = useState<boolean>(false);
  const [mochiHearts, setMochiHearts] = useState<number>(12);
  const [bubuTreats, setBubuTreats] = useState<number>(8);
  const [pipMelodies, setPipMelodies] = useState<number>(5);

  const [activeSpeech, setActiveSpeech] = useState<string>(
    "Psst! Aditi built us with pure SVG & CSS spring physics! Give us a pet or a treat!"
  );

  const [yarnPosition, setYarnPosition] = useState<number>(0);
  const [isYarnActive, setIsYarnActive] = useState<boolean>(false);

  // Pet Mochi
  const petMochi = () => {
    sound.purr();
    setMochiHearts(h => h + 1);
    setActiveSpeech("Mochi: *Purrrrrr* ~ Great software is made of thoughtful micro-details!");
  };

  // Feed Bubu
  const feedBubu = () => {
    sound.pop();
    setBubuTreats(t => t + 1);
    setActiveSpeech("Bubu: *Woof!* Crunch crunch! Aditi's 350+ DSA problem skills feed our brain power!");
    confetti({ particleCount: 15, spread: 45, origin: { y: 0.85 } });
  };

  // Sing Pip
  const singPip = () => {
    sound.sparkle();
    setPipMelodies(m => m + 1);
    setActiveSpeech("Pip: *Chirp tweet!* 60 frames per second, zero layout shifts, 100% accessible!");
  };

  // Toss Yarn
  const tossYarn = () => {
    sound.click();
    setIsYarnActive(true);
    setYarnPosition(prev => (prev === 0 ? 120 : 0));
    setTimeout(() => {
      sound.purr();
      setIsYarnActive(false);
    }, 1000);
  };

  // Toggle Nap Time
  const toggleNapTime = () => {
    sound.click();
    setIsAsleep(!isAsleep);
    setActiveSpeech(
      !isAsleep
        ? "Shhh... The critters are taking a cozy power nap after writing clean code. Zzz..."
        : "Good morning! The team is rested, energized, and ready to build something beautiful!"
    );
  };

  // Group party
  const triggerParty = () => {
    sound.sparkle();
    confetti({ particleCount: 50, spread: 90 });
    setActiveSpeech("🎉 Party time! High five for visiting Aditi's portfolio!");
  };

  return (
    <section id="sanctuary" className="py-16 relative overflow-hidden">
      {/* Background container with soft warm editorial styling inspired by palakonweb.in */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative rounded-3xl p-6 sm:p-10 border transition-all duration-500 ${
          isAsleep
            ? 'bg-[#0E131F] border-indigo-950/80 text-indigo-100 shadow-2xl shadow-indigo-950/40'
            : 'bg-gradient-to-b from-[#FFFDF9] to-[#F7F3E9] dark:from-[#141820] dark:to-[#0F131A] border-[#E8DFC8] dark:border-slate-800 text-slate-800 dark:text-slate-200 shadow-xl'
        }`}>
          {/* Top Bar with Palak-inspired stickers & controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-blush-200 dark:border-slate-800 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush-100 dark:bg-amber-950/60 text-purple-800 dark:text-amber-300 text-xs font-mono font-medium mb-2">
                <span>🐾 DELIGHT CORNER • INTERACTIVE PET SANCTUARY</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white">
                Aditi's Interactive Pet Garden
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-sans mt-0.5">
                Thoughtful interaction design brings warmth and playfulness into software. Take a break and say hi to our resident companions!
              </p>
            </div>

            {/* Quick playground controls */}
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={toggleNapTime}
                className="px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-medium border border-[#DDD3B7] dark:border-slate-700 flex items-center gap-1.5 transition-all active:scale-95 shadow-sm"
              >
                {isAsleep ? <Sun className="w-3.5 h-3.5 text-amber-500" /> : <Moon className="w-3.5 h-3.5 text-indigo-500" />}
                <span>{isAsleep ? 'Wake Up' : 'Nap Time'}</span>
              </button>

              <button
                onClick={triggerParty}
                className="px-3.5 py-1.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-semibold flex items-center gap-1.5 transition-all active:scale-95 shadow-sm"
              >
                <Gift className="w-3.5 h-3.5" />
                <span>Treat Party</span>
              </button>
            </div>
          </div>

          {/* Dialog Bubble */}
          <div className="my-6 p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-[#E3D9BE] dark:border-slate-800 flex items-center gap-3 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-950/80 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
              <MessageCircle className="w-4 h-4" />
            </div>
            <p className="font-sans text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic">
              "{activeSpeech}"
            </p>
          </div>

          {/* Interactive Animals Stage */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-4">
            
            {/* Animal 1: Mochi the Cat */}
            <div className="group relative p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-[#E8DFC8] dark:border-slate-800 text-center flex flex-col items-center justify-between hover:border-amber-400 dark:hover:border-amber-400/50 transition-all hover:-translate-y-1">
              <div className="flex items-center justify-between w-full text-[11px] font-mono text-slate-400 mb-2">
                <span>01. Calico Cat</span>
                <span className="flex items-center gap-1 text-rose-500 font-bold">
                  <Heart className="w-3 h-3 fill-current" /> {mochiHearts}
                </span>
              </div>

              {/* Animated SVG Mochi */}
              <div 
                onClick={petMochi}
                className="relative cursor-pointer my-4 transform transition-transform group-hover:scale-105 active:scale-95"
                title="Click to Pet Mochi!"
              >
                {/* Floating Heart Indicator */}
                <div className="absolute -top-3 right-0 text-rose-500 text-sm animate-bounce-subtle">
                  ❤️
                </div>

                <svg className="w-32 h-32" viewBox="0 0 120 120">
                  {/* Tail */}
                  <path 
                    d="M 95 85 Q 115 70 105 50 Q 95 75 90 85" 
                    fill="#E07A5F" 
                    className="animate-wiggle origin-bottom"
                  />
                  {/* Body */}
                  <ellipse cx="60" cy="80" rx="35" ry="28" fill="#F4F1DE" stroke="#3D405B" strokeWidth="2.5" />
                  {/* Calico Spot */}
                  <path d="M 65 62 Q 80 65 85 80 Q 75 88 65 75 Z" fill="#E07A5F" opacity="0.9" />
                  <path d="M 35 75 Q 45 85 40 95 Q 30 90 35 75 Z" fill="#3D405B" opacity="0.3" />

                  {/* Head */}
                  <circle cx="60" cy="50" r="26" fill="#F4F1DE" stroke="#3D405B" strokeWidth="2.5" />
                  {/* Ears */}
                  <polygon points="40,35 48,16 56,30" fill="#E07A5F" stroke="#3D405B" strokeWidth="2" />
                  <polygon points="64,30 72,16 80,35" fill="#3D405B" stroke="#3D405B" strokeWidth="2" />

                  {/* Eyes: Sleeping vs Open */}
                  {isAsleep ? (
                    <>
                      <path d="M 46 50 Q 52 56 56 50" fill="none" stroke="#3D405B" strokeWidth="2" strokeLinecap="round" />
                      <path d="M 64 50 Q 68 56 74 50" fill="none" stroke="#3D405B" strokeWidth="2" strokeLinecap="round" />
                      <text x="85" y="30" fontSize="12" fill="#818CF8" fontWeight="bold">Zzz</text>
                    </>
                  ) : (
                    <>
                      <circle cx="50" cy="48" r="4" fill="#3D405B" />
                      <circle cx="52" cy="46" r="1.5" fill="#FFFFFF" />
                      <circle cx="70" cy="48" r="4" fill="#3D405B" />
                      <circle cx="72" cy="46" r="1.5" fill="#FFFFFF" />
                    </>
                  )}

                  {/* Nose & Whiskers */}
                  <polygon points="58,54 62,54 60,57" fill="#E07A5F" />
                  <line x1="38" y1="52" x2="25" y2="50" stroke="#3D405B" strokeWidth="1.5" />
                  <line x1="38" y1="56" x2="26" y2="58" stroke="#3D405B" strokeWidth="1.5" />
                  <line x1="82" y1="52" x2="95" y2="50" stroke="#3D405B" strokeWidth="1.5" />
                  <line x1="82" y1="56" x2="94" y2="58" stroke="#3D405B" strokeWidth="1.5" />

                  {/* Front Paws */}
                  <ellipse cx="50" cy="100" rx="7" ry="5" fill="#FFFFFF" stroke="#3D405B" strokeWidth="2" />
                  <ellipse cx="70" cy="100" rx="7" ry="5" fill="#FFFFFF" stroke="#3D405B" strokeWidth="2" />
                </svg>
              </div>

              {/* Mochi Controls */}
              <div className="w-full space-y-2 mt-2">
                <div className="font-display font-bold text-sm text-slate-800 dark:text-slate-100">
                  Mochi (Frontend Kitten)
                </div>
                <p className="text-[11px] text-slate-500 font-sans">
                  Loves purring during 60fps framerate audits.
                </p>
                <div className="flex gap-2 pt-2">
                  <button
                    onClick={petMochi}
                    className="flex-1 py-1.5 px-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 hover:bg-amber-100 dark:hover:bg-amber-900/60 text-amber-800 dark:text-amber-300 text-xs font-medium border border-amber-200 dark:border-amber-800/40 active:scale-95 transition-all"
                  >
                    Pet Mochi 💕
                  </button>
                  <button
                    onClick={tossYarn}
                    className="py-1.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-medium transition-all active:scale-95"
                    title="Toss Ball of Yarn"
                  >
                    🧶 Yarn
                  </button>
                </div>
              </div>
            </div>

            {/* Animal 2: Bubu the Shiba Inu */}
            <div className="group relative p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-[#E8DFC8] dark:border-slate-800 text-center flex flex-col items-center justify-between hover:border-amber-500 dark:hover:border-amber-500/50 transition-all hover:-translate-y-1">
              <div className="flex items-center justify-between w-full text-[11px] font-mono text-slate-400 mb-2">
                <span>02. Shiba Inu</span>
                <span className="flex items-center gap-1 text-amber-500 font-bold">
                  🦴 {bubuTreats} Treats
                </span>
              </div>

              {/* Animated SVG Bubu */}
              <div 
                onClick={feedBubu}
                className="relative cursor-pointer my-4 transform transition-transform group-hover:scale-105 active:scale-95"
                title="Click to Feed Bubu!"
              >
                <svg className="w-32 h-32" viewBox="0 0 120 120">
                  {/* Wagging Shiba Curly Tail */}
                  <path 
                    d="M 88 75 C 105 60 115 80 100 88 C 95 90 90 85 88 75" 
                    fill="#D97706" 
                    stroke="#78350F" 
                    strokeWidth="2"
                    className="animate-wiggle origin-center"
                  />
                  {/* Shiba Body */}
                  <ellipse cx="60" cy="82" rx="34" ry="26" fill="#F59E0B" stroke="#78350F" strokeWidth="2.5" />
                  {/* White Chest */}
                  <ellipse cx="60" cy="85" rx="18" ry="18" fill="#FFFBEB" />

                  {/* Shiba Head */}
                  <circle cx="60" cy="50" r="27" fill="#F59E0B" stroke="#78350F" strokeWidth="2.5" />
                  {/* White Cheeks (Urajiro) */}
                  <path d="M 40 50 Q 50 66 60 62 Q 70 66 80 50 Q 82 66 60 74 Q 38 66 40 50 Z" fill="#FFFBEB" />

                  {/* Shiba Ears */}
                  <polygon points="38,36 44,14 56,28" fill="#D97706" stroke="#78350F" strokeWidth="2" />
                  <polygon points="42,32 46,18 52,28" fill="#FFFBEB" />
                  <polygon points="64,28 76,14 82,36" fill="#D97706" stroke="#78350F" strokeWidth="2" />
                  <polygon points="68,28 74,18 78,32" fill="#FFFBEB" />

                  {/* Eyes */}
                  {isAsleep ? (
                    <>
                      <path d="M 45 48 Q 50 54 55 48" fill="none" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M 65 48 Q 70 54 75 48" fill="none" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" />
                      <text x="85" y="30" fontSize="12" fill="#818CF8" fontWeight="bold">Zzz</text>
                    </>
                  ) : (
                    <>
                      <circle cx="48" cy="46" r="3.5" fill="#78350F" />
                      <circle cx="50" cy="44" r="1.2" fill="#FFFFFF" />
                      <circle cx="72" cy="46" r="3.5" fill="#78350F" />
                      <circle cx="74" cy="44" r="1.2" fill="#FFFFFF" />
                      {/* Eyebrow dots */}
                      <circle cx="46" cy="38" r="2" fill="#FFFBEB" />
                      <circle cx="74" cy="38" r="2" fill="#FFFBEB" />
                    </>
                  )}

                  {/* Cute black nose & mouth */}
                  <polygon points="57,56 63,56 60,60" fill="#1E293B" />
                  <path d="M 57 60 Q 60 63 63 60" fill="none" stroke="#78350F" strokeWidth="1.8" />
                  
                  {/* Tongue when happy */}
                  {!isAsleep && (
                    <path d="M 58 62 C 58 67 62 67 62 62 Z" fill="#F43F5E" />
                  )}

                  {/* Paws */}
                  <ellipse cx="48" cy="102" rx="7" ry="5" fill="#FFFBEB" stroke="#78350F" strokeWidth="2" />
                  <ellipse cx="72" cy="102" rx="7" ry="5" fill="#FFFBEB" stroke="#78350F" strokeWidth="2" />
                </svg>
              </div>

              {/* Bubu Controls */}
              <div className="w-full space-y-2 mt-2">
                <div className="font-display font-bold text-sm text-slate-800 dark:text-slate-100">
                  Bubu (Systems Shiba)
                </div>
                <p className="text-[11px] text-slate-500 font-sans">
                  Wags tail whenever Docker containers start in under 5 seconds.
                </p>
                <div className="flex gap-2 pt-2">
                  <button
                    onClick={feedBubu}
                    className="flex-1 py-1.5 px-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 hover:bg-amber-100 dark:hover:bg-amber-900/60 text-amber-800 dark:text-amber-300 text-xs font-medium border border-amber-200 dark:border-amber-800/40 active:scale-95 transition-all"
                  >
                    Feed Bone 🦴
                  </button>
                  <button
                    onClick={() => { sound.sparkle(); setActiveSpeech("Bubu gives you a joyful High Paw! 🐾"); }}
                    className="py-1.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-medium transition-all active:scale-95"
                    title="Give High Paw"
                  >
                    🐾 Paw
                  </button>
                </div>
              </div>
            </div>

            {/* Animal 3: Pip the Origami Bird */}
            <div className="group relative p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-[#E8DFC8] dark:border-slate-800 text-center flex flex-col items-center justify-between hover:border-sky-400 dark:hover:border-sky-400/50 transition-all hover:-translate-y-1">
              <div className="flex items-center justify-between w-full text-[11px] font-mono text-slate-400 mb-2">
                <span>03. Origami Bird</span>
                <span className="flex items-center gap-1 text-sky-500 font-bold">
                  🎵 {pipMelodies} Songs
                </span>
              </div>

              {/* Animated SVG Pip */}
              <div 
                onClick={singPip}
                className="relative cursor-pointer my-4 transform transition-transform group-hover:scale-105 active:scale-95"
                title="Click to Hear Pip Sing!"
              >
                <svg className="w-32 h-32" viewBox="0 0 120 120">
                  {/* Branch Perch */}
                  <line x1="15" y1="102" x2="105" y2="102" stroke="#854D0E" strokeWidth="4" strokeLinecap="round" />
                  <path d="M 80 102 Q 95 95 90 85" fill="none" stroke="#16A34A" strokeWidth="2.5" />
                  <circle cx="90" cy="85" r="4" fill="#22C55E" />

                  {/* Bird Body */}
                  <polygon points="35,65 75,45 85,75 55,85" fill="#38BDF8" stroke="#0284C7" strokeWidth="2" />
                  {/* Belly */}
                  <polygon points="45,72 70,60 78,82 50,86" fill="#BAE6FD" />
                  {/* Wing */}
                  <polygon 
                    points="55,60 85,50 65,80" 
                    fill="#0284C7" 
                    stroke="#0369A1" 
                    strokeWidth="1.5"
                    className="animate-wiggle origin-top-left"
                  />

                  {/* Tail Feathers */}
                  <polygon points="25,60 38,65 28,75" fill="#0EA5E9" stroke="#0284C7" strokeWidth="1.5" />

                  {/* Head */}
                  <circle cx="82" cy="46" r="14" fill="#38BDF8" stroke="#0284C7" strokeWidth="2" />
                  {/* Beak */}
                  <polygon points="94,44 106,48 94,52" fill="#F59E0B" stroke="#D97706" strokeWidth="1.5" />

                  {/* Eye */}
                  {isAsleep ? (
                    <>
                      <line x1="84" y1="45" x2="90" y2="45" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
                      <text x="88" y="25" fontSize="12" fill="#818CF8" fontWeight="bold">Zzz</text>
                    </>
                  ) : (
                    <>
                      <circle cx="86" cy="44" r="3" fill="#0F172A" />
                      <circle cx="87" cy="43" r="1" fill="#FFFFFF" />
                    </>
                  )}

                  {/* Little Legs */}
                  <line x1="60" y1="86" x2="60" y2="100" stroke="#F59E0B" strokeWidth="2" />
                  <line x1="72" y1="84" x2="72" y2="100" stroke="#F59E0B" strokeWidth="2" />
                </svg>
              </div>

              {/* Pip Controls */}
              <div className="w-full space-y-2 mt-2">
                <div className="font-display font-bold text-sm text-slate-800 dark:text-slate-100">
                  Pip (Pixel Songbird)
                </div>
                <p className="text-[11px] text-slate-500 font-sans">
                  Sings Web Audio API synthesized notes with zero external audio bloat.
                </p>
                <div className="flex gap-2 pt-2">
                  <button
                    onClick={singPip}
                    className="flex-1 py-1.5 px-2 rounded-xl bg-sky-50 dark:bg-sky-950/40 hover:bg-sky-100 dark:hover:bg-sky-900/60 text-sky-800 dark:text-sky-300 text-xs font-medium border border-sky-200 dark:border-sky-800/40 active:scale-95 transition-all"
                  >
                    Sing Chime 🎶
                  </button>
                  <button
                    onClick={() => { sound.click(); setActiveSpeech("Pip flutters onto the navbar! Tweet!"); }}
                    className="py-1.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-medium transition-all active:scale-95"
                    title="Flutter"
                  >
                    🪶 Flutter
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Palak-style retro stickers strip */}
          <div className="pt-6 border-t border-[#E3D9BE] dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-500">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-[#DDD3B7] dark:border-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-1.5 shadow-2xs">
                <span>✨</span> Crafted with Google Material 3 tokens
              </span>
              <span className="px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-[#DDD3B7] dark:border-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-1.5 shadow-2xs">
                <span>⚡</span> 60fps Spring Transitions
              </span>
              <span className="px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-[#DDD3B7] dark:border-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-1.5 shadow-2xs">
                <span>☕</span> Fueled by DU Faculty of Tech & Algorithms
              </span>
            </div>

            <div className="text-[11px] text-slate-400">
              Interactive Micro-Interaction Testbed
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
