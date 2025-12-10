// ./index.tsx

import React from 'react';
// IMPORTANTE: Se requiere importar la versión 'client' para 'createRoot'
import { createRoot } from 'react-dom/client'; 

// Importamos el componente principal
import App from './App'; 

// 1. Encontrar el elemento raíz en el HTML
const container = document.getElementById('root');

if (container) {
  // 2. Crear la raíz de React 
  const root = createRoot(container); 
  
  // 3. Renderizar la aplicación
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // (Opcional) Un mensaje en caso de que el div#root no exista
  console.error('Failed to find the root element in the DOM.');
}
