// ./types.ts (CORRECCIÓN QUIRÚRGICA para asegurar la exportación)

// Definición de roles del usuario (Enum)
export enum UserRole { // Asegurando 'export'
  Medico = 'Médico',
  Enfermero = 'Enfermero/a',
  Paramedico = 'Paramédico',
  PrimerRespondiente = 'Primer Respondiente',
}

// Interfaz para los datos del paciente
export interface PatientData { // Asegurando 'export'
  fullName: string;
  age: string;
  gender: string;
  currentMedication: string;
  healthHistory: string;
}

// Nueva interfaz para los mensajes del chat
export interface Message { // Asegurando 'export'
  sender: 'suma' | 'user'; // Dra. Suma o Usuario
  text: string;
}
