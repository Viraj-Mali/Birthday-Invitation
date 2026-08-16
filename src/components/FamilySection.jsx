import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { weddingData } from '../data/index.js';

const FamilySection = () => {
  const [expanded, setExpanded] = useState(false);
  const { family } = weddingData;
  const visible = expanded ? family.members : family.members.slice(0, 2);

  return (
    <section className="py-16 px-4" style={{
      background: 'linear-gradient(180deg, hsl(155,40%,96%) 0%, hsl(47,50%,96%) 100%)',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto text-center"
      >
        {/* Label */}
        <p style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 12, letterSpacing: '0.35em', textTransform: 'uppercase',
          color: 'hsl(340,75%,55%)', marginBottom: 12,
        }}>
          🎊 With Love From
        </p>

        <h2 style={{
          fontFamily: 'var(--font-accent)',
          fontSize: 'clamp(1.8rem, 6vw, 2.6rem)',
          color: 'hsl(275,55%,38%)',
          marginBottom: 8,
        }}>
          {family.heading}
        </h2>

        <div className="gold-divider my-6">
          <span style={{ fontSize: 20 }}>🎀</span>
        </div>

        {/* Main family card */}
        <div className="invitation-card px-8 py-8 mb-6">
          <span style={{ fontSize: 40, display: 'block', marginBottom: 12 }}>👨‍👩‍👧</span>
          <p style={{
            fontFamily: 'var(--font-accent)',
            fontSize: 'clamp(1.2rem, 4vw, 1.7rem)',
            color: 'hsl(275,50%,38%)',
            marginBottom: 8,
          }}>
            {family.mainLine}
          </p>
          <p style={{
            fontFamily: 'var(--font-body)', fontWeight: 600,
            fontSize: 14, color: 'hsl(340,65%,55%)',
          }}>
            joyfully invites you to celebrate! 🎈
          </p>
        </div>

        {/* Members */}
        <div className="space-y-3">
          <AnimatePresence>
            {visible.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: i * 0.08 }}
                className="invitation-card px-6 py-4 flex items-center gap-3 justify-center"
              >
                <span style={{ fontSize: 20 }}>
                  {i === 0 ? '👨‍👩‍👧' : i === 1 ? '👴👵' : i === 2 ? '👴👵' : i === 3 ? '👨‍👩‍👦' : '🎉'}
                </span>
                <p style={{
                  fontFamily: 'var(--font-body)', fontWeight: 700,
                  fontSize: 15, color: 'hsl(275,40%,35%)',
                }}>
                  {m.name}
                </p>
                {m.phone && (
                  <a href={`tel:${m.phone}`} style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'hsl(340,70%,55%)' }}>
                    {m.phone}
                  </a>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {family.members.length > 2 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-5 flex items-center gap-2 mx-auto transition-colors"
            style={{
              fontFamily: 'var(--font-body)', fontWeight: 700,
              fontSize: 14, color: 'hsl(340,75%,55%)',
              background: 'none', border: 'none', cursor: 'pointer',
            }}
          >
            {expanded ? <><ChevronUp size={18}/> Show Less</> : <><ChevronDown size={18}/> View All Hosts</>}
          </button>
        )}
      </motion.div>
    </section>
  );
};

export default FamilySection;
