// ./components/HeartAnimation.tsx

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
    // Contenedor principal para el corazón y el latido
    <div
      className="relative flex items-center justify-center heart-beat-container"
      style={heartStyle}
    >
      {/* Corazón SVG - Forma exterior y color */}
      <svg
        className="text-red-600 heart-shape absolute"
        fill="currentColor"
        viewBox="0 0 24 24"
        style={{ width: '100%', height: '100%' }}
      >
        {/* Ícono del corazón (path) */}
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.15C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>

      {/* LETRA 'S' BLANCA EN EL CENTRO */}
      <span 
        className="absolute text-white font-extrabold"
        style={{ 
          fontSize: `${size * 0.4}px`, // Ajusta el tamaño de la letra basado en el prop 'size'
          zIndex: 20 // Aseguramos que esté sobre el corazón y el ECG
        }}
      >
        S
      </span>

      {/* Contenedor del Electrocardiograma (ECG) */}
      <div className="ecg-container absolute overflow-hidden z-10" style={{ width: '80%', height: '40%' }}>
        <svg
          className="ecg-wave"
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
          style={{ width: '200%', height: '100%' }}
        >
          {/* La onda del Electrocardiograma (ECG) animada */}
          <polyline
            className="ecg-line"
            fill="none"
            stroke="#10B981" // Verde Esmeralda (Tailwind emerald-500)
            strokeWidth="0.5"
            // Forma del ECG: línea plana con pico QRS
            points="0,10 5,10 10,10 12,10 15,10 16,10 17,5 18,15 19,10 22,10 100,10"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeartAnimation;
