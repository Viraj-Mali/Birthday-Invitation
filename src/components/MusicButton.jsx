import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const MusicButton = ({ isPlaying, toggleMusic, visible }) => {
  if (!visible) return null;

  return (
    <button
      onClick={toggleMusic}
      className="fixed top-5 right-5 z-40 flex items-center justify-center rounded-full transition-all duration-300"
      style={{
        width: 50,
        height: 50,
        background: 'linear-gradient(135deg, hsl(340,85%,70%), hsl(275,70%,65%))',
        boxShadow: '0 4px 16px rgba(200,50,120,0.35)',
        border: '2.5px solid rgba(255,255,255,0.7)',
        color: '#fff',
      }}
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
    >
      {isPlaying
        ? <Volume2 size={20} style={{ animation: 'balloonPulse 2s infinite' }} />
        : <VolumeX size={20} />
      }
    </button>
  );
};

export default MusicButton;
