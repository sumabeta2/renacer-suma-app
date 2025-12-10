// ./constants.ts (MODIFICADO para incluir ROLE_INITIALS)

import { UserRole } from "./types"; // Importamos los roles, asumiendo que ya creaste './types.ts'

export const ADMIN_CODE = "561393";
export const APP_VERSION = "v. 1.0.0"; // Ajuste estético a 'v. 1.0.0'

// Mapeo de roles a iniciales (ESENCIAL para las burbujas de chat)
export const ROLE_INITIALS: { [key in UserRole]: string } = {
  [UserRole.Medico]: 'M',
  [UserRole.Enfermero]: 'E',
  [UserRole.Paramedico]: 'PM',
  [UserRole.PrimerRespondiente]: 'PR',
};
