import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../data/index.js';

/* ═══════════════════════════════════════════════════════
   FLOATING CONFETTI PARTICLES
═══════════════════════════════════════════════════════ */
const ConfettiParticles = ({ isMobile }) => {
  const particleCount = isMobile ? 10 : 20;
  const elements = ['🎈', '🎀', '⭐', '🌸', '🍭', '✨', '🎊', '🍬'];

  const particles = React.useMemo(() => {
    return Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      e: elements[Math.floor(Math.random() * elements.length)],
      left: `${Math.random() * 100}vw`,
      startX: `${(Math.random() - 0.5) * 40}px`,
      endX: `${(Math.random() - 0.5) * 120}px`,
      duration: `${14 + Math.random() * 12}s`,
      delay: `${Math.random() * 8}s`,
      opacity: 0.5 + Math.random() * 0.4,
      rotate: `${(Math.random() - 0.5) * 360}deg`,
      sz: 12 + Math.random() * 12,
    }));
  }, [isMobile]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            '--left': p.left,
            '--start-x': p.startX,
            '--end-x': p.endX,
            '--duration': p.duration,
            '--delay': p.delay,
            '--opacity': p.opacity,
            '--rotate': p.rotate,
            fontSize: p.sz,
          }}
        >
          {p.e}
        </span>
      ))}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════
   BALLOON BOX ARTWORK — 3D gift-box style
═══════════════════════════════════════════════════════ */
const BoxLidArt = () => (
  <svg viewBox="0 0 400 120" fill="none" className="absolute inset-0 w-full h-full pointer-events-none">
    {/* Ribbon horizontal */}
    <line x1="0" y1="60" x2="400" y2="60" stroke="rgba(255,255,255,0.7)" strokeWidth="8" strokeLinecap="round"/>
    {/* Ribbon vertical */}
    <line x1="200" y1="0" x2="200" y2="120" stroke="rgba(255,255,255,0.7)" strokeWidth="8" strokeLinecap="round"/>
    {/* Bow left loop */}
    <path d="M200 60 Q155 20 130 40 Q110 60 155 65" stroke="rgba(255,255,255,0.9)" strokeWidth="5" fill="none" strokeLinecap="round"/>
    {/* Bow right loop */}
    <path d="M200 60 Q245 20 270 40 Q290 60 245 65" stroke="rgba(255,255,255,0.9)" strokeWidth="5" fill="none" strokeLinecap="round"/>
  </svg>
);

const BoxBodyArt = () => (
  <svg viewBox="0 0 400 260" fill="none" className="absolute inset-0 w-full h-full pointer-events-none">
    {/* Outer border */}
    <rect x="8" y="8" width="384" height="244" rx="16" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeDasharray="6 4"/>
    {/* Ribbon vertical */}
    <line x1="200" y1="0" x2="200" y2="260" stroke="rgba(255,255,255,0.55)" strokeWidth="7" strokeLinecap="round"/>
    {/* Stars */}
    <text x="50" y="80" fontSize="20" opacity="0.4">⭐</text>
    <text x="310" y="180" fontSize="16" opacity="0.35">✨</text>
    <text x="30" y="200" fontSize="14" opacity="0.3">🌟</text>
    <text x="340" y="60" fontSize="18" opacity="0.35">⭐</text>
  </svg>
);

