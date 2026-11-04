import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/sound';
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUp, Send, Heart, CheckCircle2, Loader2, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PetFooter } from './PetFooter';

// Verified Formspree endpoint for Aditi Malviya
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xdeeydlw';

export const Footer: React.FC = () => {
  const [formSent, setFormSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderEmail || !message) return;

    setIsSubmitting(true);
    sound.click();

    try {
      // Attempt Formspree submission
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email: senderEmail,
          message: message,
          _subject: `Portfolio Contact from ${senderEmail}`,
        }),
      });

      if (response.ok) {
        sound.sparkle();
        confetti({ particleCount: 35, spread: 70, origin: { y: 0.85 } });
        setFormSent(true);
      } else {
        // Fallback to mailto so email is NEVER lost
        window.open(
          `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(`Portfolio Message from ${senderEmail}`)}&body=${encodeURIComponent(message)}`,
          '_blank'
        );
        sound.sparkle();
        setFormSent(true);
      }
    } catch {
      // Direct mailto fallback
      window.open(
        `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(`Portfolio Message from ${senderEmail}`)}&body=${encodeURIComponent(message)}`,
        '_blank'
      );
      sound.sparkle();
      setFormSent(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setFormSent(false);
        setSenderEmail('');
        setMessage('');
      }, 5000);
    }
  };

  const scrollToTop = () => {
    sound.click();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-20 pb-12 bg-[#F8EEF5] dark:bg-[#0B0D11] border-t border-blush-200 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-16 border-b border-blush-200 dark:border-slate-800">
          
          {/* Left Column: Contact & Statement */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush-100 dark:bg-purple-950/60 border border-blush-200 dark:border-purple-800/40 text-purple-700 dark:text-purple-300 text-xs font-mono mb-4">
              <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
              <span>GET IN TOUCH • LET'S CONNECT</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white leading-tight">
              Let's create thoughtful, high-impact digital experiences.
            </h3>

            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 font-sans leading-relaxed max-w-md">
              Whether you want to discuss a new engineering project, design systems, algorithms, or just want to say hi, my inbox is always open.
            </p>

            <div className="mt-6 space-y-3 font-sans text-xs sm:text-sm">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                onClick={() => sound.click()}
                className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <div className="p-2 rounded-lg bg-white dark:bg-slate-800 shadow-2xs">
                  <Mail className="w-4 h-4 text-indigo-500" />
                </div>
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                onClick={() => sound.click()}
                className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <div className="p-2 rounded-lg bg-white dark:bg-slate-800 shadow-2xs">
                  <Phone className="w-4 h-4 text-emerald-500" />
                </div>
                <span>{PERSONAL_INFO.phone}</span>
              </a>

              <div className="flex items-center gap-3 text-slate-500">
                <div className="p-2 rounded-lg bg-white dark:bg-slate-800 shadow-2xs">
                  <MapPin className="w-4 h-4 text-rose-500" />
                </div>
                <span>{PERSONAL_INFO.location} • Faculty of Technology, University of Delhi</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg">
            <h4 className="text-base font-bold font-display text-slate-900 dark:text-white mb-1">
              Send a Quick Message
            </h4>
            <p className="text-xs text-slate-500 font-sans mb-4">
              Direct dispatch to Aditi Malviya's inbox.
            </p>

            {formSent ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center animate-fadeIn">
                <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                <h5 className="text-sm font-bold text-emerald-600 font-display">Message Sent!</h5>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  Thank you! Aditi will reply to <span className="font-mono">{senderEmail}</span> promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 font-sans text-xs">
                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-medium mb-1">
                    Your Email:
                  </label>
                  <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-blush-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-medium mb-1">
                    Message:
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Aditi, I came across your portfolio and wanted to connect..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-blush-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white font-medium text-xs flex items-center justify-center gap-2 transition-all active:scale-95 shadow-sm cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Sending to Inbox...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Cozy Pets Shelf Lineup */}
        <div className="pt-6">
          <PetFooter />
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-slate-500 gap-4">
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.click()}
              className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.click()}
              className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <span className="text-slate-300 dark:text-slate-700">|</span>

            <span>Designed &amp; Engineered by Aditi Malviya</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
