// ./components/Header.tsx (Botones de Texto Reintroducidos)

import React from 'react';
import HeartAnimation from './HeartAnimation'; 
// Importamos ADMIN_CODE para asegurar la lógica de visibilidad si fuera necesario, aunque se usa isAdmin
// import { ADMIN_CODE } from '../constants'; // Descomentar si no se usa isAdmin del prop

interface HeaderProps {
  isAdmin: boolean;
  onViewHistory: () => void;
  onAdminPanel: () => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isAdmin, onViewHistory, onAdminPanel, onLogout }) => {
    // CLAVE DE COMPACIDAD: p-3 en la cabecera
    return (
        <header className="sticky top-0 z-10 bg-gray-800 p-3 flex items-center justify-between shadow-lg w-full">
            {/* 1. Logo y Título (Compacto) */}
            <div className="flex items-center">
                <HeartAnimation size={32} /> {/* Corazón pequeño */}
                <h2 className="text-white text-xl font-bold ml-2 tracking-widest">SUMA</h2>
                {/* Etiqueta de versión ELIMINADA */}
            </div>

            {/* 2. Botones de Acción (Compactos con texto) */}
            <div className="flex items-center gap-2"> {/* Espacio reducido: gap-2 */}
                
                {/* VER HISTORIAL - Fondo Azul */}
                <button
                    onClick={onViewHistory}
                    // Estilo compacto con texto y color azul
                    className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-semibold"
                >
                    VER HISTORIAL
                </button>

                {/* ADMON - Fondo Negro (Visible solo para Admin) */}
                {isAdmin && (
                    <button
                        onClick={onAdminPanel}
                        // Estilo compacto con texto y color negro/rojo
                        className="px-3 py-1 bg-black text-red-500 rounded-lg hover:bg-gray-700 transition-colors duration-200 text-sm font-bold"
                    >
                        ADMON
                    </button>
                )}
                
                {/* LOGOUT - Ícono (mantenido por compacidad y relevancia) */}
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
