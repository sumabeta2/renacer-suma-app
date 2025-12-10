// types.ts
// Archivo limpio, estructurado y sin dependencias rotas.

export interface Symptom {
  id: string;
  name: string;
  description?: string;
}

export interface Disease {
  id: string;
  name: string;
  description: string;
  symptoms: string[];
  treatment?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface Message {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: number;
}

export interface ChatRequest {
  messages: Message[];
  model?: string;
  temperature?: number;
}

export interface ChatResponse {
  reply: string;
  sources?: string[];
}

export interface LoadingState {
  isLoading: boolean;
  message?: string;
}

export interface AppConfig {
  apiKey: string;
  baseUrl: string;
}
