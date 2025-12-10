import React, { useState } from 'react';

interface InputWithToggleProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  maxLength?: number;
  pattern?: string; // For numeric input constraint
  className?: string; // Additional classes for the container div
}

const InputWithToggle: React.FC<InputWithToggleProps> = ({
  value,
  onChange,
  placeholder,
  maxLength,
  pattern = "[0-9]*", // Default to numeric input
  className,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const toggleVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className={`relative flex items-center ${className}`}>
      <input
        type={passwordVisible ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        pattern={pattern}
        inputMode="numeric"
        // CORRECCIÓN 1 & 2: Fondo blanco, texto negro y placeholder gris
        className="flex-grow p-3 pr-10 border-2 border-red-500 rounded-lg bg-white text-gray-900 text-center placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400"
      />
      <button
        type="button"
        onClick={toggleVisibility}
        // Color del icono: Rojo para mantener la coherencia del diseño
        className="absolute right-3 p-1 text-red-500 hover:text-red-700 focus:outline-none"
        aria-label={passwordVisible ? 'Hide code' : 'Show code'}
      >
        {passwordVisible ? (
          // OJO ABIERTO (Código Visible)
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ) : (
          // CORRECCIÓN 3: OJO TACHADO (Código Oculto)
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.988 5.704a2.25 2.25 0 012.447-2.447L10.5 5.25m2.25 2.25L10.5 5.25m-2.25 2.25l2.5-2.5m1.5-1.5l2.5-2.5m1.5-1.5l2.5-2.5m1.5-1.5l2.5-2.5m1.5-1.5l2.5-2.5m1.5-1.5l2.5-2.5m1.5-1.5l2.5-2.5M10.5 5.25l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5M10.5 5.25l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5M10.5 5.25l-2.5 2.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6.75l-4.5 4.5m4.5-4.5l-2.5 2.5m1.5-1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5M10.5 6.75l-4.5 4.5m4.5-4.5l-2.5 2.5m1.5-1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5M10.5 6.75l-4.5 4.5m4.5-4.5l-2.5 2.5m1.5-1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5m1.5 1.5l-2.5 2.5M10.5 6.75l-4.5 4.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75c4.78 0 8.85-3.6 9.88-8.52a.75.75 0 000-.46c-1.03-4.92-5.1-8.52-9.88-8.52S3.15 5.85 2.12 10.77a.75.75 0 000 .46c1.03 4.92 5.1 8.52 9.88 8.52zm0-3a3 3 0 100-6 3 3 0 000 6z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 10.5l3 3m-3 0l3-3" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default InputWithToggle;
