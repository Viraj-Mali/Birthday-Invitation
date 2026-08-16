import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import { weddingData } from '../data/index.js';

const VenueSection = () => {
  const { venue } = weddingData;

  return (
    <section id="venue" className="py-16 px-4" style={{
      background: 'linear-gradient(180deg, hsl(275,35%,96%) 0%, hsl(340,45%,96%) 100%)',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center"
      >
        <p style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 12, letterSpacing: '0.35em', textTransform: 'uppercase',
          color: 'hsl(340,75%,55%)', marginBottom: 12,
        }}>📍 Location</p>

        <h2 style={{
          fontFamily: 'var(--font-accent)',
          fontSize: 'clamp(1.8rem, 6vw, 2.8rem)',
          color: 'hsl(275,55%,38%)',
          marginBottom: 8,
        }}>
          Party Venue 🎉
        </h2>

        <div className="gold-divider my-6">
          <span style={{ fontSize: 20 }}>🗺️</span>
        </div>

        <div className="invitation-card p-8 sm:p-10">
          {/* Map placeholder — tappable */}
          <div className="rounded-3xl overflow-hidden mb-6" style={{ aspectRatio: '16/7' }}>
            <a href={venue.mapLink} target="_blank" rel="noopener noreferrer"
              className="w-full h-full flex flex-col items-center justify-center gap-3 transition-opacity hover:opacity-90"
              style={{
                background: 'linear-gradient(145deg, hsl(340,60%,82%), hsl(275,60%,78%))',
                color: '#fff',
                display: 'flex',
              }}
            >
              <span style={{ fontSize: 44 }}>📍</span>
              <p style={{ fontFamily: 'var(--font-accent)', fontSize: 22 }}>{venue.name}</p>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13, opacity: 0.9 }}>
                Tap to view on Google Maps
              </p>
            </a>
          </div>

          {/* Venue name */}
          <h3 style={{
            fontFamily: 'var(--font-accent)',
            fontSize: 'clamp(1.4rem, 4vw, 1.9rem)',
            color: 'hsl(275,55%,38%)',
            marginBottom: 8,
          }}>
            {venue.name}
          </h3>
          <p style={{
            fontFamily: 'var(--font-body)', fontWeight: 600,
            fontSize: 15, marginBottom: 4, color: 'hsl(275,30%,45%)',
          }}>{venue.address}</p>
          <p style={{
            fontFamily: 'var(--font-body)', fontWeight: 500,
            fontSize: 13, marginBottom: 24, color: 'hsl(275,25%,60%)',
          }}>{venue.city}</p>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-0.5" style={{ background: 'linear-gradient(90deg, transparent, hsl(340,70%,75%), transparent)' }}/>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={venue.mapLink}
              target="_blank" rel="noopener noreferrer"
              className="flex-1 sm:max-w-[180px] flex items-center justify-center gap-2 py-3 px-5 rounded-full transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, hsl(340,85%,65%), hsl(275,70%,60%))',
                color: '#fff',
                fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13,
                boxShadow: '0 4px 16px rgba(200,50,120,0.3)',
                textDecoration: 'none',
              }}
            >
              <Navigation size={16}/> Get Directions
            </a>
            <a
              href={venue.mapSearch}
              target="_blank" rel="noopener noreferrer"
              className="flex-1 sm:max-w-[180px] flex items-center justify-center gap-2 py-3 px-5 rounded-full transition-all duration-200"
              style={{
                border: '2px solid hsl(340,80%,70%)',
                color: 'hsl(340,70%,50%)',
                fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13,
                textDecoration: 'none',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'hsl(340,80%,96%)'}
              onMouseLeave={e => e.currentTarget.style.background = ''}
            >
              <MapPin size={16}/> View on Maps
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default VenueSection;
