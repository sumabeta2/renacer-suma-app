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
        // Estilo: Fondo blanco, texto negro, borde rojo
        className="flex-grow p-3 pr-10 border-2 border-red-500 rounded-lg bg-white text-gray-900 text-center placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400"
      />
      <button
        type="button"
        onClick={toggleVisibility}
        // Color del icono: Rojo
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
          // OJO TACHADO (Código Oculto) - Versión FINAL ESTABLE y simple (el que te gustó)
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 relative">
                {/* Ojo base ligeramente desvanecido */}
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" className="opacity-50"/>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" className="opacity-50"/>
                {/* LÍNEA DIAGONAL TACHADA */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4l16 16" className="text-red-500 absolute" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default InputWithToggle;
