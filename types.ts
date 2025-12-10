// ./types.ts (CORRECCIÓN FINAL DE EXPORTACIÓN PARA COMPATIBILIDAD CON ROLLUP)

// Definición de roles del usuario (Enum)
export enum UserRole {
  Medico = 'Médico',
  Enfermero = 'Enfermero/a',
  Paramedico = 'Paramédico',
  PrimerRespondiente = 'Primer Respondiente',
}

// Interfaz para los datos del paciente
export interface PatientData {
  fullName: string;
  age: string;
  gender: string;
  currentMedication: string;
  healthHistory: string;
}

// Nueva interfaz para los mensajes del chat
export interface Message {
  sender: 'suma' | 'user'; 
  text: string;
}
// *** No hay cambios aquí, ya que el código previo era correcto. ***
// *** El error está en la manera en que el bundler lee estas exportaciones. ***
