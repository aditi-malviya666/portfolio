import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { 
  Award, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Terminal, 
  Code2, 
  Trophy
} from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const getIssuerBadgeStyle = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900/50',
          accent: 'from-blue-600 to-indigo-600',
          icon: Cpu
        };
      case 'emerald':
        return {
          bg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/50',
          accent: 'from-emerald-600 to-teal-600',
          icon: Code2
        };
      case 'amber':
        return {
          bg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900/50',
          accent: 'from-amber-500 to-orange-600',
          icon: Trophy
        };
      case 'purple':
        return {
          bg: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-900/50',
          accent: 'from-purple-600 to-pink-600',
          icon: Terminal
        };
      case 'pink':
        return {
          bg: 'bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-200 dark:border-pink-900/50',
          accent: 'from-pink-500 to-rose-600',
          icon: Sparkles
        };
      default:
        return {
          bg: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-900/50',
          accent: 'from-purple-600 to-indigo-600',
          icon: Award
        };
    }
  };

  return (
    <section id="certifications" className="py-12 sm:py-16 relative animate-fadeIn">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100/70 dark:bg-purple-950/60 border border-pink-200 dark:border-purple-800/40 text-purple-700 dark:text-purple-300 text-xs font-mono mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>OFFICIAL CERTIFICATIONS &amp; PARTICIPATION</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Verified <em className="font-serif italic font-normal text-purple-700 dark:text-purple-400">Certifications.</em>
          </h2>
          
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
            Rigorous technical credentials and verified hackathon achievements across IBM Artificial Intelligence, GeeksforGeeks FoT Rank #1, University of Delhi, and Indian Institute of Science (IISc), Bangalore.
          </p>
        </div>

        {/* Certifications Grid: Exactly the 2 certificates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert) => {
            const style = getIssuerBadgeStyle(cert.color);
            const Icon = style.icon;

            return (
              <div
                key={cert.id}
                className="group relative p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#111622] border border-pink-200/60 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-purple-300 dark:hover:border-purple-700/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Top Row: Issuer & Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2.5 rounded-xl border ${style.bg} shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold font-display text-slate-900 dark:text-white block leading-tight">
                          {cert.issuer}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                          {cert.year}
                        </span>
                      </div>
                    </div>

                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold border ${style.bg}`}>
                      {cert.badge}
                    </span>
                  </div>

                  {/* Certificate Image Preview */}
                  {cert.certificateImage && (
                    <div className="mb-4 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 shadow-2xs">
                      <img
                        src={cert.certificateImage}
                        alt={cert.title}
                        className="w-full h-48 object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-2">
                    {cert.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  {/* Skills Tagged */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded-md bg-purple-50 dark:bg-slate-800/80 text-[10px] font-mono text-purple-700 dark:text-purple-300 border border-purple-100 dark:border-slate-700/50"
                      >
                        #{skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer / Credential ID */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span className="truncate">{cert.credentialId}</span>
                  </div>

                  <span className="text-[10px] font-mono text-purple-600/80 dark:text-purple-400/80 font-medium">
                    Verified Participation
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Academic Validation Note */}
        <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-purple-50 via-pink-50/50 to-indigo-50 dark:from-purple-950/20 dark:via-slate-900 dark:to-indigo-950/20 border border-purple-200/70 dark:border-purple-800/40 flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-base shadow-sm shrink-0">
            #1
          </div>
          <div>
            <div className="text-xs font-bold font-display text-slate-900 dark:text-white">
              University of Delhi Faculty of Technology • Institutional Rank #1
            </div>
            <div className="text-[11px] text-slate-600 dark:text-slate-400 font-sans mt-0.5">
              GeeksforGeeks Institutional Score 853 with 350+ solved challenges in algorithmic optimization and dynamic programming.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
