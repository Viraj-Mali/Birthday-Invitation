import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/index.js';

const Footer = () => {
  const { birthday, footerLine } = weddingData;

  return (
    <footer className="relative overflow-hidden" style={{
      paddingBottom: 'clamp(8rem, 25vw, 10rem)',
      paddingTop: 'clamp(4rem, 10vw, 6rem)',
      paddingLeft: '1rem', paddingRight: '1rem',
      background: 'linear-gradient(155deg, hsl(275,55%,30%) 0%, hsl(340,60%,35%) 45%, hsl(275,50%,25%) 100%)',
    }}>
      {/* Radial glow */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 50% 50%, rgba(255,200,220,0.15) 0%, transparent 70%)',
      }}/>

      {/* Big watermark emoji */}
      <span style={{
        position: 'absolute', top: '-2rem', left: '-2rem', fontSize: 220,
        color: 'rgba(255,200,220,0.05)', userSelect: 'none', lineHeight: 1, zIndex: 1,
      }}>🎈</span>
      <span style={{
        position: 'absolute', bottom: '-2rem', right: '-2rem', fontSize: 160,
        color: 'rgba(255,200,220,0.06)', userSelect: 'none', lineHeight: 1, zIndex: 1,
      }}>🎀</span>

      {/* Decorative borders */}
      <div style={{
        position: 'absolute', inset: 12, borderRadius: 32, zIndex: 2, pointerEvents: 'none',
        border: '1.5px solid rgba(255,200,220,0.2)',
      }}/>
      <div style={{
        position: 'absolute', inset: 22, borderRadius: 24, zIndex: 2, pointerEvents: 'none',
        border: '1px dashed rgba(255,200,220,0.12)',
      }}/>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        style={{ position: 'relative', zIndex: 10, maxWidth: 500, margin: '0 auto', textAlign: 'center' }}
      >
        {/* Floating balloon cluster */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          style={{ fontSize: 32, marginBottom: 20, letterSpacing: '0.2em' }}
        >
          🎈 🎀 🎈
        </motion.div>

        {/* "With Love" */}
        <p style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.4em', fontSize: 11,
          color: 'rgba(255,200,220,0.7)', marginBottom: 20,
        }}>
          With Lots of Love
        </p>

        {/* Birthday girl name */}
        <h2 style={{
          fontFamily: 'var(--font-accent)',
          fontSize: 'clamp(2rem, 8vw, 3.2rem)',
          background: 'linear-gradient(135deg, hsl(340,85%,78%) 0%, hsl(47,90%,70%) 40%, hsl(155,65%,70%) 70%, hsl(210,80%,72%) 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: 6, lineHeight: 1.2, letterSpacing: '0.01em',
        }}>
          {birthday.name}
        </h2>

        {/* Date */}
        <p style={{
          fontFamily: 'var(--font-body)', fontWeight: 700,
          color: 'rgba(255,200,220,0.85)',
          fontSize: 'clamp(0.95rem, 3vw, 1.15rem)', marginBottom: 24,
        }}>
          🎂 {birthday.partyDate} · {birthday.partyTime}
        </p>

        {/* Rainbow divider */}
        <div style={{ height: 3, maxWidth: 260, margin: '0 auto 24px', borderRadius: 4,
          background: 'linear-gradient(90deg, hsl(340,85%,65%), hsl(47,90%,60%), hsl(155,65%,60%), hsl(210,80%,65%), hsl(275,70%,65%))',
        }}/>

        {/* Hashtag */}
        <p style={{
          fontFamily: 'var(--font-body)', fontWeight: 700,
          color: 'rgba(255,200,220,0.65)',
          fontSize: 'clamp(0.9rem, 3vw, 1.1rem)', marginBottom: 24,
        }}>
          {birthday.hashtag}
        </p>

        {/* Footer message */}
        <p style={{
          fontFamily: 'var(--font-body)', fontWeight: 600,
          color: 'rgba(255,200,220,0.5)',
          fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)', lineHeight: 1.8,
          maxWidth: 320, margin: '0 auto',
        }}>
          {footerLine}
        </p>

        {/* Bottom emoji row */}
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          style={{ fontSize: 24, marginTop: 32, letterSpacing: '0.15em', color: 'rgba(255,200,220,0.4)' }}
        >
          🎉 🎊 🎉
        </motion.div>

        {/* Developer credit */}
        <p style={{
          fontFamily: 'var(--font-body)', fontWeight: 600,
          color: 'rgba(255,200,220,0.35)',
          fontSize: '0.8rem', letterSpacing: '0.05em', marginTop: 40,
        }}>
          Developed by Viraj
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
