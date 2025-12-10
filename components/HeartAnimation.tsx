// ./components/HeartAnimation.tsx (Onda ECG que se extiende hasta la derecha)

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
    transform: 'translate(-50%, -52%)', 
  };

  return (
    // Contenedor principal
    <div
      className="relative flex items-center justify-center heart-beat-container"
      style={heartStyle}
    >
      {/* Corazón SVG */}
      <svg
        className="text-red-600 heart-shape absolute" 
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
      {/* Ajuste: Ancho del contenedor al 100% del corazón para que la línea se extienda más allá de la derecha */}
      <div className="ecg-container absolute overflow-hidden z-10" style={{ width: '100%', height: '40%' }}>
        <svg
          className="ecg-wave"
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
          // Ajuste: El ancho del SVG a 200% para simular el desplazamiento animado (si se aplica)
          style={{ width: '200%', height: '100%' }} 
        >
          {/* ONDA ECG FINAL: Trazado extendido y con punta redondeada */}
          <polyline
            className="ecg-line" 
            fill="none"
            stroke="#059669" 
            strokeWidth="1.5"
            strokeLinecap="round" 
            strokeLinejoin="round" 
            // Trazado extendido: La última coordenada es 100,10 que en este viewBox representa el final.
            // Para asegurar que se vea la línea saliendo por la derecha, extendemos la última línea recta.
            points="0,10 5,10 7,9 8,11 9,10 11,10 12,3 13,17 14,10 16,10 18,9 19,11 20,10 22,10 23,3 24,17 25,10 27,10 30,10 150,10" // El 150 extiende la línea recta final
          />
        </svg>
      </div>
    </div>
  );
};

export default HeartAnimation;
