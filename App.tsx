// ./App.tsx (FRAGMENTO 1.1: Definición de Tipos y Estados de Rol)

import React, { useState, useCallback, useMemo } from 'react';
import HeartAnimation from './components/HeartAnimation'; 
import InputWithToggle from './components/InputWithToggle'; 
import Header from './components/Header'; 
import PatientForm from './components/PatientForm'; 
import { ADMIN_CODE } from './constants';
// AÑADIR AQUI LAS DEFINICIONES DE TIPOS EN LUGAR DE IMPORTARLOS:

// =======================================================
// AÑADIDO: DEFINICIONES DE TIPOS (Evita errores de Rollup)
// =======================================================
export enum UserRole {
  Medico = 'Médico',
  Enfermero = 'Enfermero/a',
  Paramedico = 'Paramédico',
  PrimerRespondiente = 'Primer Respondiente',
}

export interface PatientData {
  fullName: string;
  age: string;
  gender: string;
  currentMedication: string;
  healthHistory: string;
}
// =======================================================


const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activationCode, setActivationCode] = useState('');
  const [showLoginError, setShowLoginError] = useState(false);
  
  // AÑADIDO: ESTADO DEL ROL DEL USUARIO
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  
  // Eliminado: const [isChatActive, setIsChatActive] = useState(false); 
  
  const [patientData, setPatientData] = useState<PatientData>({
// ... resto del código ...
// (mantener el resto de App.tsx como estaba en la última restauración)
// ...
