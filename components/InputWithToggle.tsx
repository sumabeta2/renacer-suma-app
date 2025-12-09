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
        inputMode="numeric" // Suggest numeric keyboard on mobile devices
        className="flex-grow p-3 pr-10 border-2 border-red-500 rounded-lg bg-gray-700 text-white text-center placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
      />
      <button
        type="button"
        onClick={toggleVisibility}
        className="absolute right-3 p-1 text-gray-400 hover:text-white focus:outline-none"
        aria-label={passwordVisible ? 'Hide code' : 'Show code'}
      >
        {passwordVisible ? (
          // SVG for 'eye open' icon
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ) : (
          // SVG for 'eye closed' icon
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.981 8.279A10.457 10.457 0 011.992 12H11.25a.75.75 0 01.75.75v5.063c0 .193-.05.385-.146.551L5.98 20.916a8.956 8.956 0 005.996-1.444M19.992 12H12.75a.75.75 0 01-.75-.75V6.187c0-.193.05-.385.146-.551l5.98-4.877a8.956 8.956 0 015.996 1.444" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default InputWithToggle;