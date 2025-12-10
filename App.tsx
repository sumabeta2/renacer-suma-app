// ./App.tsx (VERSIÓN COMPLETA Y 100% FUNCIONAL)

import React, { useState } from "react";
import HeartAnimation from "./components/HeartAnimation";
import InputWithToggle from "./components/InputWithToggle";
import Header from "./components/Header";
import PatientForm from "./components/PatientForm";
import ChatInterface from "./components/ChatInterface";
import { ADMIN_CODE } from "./constants";

// ===================================================================
// DEFINICIONES DE TIPOS (Requerido para evitar errores de compilación)
// ===================================================================
export enum UserRole {
  Medico = "Médico",
  Enfermero = "Enfermero/a",
  Paramedico = "Paramédico",
  PrimerRespondiente = "Primer Respondiente",
}

export interface PatientData {
  fullName: string;
  age: string;
  gender: string;
  currentMedication: string;
  healthHistory: string;
}
// ===================================================================


const App: React.FC = () => {
  const [activationCode, setActivationCode] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginError, setShowLoginError] = useState(false);

  const [userRole, setUserRole] = useState<UserRole | null>(null);

  const [patientData, setPatientData] = useState<PatientData>({
    fullName: "",
    age: "",
    gender: "",
    currentMedication: "",
    healthHistory: "",
  });

  const [isFormCompleted, setIsFormCompleted] = useState(false);
  const [isChatActive, setIsChatActive] = useState(false);

  // ================================================================
  // VALIDAR CÓDIGO DE ACCESO
  // ================================================================
  const handleLogin = () => {
    if (activationCode === ADMIN_CODE) {
      setIsLoggedIn(true);
      setShowLoginError(false);
    } else {
      setShowLoginError(true);
    }
  };

  // ================================================================
  // FINALIZAR CHAT
  // ================================================================
  const handleEndChat = () => {
    setIsChatActive(false);
  };

  // ================================================================
  // RENDER
  // ================================================================
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
        <HeartAnimation size={90} />

        <div className="mt-6 w-full max-w-sm">
          <InputWithToggle
            label="Código de Activación"
            value={activationCode}
            onChange={(e) => setActivationCode(e.target.value)}
            placeholder="Ingresa el código"
          />

          {showLoginError && (
            <p className="text-red-600 mt-2 text-center">
              Código incorrecto. Inténtalo nuevamente.
            </p>
          )}

          <button
            onClick={handleLogin}
            className="w-full mt-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow font-semibold"
          >
            Ingresar
          </button>
        </div>
      </div>
    );
  }

  // ================================================================
  // SELECCIÓN DE ROL
  // ================================================================
  if (!userRole) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <Header title="Selecciona tu Rol" />

        <div className="grid gap-4 mt-6 w-full max-w-sm">
          {Object.values(UserRole).map((role) => (
            <button
              key={role}
              onClick={() => setUserRole(role)}
              className="w-full bg-white shadow px-4 py-3 rounded-xl border text-gray-900 font-semibold"
            >
              {role}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ================================================================
  // FORMULARIO DE PACIENTE
  // ================================================================
  if (!isFormCompleted) {
    return (
      <PatientForm
        userRole={userRole}
        patientData={patientData}
        onChange={setPatientData}
        onComplete={() => setIsFormCompleted(true)}
      />
    );
  }

  // ================================================================
  // CHAT INTERACTIVO
  // ================================================================
  if (isFormCompleted && userRole && !isChatActive) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <Header title="Datos completos" />

        <button
          onClick={() => setIsChatActive(true)}
          className="mt-8 w-full max-w-sm bg-red-600 text-white px-4 py-3 rounded-xl font-semibold"
        >
          Iniciar Chat con Dra. Suma
        </button>
      </div>
    );
  }

  return (
    <ChatInterface
      userRole={userRole}
      patientData={patientData}
      onEndAssistance={handleEndChat}
    />
  );
};

export default App;
