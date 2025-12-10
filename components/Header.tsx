// ./components/Header.tsx (Botones Balanceados)

import React from 'react';
import HeartAnimation from './HeartAnimation'; 

interface HeaderProps {
  isAdmin: boolean;
  onViewHistory: () => void;
  onAdminPanel: () => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isAdmin, onViewHistory, onAdminPanel, onLogout }) => {
    return (
        <header className="sticky top-0 z-10 bg-gray-800 p-3 flex items-center justify-between shadow-lg w-full">
            {/* 1. Logo y Título (Compacto) */}
            <div className="flex items-center">
                <HeartAnimation size={32} /> 
                <h2 className="text-white text-xl font-bold ml-2 tracking-widest">SUMA</h2>
            </div>

            {/* 2. Botones de Acción (Compactos con texto) */}
            <div className="flex items-center gap-2"> 
                
                {/* HISTORIAL - Texto acortado para balancear el tamaño */}
                <button
                    onClick={onViewHistory}
                    className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-semibold"
                >
                    HISTORIAL
                </button>

                {/* ADMON - Fondo Negro (Visible solo para Admin) */}
                {isAdmin && (
                    <button
                        onClick={onAdminPanel}
                        className="px-3 py-1 bg-black text-red-500 rounded-lg hover:bg-gray-700 transition-colors duration-200 text-sm font-bold"
                    >
                        ADMON
                    </button>
                )}
                
                {/* LOGOUT - Mantenido como Ícono */}
                <button
                    onClick={onLogout}
                    className="p-2 text-white hover:text-red-500 transition-colors duration-200 rounded-full"
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
