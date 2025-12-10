import React from 'react';
import HeartAnimation from './HeartAnimation';

interface HeaderProps {
  title?: string;
  onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title = 'SUMA', onLogout }) => {
  return (
    <header className="w-full sticky top-0 z-10 bg-gray-800 p-3 flex items-center justify-between shadow-lg">
      <div className="flex items-center">
        <HeartAnimation size={32} />
        <h2 className="text-white text-xl font-bold ml-2 tracking-widest">{title}</h2>
      </div>

      <div className="flex items-center gap-2">
        {onLogout && (
          <button
            onClick={onLogout}
            className="p-2 text-white hover:text-red-500 transition-colors duration-200 rounded-full"
            aria-label="Salir de la aplicación"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H3m0 0l4-4m-4 4l4 4M21 12v6a2 2 0 01-2 2H9" />
            </svg>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
