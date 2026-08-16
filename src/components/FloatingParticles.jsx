import React, { useEffect, useState } from 'react';

/* ─── Birthday Confetti Particle definitions ─── */
const ALL = [
  { e:'🎈', l:'3%',  dur:12, del:0,    sz:20, sw:12  },
  { e:'🎀', l:'9%',  dur:16, del:2.8,  sz:16, sw:-10 },
  { e:'⭐', l:'16%', dur:10, del:5.2,  sz:18, sw:14  },
  { e:'🌸', l:'24%', dur:14, del:1.0,  sz:16, sw:-8  },
  { e:'✨', l:'33%', dur:9,  del:3.8,  sz:14, sw:6   },
  { e:'🍭', l:'42%', dur:13, del:6.5,  sz:18, sw:-12 },
  { e:'🎊', l:'51%', dur:11, del:0.6,  sz:17, sw:10  },
  { e:'🎈', l:'60%', dur:15, del:7.2,  sz:15, sw:-9  },
  { e:'🌟', l:'68%', dur:12, del:4.1,  sz:14, sw:8   },
  { e:'✨', l:'76%', dur:9,  del:8.5,  sz:12, sw:-6  },
  { e:'🎀', l:'84%', dur:13, del:1.9,  sz:18, sw:11  },
  { e:'🍬', l:'92%', dur:17, del:9.8,  sz:16, sw:-8  },
];

const FloatingParticles = () => {
  const [mobile, setMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const h = () => setMobile(window.innerWidth < 768);
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);

  const particles = mobile ? ALL.filter((_, i) => i % 2 === 0) : ALL;

  return (
    <>
      <style>{`
        @keyframes __rise {
          0%   { transform:translateY(0) rotate(0deg) scale(0.85);  opacity:0; }
          8%   { opacity:0.8; transform:translateY(-6vh) rotate(15deg) scale(1); }
          92%  { opacity:0.55; }
          100% { transform:translateY(-105vh) rotate(360deg) scale(0.9); opacity:0; }
        }
        @keyframes __sway {
          0%,100% { margin-left:0; }
          30%      { margin-left:var(--sw); }
          70%      { margin-left:calc(var(--sw) * -0.7); }
        }
        @keyframes __bounce {
          0%,100% { transform:scaleY(1); }
          50%      { transform:scaleY(1.15) scaleX(0.9); }
        }
      `}</style>
      <div style={{ position:'fixed', inset:0, pointerEvents:'none', zIndex:1, overflow:'hidden' }}>
        {particles.map((p, i) => (
          <span key={i} style={{
            position:'absolute', left:p.l, bottom:'-28px',
            fontSize:p.sz, lineHeight:1, userSelect:'none',
            '--sw': `${p.sw}px`,
            animation:[
              `__rise ${p.dur}s ${p.del}s linear infinite`,
              `__sway ${p.dur * 0.45}s ${p.del}s ease-in-out infinite`,
              p.e === '🎈' ? `__bounce 0.6s ${p.del}s ease-in-out infinite` : '',
            ].filter(Boolean).join(', '),
            willChange:'transform',
          }}>
            {p.e}
          </span>
        ))}
      </div>
    </>
  );
};

export default FloatingParticles;
