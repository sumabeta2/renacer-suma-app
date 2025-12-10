// constants.ts — VERSIÓN COMPLETA Y CORRECTA

import { UserRole } from "./App";

// Código de activación del Administrador
export const ADMIN_CODE = "SUMA2025";

// Mapa de iniciales para cada rol
export const ROLE_INITIALS: Record<UserRole, string> = {
  [UserRole.Medico]: "M",
  [UserRole.Enfermero]: "E",
  [UserRole.Paramedico]: "P",
  [UserRole.PrimerRespondiente]: "PR",
};

// Mensajes iniciales o textos del sistema (si los necesitas)
export const SYSTEM_MESSAGES = {
  welcome: "Hola, soy la Dra. Suma. Estoy aquí para ayudarte.",
};
