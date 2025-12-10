// ./components/HeartAnimation.tsx (Onda ECG Definitiva - Grande y al borde)

import React from 'react';

interface HeartAnimationProps {
  size: number;
}

const HeartAnimation: React.FC<HeartAnimationProps> = ({ size }) => {
  const heartStyle = {
    width: `${size}px`,
    height: `${size}px`,
  };

  // Centrado de la 'S'
  const sStyle = {
    fontSize: `${size * 0.4}px`, 
    zIndex: 20, 
    position: 'absolute' as const, 
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)', 
  };
  
  // Contenedor del ECG: 100% de ancho y altura suficiente para que los picos cubran la S.
  const ecgContainerStyle = { 
    width: '100%',     
    height: '60%',    // Altura del 60% para picos grandes
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
      <div 
        className="ecg-container absolute overflow-hidden z-10 flex items-center justify-center" 
        style={ecgContainerStyle}
      >
        <svg
          className="ecg-wave"
          // Mantenemos el viewBox 100x20
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
          // El SVG usa el 100% del contenedor (que es 100% del ancho del corazón)
          style={{ width: '100%', height: '100%' }} 
        >
          {/* ONDA ECG FINAL: Trazado que ahora ocupa todo el ancho y tiene grosor 1.5. */}
          <polyline
            className="ecg-line" 
            fill="none"
            stroke="#059669" // Color verde/turquesa
            strokeWidth="1.5" // Grosor restaurado
            strokeLinecap="round" 
            strokeLinejoin="round" 
            // Trazado ajustado para una línea inicial y final más largas y el pico central más ancho.
            points="0,10 10,10 15,10 20,4 25,16 30,10 35,10 40,10 45,4 50,16 55,10 90,10 100,10"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeartAnimation;
