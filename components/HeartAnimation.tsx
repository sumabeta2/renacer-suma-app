// ./components/HeartAnimation.tsx (Código Corregido)

import React from 'react';

interface HeartAnimationProps {
  size: number;
}

const HeartAnimation: React.FC<HeartAnimationProps> = ({ size }) => {
  const heartStyle = {
    width: `${size}px`,
    height: `${size}px`,
  };

  // Estilos en línea para centrar la 'S' perfectamente
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
    // Contenedor principal con clase 'heart-beat-container' para el latido
    <div
      className="relative flex items-center justify-center heart-beat-container"
      style={heartStyle}
    >
      {/* Corazón SVG - Forma exterior y color */}
      <svg
        // Añado clases para el borde azul y mantengo la clase 'heart-shape' para la animación de latido
        className="text-red-600 heart-shape absolute border-2 border-blue-500 rounded-full"
        fill="currentColor"
        viewBox="0 0 24 24"
        style={{ width: '100%', height: '100%' }}
      >
        {/* Ícono del corazón (path) */}
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.15C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>

      {/* LETRA 'S' BLANCA EN EL CENTRO (Ahora usa estilos en línea para centrado) */}
      <span 
        className="text-white font-extrabold"
        style={sStyle}
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
            stroke="#10B981" // Verde Esmeralda
            strokeWidth="0.5"
            points="0,10 5,10 10,10 12,10 15,10 16,10 17,5 18,15 19,10 22,10 100,10"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeartAnimation;
