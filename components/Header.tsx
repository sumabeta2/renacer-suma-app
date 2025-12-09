import React from 'react';
import HeartAnimation from './HeartAnimation'; // Re-use the animated heart component

interface HeaderProps {
  isAdmin: boolean;
  onViewHistory: () => void;
  onAdminPanel: () => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isAdmin, onViewHistory, onAdminPanel, onLogout }) => {
  return (
    <header className="sticky top-0 z-10 bg-gray-800 p-4 flex flex-col sm:flex-row items-center justify-between shadow-md w-full">
      <div className="flex items-center mb-4 sm:mb-0">
        <HeartAnimation size={40} /> {/* Small animated heart logo */}
        <h2 className="text-white text-2xl font-bold ml-2">SUMA</h2>
      </div>
      <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 sm:gap-4">
        <button
          onClick={onViewHistory}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base"
        >
          {/* History icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1 sm:mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.233 11.06L9.25 14.172v-1.125m1.58-1.58l1.125-1.125M14.25 12h-3.5" />
          </svg>
          VER HISTORIAL
        </button>
        {isAdmin && (
          <button
            onClick={onAdminPanel}
            className="px-4 py-2 bg-black text-red-500 rounded-lg hover:bg-gray-700 transition-colors duration-200 font-bold text-sm sm:text-base"
          >
            ADMON
          </button>
        )}
        <button
          onClick={onLogout}
          className="p-2 text-white hover:text-red-500 transition-colors duration-200"
          aria-label="Salir de la aplicación"
        >
          {/* Exit icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;