// ./components/HeartAnimation.tsx (Onda ECG Profesional y Completa)

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
    // Contenedor principal con la clase CSS para el Latido
    <div
      className="relative flex items-center justify-center heart-beat-container"
      style={heartStyle}
    >
      {/* Corazón SVG: Forma estándar, Borde Azul, Relleno Rojo. */}
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
      <div className="ecg-container absolute overflow-hidden z-10" style={{ width: '80%', height: '40%' }}>
        <svg
          className="ecg-wave"
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
          style={{ width: '200%', height: '100%' }}
        >
          {/* ONDA ECG FINAL: Trazado definido y estilos de punta redondeada aplicados */}
          <polyline
            className="ecg-line" 
            fill="none"
            stroke="#059669" // Color verde/turquesa
            strokeWidth="1.5"
            // ESTILOS PARA LA PUNTA REDONDEADA
            strokeLinecap="round" // Hace que el final de la línea sea redondo
            strokeLinejoin="round" // Hace que las uniones de los picos sean redondas
            // Trazado con picos QRS definidos
            points="0,10 5,10 7,9 8,11 9,10 11,10 12,3 13,17 14,10 16,10 18,9 19,11 20,10 22,10 23,3 24,17 25,10 27,10 100,10"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeartAnimation;
