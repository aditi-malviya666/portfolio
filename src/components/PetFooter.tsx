import React, { useState } from 'react';
import { sound } from '../utils/sound';

interface PetFriend {
  id: string;
  name: string;
  role: string;
  quote: string;
  renderSvg: (isHappy: boolean) => React.ReactNode;
}

export const PetFooter: React.FC<{ compact?: boolean }> = ({ compact }) => {
  const [activePet, setActivePet] = useState<string | null>(null);
  const [hearts, setHearts] = useState<{ id: string; x: number; y: number; emoji: string }[]>([]);

  const triggerPet = (id: string, emoji: string, e: React.MouseEvent) => {
    sound.purr?.() ?? sound.pop();
    setActivePet(id);

    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const heartId = `${id}-${Date.now()}`;
    setHearts((prev) => [
      ...prev,
      {
        id: heartId,
        x: rect.left + rect.width / 2,
        y: rect.top - 10,
        emoji,
      },
    ]);

    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== heartId));
    }, 1400);

    setTimeout(() => {
      setActivePet((prev) => (prev === id ? null : prev));
    }, 2000);
  };

  // The 7 Adorable Cozy Friends inspired by pixel art reference
  const PETS: PetFriend[] = [
    {
      id: 'oreo',
      name: 'Oreo',
      role: 'Tuxedo Kitten',
      quote: 'Purrs when code compiles!',
      renderSvg: (isHappy) => (
        <svg width="44" height="44" viewBox="0 0 44 44" className="overflow-visible">
          {/* Body */}
          <ellipse cx="22" cy="31" rx="12" ry="9" fill="#1e1b4b" />
          <ellipse cx="22" cy="31" rx="7" ry="7" fill="#ffffff" />
          {/* Paws */}
          <circle cx="16" cy="38" r="3.5" fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.8" />
          <circle cx="28" cy="38" r="3.5" fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.8" />
          {/* Head */}
          <circle cx="22" cy="18" r="11" fill="#1e1b4b" />
          {/* White face blaze */}
          <polygon points="22,12 17,24 27,24" fill="#ffffff" />
          {/* Ears */}
          <polygon points="13,11 9,2 17,7" fill="#1e1b4b" />
          <polygon points="13,10 11,4 16,7" fill="#f472b6" />
          <polygon points="31,11 35,2 27,7" fill="#1e1b4b" />
          <polygon points="31,10 33,4 28,7" fill="#f472b6" />
          {/* Eyes */}
          {isHappy ? (
            <>
              <path d="M16 17 Q 18 15 20 17" stroke="#1e1b4b" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              <path d="M24 17 Q 26 15 28 17" stroke="#1e1b4b" strokeWidth="1.8" fill="none" strokeLinecap="round" />
            </>
          ) : (
            <>
              <circle cx="17.5" cy="18" r="2.2" fill="#0f172a" />
              <circle cx="16.8" cy="17.2" r="0.8" fill="#ffffff" />
              <circle cx="26.5" cy="18" r="2.2" fill="#0f172a" />
              <circle cx="25.8" cy="17.2" r="0.8" fill="#ffffff" />
            </>
          )}
          {/* Nose & Mouth */}
          <polygon points="21,21 23,21 22,22.5" fill="#f472b6" />
          <path d="M20 23 Q 22 25 24 23" stroke="#f472b6" strokeWidth="1" fill="none" />
          {/* Rosy blush */}
          <circle cx="14" cy="21" r="2" fill="#fda4af" opacity="0.75" />
          <circle cx="30" cy="21" r="2" fill="#fda4af" opacity="0.75" />
          {/* Animated Tail */}
          <path d="M32 32 Q 40 26 39 36" stroke="#1e1b4b" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'mimi',
      name: 'Mimi',
      role: 'Calico Heart Hugger',
      quote: 'Sending love & positive vibes!',
      renderSvg: (isHappy) => (
        <svg width="44" height="44" viewBox="0 0 44 44" className="overflow-visible">
          {/* Body */}
          <ellipse cx="22" cy="31" rx="12" ry="9" fill="#ffffff" stroke="#fde047" strokeWidth="1" />
          {/* Calico orange spot */}
          <ellipse cx="16" cy="28" rx="4" ry="5" fill="#fb923c" />
          {/* Head */}
          <circle cx="22" cy="18" r="11" fill="#ffffff" stroke="#f1f5f9" strokeWidth="0.8" />
          <path d="M14 9 Q 18 16 22 13 L 13 9 Z" fill="#fb923c" />
          {/* Ears */}
          <polygon points="13,11 9,2 17,7" fill="#fb923c" />
          <polygon points="31,11 35,2 27,7" fill="#475569" />
          {/* Eyes */}
          {isHappy ? (
            <>
              <path d="M17 18 Q 19 16 21 18" stroke="#0f172a" strokeWidth="1.6" fill="none" strokeLinecap="round" />
              <path d="M23 18 Q 25 16 27 18" stroke="#0f172a" strokeWidth="1.6" fill="none" strokeLinecap="round" />
            </>
          ) : (
            <>
              <circle cx="18" cy="18" r="2" fill="#0f172a" />
              <circle cx="26" cy="18" r="2" fill="#0f172a" />
            </>
          )}
          {/* Nose */}
          <circle cx="22" cy="20.5" r="1.2" fill="#f472b6" />
          {/* Rosy blush */}
          <circle cx="15" cy="21" r="2.2" fill="#fbcfe8" />
          <circle cx="29" cy="21" r="2.2" fill="#fbcfe8" />
          {/* Hugged Heart in hands */}
          <g transform="translate(16, 26) scale(0.65)">
            <path
              d="M10 3.5 C5 -2, -1 4, 10 14 C21 4, 15 -2, 10 3.5 Z"
              fill={isHappy ? '#f43f5e' : '#fb7185'}
            />
          </g>
        </svg>
      ),
    },
    {
      id: 'boba',
      name: 'Boba',
      role: 'Floppy Bunny',
      quote: 'Soft thoughts, calm code.',
      renderSvg: (isHappy) => (
        <svg width="44" height="44" viewBox="0 0 44 44" className="overflow-visible">
          {/* Body */}
          <ellipse cx="22" cy="32" rx="12" ry="9" fill="#d97706" opacity="0.85" />
          {/* Long Floppy Ears dangling down */}
          <ellipse cx="10" cy="24" rx="4.5" ry="11" fill="#b45309" transform="rotate(15 10 24)" />
          <ellipse cx="34" cy="24" rx="4.5" ry="11" fill="#b45309" transform="rotate(-15 34 24)" />
          <ellipse cx="10" cy="24" rx="2.5" ry="8" fill="#fed7aa" transform="rotate(15 10 24)" />
          <ellipse cx="34" cy="24" rx="2.5" ry="8" fill="#fed7aa" transform="rotate(-15 34 24)" />
          {/* Head */}
          <circle cx="22" cy="19" r="10.5" fill="#d97706" opacity="0.95" />
          {/* Eyes */}
          {isHappy ? (
            <>
              <path d="M17 19 Q 19 17 21 19" stroke="#ffffff" strokeWidth="1.6" fill="none" strokeLinecap="round" />
              <path d="M23 19 Q 25 17 27 19" stroke="#ffffff" strokeWidth="1.6" fill="none" strokeLinecap="round" />
            </>
          ) : (
            <>
              <circle cx="18" cy="19" r="2.2" fill="#451a03" />
              <circle cx="17.2" cy="18.2" r="0.8" fill="#ffffff" />
              <circle cx="26" cy="19" r="2.2" fill="#451a03" />
              <circle cx="25.2" cy="18.2" r="0.8" fill="#ffffff" />
            </>
          )}
          {/* Bunny Y nose */}
          <ellipse cx="22" cy="22.5" rx="1.5" ry="1" fill="#fed7aa" />
          <circle cx="15" cy="22" r="2" fill="#fca5a5" opacity="0.85" />
          <circle cx="29" cy="22" r="2" fill="#fca5a5" opacity="0.85" />
          {/* Little Front Paws */}
          <ellipse cx="19" cy="34" rx="2.5" ry="2" fill="#fed7aa" />
          <ellipse cx="25" cy="34" rx="2.5" ry="2" fill="#fed7aa" />
        </svg>
      ),
    },
    {
      id: 'kero',
      name: 'Kero',
      role: 'Meadow Froggy',
      quote: 'Ribbit! Leap over bugs!',
      renderSvg: (isHappy) => (
        <svg width="44" height="44" viewBox="0 0 44 44" className="overflow-visible">
          {/* Frog Body */}
          <ellipse cx="22" cy="31" rx="12" ry="9" fill="#86efac" />
          <ellipse cx="22" cy="32" rx="7.5" ry="6.5" fill="#f0fdf4" />
          {/* Big Frog Eyeballs */}
          <circle cx="15" cy="15" r="6" fill="#86efac" />
          <circle cx="29" cy="15" r="6" fill="#86efac" />
          <circle cx="15" cy="14" r="3.5" fill="#14532d" />
          <circle cx="14" cy="13" r="1.2" fill="#ffffff" />
          <circle cx="29" cy="14" r="3.5" fill="#14532d" />
          <circle cx="28" cy="13" r="1.2" fill="#ffffff" />
          {/* Head & Cheeky Smile */}
          <ellipse cx="22" cy="21" rx="11" ry="8" fill="#86efac" />
          {isHappy ? (
            <path d="M16 23 Q 22 29 28 23" stroke="#166534" strokeWidth="1.8" fill="#f43f5e" />
          ) : (
            <path d="M17 23 Q 22 26 27 23" stroke="#166534" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          )}
          {/* Rosy Cheeks */}
          <circle cx="13" cy="22" r="2.5" fill="#f472b6" opacity="0.8" />
          <circle cx="31" cy="22" r="2.5" fill="#f472b6" opacity="0.8" />
          {/* Paws */}
          <circle cx="14" cy="37" r="2.5" fill="#86efac" />
          <circle cx="30" cy="37" r="2.5" fill="#86efac" />
        </svg>
      ),
    },
    {
      id: 'yoshi',
      name: 'Yoshi',
      role: 'Baby Dino',
      quote: 'Small dino, huge dreams!',
      renderSvg: (isHappy) => (
        <svg width="44" height="44" viewBox="0 0 44 44" className="overflow-visible">
          {/* Dino Tail */}
          <path d="M31 34 Q 41 33 42 27 Q 38 29 33 30" fill="#a7f3d0" />
          {/* Dino Back Spikes */}
          <polygon points="16,12 18,7 20,13" fill="#34d399" />
          <polygon points="21,13 23,8 25,14" fill="#34d399" />
          <polygon points="26,16 28,11 30,17" fill="#34d399" />
          {/* Body */}
          <ellipse cx="22" cy="31" rx="12" ry="9" fill="#a7f3d0" />
          <ellipse cx="20" cy="31" rx="7" ry="6" fill="#ecfdf5" />
          {/* Head with cute snout */}
          <ellipse cx="20" cy="18" rx="10" ry="9" fill="#a7f3d0" />
          <ellipse cx="14" cy="20" rx="5" ry="4" fill="#a7f3d0" />
          {/* Eyes */}
          {isHappy ? (
            <path d="M17 17 Q 19 15 21 17" stroke="#065f46" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          ) : (
            <>
              <circle cx="18" cy="17" r="2.5" fill="#065f46" />
              <circle cx="17.2" cy="16.2" r="0.9" fill="#ffffff" />
            </>
          )}
          {/* Nostril */}
          <circle cx="12" cy="19.5" r="0.8" fill="#065f46" />
          <circle cx="19" cy="21" r="2" fill="#fca5a5" opacity="0.8" />
          {/* Tiny Foot */}
          <circle cx="17" cy="38" r="3" fill="#a7f3d0" />
          <circle cx="27" cy="38" r="3" fill="#a7f3d0" />
        </svg>
      ),
    },
    {
      id: 'leo',
      name: 'Leo',
      role: 'Lion Cub',
      quote: 'King of clean architecture!',
      renderSvg: (isHappy) => (
        <svg width="44" height="44" viewBox="0 0 44 44" className="overflow-visible">
          {/* Fluffy Golden Lion Mane */}
          <circle cx="22" cy="18" r="14" fill="#f59e0b" opacity="0.95" />
          <circle cx="14" cy="9" r="4" fill="#f59e0b" />
          <circle cx="30" cy="9" r="4" fill="#f59e0b" />
          <circle cx="9" cy="18" r="4" fill="#f59e0b" />
          <circle cx="35" cy="18" r="4" fill="#f59e0b" />
          <circle cx="12" cy="26" r="4" fill="#f59e0b" />
          <circle cx="32" cy="26" r="4" fill="#f59e0b" />
          {/* Body */}
          <ellipse cx="22" cy="32" rx="11" ry="8" fill="#fde047" />
          <ellipse cx="22" cy="33" rx="6" ry="5" fill="#fef9c3" />
          {/* Face */}
          <circle cx="22" cy="18" r="9.5" fill="#fde047" />
          {/* Round Ears */}
          <circle cx="13" cy="10" r="3" fill="#fde047" />
          <circle cx="13" cy="10" r="1.8" fill="#fed7aa" />
          <circle cx="31" cy="10" r="3" fill="#fde047" />
          <circle cx="31" cy="10" r="1.8" fill="#fed7aa" />
          {/* Eyes */}
          {isHappy ? (
            <>
              <path d="M17 17 Q 19 15 21 17" stroke="#78350f" strokeWidth="1.6" fill="none" strokeLinecap="round" />
              <path d="M23 17 Q 25 15 27 17" stroke="#78350f" strokeWidth="1.6" fill="none" strokeLinecap="round" />
            </>
          ) : (
            <>
              <circle cx="18" cy="17" r="2.2" fill="#78350f" />
              <circle cx="17.2" cy="16.2" r="0.8" fill="#ffffff" />
              <circle cx="26" cy="17" r="2.2" fill="#78350f" />
              <circle cx="25.2" cy="16.2" r="0.8" fill="#ffffff" />
            </>
          )}
          {/* Brown Nose */}
          <polygon points="20.5,20 23.5,20 22,21.5" fill="#78350f" />
          <circle cx="15" cy="20.5" r="2" fill="#fbcfe8" opacity="0.85" />
          <circle cx="29" cy="20.5" r="2" fill="#fbcfe8" opacity="0.85" />
        </svg>
      ),
    },
    {
      id: 'peanut',
      name: 'Peanut',
      role: 'Baby Elephant',
      quote: 'Never forgets unit tests!',
      renderSvg: (isHappy) => (
        <svg width="44" height="44" viewBox="0 0 44 44" className="overflow-visible">
          {/* Large Elephant Ears */}
          <ellipse cx="9" cy="17" rx="6.5" ry="8" fill="#cbd5e1" />
          <ellipse cx="9" cy="17" rx="4" ry="5.5" fill="#fbcfe8" />
          <ellipse cx="35" cy="17" rx="6.5" ry="8" fill="#cbd5e1" />
          <ellipse cx="35" cy="17" rx="4" ry="5.5" fill="#fbcfe8" />
          {/* Body */}
          <ellipse cx="22" cy="31" rx="11" ry="9" fill="#e2e8f0" />
          {/* Head */}
          <circle cx="22" cy="17" r="10" fill="#e2e8f0" />
          {/* Curved Elephant Trunk holding flower */}
          <path
            d="M22 20 Q 23 27 27 27 Q 30 27 30 24"
            stroke="#cbd5e1"
            strokeWidth="3.2"
            fill="none"
            strokeLinecap="round"
          />
          {/* Flower in trunk */}
          <g transform="translate(29, 21)">
            <circle cx="0" cy="0" r="2" fill="#f43f5e" />
            <circle cx="0" cy="0" r="0.9" fill="#fef08a" />
          </g>
          {/* Eyes */}
          {isHappy ? (
            <>
              <path d="M17 16 Q 19 14 21 16" stroke="#1e293b" strokeWidth="1.6" fill="none" strokeLinecap="round" />
            </>
          ) : (
            <>
              <circle cx="18" cy="16" r="2" fill="#1e293b" />
              <circle cx="17.2" cy="15.2" r="0.7" fill="#ffffff" />
            </>
          )}
          {/* Pink Cheek */}
          <circle cx="15" cy="19" r="2.2" fill="#fda4af" opacity="0.8" />
          {/* Elephant Feet */}
          <circle cx="16" cy="38" r="3.2" fill="#cbd5e1" />
          <circle cx="28" cy="38" r="3.2" fill="#cbd5e1" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative py-4 select-none">
      {/* Floating Emojis Animation Layer */}
      {hearts.map((h) => (
        <span
          key={h.id}
          className="fixed pointer-events-none z-50 text-base animate-bounce-gentle transition-all"
          style={{
            left: `${h.x}px`,
            top: `${h.y}px`,
            animation: 'fly-up-fade 1.3s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
          }}
        >
          {h.emoji}
        </span>
      ))}

      {/* Cozy Shelf Background */}
      <div className="max-w-2xl mx-auto px-4">
        <div className="relative flex items-end justify-center gap-3 sm:gap-5 pt-3 pb-2 px-4 rounded-3xl bg-pink-50/40 dark:bg-purple-950/20 border border-pink-200/50 dark:border-purple-800/30 backdrop-blur-xs">
          
          {PETS.map((pet) => {
            const isHappy = activePet === pet.id;

            return (
              <div key={pet.id} className="relative group flex flex-col items-center">
                {/* Pet Speech Bubble Tooltip on Hover / Happy */}
                <div
                  className={`absolute -top-9 px-2.5 py-1 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] font-sans font-medium whitespace-nowrap shadow-md pointer-events-none transition-all duration-200 z-30 ${
                    isHappy
                      ? 'opacity-100 scale-100 -translate-y-1'
                      : 'opacity-0 scale-90 translate-y-1 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0'
                  }`}
                >
                  <span>{pet.quote}</span>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-900 dark:border-t-white" />
                </div>

                {/* Pet Interactive Button (No Name Label) */}
                <button
                  onClick={(e) => triggerPet(pet.id, '💖', e)}
                  className={`relative flex flex-col items-center cursor-pointer transition-transform duration-300 ${
                    isHappy
                      ? '-translate-y-2.5 scale-110'
                      : 'hover:-translate-y-1.5 hover:scale-105 active:scale-95'
                  }`}
                  title={pet.role}
                >
                  {pet.renderSvg(isHappy)}
                </button>
              </div>
            );
          })}
        </div>

        {/* Small subtitle under pets */}
        <div className="text-center mt-1.5 text-[11px] font-mono text-purple-900/50 dark:text-purple-300/50">
          🐾 Click any friend to share some love!
        </div>
      </div>
    </div>
  );
};
