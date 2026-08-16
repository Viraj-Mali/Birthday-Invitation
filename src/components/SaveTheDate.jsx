import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/index.js';

/* Sparkle dots */
const Sparkles = () => {
  const positions = [
    { t:'6%',  l:'5%',  d:0.0 }, { t:'10%', r:'6%',  d:0.6 },
    { t:'80%', l:'4%',  d:1.2 }, { t:'82%', r:'5%',  d:1.8 },
    { t:'92%', l:'20%', d:0.4 }, { t:'90%', r:'18%', d:1.0 },
    { t:'40%', l:'3%',  d:2.2 }, { t:'42%', r:'4%',  d:0.8 },
  ];
  return (
    <>
      {positions.map((p, i) => (
        <span key={i} style={{
          position: 'absolute', pointerEvents: 'none',
          top: p.t, left: p.l, right: p.r,
          fontSize: 12, color: 'hsl(340,80%,65%)',
          animation: `twinkle ${3 + i * 0.4}s ${p.d}s ease-in-out infinite`,
        }}>✦</span>
      ))}
    </>
  );
};

const SaveTheDate = () => {
  const { birthday, venue } = weddingData;
  // Parse date parts for big display
  const dateParts = birthday.partyDate.split(' '); // ["15", "September", "2026"]

  return (
    <section className="py-20 px-4 bg-ivory-to-sage overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        className="max-w-sm mx-auto"
      >
        <div className="std-card relative" style={{ padding: 'clamp(2.5rem,7vw,3.5rem) clamp(2rem,6vw,3rem)' }}>
          <Sparkles />
          <div className="shimmer-bar" />

          {/* Double border rings */}
          <div style={{
            position: 'absolute', inset: 12,
            border: '2px solid rgba(200,100,150,0.2)',
            borderRadius: '1.4rem', pointerEvents: 'none',
          }}/>
          <div style={{
            position: 'absolute', inset: 20,
            border: '1.5px dashed rgba(200,100,150,0.15)',
            borderRadius: '1.1rem', pointerEvents: 'none',
          }}/>

          {/* Label */}
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}
            style={{
              fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontWeight: 700,
              letterSpacing: '0.35em', fontSize: 10,
              color: 'hsl(275,60%,50%)', marginBottom: 16, textAlign: 'center',
            }}>
            🎉 Save The Date 🎉
          </motion.p>

          {/* Top divider */}
          <div className="ornament-row" style={{ marginBottom: 20, maxWidth: 220, margin: '0 auto 20px' }}>
            <span style={{ color: 'hsl(340,80%,65%)', fontSize: 14 }}>🎈</span>
          </div>

          {/* Big date display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
            style={{ textAlign: 'center', marginBottom: 20 }}
          >
            <p style={{
              fontFamily: 'var(--font-accent)',
              fontSize: 'clamp(3rem, 13vw, 4.8rem)',
              lineHeight: 0.95,
              color: 'hsl(340,80%,58%)',
              textShadow: '2px 3px 0 rgba(200,50,100,0.12)',
              letterSpacing: '-0.01em', marginBottom: 4,
            }}>
              {dateParts[0]} {dateParts[1]}
            </p>
            <p style={{
              fontFamily: 'var(--font-accent)',
              fontSize: 'clamp(1.6rem, 6vw, 2.4rem)',
              color: 'hsl(275,60%,50%)',
              letterSpacing: '0.06em',
            }}>
              {dateParts[2]}
            </p>
          </motion.div>

          {/* Center divider */}
          <div style={{ textAlign: 'center', marginBottom: 16, fontSize: 22 }}>🎂</div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }}
            style={{ textAlign: 'center', marginBottom: 22 }}
          >
            <p style={{
              fontFamily: 'var(--font-body)', fontWeight: 700,
              fontSize: 'clamp(0.95rem, 2.8vw, 1.1rem)',
              color: 'hsl(275,60%,45%)', marginBottom: 6,
            }}>🎀 Birthday Party 🎀</p>
            <p style={{
              fontFamily: 'var(--font-body)', fontWeight: 600,
              fontSize: 'clamp(0.85rem, 2.2vw, 0.95rem)',
              color: 'hsl(340,65%,55%)',
            }}>{birthday.partyTime} · {venue.name}</p>
          </motion.div>

          {/* Bottom divider */}
          <div className="ornament-row" style={{ marginBottom: 18, maxWidth: 200, margin: '0 auto 18px' }}>
            <span style={{ color: 'hsl(340,80%,65%)', fontSize: 13 }}>✦</span>
          </div>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.8 }}
            style={{
              fontFamily: 'var(--font-accent)', textAlign: 'center',
              fontSize: 'clamp(1.3rem, 5vw, 1.8rem)',
              color: 'hsl(275,60%,42%)', letterSpacing: '0.01em',
            }}>
            {birthday.name}
          </motion.p>
          <p style={{
            fontFamily: 'var(--font-body)', fontWeight: 600, textAlign: 'center',
            fontSize: 13, color: 'hsl(340,70%,60%)', marginTop: 6,
          }}>
            Turning {birthday.age}! 🎊
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default SaveTheDate;
