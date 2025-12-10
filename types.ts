// ./types.ts

// Definición de roles del usuario (Mismo contenido, exportado desde su propio archivo)
export enum UserRole {
  Medico = 'Médico', // Corregido el acento para consistencia en el display
  Enfermero = 'Enfermero/a', // Añadida '/a' para reflejar el uso en el selector
  Paramedico = 'Paramédico', // Corregido el acento
  PrimerRespondiente = 'Primer Respondiente', // Texto completo
}

// Interfaz para los datos del paciente (Mantenida)
export interface PatientData {
  fullName: string;
  age: string;
  gender: string;
  currentMedication: string;
  healthHistory: string;
}

// Nueva interfaz para los mensajes del chat
export interface Message {
  sender: 'suma' | 'user'; // Dra. Suma o Usuario
  text: string;
}
