import React from 'react';

const AnimatedLogo = ({ className = "w-12 h-12" }: { className?: string }) => {
  return (
    <div className={`${className} relative overflow-hidden`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Background circle */}
        <circle 
          cx="50" 
          cy="50" 
          r="48" 
          fill="hsl(var(--primary))" 
          stroke="hsl(var(--accent))" 
          strokeWidth="2"
        />
        
        {/* Animated sun rays */}
        <g className="animate-spin" style={{ transformOrigin: '50px 30px', animationDuration: '8s' }}>
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30) * (Math.PI / 180);
            const x1 = 50 + Math.cos(angle) * 15;
            const y1 = 30 + Math.sin(angle) * 15;
            const x2 = 50 + Math.cos(angle) * 22;
            const y2 = 30 + Math.sin(angle) * 22;
            
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="hsl(var(--accent))"
                strokeWidth="2"
                strokeLinecap="round"
                opacity={0.8}
              />
            );
          })}
        </g>
        
        {/* Sun center */}
        <circle 
          cx="50" 
          cy="30" 
          r="8" 
          fill="hsl(var(--accent))"
          className="animate-pulse"
        />
        
        {/* Animated book */}
        <g className="animate-bounce" style={{ animationDuration: '3s' }}>
          {/* Book base */}
          <rect x="30" y="55" width="40" height="25" rx="2" fill="white" stroke="hsl(var(--primary))" strokeWidth="1"/>
          
          {/* Book pages animation */}
          <g className="animate-pulse" style={{ animationDuration: '2s' }}>
            <line x1="35" y1="62" x2="45" y2="62" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.7"/>
            <line x1="35" y1="66" x2="42" y2="66" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.7"/>
            <line x1="35" y1="70" x2="44" y2="70" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.7"/>
            
            <line x1="55" y1="62" x2="65" y2="62" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.7"/>
            <line x1="58" y1="66" x2="65" y2="66" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.7"/>
            <line x1="56" y1="70" x2="65" y2="70" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.7"/>
          </g>
          
          {/* Book spine */}
          <line x1="50" y1="55" x2="50" y2="80" stroke="hsl(var(--accent))" strokeWidth="2"/>
        </g>
        
        {/* GAYATRI text */}
        <text 
          x="50" 
          y="92" 
          textAnchor="middle" 
          fontSize="8" 
          fontWeight="bold" 
          fill="white"
          fontFamily="serif"
        >
          GAYATRI
        </text>
      </svg>
    </div>
  );
};

export default AnimatedLogo;