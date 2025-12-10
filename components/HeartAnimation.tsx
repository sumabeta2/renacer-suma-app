// ./components/HeartAnimation.tsx (Código con Animación y Borde)

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
    position: 'absolute' as const, 
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)', 
  };

  return (
    // Contenedor principal con la clase CSS para el Latido
    <div
      className="relative flex items-center justify-center heart-beat-container"
      style={heartStyle}
    >
      {/* Corazón SVG: Borde Azul, Relleno Rojo */}
      <svg
        className="text-red-600 heart-shape absolute"
        fill="currentColor"
        stroke="#3B82F6" // Color de borde azul (Tailwind blue-500)
        strokeWidth="2" // Grosor del borde (2px)
        viewBox="0 0 100 100" // ViewBox adaptado para la forma
        style={{ width: '100%', height: '100%' }}
      >
        {/* Path con una forma de corazón más real/tradicional */}
        <path d="M90 40c0-10.87-4.47-20.72-11.66-27.87C71.59 4.3 62.06 0 52 0c-10.06 0-19.59 4.3-26.34 12.13C14.47 19.28 10 29.13 10 40c0 14.38 8.16 26.68 20.37 36.31L50 96.67l19.63-20.36C81.84 66.68 90 54.38 90 40z" />
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
            className="ecg-line"
            fill="none"
            stroke="#059669" // Verde (Emerald-600)
            strokeWidth="0.5"
            // Trazado de ECG mejorado (Pico P, QRS, Pico T)
            points="0,10 5,10 7,9 9,10 11,10 12,9.5 13,10 15,10 16,7 17,13 18,10 22,10 24,10 26,9 28,10 30,10 31,9.5 32,10 34,10 35,7 36,13 37,10 100,10"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeartAnimation;
