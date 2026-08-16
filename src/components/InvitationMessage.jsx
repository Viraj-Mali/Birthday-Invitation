import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/index.js';

const InvitationMessage = () => {
  const { birthday } = weddingData;

  return (
    <section className="py-16 px-4" style={{ background: 'linear-gradient(180deg, hsl(340,45%,96%) 0%, hsl(275,35%,96%) 100%)' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
        className="max-w-2xl mx-auto"
      >
        <div className="invitation-card px-8 py-10 sm:px-12 sm:py-14 text-center relative overflow-hidden">
          {/* Big background watermark */}
          <span className="pointer-events-none select-none absolute inset-0 flex items-center justify-center"
            style={{ fontSize: '9rem', lineHeight: 1, color: 'rgba(200,50,120,0.04)', zIndex: 0 }}>
            🎈
          </span>

          <div className="relative z-10">
            {/* Top emoji row */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ fontSize: 32, marginBottom: 16 }}
            >
              🎀 🎂 🎀
            </motion.div>

            {/* Label */}
            <p style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 11, letterSpacing: '0.35em', textTransform: 'uppercase',
              color: 'hsl(340,75%,55%)', marginBottom: 20,
            }}>
              💌 You're Invited! 💌
            </p>

            {/* Top divider */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-0.5" style={{ background: 'linear-gradient(90deg, transparent, hsl(340,70%,75%))' }}/>
              <span style={{ color: 'hsl(340,80%,65%)', fontSize: 16 }}>✦</span>
              <div className="flex-1 h-0.5" style={{ background: 'linear-gradient(90deg, hsl(340,70%,75%), transparent)' }}/>
            </div>

            {/* Message */}
            <p style={{
              fontFamily: 'var(--font-body)', fontWeight: 600,
              fontSize: 'clamp(0.95rem, 2.8vw, 1.1rem)', lineHeight: 1.9,
              color: 'hsl(275,35%,35%)',
            }}>
              {weddingData.invitationMessage}
            </p>

            {/* Bottom divider */}
            <div className="flex items-center gap-3 mt-6 mb-5">
              <div className="flex-1 h-0.5" style={{ background: 'linear-gradient(90deg, transparent, hsl(340,70%,75%))' }}/>
              <span style={{ color: 'hsl(340,80%,65%)', fontSize: 16 }}>✦</span>
              <div className="flex-1 h-0.5" style={{ background: 'linear-gradient(90deg, hsl(340,70%,75%), transparent)' }}/>
            </div>

            {/* Birthday girl name + date */}
            <p style={{
              fontFamily: 'var(--font-accent)',
              fontSize: 'clamp(1.3rem, 5vw, 1.8rem)',
              color: 'hsl(275,55%,40%)',
            }}>
              {birthday.name}
            </p>
            <p style={{
              fontFamily: 'var(--font-body)', fontWeight: 700,
              fontSize: 14, marginTop: 6, color: 'hsl(340,70%,55%)',
            }}>
              🎂 {birthday.partyDate} · {birthday.partyTime}
            </p>

            {/* Bottom emoji */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ fontSize: 28, marginTop: 20 }}
            >
              🎉 🎈 🎉
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default InvitationMessage;
