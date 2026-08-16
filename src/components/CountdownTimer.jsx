import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/index.js';

const pad = (n) => String(n).padStart(2, '0');

const CountdownTimer = () => {
  const target = new Date(weddingData.birthday.partyDateISO).getTime();

  const getRemaining = () => {
    const diff = target - Date.now();
    if (diff <= 0) return null;
    return {
      days:    Math.floor(diff / 86400000),
      hours:   Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };

  const [time, setTime] = useState(getRemaining());

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  const blocks = [
    { value: time?.days,    label: 'Days',    emoji: '📅', color: 'hsl(340,85%,65%)' },
    { value: time?.hours,   label: 'Hours',   emoji: '⏰', color: 'hsl(275,70%,60%)' },
    { value: time?.minutes, label: 'Minutes', emoji: '⏱️', color: 'hsl(155,65%,55%)' },
    { value: time?.seconds, label: 'Seconds', emoji: '💫', color: 'hsl(47,90%,55%)' },
  ];

  const Block = ({ value, label, emoji, color }) => (
    <motion.div
      key={value}
      initial={{ scale: 0.92 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.2 }}
      className="countdown-block flex flex-col items-center justify-center"
      style={{
        width: 'clamp(68px, 18vw, 90px)',
        height: 'clamp(80px, 20vw, 108px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top emoji */}
      <span style={{ fontSize: 16, marginBottom: 2 }}>{emoji}</span>
      <span style={{
        fontFamily: 'var(--font-accent)',
        fontSize: 'clamp(1.8rem, 6vw, 2.6rem)',
        color,
        lineHeight: 1,
        textShadow: '0 2px 8px rgba(0,0,0,0.08)',
      }}>
        {pad(value ?? 0)}
      </span>
      <span style={{
        fontFamily: 'var(--font-body)', fontWeight: 700,
        fontSize: 10, marginTop: 4,
        letterSpacing: '0.15em', textTransform: 'uppercase',
        color: 'hsl(275,30%,55%)',
      }}>
        {label}
      </span>
    </motion.div>
  );

  return (
    <section className="py-16 px-4" style={{
      background: 'linear-gradient(180deg, hsl(340,40%,96%) 0%, hsl(275,35%,96%) 100%)',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto text-center"
      >
        <p style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase',
          marginBottom: 12, color: 'hsl(340,75%,55%)',
        }}>
          ✨ Counting Down To ✨
        </p>

        <h2 style={{
          fontFamily: 'var(--font-accent)',
          fontSize: 'clamp(1.8rem, 6vw, 2.8rem)',
          color: 'hsl(275,55%,40%)',
          marginBottom: 8,
        }}>
          The Big Day! 🎂
        </h2>

        <div className="gold-divider my-6">
          <span style={{ fontSize: 20 }}>🎈</span>
        </div>

        {time ? (
          <div className="flex justify-center gap-3 sm:gap-4">
            {blocks.map((b) => <Block key={b.label} {...b} />)}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="invitation-card py-8 px-6"
          >
            <p style={{ fontSize: 48, marginBottom: 12 }}>🎉🎂🎉</p>
            <p style={{
              fontFamily: 'var(--font-accent)',
              fontSize: 'clamp(1.4rem, 5vw, 2rem)',
              color: 'hsl(340,70%,50%)',
            }}>
              The Party Has Started!
            </p>
            <p style={{
              fontFamily: 'var(--font-body)', fontWeight: 600,
              fontSize: 15, marginTop: 8, color: 'hsl(275,50%,50%)',
            }}>
              Hurry up, we're waiting for you! 🎈
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default CountdownTimer;
