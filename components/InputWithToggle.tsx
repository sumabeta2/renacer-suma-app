import React, { useState } from 'react';

interface InputWithToggleProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  maxLength?: number;
  className?: string;
}

const InputWithToggle: React.FC<InputWithToggleProps> = ({ value, onChange, placeholder, maxLength, className }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className={`relative flex items-center ${className ?? ''}`}>
      <input
        type={visible ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        className="flex-grow p-3 pr-10 border-2 border-red-500 rounded-lg bg-white text-gray-900 text-center placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400"
      />
      <button
        type="button"
        onClick={() => setVisible((v) => !v)}
        className="absolute right-3 p-1 text-red-500 hover:text-red-700 focus:outline-none"
        aria-label={visible ? 'Ocultar' : 'Mostrar'}
      >
        {visible ? 'Ocultar' : 'Mostrar'}
      </button>
    </div>
  );
};

export default InputWithToggle;
