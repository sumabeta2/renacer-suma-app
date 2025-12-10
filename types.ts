// Definición del cuerpo que se enviará a la API médica
export interface ApiRequestBody {
  patientId?: string;
  symptoms: string[];
  age?: number;
  gender?: "male" | "female" | "other";
  additionalNotes?: string;
}

// Estructura de cada recomendación recibida desde la API
export interface ApiRecommendation {
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
}

// Respuesta completa de la API
export interface ApiResponse {
  success: boolean;
  message: string;
  recommendations: ApiRecommendation[];
}

// Estado del asistente dentro de la app
export interface AssistantState {
  loading: boolean;
  error: string | null;
  data: ApiResponse | null;
}
