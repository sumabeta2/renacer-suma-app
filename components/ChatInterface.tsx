// ./components/ChatInterface.tsx (Interfaz de Chat con Dra. Suma - CORREGIDO)

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
// Usa HeartIcon para Dra. Suma y las iniciales para el usuario
const ChatBubble: React.FC<{ message: Message; role: UserRole }> = ({ message, role }) => {
  const isSuma = message.sender === 'suma';
  const initials = ROLE_INITIALS[role];

  return (
    <div className={`flex mb-4 ${isSuma ? 'justify-start' : 'justify-end'}`}>
      {isSuma && (
        // Icono Dra. Suma (Logo de Corazón con S) <-- ERROR SOLUCIONADO AQUÍ: USANDO // EN LUGAR DE /* */
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 flex items-center justify-center mr-2">
          <HeartIcon className="w-5 h-5 text-white" />
        </div>
      )}
      
      {/* Burbuja de Mensaje */}
      <div className={`max-w-xs lg:max-w-md ${isSuma ? 'order-2' : 'order-1'}`}>
        <div className={`px-4 py-2 text-base rounded-xl shadow ${
          isSuma 
            ? 'bg-red-600 text-white rounded-tl-none' // Dra. Suma: Rojo y Blanco
            : 'bg-white text-gray-900 rounded-tr-none' // Usuario: Blanco y Negro
        }`}>
          {message.text}
        </div>
      </div>

      {!isSuma && (
        {/* Icono Usuario (Iniciales del Rol) */}
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 text-gray-900 font-bold text-sm flex items-center justify-center ml-2">
          {initials}
        </div>
      )}
    </div>
  );
};

// --- Componente Principal de Chat ---
const ChatInterface: React.FC<ChatInterfaceProps> = ({ userRole, patientData, onEndAssistance }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const messageContainerRef = React.useRef<HTMLDivElement>(null);

  // 1. Generar Mensaje de Bienvenida (Dra. Suma)
  const initialMessage = useMemo(() => {
    const { fullName, age, currentMedication, healthHistory } = patientData;

    let msg = `Hola ${userRole}, veo que estás atendiendo a ${fullName} de ${age} años de edad.`;

    // Incluir detalles solo si están llenos
    if (currentMedication.trim()) {
      msg += ` El tratamiento actual es: ${currentMedication}.`;
    }
    if (healthHistory.trim()) {
      msg += ` Antecedentes reportados: ${healthHistory}.`;
    }

    msg += ' ¿Cuál es tu emergencia?';
    return msg;
  }, [userRole, patientData]);

  // 2. Cargar Mensaje Inicial al montar
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ sender: 'suma', text: initialMessage }]);
    }
  }, [initialMessage]);

  // 3. Auto-scroll al final del chat
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [messages]);


  // 4. Simulación de Envío y Respuesta de la IA
  const handleSend = useCallback(() => {
    if (inputMessage.trim() === '') return;

    const userText = inputMessage.trim();
    const newUserMessage: Message = { sender: 'user', text: userText };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputMessage('');

    // ** SIMULACIÓN DE RESPUESTA DE LA IA CON LÓGICA DE ROL Y CONTEXTO **
    setTimeout(() => {
      const sumaResponseText = generateSimulatedResponse(userText, userRole);
      const sumaResponse: Message = { sender: 'suma', text: sumaResponseText };
      setMessages((prev) => [...prev, sumaResponse]);
    }, 1500); // Pequeño delay para simular el procesamiento de la IA
  }, [inputMessage, userRole]);


  // --- Lógica de Simulación de la IA (DEBE SER REEMPLAZADA POR TU MOTOR REAL) ---
  const generateSimulatedResponse = (userText: string, role: UserRole): string => {
    const lowerText = userText.toLowerCase();

    if (lowerText.includes('paro') || lowerText.includes('inconsciente') && !lowerText.includes('respira')) {
      if (role === UserRole.Medico) {
        return "PCI (Paro Cardíaco Intrahospitalario) o PCEA. Asegure un acceso IV/IO. Ordene 1mg de Epinefrina IV/IO cada 3-5 min. Considere desfibrilación inmediata si es fibrilación ventricular o taquicardia ventricular sin pulso. ¿Ritmo en el monitor?";
      } else if (role === UserRole.Paramedico) {
        return "Inicie RCP de alta calidad (30:2) inmediatamente. Coloque monitor/desfibrilador. Administre O2 al 100%. Evalúe el ritmo y siga protocolo PHTLS/ACLS. ¿Escena segura para el desfibrilador?";
      } else if (role === UserRole.PrimerRespondiente) {
        return "¡Emergencia Crítica! Pida ayuda o active el 911/código. Inicie compresiones torácicas fuertes y rápidas inmediatamente (RCP solo con manos). No debe administrar ningún medicamento. ¿Puede conseguir un DEA?";
      }
    } else if (lowerText.includes('dolor en el pecho') || lowerText.includes('infarto')) {
      if (role === UserRole.PrimerRespondiente) {
        return "Pida ayuda, mantenga a la víctima en reposo en posición cómoda y no le dé nada de beber. No administre medicamentos. Verifique si está consciente.";
      }
    } else if (lowerText.includes('sangrando') || lowerText.includes('hemorragia')) {
      return "Aplique presión directa y firme sobre el punto de sangrado con un paño limpio o gasa. Si es severo, ¿hay signos de shock? (Palidez, sudoración).";
    }

    // Respuesta por defecto, adaptable al rol
    return `Gracias por el dato, ${role}. Para poder brindarte la mejor guía actualizada (OMS/AHA/PHTLS), necesito más detalles clínicos o tu siguiente acción.`;
  };
  // --------------------------------------


  return (
    <div className="flex flex-col h-[calc(100vh-60px)] bg-gray-900 rounded-lg overflow-hidden">
      {/* Cabecera del Chat */}
      <div className="bg-gray-100 p-3 flex justify-between items-center border-b border-gray-300 flex-shrink-0">
        <h3 className="text-xl font-bold text-gray-900">Asistencia Médica - Dra. Suma</h3>
        <button
          onClick={onEndAssistance}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition duration-200 text-sm font-semibold"
        >
          Finalizar Asistencia
        </button>
      </div>

      {/* Área de Mensajes (Chat Log) */}
      <div ref={messageContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 text-gray-900">
        {messages.map((msg, index) => (
          <ChatBubble key={index} message={msg} role={userRole} />
        ))}
      </div>

      {/* Input de Mensaje */}
      <div className="p-4 bg-gray-100 border-t border-gray-300 flex flex-shrink-0">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSend();
          }}
          placeholder="Describe la situación o tu siguiente acción..."
          className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-600 text-gray-900"
        />
        <button
          onClick={handleSend}
          disabled={inputMessage.trim() === ''}
          className="bg-red-600 text-white px-6 rounded-r-lg hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-200 font-bold"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;
