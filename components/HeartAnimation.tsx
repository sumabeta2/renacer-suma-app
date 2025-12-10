// ./components/HeartAnimation.tsx (Versión de prueba simple)

import React from 'react';

interface HeartAnimationProps {
  size: number;
}

const HeartAnimation: React.FC<HeartAnimationProps> = ({ size }) => {
  const heartStyle = {
    width: `${size}px`,
    height: `${size}px`,
  };

  return (
    <div
      className="relative flex items-center justify-center"
      style={heartStyle}
    >
      {/* Usamos el SVG original simple, sin clases de animación complejas */}
      <svg
        className="text-red-600 absolute"
        fill="currentColor"
        viewBox="0 0 24 24"
        style={{ width: '100%', height: '100%' }}
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.15C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      
      {/* LETRA 'S' simple */}
      <span 
        className="absolute text-white font-extrabold"
        style={{ fontSize: `${size * 0.4}px`, zIndex: 20 }}
      >
        S
      </span>
    </div>
  );
};

export default HeartAnimation;
