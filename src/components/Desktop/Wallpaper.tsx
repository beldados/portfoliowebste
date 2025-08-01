import React, { useState, useEffect } from 'react';

const Wallpaper: React.FC = () => {
  const [currentWallpaper, setCurrentWallpaper] = useState(0);
  
  const wallpapers = [
    // Kali Linux-inspired cyberpunk gradients
    'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #00d4ff 100%)',
    'linear-gradient(135deg, #000000 0%, #1e1e1e 25%, #2d2d2d 50%, #00ff41 75%, #00d4ff 100%)',
    'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #e94560 100%)',
    'linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #2d2d2d 50%, #00ff41 75%, #ff006e 100%)',
    'linear-gradient(135deg, #0a0a0a 0%, #1e1e1e 25%, #2d2d2d 50%, #00d4ff 75%, #ff006e 100%)',
    'linear-gradient(135deg, #000000 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #00ff41 100%)',
    'linear-gradient(135deg, #0f0f23 0%, #1a1a1a 25%, #2d2d2d 50%, #00d4ff 75%, #ff006e 100%)',
  ];

  // Auto-cycle wallpapers every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWallpaper((prev) => (prev + 1) % wallpapers.length);
    }, 30000);
    return () => clearInterval(interval);
  }, [wallpapers.length]);

  return (
    <div 
      className="absolute inset-0 transition-all duration-2000 ease-in-out"
      style={{
        background: wallpapers[currentWallpaper],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      onDoubleClick={() => setCurrentWallpaper((prev) => (prev + 1) % wallpapers.length)}
    >
      {/* Cyberpunk pattern overlay */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(0, 212, 255, 0.3) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(0, 255, 65, 0.2) 1px, transparent 1px),
            linear-gradient(45deg, transparent 40%, rgba(255, 0, 110, 0.1) 50%, transparent 60%)
          `,
          backgroundSize: '40px 40px, 30px 30px, 60px 60px'
        }} />
      </div>
      
      {/* Cyberpunk matrix-style patterns */}
      <div className="absolute inset-0 opacity-8 pointer-events-none">
        <div className="grid grid-cols-16 gap-4 h-full w-full p-4">
          {Array.from({ length: 256 }).map((_, i) => (
            <div 
              key={i} 
              className="w-1 h-1 rounded-sm opacity-30"
              style={{
                backgroundColor: i % 4 === 0 ? '#00d4ff' : i % 4 === 1 ? '#00ff41' : i % 4 === 2 ? '#ff006e' : '#ffffff',
                animationDelay: `${i * 0.05}s`,
                animation: 'pulse 3s infinite',
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating cyberpunk elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-8 h-8 opacity-8 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: '6s',
            }}
          >
            <div 
              className="w-full h-full border border-cyan-400 rounded-sm transform rotate-45"
              style={{
                boxShadow: '0 0 10px rgba(0, 212, 255, 0.3)',
              }}
            />
          </div>
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`hex-${i}`}
            className="absolute w-12 h-12 opacity-6 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 3}s`,
              animationDuration: '10s',
            }}
          >
            <div 
              className="w-full h-full border border-green-400"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                boxShadow: '0 0 15px rgba(0, 255, 65, 0.3)',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wallpaper;