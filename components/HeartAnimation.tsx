// ./components/HeartAnimation.tsx (Versión Final Definitiva)

import React from 'react';

interface HeartAnimationProps {
  size: number;
}

const HeartAnimation: React.FC<HeartAnimationProps> = ({ size }) => {
  const heartStyle = {
    width: `${size}px`,
    height: `${size}px`,
  };

  // Ajuste de centrado: -52% en Y para subirla ligeramente.
  const sStyle = {
    fontSize: `${size * 0.4}px`, 
    zIndex: 20, 
    position: 'absolute' as const, 
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -52%)', // Ajuste para centrado vertical
  };

  return (
    // Contenedor principal con la clase CSS para el Latido
    <div
      className="relative flex items-center justify-center heart-beat-container"
      style={heartStyle}
    >
      {/* Corazón SVG: Forma estándar, Borde Azul, Relleno Rojo. Utiliza la clase 'heart-shape' */}
      <svg
        className="text-red-600 heart-shape absolute" // Aplica clase para el latido
        fill="currentColor"
        stroke="#3B82F6" // Borde azul
        strokeWidth="1" 
        viewBox="0 0 24 24" 
        style={{ width: '100%', height: '100%' }}
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.15C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>

      {/* LETRA 'S' BLANCA (Centrada) */}
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
            className="ecg-line" // Aplica clase para la animación ECG
            fill="none"
            stroke="#059669" 
            // AJUSTE CRÍTICO: Incrementamos el grosor de la línea
            strokeWidth="1.5"
            points="0,10 5,10 7,9 9,10 11,10 12,9.5 13,10 15,10 16,7 17,13 18,10 22,10 24,10 26,9 28,10 30,10 31,9.5 32,10 34,10 35,7 36,13 37,10 100,10"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeartAnimation;
