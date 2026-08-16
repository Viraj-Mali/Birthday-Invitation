import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/index.js';

/* ── Balloon Corner Decoration ── */
const BalloonCorner = ({ style = {} }) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ width: 56, height: 56, position: 'absolute', opacity: 0.55, ...style }}>
    <circle cx="28" cy="20" r="14" fill="hsl(340,90%,75%)" opacity="0.8"/>
    <circle cx="48" cy="32" r="12" fill="hsl(275,70%,72%)" opacity="0.7"/>
    <circle cx="20" cy="42" r="10" fill="hsl(47,95%,65%)" opacity="0.7"/>
    <line x1="28" y1="34" x2="20" y2="72" stroke="hsl(340,80%,70%)" strokeWidth="1.2"/>
    <line x1="48" y1="44" x2="44" y2="75" stroke="hsl(275,60%,65%)" strokeWidth="1.2"/>
    <line x1="20" y1="52" x2="18" y2="76" stroke="hsl(47,80%,60%)" strokeWidth="1.2"/>
  </svg>
);

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.4, 0, 0.2, 1] } },
};

const HeroSection = () => {
  const { birthday, venue } = weddingData;

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center py-16 px-4 overflow-hidden bg-sage-to-ivory">

      {/* Big watermark emoji */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <motion.span
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          style={{
            fontSize: 'clamp(280px, 55vw, 460px)',
            color: 'rgba(200,50,120,0.04)',
            lineHeight: 1, userSelect: 'none',
          }}
        >🎈</motion.span>
      </div>

      {/* Balloon corner decorations */}
      <BalloonCorner style={{ top: 16, left: 16 }} />
      <BalloonCorner style={{ top: 16, right: 16, transform: 'scaleX(-1)' }} />
      <BalloonCorner style={{ bottom: 16, left: 16, transform: 'scaleY(-1)' }} />
      <BalloonCorner style={{ bottom: 16, right: 16, transform: 'scale(-1,-1)' }} />

      {/* Main Card */}
      <motion.div
        variants={container} initial="hidden" animate="visible"
        className="relative z-10 w-full max-w-lg mx-auto flex flex-col items-center justify-center p-8 bg-glass shadow-glass rounded-2xl text-center"
      >
        {/* Animated floating balloons on card */}
        <BalloonCorner style={{ top: 8, left: 8, width: 36, height: 36, opacity: 0.4 }} />
        <BalloonCorner style={{ top: 8, right: 8, transform: 'scaleX(-1)', width: 36, height: 36, opacity: 0.4 }} />

        {/* Top emojis */}
        <motion.div variants={item} className="mb-6 mt-2 flex flex-col items-center gap-2">
          <motion.p
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ fontSize: 48, lineHeight: 1 }}
          >
            🎀
          </motion.p>
          <p style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            color: 'hsl(275,60%,45%)',
            fontSize: 12, letterSpacing: '0.35em', textTransform: 'uppercase',
          }}>
            {birthday.blessing}
          </p>
        </motion.div>

        <motion.p variants={item}
          style={{
            fontFamily: 'var(--font-body)', fontWeight: 600,
            color: 'hsl(340,70%,55%)',
            fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', marginBottom: 20,
          }}>
          {birthday.subtitle}
        </motion.p>

        {/* Divider */}
        <motion.div variants={item} className="ornament-row" style={{ marginBottom: 24, maxWidth: 280, margin: '0 auto 24px' }}>
          <span style={{ color: 'hsl(340,80%,65%)', fontSize: 18 }}>✦</span>
        </motion.div>

        {/* Birthday Girl Name */}
        <motion.h1 variants={item}
          style={{
            fontFamily: 'var(--font-accent)',
            color: 'hsl(275,55%,38%)',
            fontSize: 'clamp(2.4rem, 9vw, 3.6rem)',
            lineHeight: 1.1, margin: '0 0 10px',
            textShadow: '0 4px 20px rgba(200,50,120,0.12)',
          }}>
          {birthday.name}
        </motion.h1>

        {/* "is turning" */}
        <motion.div variants={item}
          style={{
            fontFamily: 'var(--font-body)', fontWeight: 700,
            color: 'hsl(340,80%,60%)',
            fontSize: 'clamp(1rem, 3vw, 1.2rem)',
            margin: '4px 0 18px',
          }}>
          is turning
        </motion.div>

        {/* Big age number */}
        <motion.div variants={item}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            fontFamily: 'var(--font-accent)',
            fontSize: 'clamp(4rem, 16vw, 7rem)',
            lineHeight: 1,
            background: 'linear-gradient(135deg, hsl(340,90%,60%) 0%, hsl(275,70%,60%) 50%, hsl(210,80%,60%) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            margin: '0 0 18px',
            filter: 'drop-shadow(0 4px 12px rgba(200,50,120,0.2))',
          }}>
          {birthday.age}
        </motion.div>

        {/* Divider */}
        <motion.div variants={item} className="ornament-row" style={{ marginBottom: 24, maxWidth: 220, margin: '0 auto 24px' }}>
          <span style={{ color: 'hsl(340,80%,65%)', fontSize: 16 }}>🎊</span>
        </motion.div>

        {/* Date & Venue */}
        <motion.div variants={item} style={{ marginBottom: 12 }}>
          <p style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            color: 'hsl(275,50%,35%)',
            fontSize: 'clamp(1.2rem, 4vw, 1.6rem)', marginBottom: 8,
          }}>
            {birthday.partyDate}
          </p>
          <p style={{
            fontFamily: 'var(--font-body)', fontWeight: 600,
            color: 'hsl(340,70%,55%)',
            fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
          }}>
            {birthday.partyTime} · {venue.name}
          </p>
        </motion.div>

        {/* Bottom ornament */}
        <motion.div variants={item} className="ornament-row" style={{ margin: '24px auto 0', maxWidth: 180 }}>
          <span style={{ color: 'hsl(340,80%,65%)', fontSize: 14 }}>🎈</span>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default HeroSection;
