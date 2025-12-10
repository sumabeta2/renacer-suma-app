// ./components/RoleSelector.tsx (Compacto y Profesional)

import React from 'react';
import { UserRole } from '../types';

interface RoleSelectorProps {
  selectedRole: UserRole | null;
  onSelectRole: (role: UserRole) => void;
}

const RoleSelector: React.FC<RoleSelectorProps> = ({ selectedRole, onSelectRole }) => {
  // Usamos el array de roles de tu código original
  const roles = [UserRole.Medico, UserRole.Enfermero, UserRole.Paramedico, UserRole.PrimerRespondiente];
  
  const isRoleSelected = selectedRole !== null;

  return (
    <div className="mb-4 pt-4 border-t border-gray-200">
      
      {/* Título de la Sección: Ajustado a tamaño 'base', ícono para estética */}
      <h3 className="text-base font-extrabold text-gray-900 uppercase flex items-center mb-3">
        {/* Ícono de Perfil/Rol */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        MI ROL ES: <span className="text-red-600 ml-1">*</span>
      </h3>

      {/* Contenedor de Botones de Rol (Chips Compactos) */}
      <div className="flex flex-wrap gap-2"> {/* CLAVE: flex-wrap y gap-2 ahorran espacio */}
        {roles.map((role) => (
          <label
            key={role}
            // CLASES CLAVE PARA LA COMPACIDAD: py-2, px-4, rounded-full, text-sm
            className={`flex items-center justify-center py-2 px-4 rounded-full border-2 cursor-pointer transition-all duration-200 text-center text-sm font-medium whitespace-nowrap
                        ${selectedRole === role
                          ? 'border-red-600 bg-red-600 text-white shadow-md' // Estilo de acento
                          : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                        }`}
          >
            <input
              type="radio"
              name="userRole"
              value={role}
              checked={selectedRole === role}
              onChange={() => onSelectRole(role)}
              className="hidden" 
            />
            <span>{role}</span>
          </label>
        ))}
      </div>

      {/* Mensaje de validación compacto */}
      {!isRoleSelected && (
          <p className="text-red-500 text-xs mt-3">
              * SELECCIONE SU ROL PARA CONTINUAR
          </p>
      )}

    </div>
  );
};

export default RoleSelector;
