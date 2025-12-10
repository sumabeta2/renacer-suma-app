// ./components/ChatInterface.tsx (Interfaz de Chat con Dra. Suma - VERSIÓN FINAL CORREGIDA)

import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { UserRole, PatientData, Message } from '../types';
import { ROLE_INITIALS } from '../constants';
import HeartIcon from './HeartIcon';

interface ChatInterfaceProps {
  userRole: UserRole;
  patientData: PatientData;
  onEndAssistance: () => void;
}

// --- Componente de Burbuja de Chat ---
const ChatBubble: React.FC<{ message: Message; role: UserRole }> = ({ message, role }) => {
  const isSuma = message.sender === 'suma';
  const initials = ROLE_INITIALS[role];

  return (
    <div className={`flex mb-4 ${isSuma ? 'justify-start' : 'justify-end'}`}>
      {isSuma && (
        // Icono Dra. Suma (Logo de Corazón con S) <-- CORREGIDO AQUÍ
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 flex items-center justify-center mr-2">
          <HeartIcon className="w-5 h-5 text-white" />
        </div>
      )}
      
      {/* Burbuja de Mensaje */}
      <div className={`max-w-xs lg:max-w-md ${isSuma ? 'order-2' : 'order-1'}`}>
        <div className={`px-4 py-2 text-base rounded-xl shadow ${
          isSuma 
            ? 'bg-red-600 text-white rounded-tl-none' 
            : 'bg-white text-gray-900 rounded-tr-none'
        }`}>
          {message.text}
        </div>
      </div>

      {!isSuma && (
        // Icono Usuario (Iniciales del Rol) <-- CORREGIDO AQUÍ
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 text-gray-900 font-bold text-sm flex items-center justify-center ml-2">
          {initials}
        </div>
      )}
    </div>
  );
};
// ... (resto del código de ChatInterface.tsx se mantiene, solo se corrigió el componente ChatBubble)
