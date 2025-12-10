// ./components/HeartAnimation.tsx (Onda ECG Definitiva - 100% Centrada)

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
  
  // Contenedor del ECG: 100% de ancho y altura 100%, posicionado en el centro.
  const ecgContainerStyle = { 
    width: '100%',     
    height: '100%',    
    // Posicionamiento absoluto para cubrir todo el corazón
    position: 'absolute' as const, 
    top: '0',
    left: '0',
    display: 'flex',
    alignItems: 'center', // Centrado vertical de la onda
    justifyContent: 'center', // Centrado horizontal de la onda
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
        className="ecg-container z-10" // Eliminamos el 'absolute' y lo definimos en style
        style={ecgContainerStyle}
      >
        <svg
          className="ecg-wave"
          // viewBox ajustado para que la onda use el espacio vertical completo (0 a 100)
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
          // Se usa el 200% de ancho para el desplazamiento de la animación
          style={{ width: '200%', height: '30%' }} // Altura 30% para que se vea bien en el centro
        >
          {/* ONDA ECG FINAL: Trazado que ahora ocupa todo el ancho y tiene grosor 1.5. */}
          <polyline
            className="ecg-line" 
            fill="none"
            stroke="#059669" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            // NUEVOS PUNTOS en viewBox 0-100: Picos 40 y 60
            // Esto asegura que la onda cubra la 'S' y llene el espacio horizontalmente
            points="0,50 10,50 15,50 20,20 25,80 30,50 35,50 40,50 45,20 50,80 55,50 95,50 120,50" 
          />
        </svg>
      </div>
    </div>
  );
};

export default HeartAnimation;
