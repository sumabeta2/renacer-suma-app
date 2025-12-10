// src/types.ts
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

export type Sender = 'suma' | 'user';

export interface Message {
  id: string;
  sender: Sender;
  text: string;
  timestamp: number;
}
