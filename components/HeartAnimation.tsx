// ./components/HeartAnimation.tsx (Versión Estable Revertida)

import React from 'react';

interface HeartAnimationProps {
  size: number;
}

const HeartAnimation: React.FC<HeartAnimationProps> = ({ size }) => {
  const heartStyle = {
    width: `${size}px`,
    height: `${size}px`,
  };

  // Estilos en línea para centrar la 'S'
  const sStyle = {
    fontSize: `${size * 0.4}px`, 
    zIndex: 20, 
    // Centrado absoluto
    position: 'absolute' as const, 
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)', 
  };

  return (
    // Revertimos a la estructura simple que no contenía errores.
    <div
      className="relative flex items-center justify-center"
      style={heartStyle}
    >
      {/* Usamos el SVG del corazón estándar */}
      <svg
        className="text-red-600 absolute"
        fill="currentColor"
        viewBox="0 0 24 24"
        style={{ width: '100%', height: '100%' }}
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.15C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      
      {/* LETRA 'S' que ya estaba visible */}
      <span 
        className="text-white font-extrabold"
        style={sStyle}
      >
        S
      </span>
    </div>
  );
};

export default HeartAnimation;
