// ./App.tsx (Máxima Optimización de Espacio)

import React, { useState, useCallback, useMemo } from 'react';
import HeartAnimation from './components/HeartAnimation';
import InputWithToggle from './components/InputWithToggle';
import Header from './components/Header';
import RoleSelector from './components/RoleSelector';
import PatientForm from './components/PatientForm';
import { ADMIN_CODE, APP_VERSION } from './constants';
import { UserRole, PatientData } from './types';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activationCode, setActivationCode] = useState('');
  const [showLoginError, setShowLoginError] = useState(false);
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [patientData, setPatientData] = useState<PatientData>({
    fullName: '',
    age: '',
    gender: '',
    currentMedication: '',
    healthHistory: '',
  });

  // Determine if the current user is an admin
  const isAdmin = useMemo(() => isLoggedIn && activationCode === ADMIN_CODE, [isLoggedIn, activationCode]);

  // Handle changes in the activation code input field
  const handleCodeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numeric input and limit to 6 digits
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    setActivationCode(value.substring(0, 6));
    setShowLoginError(false); // Clear error on new input
  }, []);

  // Handle the "ACTIVAR" button click for login
  const handleActivate = useCallback(() => {
    // ADMIN_CODE es 561393 (usando tu constante)
    if (activationCode === ADMIN_CODE) { 
      setIsLoggedIn(true);
      setShowLoginError(false);
    } else {
      setShowLoginError(true);
    }
  }, [activationCode]);

  // Handle logging out from the application
  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
    setActivationCode(''); // Clear activation code
    setUserRole(null); // Reset main app state
    setPatientData({ // Reset patient data
      fullName: '',
      age: '',
      gender: '',
      currentMedication: '',
      healthHistory: '',
    });
  }, []);

  // Handle selection of user role
  const handleRoleSelect = useCallback((role: UserRole) => {
    setUserRole(role);
  }, []);

  // Handle changes in patient data input fields
  const handlePatientDataChange = useCallback((field: keyof PatientData, value: string) => {
    setPatientData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  }, []);

  // Check if the "INICIAR ASISTENCIA" button should be enabled
  const isInitiateAssistanceEnabled = useMemo(() => {
    return (
      userRole !== null &&
      patientData.fullName.trim() !== '' &&
      patientData.age.trim() !== '' &&
      !isNaN(Number(patientData.age)) && // Ensure age is a valid number
      Number(patientData.age) > 0 // Ensure age is a positive number
    );
  }, [userRole, patientData.fullName, patientData.age]);

  // Placeholder functions for button actions
  const onViewHistory = useCallback(() => {
    alert('Funcionalidad "Ver Historial" no implementada.');
  }, []);

  const onAdminPanel = useCallback(() => {
    alert('Funcionalidad "Panel de Administración" no implementada.');
  }, []);

  const onInitiateAssistance = useCallback(() => {
    alert('Funcionalidad "Iniciar Asistencia" no implementada con los datos: \n' +
          `Rol: ${userRole}\n` +
          `Nombre: ${patientData.fullName}\n` +
          `Edad: ${patientData.age}\n` +
          `Sexo: ${patientData.gender || 'No especificado'}\n` +
          `Medicación: ${patientData.currentMedication || 'Ninguna'}\n` +
          `Antecedentes: ${patientData.healthHistory || 'Ninguno'}`);
  }, [userRole, patientData]);

  const onSupportTicket = useCallback(() => {
    alert('Funcionalidad "Soporte Técnico" no implementada.');
  }, []);

  // Render Login Page if not logged in
  if (!isLoggedIn) {
    return (
      // Login Page: Mantenemos el estilo de alineación a la derecha
      <div className="min-h-screen bg-gray-900 flex justify-end items-center p-4">
        {/* Container for login content, constrained width and right-aligned */}
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
            <p className="text-red-500 text-xs mt-4">{APP_VERSION}</p>
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

      {/* CLAVE DE COMPACIDAD: padding general reducido a p-3 */}
      <main className="flex-1 p-3 overflow-y-auto">
        {/* SECCIÓN "NUEVO CASO" ELIMINADA */}

        {/* Contenedor de Formulario: max-w-xl (ancho limitado) y mx-auto (centrado) */}
        {/* CLAVE DE ANCHO: Se elimina ml-auto mr-4 lg:mr-16 y se usa mx-auto para centrar. */}
        {/* CLAVE DE COMPACIDAD: padding interno reducido a p-4 */}
        <div className="max-w-xl mx-auto bg-white p-4 rounded-lg shadow-lg text-gray-900">
          {/* User Role Selection */}
          <RoleSelector selectedRole={userRole} onSelectRole={handleRoleSelect} />
          {/* Patient Data Form */}
          <PatientForm patientData={patientData} onDataChange={handlePatientDataChange} />

          {/* "INICIAR ASISTENCIA" Button */}
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
            // CLAVE DE COMPACIDAD: py-2 en lugar de py-3
            className="w-full py-2 px-6 rounded-lg text-lg font-bold uppercase bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
          >
            SOPORTE TECNICO
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
