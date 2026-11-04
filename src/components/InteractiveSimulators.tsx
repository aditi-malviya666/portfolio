import React, { useState } from 'react';
import { sound } from '../utils/sound';
import { Play, RotateCcw, AlertTriangle, CheckCircle2, Shield, Sparkles, Activity, Eye, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

// 1. CBT & Proctoring Simulator (Adaptive AI Test Generator) - Compact
export const CbtProctorSimulator: React.FC = () => {
  const [selectedOpt, setSelectedOpt] = useState<number | null>(1);
  const [proctorWarning, setProctorWarning] = useState<boolean>(false);
  const [latency, setLatency] = useState<number>(38);

  const triggerProctorAlert = () => {
    sound.pop();
    setProctorWarning(true);
    setTimeout(() => setProctorWarning(false), 2200);
  };

  return (
    <div className="bg-[#101418] text-slate-100 rounded-lg p-2.5 font-mono text-[11px] border border-slate-800 select-none">
      {/* Proctoring HUD bar */}
      <div className="flex items-center justify-between pb-1.5 border-b border-slate-800/80 mb-2 text-[10px]">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-slate-400 font-sans">Proctoring:</span>
          <span className="text-emerald-400 font-medium">Graceful Passive</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-500 font-sans">
          <span>Query:</span>
          <span className="text-sky-400 font-mono font-semibold">{latency}ms</span>
        </div>
      </div>

      {proctorWarning && (
        <div className="mb-2 px-2 py-1 bg-amber-500/10 border border-amber-500/30 rounded flex items-center justify-between text-amber-300 text-[10px] animate-fadeIn">
          <div className="flex items-center gap-1.5">
            <AlertTriangle className="w-3 h-3 text-amber-400 shrink-0" />
            <span className="font-sans">Focus lost: Tab-switch detected (Simulated warning)</span>
          </div>
          <span className="text-[9px] bg-amber-500/20 px-1 py-0.2 rounded font-mono">Logged</span>
        </div>
      )}

      {/* CBT Question Box */}
      <div className="bg-slate-950/80 rounded p-2 border border-slate-800/80 mb-2">
        <div className="text-[9px] text-sky-400 font-bold uppercase tracking-wider mb-1 flex items-center justify-between">
          <span>Q04 • Regex LaTeX Pipeline</span>
          <span className="text-emerald-300 font-serif italic text-[10px]">O(N) Linear DFA</span>
        </div>
        
        <p className="font-sans text-[11px] text-slate-200 leading-tight mb-2">
          Given algorithmic complexity, what is the tight bound of the single-pass regex sanitization engine?
        </p>

        <div className="space-y-1">
          {[
            { id: 0, text: "O(N log N) backtracking search" },
            { id: 1, text: "O(N) single-pass DFA scanner (100% parse success)" }
          ].map((opt) => (
            <button
              key={opt.id}
              onClick={() => {
                sound.click();
                setSelectedOpt(opt.id);
                setLatency(Math.floor(25 + Math.random() * 18));
              }}
              className={`w-full text-left px-2 py-1 rounded text-[10px] font-sans flex items-center justify-between transition-all ${
                selectedOpt === opt.id
                  ? 'bg-sky-500/20 text-sky-200 border border-sky-500/50'
                  : 'bg-slate-900/60 text-slate-400 hover:bg-slate-850 border border-transparent'
              }`}
            >
              <span>{opt.text}</span>
              {selectedOpt === opt.id && <CheckCircle2 className="w-3 h-3 text-sky-400 shrink-0" />}
            </button>
          ))}
        </div>
      </div>

      {/* Simulator Controls */}
      <div className="flex items-center justify-between pt-1">
        <button
          onClick={triggerProctorAlert}
          className="px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-amber-300 rounded text-[10px] flex items-center gap-1 transition-colors border border-slate-700 active:scale-95"
        >
          <Shield className="w-2.5 h-2.5 text-amber-400" />
          <span>Simulate Focus Switch</span>
        </button>
        <span className="text-[9px] text-slate-500 font-sans">Live Proctoring Sandbox</span>
      </div>
    </div>
  );
};

// 2. Skill Graph Simulator (AI-Adaptive Onboarding Engine) - Compact
export const SkillGraphSimulator: React.FC = () => {
  const [unlockedNodes, setUnlockedNodes] = useState<number[]>([1, 2]);
  const [activeNode, setActiveNode] = useState<number>(2);

  const nodes = [
    { id: 1, label: "Core Git", req: [] },
    { id: 2, label: "TypeScript", req: [1] },
    { id: 3, label: "Design System", req: [2] },
    { id: 4, label: "Spring Physics", req: [3] },
    { id: 5, label: "PR Merge", req: [4] },
  ];

  const handleNodeClick = (id: number) => {
    sound.click();
    setActiveNode(id);
    if (!unlockedNodes.includes(id)) {
      const node = nodes.find(n => n.id === id);
      const canUnlock = node?.req.every(r => unlockedNodes.includes(r));
      if (canUnlock) {
        sound.sparkle();
        setUnlockedNodes(prev => [...prev, id]);
        if (id === 5) {
          confetti({ particleCount: 20, spread: 50, origin: { y: 0.8 } });
        }
      } else {
        sound.pop();
      }
    }
  };

  return (
    <div className="bg-[#101418] text-slate-100 rounded-lg p-2.5 font-mono text-[11px] border border-slate-800">
      <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 mb-2">
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-indigo-400" />
          <span className="font-sans text-[10px] text-slate-300 font-medium">Adaptive DAG Learning Path</span>
        </div>
        <button 
          onClick={() => { sound.click(); setUnlockedNodes([1]); setActiveNode(1); }}
          className="text-slate-400 hover:text-indigo-300 text-[9px] flex items-center gap-1"
        >
          <RotateCcw className="w-2.5 h-2.5" /> Reset
        </button>
      </div>

      {/* Interactive Node Flow */}
      <div className="grid grid-cols-5 gap-1 my-2">
        {nodes.map((node) => {
          const isUnlocked = unlockedNodes.includes(node.id);
          const isSelected = activeNode === node.id;
          const isNext = !isUnlocked && node.req.every(r => unlockedNodes.includes(r));

          return (
            <button
              key={node.id}
              onClick={() => handleNodeClick(node.id)}
              className={`p-1.5 rounded text-center transition-all flex flex-col items-center justify-between min-h-[50px] border ${
                isUnlocked
                  ? 'bg-indigo-950/60 border-indigo-500/50 text-indigo-200'
                  : isNext
                  ? 'bg-slate-900 border-amber-500/60 text-amber-200 animate-pulse'
                  : 'bg-slate-950/40 border-slate-800/80 text-slate-600'
              } ${isSelected ? 'ring-1 ring-indigo-400' : ''}`}
            >
              <span className="text-[8px] font-sans text-slate-400">
                {isUnlocked ? '✓' : isNext ? 'Ready' : 'Lock'}
              </span>
              <span className="font-sans font-medium text-[9px] text-slate-200 leading-tight">
                {node.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="bg-slate-950/80 rounded p-1.5 border border-slate-800/90 text-[10px] font-sans flex items-center justify-between">
        <span className="text-slate-400">Active: <strong className="text-indigo-300">{nodes.find(n => n.id === activeNode)?.label}</strong></span>
        <span className="text-emerald-400 font-mono text-[9px]">
          {Math.round((unlockedNodes.length / nodes.length) * 100)}% Mastered
        </span>
      </div>
    </div>
  );
};

// 3. Federated Learning Simulator (AgriVerse) - Compact
export const FederatedLearningSimulator: React.FC = () => {
  const [flRound, setFlRound] = useState<number>(4);
  const [isAggregating, setIsAggregating] = useState<boolean>(false);
  const [accuracy, setAccuracy] = useState<number>(98.7);

  const triggerAggregation = () => {
    sound.click();
    setIsAggregating(true);
    setTimeout(() => {
      sound.sparkle();
      setFlRound(prev => prev + 1);
      setAccuracy(prev => Math.min(99.4, Number((prev + 0.1).toFixed(1))));
      setIsAggregating(false);
    }, 1000);
  };

  const nodes = [
    { name: "Punjab Node #1", samples: 1420 },
    { name: "Haryana Node #2", samples: 980 },
    { name: "UP Central #3", samples: 1850 },
    { name: "Rajasthan #4", samples: 760 },
  ];

  return (
    <div className="bg-[#0C120F] text-slate-100 rounded-lg p-2.5 font-mono text-[11px] border border-emerald-950/70">
      <div className="flex items-center justify-between pb-1.5 border-b border-emerald-950/80 mb-2">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="font-sans text-[10px] text-emerald-300 font-medium">FedAvg Edge Cluster</span>
        </div>
        <span className="text-[9px] text-emerald-400 bg-emerald-950/50 px-1.5 py-0.2 rounded border border-emerald-800/40">
          Accuracy: {accuracy}%
        </span>
      </div>

      <div className="grid grid-cols-2 gap-1.5 my-1.5">
        {nodes.map((node, i) => (
          <div key={i} className="bg-slate-950/70 border border-emerald-900/40 rounded p-1.5 flex items-center justify-between">
            <div className="text-[9px] font-sans text-slate-200">{node.name}</div>
            <span className="text-[8px] px-1 py-0.2 rounded font-mono bg-emerald-500/20 text-emerald-300">
              {node.samples} local
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-1 border-t border-emerald-950/80 text-[9px]">
        <div className="flex items-center gap-1 text-slate-400 font-sans">
          <Shield className="w-2.5 h-2.5 text-emerald-400" />
          <span>Zero farmer imagery transmitted</span>
        </div>
        <button
          onClick={triggerAggregation}
          disabled={isAggregating}
          className="px-2 py-0.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-[10px] font-sans font-medium flex items-center gap-1 transition-all active:scale-95"
        >
          <Play className="w-2.5 h-2.5 fill-current" />
          <span>{isAggregating ? 'Syncing...' : `FedAvg Round #${flRound}`}</span>
        </button>
      </div>
    </div>
  );
};

// 4. Vision HUD Simulator (Vision-First Autonomous Navigation) - Compact
export const VisionHudSimulator: React.FC = () => {
  const [speed, setSpeed] = useState<number>(45);
  const [obstacleDistance, setObstacleDistance] = useState<number>(32);

  const ttc = (obstacleDistance / (speed * 0.277)).toFixed(1);
  const isDanger = Number(ttc) < 2.2;
  const isWarning = Number(ttc) >= 2.2 && Number(ttc) < 3.5;

  return (
    <div className="bg-[#0B0F15] text-slate-100 rounded-lg p-2.5 font-mono text-[11px] border border-slate-800 relative">
      <div className="flex items-center justify-between pb-1.5 border-b border-slate-800/80 mb-1.5">
        <div className="flex items-center gap-1.5">
          <Eye className="w-3 h-3 text-sky-400" />
          <span className="font-sans text-[10px] text-slate-300 font-medium">DeepLabV3 + YOLOv8n HUD</span>
        </div>
        <div className="text-[9px] text-slate-400 font-mono">45 FPS • mIoU: 78%</div>
      </div>

      {/* Simulated HUD Vision Screen */}
      <div className="relative bg-slate-950 h-20 rounded overflow-hidden border border-slate-800/80 flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 300 80">
          <polygon points="120,30 180,30 260,80 40,80" fill="rgba(14, 165, 233, 0.08)" stroke="rgba(14, 165, 233, 0.3)" />
          <line x1="150" y1="30" x2="150" y2="80" stroke="rgba(250, 204, 21, 0.5)" strokeDasharray="4 4" />
        </svg>

        <div 
          className={`absolute transition-all duration-300 px-1.5 py-0.5 rounded border text-center ${
            isDanger 
              ? 'border-rose-500 bg-rose-500/20 text-rose-300 animate-pulse'
              : isWarning
              ? 'border-amber-500 bg-amber-500/20 text-amber-300'
              : 'border-emerald-500 bg-emerald-500/20 text-emerald-300'
          }`}
          style={{ top: `${Math.max(10, 45 - obstacleDistance * 0.8)}px` }}
        >
          <div className="text-[8px] font-bold">Obstacle Ahead: {obstacleDistance}m • {ttc}s TTC</div>
        </div>
      </div>

      <div className="mt-2 grid grid-cols-2 gap-2 text-[10px] font-sans">
        <div>
          <label className="text-slate-400 text-[9px] block">Speed: <span className="text-slate-200 font-bold">{speed} km/h</span></label>
          <input 
            type="range" 
            min="20" 
            max="80" 
            value={speed}
            onChange={(e) => { sound.click(); setSpeed(Number(e.target.value)); }}
            className="w-full accent-sky-400 cursor-pointer h-1"
          />
        </div>
        <div>
          <label className="text-slate-400 text-[9px] block">Distance: <span className="text-slate-200 font-bold">{obstacleDistance} m</span></label>
          <input 
            type="range" 
            min="10" 
            max="50" 
            value={obstacleDistance}
            onChange={(e) => { sound.click(); setObstacleDistance(Number(e.target.value)); }}
            className="w-full accent-sky-400 cursor-pointer h-1"
          />
        </div>
      </div>
    </div>
  );
};

// 5. Mascot Chat Simulator (StudifySuccess AI Mascot) - Compact
export const MascotChatSimulator: React.FC = () => {
  const [mood, setMood] = useState<'happy' | 'thinking' | 'cheering'>('happy');
  const [message, setMessage] = useState<string>("Hi! I'm Sparky, your AI Study Mascot architected by Aditi!");

  const setMascotState = (newMood: 'happy' | 'thinking' | 'cheering', msg: string) => {
    sound.purr();
    setMood(newMood);
    setMessage(msg);
  };

  return (
    <div className="bg-[#14101A] text-slate-100 rounded-lg p-2.5 font-mono text-[11px] border border-purple-950/80">
      <div className="flex items-center justify-between pb-1.5 border-b border-purple-950 mb-2">
        <div className="flex items-center gap-1.5">
          <span className="text-sm">🦊</span>
          <span className="font-sans text-[10px] text-purple-300 font-medium">Studify Mascot Engine</span>
        </div>
        <span className="text-[9px] text-purple-400 bg-purple-950/60 px-1.5 py-0.2 rounded border border-purple-800/40">
          500K+ Learners
        </span>
      </div>

      <div className="flex items-start gap-2 my-1.5">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-lg shadow-sm shrink-0">
          {mood === 'happy' ? '🦊' : mood === 'thinking' ? '🤔' : '🎉'}
        </div>
        <div className="bg-slate-900/90 border border-purple-900/40 rounded p-1.5 text-slate-200 font-sans text-[10px] flex-1 leading-tight">
          {message}
        </div>
      </div>

      <div className="flex items-center gap-1 pt-1.5 border-t border-purple-950">
        <button
          onClick={() => setMascotState('happy', "7-day streak maintained! Consistent problem solving builds mastery.")}
          className="px-2 py-0.5 bg-purple-950 hover:bg-purple-900 text-purple-200 rounded text-[9px] font-sans border border-purple-800/50"
        >
          Streak Check
        </button>
        <button
          onClick={() => setMascotState('thinking', "Analyzing Graph BFS... Tip: Check the visited set before enqueueing!")}
          className="px-2 py-0.5 bg-purple-950 hover:bg-purple-900 text-purple-200 rounded text-[9px] font-sans border border-purple-800/50"
        >
          Hint
        </button>
        <button
          onClick={() => {
            confetti({ particleCount: 15, spread: 40 });
            setMascotState('cheering', "100% Precision Quiz Score Achieved! Zero session drop-off recorded!");
          }}
          className="px-2 py-0.5 bg-pink-600 hover:bg-pink-500 text-white rounded text-[9px] font-sans font-medium"
        >
          Celebrate 🎉
        </button>
      </div>
    </div>
  );
};

// 6. DSA Visualizer Simulator (GSSoC Algorithmic Suite) - Compact
export const DsaVizSimulator: React.FC = () => {
  const [step, setStep] = useState<number>(0);

  const steps = [
    { current: 0, visited: [0], desc: "Init: Enqueue Root [0]" },
    { current: 1, visited: [0, 1], desc: "Visit [1]: Child [3] queued" },
    { current: 2, visited: [0, 1, 2], desc: "Visit [2]: Child [4] queued" },
    { current: 3, visited: [0, 1, 2, 3], desc: "Target [3] resolved!" },
  ];

  const currentStep = steps[step % steps.length];

  return (
    <div className="bg-[#101318] text-slate-100 rounded-lg p-2.5 font-mono text-[11px] border border-slate-800">
      <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 mb-1.5">
        <div className="flex items-center gap-1.5">
          <Activity className="w-3 h-3 text-emerald-400" />
          <span className="font-sans text-[10px] text-slate-300 font-medium">BFS Traversal Engine</span>
        </div>
        <span className="text-[9px] text-amber-400 font-mono">GFG FoT #1 (Score: 853)</span>
      </div>

      <div className="flex items-center justify-center gap-2.5 my-2">
        {[0, 1, 2, 3, 4].map((nodeId) => {
          const isCurrent = currentStep.current === nodeId;
          const isVisited = currentStep.visited.includes(nodeId);
          return (
            <div
              key={nodeId}
              className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-[10px] transition-all ${
                isCurrent
                  ? 'bg-amber-400 text-slate-950 ring-2 ring-amber-400/40 scale-105'
                  : isVisited
                  ? 'bg-emerald-500 text-slate-950 font-semibold'
                  : 'bg-slate-800 text-slate-400 border border-slate-700'
              }`}
            >
              {nodeId}
            </div>
          );
        })}
      </div>

      <div className="bg-slate-950 p-1.5 rounded text-[10px] font-sans flex items-center justify-between border border-slate-800/80">
        <span className="text-slate-300 text-[10px]">{currentStep.desc}</span>
        <button
          onClick={() => { sound.click(); setStep(s => s + 1); }}
          className="px-2 py-0.5 bg-sky-600 hover:bg-sky-500 text-white rounded text-[9px] font-mono active:scale-95"
        >
          Step Next →
        </button>
      </div>
    </div>
  );
};
