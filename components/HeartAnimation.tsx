// ./components/HeartAnimation.tsx (Centrado Vertical Definitivo)

import React from 'react';

interface HeartAnimationProps {
  size: number;
}

const HeartAnimation: React.FC<HeartAnimationProps> = ({ size }) => {
  const heartStyle = {
    width: `${size}px`,
    height: `${size}px`,
  };

  // Centrado de la 'S' (debe estar perfectamente centrado)
  const sStyle = {
    fontSize: `${size * 0.4}px`, 
    zIndex: 20, 
    position: 'absolute' as const, 
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)', 
  };
  
  // Contenedor del ECG: 100% de ancho del corazón y 60% de altura.
  const ecgContainerStyle = { 
    width: '100%',     
    height: '60%',
    position: 'absolute' as const, 
    // TÉCNICA DE CENTRADO PERFECTO:
    top: '50%', // Posiciona el borde superior en el 50% del corazón
    transform: 'translateY(-30%)', // Desplaza el contenedor hacia ARRIBA el 30% (la mitad de su altura de 60%)
    left: '0', 
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
        stroke="#3B82F6" 
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
        className="ecg-container z-10 overflow-hidden" 
        style={ecgContainerStyle}
      >
        <svg
          className="ecg-wave"
          viewBox="0 0 100 20" 
          preserveAspectRatio="none"
          style={{ width: '200%', height: '100%' }} 
        >
          <polyline
            className="ecg-line" 
            fill="none"
            stroke="#059669" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            // Puntos estables con cola extendida (para llegar al borde derecho)
            points="0,10 10,10 15,10 20,4 25,16 30,10 35,10 40,10 45,4 50,16 55,10 95,10 120,10" 
          />
        </svg>
      </div>
    </div>
  );
};

export default HeartAnimation;