/* ═══════════════════════════════════════════════════════
   BALLOONS ABOVE THE BOX
═══════════════════════════════════════════════════════ */
const BalloonCluster = () => {
  const balloons = [
    { color: 'hsl(340,90%,65%)', x: -80, delay: 0, size: 48, string: 60 },
    { color: 'hsl(275,70%,65%)', x: 0,   delay: 0.3, size: 56, string: 70 },
    { color: 'hsl(47,95%,60%)',  x: 80,  delay: 0.6, size: 48, string: 60 },
    { color: 'hsl(155,65%,60%)', x: -42, delay: 0.9, size: 40, string: 50 },
    { color: 'hsl(210,80%,65%)', x: 44,  delay: 1.2, size: 40, string: 50 },
  ];

  return (
    <div className="flex justify-center items-end gap-0 relative" style={{ height: 120, marginBottom: -10 }}>
      {balloons.map((b, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: b.delay }}
          style={{ position: 'absolute', left: `calc(50% + ${b.x}px)`, bottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          {/* Balloon */}
          <div style={{
            width: b.size, height: b.size * 1.15,
            borderRadius: '50% 50% 45% 45%',
            background: `radial-gradient(circle at 35% 30%, ${b.color}cc, ${b.color})`,
            boxShadow: `inset -4px -4px 8px rgba(0,0,0,0.15), inset 4px 4px 8px rgba(255,255,255,0.3)`,
            position: 'relative',
          }}>
            {/* Balloon knot */}
            <div style={{
              position: 'absolute', bottom: -4, left: '50%', transform: 'translateX(-50%)',
              width: 6, height: 8, borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              background: b.color, filter: 'brightness(0.8)',
            }}/>
          </div>
          {/* String */}
          <div style={{ width: 1.5, height: b.string, background: `linear-gradient(180deg, ${b.color}88, transparent)` }}/>
        </motion.div>
      ))}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════ */
const OpeningEnvelopeScreen = ({ onEnter }) => {
  const [phase, setPhase] = useState('idle'); // idle | opening | revealing | done
  const [isMobile, setIsMobile] = useState(false);
  const { birthday } = weddingData;

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const h = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);

  const handleClick = () => {
    if (phase !== 'idle') return;
    setPhase('opening');
    setTimeout(() => setPhase('revealing'), 800);
    setTimeout(() => { setPhase('done'); onEnter(); }, 3000);
  };

  const isBoxOpen = phase === 'opening' || phase === 'revealing';

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          key="birthday-splash"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center px-4 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, hsl(340,80%,70%) 0%, hsl(275,65%,65%) 50%, hsl(210,75%,65%) 100%)',
          }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          {/* Confetti particles */}
          <ConfettiParticles isMobile={isMobile} />

          {/* Balloons cluster above box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative z-10"
            style={{ width: 'min(380px, 90vw)' }}
          >
            <BalloonCluster />
          </motion.div>

          {/* Top Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-center relative z-10 flex flex-col items-center"
            style={{ marginBottom: 24 }}
          >
            <h1 style={{
              fontFamily: 'var(--font-accent)',
              color: '#FFFFFF',
              fontSize: 'clamp(2rem, 7vw, 3rem)',
              margin: 0,
              textShadow: '0 3px 16px rgba(0,0,0,0.15)',
              letterSpacing: '0.02em',
            }}>
              You're Invited! 🎉
            </h1>
          </motion.div>

          {/* GIFT BOX STRUCTURE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: 'easeOut' }}
            className="relative z-20"
            style={{ width: 'min(380px, 90vw)', aspectRatio: '380/290' }}
          >
            {/* Box Back */}
            <div className="absolute inset-0 rounded-3xl" style={{
              background: 'hsl(340,80%,88%)',
              boxShadow: 'inset 0 4px 12px rgba(0,0,0,0.08)',
            }}/>

            {/* Card that slides out */}
            <div className="absolute inset-0 flex items-end justify-center overflow-hidden rounded-3xl">
              <AnimatePresence>
                {phase === 'revealing' && (
                  <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: -170, opacity: 1 }}
                    transition={{ duration: 1.4, ease: [0.4, 0, 0.1, 1] }}
                    style={{
                      background: 'linear-gradient(145deg, #fff 0%, hsl(340,80%,97%) 100%)',
                      border: '3px solid rgba(255,200,220,0.7)',
                      borderRadius: 20, padding: 24,
                      width: '86%', height: '190%',
                      boxShadow: '0 16px 48px rgba(200,50,120,0.2)',
                      textAlign: 'center',
                      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
                    }}
                  >
                    <span style={{ fontSize: 36 }}>🎀</span>
                    <p style={{
                      fontFamily: 'var(--font-accent)',
                      fontSize: 26, color: 'hsl(275,60%,40%)',
                      lineHeight: 1.2, margin: 0,
                    }}>
                      {birthday.name}
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 14, color: 'hsl(340,70%,55%)', fontWeight: 600,
                    }}>
                      Turns {birthday.age}! 🎂
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Box Body (Front bottom part) */}
            <div className="absolute inset-0 pointer-events-none rounded-3xl" style={{
              background: 'linear-gradient(160deg, hsl(340,85%,82%) 0%, hsl(340,80%,76%) 100%)',
              clipPath: 'polygon(0 28%, 0 100%, 100% 100%, 100% 28%)',
              zIndex: 10,
            }}>
              <BoxBodyArt />
            </div>

            {/* Box Lid (flips open) */}
            <motion.div
              className="absolute top-0 left-0 w-full"
              style={{ height: '36%', transformOrigin: 'top center', zIndex: 20 }}
              animate={isBoxOpen ? { rotateX: -180, opacity: 0.85 } : { rotateX: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.4, 0, 0.1, 1] }}
            >
              <div className="absolute inset-0 rounded-t-3xl" style={{
                background: 'linear-gradient(160deg, hsl(340,85%,80%) 0%, hsl(340,80%,74%) 100%)',
              }}>
                <BoxLidArt />
              </div>

              {/* Tap Button — the bow seal */}
              <AnimatePresence>
                {phase === 'idle' && (
                  <motion.div
                    exit={{ opacity: 0, scale: 1.3, filter: 'blur(4px)' }}
                    transition={{ duration: 0.4 }}
                    style={{ position: 'absolute', bottom: -32, left: '50%', transform: 'translateX(-50%)', zIndex: 30 }}
                  >
                    <button
                      onClick={handleClick}
                      className="balloon-seal"
                      style={{ width: 88, height: 88 }}
                      aria-label="Open birthday invitation"
                    >
                      <span style={{ fontSize: 36 }}>🎀</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Box Shadow */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{
              boxShadow: '0 24px 60px rgba(200,50,120,0.25), 0 6px 20px rgba(0,0,0,0.08)',
              zIndex: -1,
            }}/>
          </motion.div>

          {/* Tap Instruction */}
          <AnimatePresence mode="wait">
            {phase === 'idle' && (
              <motion.p
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
                style={{
                  fontFamily: 'var(--font-body)', fontWeight: 700,
                  color: 'rgba(255,255,255,0.9)', fontSize: 15,
                  marginTop: 56, zIndex: 10, textAlign: 'center',
                  textShadow: '0 2px 8px rgba(0,0,0,0.1)',
                }}
              >
                🎀 Tap the bow to open your invitation!
              </motion.p>
            )}
            {phase === 'opening' && (
              <motion.p
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                style={{
                  fontFamily: 'var(--font-body)', fontWeight: 700,
                  color: 'rgba(255,255,255,0.95)', fontSize: 16,
                  marginTop: 56, zIndex: 10,
                }}
              >
                Opening... 🎉✨
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OpeningEnvelopeScreen;
