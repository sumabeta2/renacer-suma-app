// src/types.ts
export enum UserRole {
  Medico = 'Medico',
  Enfermero = 'Enfermero/a',
  Paramedico = 'Paramedico',
  PrimerRespondiente = 'Primer Respondiente',
}

export interface PatientData {
  fullName: string;
  age: string;
  gender: string;
  currentMedication: string;
  healthHistory: string;
}

export type Sender = 'user' | 'suma';

export interface Message {
  id: string;
  text: string;
  sender: Sender;
  timestamp: number;
}
