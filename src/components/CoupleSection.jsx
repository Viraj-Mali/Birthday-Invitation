import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/index.js';

/* ── Birthday Girl profile card ── */
const BirthdayGirlCard = () => {
  const { couple, assets } = weddingData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
      className="invitation-card p-6 sm:p-8 flex flex-col items-center text-center max-w-xs mx-auto w-full"
    >
      {/* Photo */}
      <div
        style={{
          width: 140, height: 140,
          borderRadius: '50%',
          overflow: 'hidden',
          border: '5px solid hsl(340,80%,80%)',
          boxShadow: '0 8px 24px rgba(200,50,120,0.2)',
          background: 'hsl(340,80%,95%)',
          marginBottom: 20,
          position: 'relative',
        }}
      >
        {assets.birthdayGirlPhoto ? (
          <img src={assets.birthdayGirlPhoto} alt={couple.birthdayGirlName} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center" style={{ background: 'linear-gradient(145deg, hsl(340,80%,92%), hsl(275,70%,90%))' }}>
            <span style={{ fontSize: 56 }}>👧</span>
          </div>
        )}
      </div>

      {/* Name */}
      <h3 style={{
        fontFamily: 'var(--font-accent)',
        fontSize: 'clamp(1.6rem, 5vw, 2.2rem)',
        color: 'hsl(275,55%,38%)',
        marginBottom: 6,
      }}>
        {couple.birthdayGirlName}
      </h3>

      {/* Age badge */}
      <div style={{
        background: 'linear-gradient(135deg, hsl(340,85%,65%), hsl(275,70%,60%))',
        color: '#fff',
        borderRadius: 40,
        padding: '6px 20px',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 14,
        marginBottom: 16,
        boxShadow: '0 4px 12px rgba(200,50,120,0.3)',
      }}>
        🎂 Turning {couple.birthdayGirlAge} Years Old!
      </div>

      {/* Divider */}
      <div className="flex items-center gap-2 my-1 w-28">
        <div className="flex-1 h-0.5" style={{ background: 'hsl(340,70%,75%)' }}/>
        <span style={{ fontSize: 14, color: 'hsl(340,80%,65%)' }}>🎈</span>
        <div className="flex-1 h-0.5" style={{ background: 'hsl(340,70%,75%)' }}/>
      </div>

      {/* Fun note */}
      <p style={{
        fontFamily: 'var(--font-body)', fontWeight: 600,
        fontSize: 14,
        color: 'hsl(275,40%,55%)',
        marginTop: 12, lineHeight: 1.6,
      }}>
        {couple.birthdayGirlNote}
      </p>
    </motion.div>
  );
};

/* ── Parent Cards ── */
const ParentCard = ({ title, emoji, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    className="invitation-card p-5 flex flex-col items-center text-center"
  >
    <span style={{ fontSize: 36, marginBottom: 10 }}>{emoji}</span>
    <p style={{
      fontFamily: 'var(--font-display)', fontWeight: 700,
      fontSize: 16, color,
    }}>{title}</p>
    <p style={{
      fontFamily: 'var(--font-body)', fontWeight: 600,
      fontSize: 12, color: 'hsl(275,30%,60%)', marginTop: 4,
    }}>Hosting with lots of love!</p>
  </motion.div>
);

const CoupleSection = () => {
  return (
    <section id="about" className="py-16 px-4" style={{ background: 'linear-gradient(180deg, hsl(275,35%,97%) 0%, hsl(340,45%,96%) 100%)' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center mb-10"
      >
        <p style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 12, letterSpacing: '0.35em', textTransform: 'uppercase',
          color: 'hsl(340,75%,55%)', marginBottom: 12,
        }}>
          🌟 The Star of the Show 🌟
        </p>
        <h2 style={{
          fontFamily: 'var(--font-accent)',
          fontSize: 'clamp(1.8rem, 6vw, 2.8rem)',
          color: 'hsl(275,55%,38%)',
        }}>
          Meet the Birthday Girl!
        </h2>
        <div className="gold-divider mt-5">
          <span style={{ fontSize: 20, color: 'hsl(340,80%,65%)' }}>🎀</span>
        </div>
      </motion.div>

      {/* Birthday girl center */}
      <div className="max-w-sm mx-auto mb-10">
        <BirthdayGirlCard />
      </div>

      {/* Parents row */}
      <div className="max-w-lg mx-auto grid grid-cols-2 gap-4">
        <ParentCard title="Papa 👨" emoji="🤵" color="hsl(210,70%,45%)" />
        <ParentCard title="Mama 👩" emoji="👸" color="hsl(340,70%,50%)" />
      </div>
    </section>
  );
};

export default CoupleSection;
