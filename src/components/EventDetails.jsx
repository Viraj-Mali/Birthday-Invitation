import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { weddingData } from '../data/index.js';

/* ── Fun squiggly border per event ── */
const CandyBorder = ({ color }) => (
  <svg viewBox="0 0 100 100" preserveAspectRatio="none"
    className="absolute inset-0 w-full h-full pointer-events-none opacity-60">
    <rect x="4" y="4" width="92" height="92" rx="14"
      stroke={color} strokeWidth="1.5" strokeDasharray="5 3" fill="none"/>
    {/* Corner dots */}
    <circle cx="10" cy="10" r="3" fill={color} opacity="0.6"/>
    <circle cx="90" cy="10" r="3" fill={color} opacity="0.6"/>
    <circle cx="10" cy="90" r="3" fill={color} opacity="0.6"/>
    <circle cx="90" cy="90" r="3" fill={color} opacity="0.6"/>
  </svg>
);

/* ── Event Poster Card ── */
const EventPoster = ({ event, index }) => {
  const [imgError, setImgError] = React.useState(false);

  const themes = [
    {
      id: 'arrival',
      bg: 'hsl(155,50%,95%)',
      accent: 'hsl(155,65%,45%)',
      text: 'hsl(155,50%,28%)',
      border: 'hsl(155,65%,60%)',
      emoji: '🎮',
      themeClass: 'theme-haldi',
    },
    {
      id: 'cake',
      bg: 'hsl(340,60%,96%)',
      accent: 'hsl(340,80%,55%)',
      text: 'hsl(340,50%,30%)',
      border: 'hsl(340,80%,70%)',
      emoji: '🎂',
      themeClass: 'theme-mehendi',
    },
    {
      id: 'dinner',
      bg: 'hsl(47,70%,96%)',
      accent: 'hsl(47,80%,45%)',
      text: 'hsl(47,55%,28%)',
      border: 'hsl(47,90%,60%)',
      emoji: '🍽️',
      themeClass: 'theme-wedding',
    },
  ];

  const theme = themes[index] || themes[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1.2, delay: index * 0.2, ease: [0.4, 0, 0.2, 1] }}
      className={`poster-card ${theme.themeClass} flex flex-col items-center mx-auto`}
      style={{
        width: 'min(92vw, 540px)',
        minHeight: '70vh',
        padding: 'clamp(2rem, 6vw, 3rem)',
        marginBottom: '4rem',
      }}
    >
      <CandyBorder color={theme.border} />

      {/* Top icon circle */}
      <div style={{
        width: 64, height: 64, borderRadius: '50%',
        border: `3px solid ${theme.border}60`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 20, background: 'rgba(255,255,255,0.7)',
        boxShadow: `0 4px 16px ${theme.accent}20`,
        fontSize: 28, position: 'relative', zIndex: 10,
      }}>
        {theme.emoji}
      </div>

      {/* Glassmorphism text panel */}
      <div className="glass-panel w-full flex flex-col items-center text-center"
        style={{ padding: '28px 20px', position: 'relative', zIndex: 10 }}>

        {/* Fun tag */}
        <p style={{
          fontFamily: 'var(--font-display)', fontWeight: 700, fontStyle: 'italic',
          fontSize: '1rem', color: theme.accent, marginBottom: 8,
        }}>
          {event.description}
        </p>

        {/* Main Title */}
        <h2 style={{
          fontFamily: 'var(--font-accent)',
          fontSize: 'clamp(2rem, 7vw, 2.8rem)',
          color: theme.text, lineHeight: 1.15, marginBottom: 20,
        }}>
          {event.title}
        </h2>

        {/* Pill strip */}
        <div className="info-pill flex-col sm:flex-row" style={{ color: theme.text }}>
          <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.9rem' }}>
            {event.date.split(',')[1]?.trim() || event.date}
          </span>
          <span className="hidden sm:inline" style={{ opacity: 0.3 }}>|</span>
          <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.9rem' }}>
            {event.time}
          </span>
          <span className="hidden sm:inline" style={{ opacity: 0.3 }}>|</span>
          <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.9rem', fontStyle: 'italic' }}>
            {event.venue.split(',')[0]}
          </span>
        </div>

        {/* Location button */}
        <a href={weddingData.venue.mapLink} target="_blank" rel="noopener noreferrer"
          className="mt-6 flex items-center justify-center gap-2"
          style={{
            padding: '10px 22px', borderRadius: 40,
            border: `2px solid ${theme.border}70`,
            fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13,
            color: theme.accent, textDecoration: 'none',
            background: 'rgba(255,255,255,0.5)',
            transition: 'background 0.2s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.9)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.5)'}
        >
          <MapPin size={14}/> View Location
        </a>
      </div>

      {/* Floating decorative emojis */}
      <span className="anim-flutter absolute" style={{ fontSize: 22, top: '22%', left: '8%', zIndex: 20 }}>
        {index === 0 ? '🎮' : index === 1 ? '🎉' : '🍕'}
      </span>
      <span className="anim-flutter absolute" style={{ fontSize: 18, top: '42%', right: '9%', zIndex: 20 }}>
        {index === 0 ? '🎈' : index === 1 ? '🎊' : '🎶'}
      </span>

      {/* Illustration area */}
      <div className="event-illustration-wrapper mt-auto pt-12 flex flex-col items-center justify-end relative z-10 w-full"
        style={{ minHeight: 180 }}>
        {event.illustration && !imgError ? (
          <img
            src={event.illustration} alt={event.title}
            className="event-illustration"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div style={{
            width: '65%', height: 140,
            border: `2.5px dashed ${theme.border}50`,
            borderRadius: '20px 20px 0 0',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', gap: 8,
          }}>
            <span style={{ fontSize: 40 }}>{theme.emoji}</span>
            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: theme.accent, fontSize: 12 }}>
              {event.title}
            </p>
          </div>
        )}
      </div>

    </motion.div>
  );
};

const EventDetails = () => (
  <section id="events" className="py-24 px-4" style={{ background: 'var(--color-sage-pale)' }}>
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.9 }}
      style={{ textAlign: 'center', marginBottom: 50 }}
    >
      <h2 style={{
        fontFamily: 'var(--font-accent)',
        fontSize: 'clamp(1.8rem, 7vw, 2.8rem)',
        color: 'hsl(275,55%,38%)',
        margin: 0,
      }}>
        Party Schedule 🎉
      </h2>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, maxWidth: 260, margin: '16px auto 0' }}>
        <div style={{ flex: 1, height: 2, background: 'linear-gradient(90deg, transparent, hsl(340,80%,70%))' }}/>
        <span style={{ fontSize: 20 }}>🎈</span>
        <div style={{ flex: 1, height: 2, background: 'linear-gradient(90deg, hsl(340,80%,70%), transparent)' }}/>
      </div>
    </motion.div>

    {/* Event poster cards */}
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {weddingData.events.map((ev, i) => <EventPoster key={ev.id} event={ev} index={i} />)}
    </div>
  </section>
);

export default EventDetails;
