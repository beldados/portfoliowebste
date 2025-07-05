import React, { useState, useEffect } from 'react';

const Wallpaper: React.FC = () => {
  const [currentWallpaper, setCurrentWallpaper] = useState(0);
  
  const wallpapers = [
    // Ethiopian-inspired gradients with rich cultural colors
    'linear-gradient(135deg, #1a4d3a 0%, #2d5016 25%, #8b4513 50%, #d4af37 75%, #ff6b35 100%)',
    'linear-gradient(135deg, #0f2027 0%, #203a43 25%, #2c5364 50%, #d4af37 75%, #ff6b35 100%)',
    'linear-gradient(135deg, #2d1b69 0%, #11998e 25%, #38ef7d 50%, #ffd700 75%, #ff4757 100%)',
    'linear-gradient(135deg, #134e5e 0%, #71b280 25%, #d4af37 50%, #ff6b35 75%, #ee5a24 100%)',
    'linear-gradient(135deg, #1e3c72 0%, #2a5298 25%, #d4af37 50%, #ff6b35 75%, #c44569 100%)',
    // Traditional Ethiopian colors
    'linear-gradient(135deg, #006633 0%, #ffcc00 33%, #ff0000 66%, #006633 100%)',
    'linear-gradient(135deg, #8b4513 0%, #d2691e 25%, #daa520 50%, #228b22 75%, #dc143c 100%)',
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
      {/* Ethiopian pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.4) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(255, 107, 53, 0.3) 1px, transparent 1px),
            linear-gradient(45deg, transparent 40%, rgba(255, 204, 0, 0.1) 50%, transparent 60%)
          `,
          backgroundSize: '60px 60px, 40px 40px, 80px 80px'
        }} />
      </div>
      
      {/* Subtle geometric patterns inspired by Ethiopian art */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="grid grid-cols-12 gap-8 h-full w-full p-8">
          {Array.from({ length: 144 }).map((_, i) => (
            <div 
              key={i} 
              className="w-2 h-2 rounded-full opacity-40"
              style={{
                backgroundColor: i % 3 === 0 ? '#d4af37' : i % 3 === 1 ? '#ff6b35' : '#228b22',
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating cultural elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-16 h-16 opacity-5 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: '8s',
            }}
          >
            <div className="w-full h-full border-2 border-yellow-400 rounded-full transform rotate-45" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wallpaper;