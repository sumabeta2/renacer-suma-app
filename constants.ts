// constants.ts

// Código administrativo
export const ADMIN_CODE = "SUMA-001";

// Iniciales de roles — necesario para ChatInterface.tsx
export const ROLE_INITIALS: Record<string, string> = {
  "Médico": "MD",
  "Enfermero/a": "EN",
  "Paramédico": "PM",
  "Primer Respondiente": "PR"
};

// Configuración de colores para cada rol
export const ROLE_COLORS: Record<string, string> = {
  "Médico": "#1976d2",
  "Enfermero/a": "#0288d1",
  "Paramédico": "#388e3c",
  "Primer Respondiente": "#f57c00"
};
