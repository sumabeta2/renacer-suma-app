export enum UserRole {
  Medico = 'Medico',
  Enfermero = 'Enfermero',
  Paramedico = 'Paramedico',
  PrimerRespondiente = '1er respondiente',
}

export interface PatientData {
  fullName: string;
  age: string;
  gender: string;
  currentMedication: string;
  healthHistory: string;
}