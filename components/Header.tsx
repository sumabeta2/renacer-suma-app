// ./components/Header.tsx (Ultra Compacto y Profesional)

import React from 'react';
import HeartAnimation from './HeartAnimation'; 
// Asegúrate de que APP_VERSION esté disponible si lo usas
import { APP_VERSION } from '../constants'; 

interface HeaderProps {
  isAdmin: boolean;
  onViewHistory: () => void;
  onAdminPanel: () => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isAdmin, onViewHistory, onAdminPanel, onLogout }) => {
    // CLAVE DE COMPACIDAD: p-3 en lugar de p-4 (reduce la altura vertical)
    return (
        <header className="sticky top-0 z-10 bg-gray-800 p-3 flex items-center justify-between shadow-lg w-full">
            {/* 1. Logo y Título (Compacto) */}
            <div className="flex items-center">
                <HeartAnimation size={32} /> {/* Corazón más pequeño (32px) */}
                <h2 className="text-white text-xl font-bold ml-2 tracking-widest">SUMA</h2> {/* Texto un poco más pequeño */}
                {/* Indicador de Versión, colocado de forma discreta */}
                <span className="text-gray-500 text-xs ml-2 mt-1">({APP_VERSION})</span>
            </div>

            {/* 2. Botones de Acción (Solo Íconos) */}
            <div className="flex items-center gap-2"> {/* Espacio reducido: gap-2 */}
                
                {/* VER HISTORIAL - Convertido a Ícono */}
                <button
                    onClick={onViewHistory}
                    className="p-2 text-white rounded-full hover:bg-gray-700 transition-colors duration-200"
                    aria-label="Ver Historial"
                >
                    {/* History icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.233 11.06L9.25 14.172v-1.125m1.58-1.58l1.125-1.125M14.25 12h-3.5" />
                    </svg>
                </button>

                {/* ADMON - Convertido a Ícono */}
                {isAdmin && (
                    <button
                        onClick={onAdminPanel}
                        className="p-2 text-red-500 rounded-full hover:bg-gray-700 transition-colors duration-200"
                        aria-label="Panel de Administración"
                    >
                        {/* Admin icon (Ajustes/Engranaje) */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 10-3 0M3.75 18H7.5m9-12h2.25m-2.25 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 10-3 0m-1.5 6h2.25m-2.25 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 10-3 0M10.5 12H18.75" />
                        </svg>
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
