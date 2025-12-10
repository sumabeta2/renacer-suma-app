// ./App.tsx (Código final con la funcionalidad de Chat y Transición)

import React, { useState, useCallback, useMemo } from 'react';
import HeartAnimation from './components/HeartAnimation'; // Asumido existente
import InputWithToggle from './components/InputWithToggle'; // Asumido existente
import Header from './components/Header'; // Asumido existente
import RoleSelector from './components/RoleSelector';
import PatientForm from './components/PatientForm'; // Asumido existente
import ChatInterface from './components/ChatInterface'; // <--- IMPORTACIÓN CLAVE
import { ADMIN_CODE } from './constants';
import { UserRole, PatientData } from './types'; // <--- IMPORTACIÓN CLAVE

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activationCode, setActivationCode] = useState('');
  const [showLoginError, setShowLoginError] = useState(false);
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [isChatActive, setIsChatActive] = useState(false); // <--- NUEVO ESTADO PARA EL CHAT
  const [patientData, setPatientData] = useState<PatientData>({
    fullName: '',
    age: '',
    gender: '',
    currentMedication: '',
    healthHistory: '',
  });

  const isAdmin = useMemo(() => isLoggedIn && activationCode === ADMIN_CODE, [isLoggedIn, activationCode]);

  // Handlers de login (Mantenidos)
  const handleCodeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); 
    setActivationCode(value.substring(0, 6));
    setShowLoginError(false);
  }, []);

  const handleActivate = useCallback(() => {
    if (activationCode === ADMIN_CODE) { 
      setIsLoggedIn(true);
      setShowLoginError(false);
    } else {
      setShowLoginError(true);
    }
  }, [activationCode]);

  // Handlers de Logout
  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
    setIsChatActive(false); // Resetea si estaba en el chat
    setActivationCode(''); 
    setUserRole(null);
    setPatientData({ fullName: '', age: '', gender: '', currentMedication: '', healthHistory: '' });
  }, []);

  // Handlers de Formulario
  const handleRoleSelect = useCallback((role: UserRole) => {
    setUserRole(role);
  }, []);

  const handlePatientDataChange = useCallback((field: keyof PatientData, value: string) => {
    setPatientData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  }, []);
  
  // Handlers de Botones de Header (Mantenidos)
  const onViewHistory = useCallback(() => { alert('Funcionalidad "Historial" no implementada.'); }, []);
  const onAdminPanel = useCallback(() => { alert('Funcionalidad "Panel de Administración" no implementada.'); }, []);
  const onSupportTicket = useCallback(() => { alert('Funcionalidad "Soporte Técnico" no implementada.'); }, []);


  // Lógica para iniciar el Chat (Transición)
  const onInitiateAssistance = useCallback(() => {
    if (isInitiateAssistanceEnabled) {
      setIsChatActive(true); // <--- CAMBIO DE VISTA PRINCIPAL AL CHAT
    }
  }, []);

  // Lógica para finalizar el Chat y volver al formulario
  const handleEndAssistance = useCallback(() => {
    setIsChatActive(false);
    setUserRole(null); // Borrar selección de rol para un nuevo caso limpio
    setPatientData({ fullName: '', age: '', gender: '', currentMedication: '', healthHistory: '' });
  }, []);


  // Validación de campos requeridos
  const isInitiateAssistanceEnabled = useMemo(() => {
    return (
      userRole !== null &&
      patientData.fullName.trim() !== '' &&
      patientData.age.trim() !== '' &&
      !isNaN(Number(patientData.age)) &&
      Number(patientData.age) >= 0 
    );
  }, [userRole, patientData.fullName, patientData.age]);


  // Render Login Page if not logged in
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-900 flex justify-end items-center p-4">
        <div className="flex flex-col items-center text-center max-w-sm w-full p-6 rounded-lg bg-gray-800 shadow-lg lg:mr-16">
          <HeartAnimation size={200} />
          <h1 className="text-white text-4xl font-extrabold mt-8 tracking-widest">SUMA</h1>
          <p className="text-gray-400 text-lg mt-2 max-w-sm">
            Tu Asistente Médico Personal, Cuando Más lo Necesitas.
          </p>

          <div className="mt-12 w-full max-w-xs">
            <InputWithToggle
              value={activationCode}
              onChange={handleCodeChange}
              placeholder="Código de 6 dígitos"
              maxLength={6}
              className="mb-4 mx-auto" 
            />
            {showLoginError && (
              <p className="text-red-500 text-sm mt-2">Código incorrecto. Inténtalo de nuevo.</p>
            )}
            <button
              onClick={handleActivate}
              disabled={activationCode.length !== 6}
              className={`w-full py-3 px-6 rounded-lg text-lg font-bold uppercase transition-colors duration-200
                          ${activationCode.length === 6
                            ? 'bg-red-600 text-white hover:bg-red-700'
                            : 'bg-gray-500 text-gray-300 cursor-not-allowed'
                          }`}
            >
              ACTIVAR
            </button>
            {/* La versión debe importarse de constants.ts si la usas aquí */}
          </div>
        </div>
      </div>
    );
  }

  // Render Main App Page if logged in
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Header
        isAdmin={isAdmin}
        onViewHistory={onViewHistory}
        onAdminPanel={onAdminPanel}
        onLogout={handleLogout}
      />

      <main className="flex-1 p-3 overflow-y-auto">
        {isChatActive ? (
          // 1. Interfaz de Chat (Vista activa)
          <div className="max-w-3xl h-[calc(100vh-80px)] mx-auto"> 
            <ChatInterface 
              userRole={userRole as UserRole} 
              patientData={patientData}
              onEndAssistance={handleEndAssistance} 
            />
          </div>
        ) : (
          // 2. Formulario de Datos (Vista inactiva)
          <div className="max-w-xl mx-auto bg-white p-4 rounded-lg shadow-lg text-gray-900">
            <RoleSelector selectedRole={userRole} onSelectRole={handleRoleSelect} />
            {/* Asumo que PatientForm existe y tiene las props correctas */}
            <PatientForm patientData={patientData} onDataChange={handlePatientDataChange} />

            {/* "INICIAR ASISTENCIA" Button (Activa el chat) */}
            <button
              onClick={onInitiateAssistance}
              disabled={!isInitiateAssistanceEnabled}
              className={`w-full py-3 px-6 rounded-lg text-lg font-bold uppercase transition-colors duration-200 mb-3
                          ${isInitiateAssistanceEnabled
                            ? 'bg-red-600 text-white hover:bg-red-700'
                            : 'bg-gray-500 text-gray-300 cursor-not-allowed'
                          }`}
            >
              INICIAR ASISTENCIA
            </button>
            {/* "SOPORTE TECNICO" Button */}
            <button
              onClick={onSupportTicket}
              className="w-full py-2 px-6 rounded-lg text-sm font-bold uppercase bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
            >
              SOPORTE TECNICO
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
