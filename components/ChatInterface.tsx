import React, { useState } from 'react';
import { ROLE_INITIALS } from '../constants';
import HeartIcon from './HeartIcon';

interface Message {
  id: string;
  sender: 'suma' | 'user';
  text: string;
}

interface Props {
  userRole: string;
  patientData: Record<string, any>;
  onEndAssistance?: () => void;
}

const ChatBubble: React.FC<{ message: Message; role: string }> = ({ message, role }) => {
  const isSuma = message.sender === 'suma';
  const initials = ROLE_INITIALS[role] ?? 'US';

  return (
    <div className={`flex mb-4 ${isSuma ? 'justify-start' : 'justify-end'}`}>
      {isSuma && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 flex items-center justify-center mr-2">
          <HeartIcon className="w-5 h-5 text-white" />
        </div>
      )}

      <div className={`max-w-xs lg:max-w-md ${isSuma ? 'order-2' : 'order-1'}`}>
        <div
          className={`px-4 py-2 text-base rounded-xl shadow ${
            isSuma ? 'bg-red-600 text-white rounded-tl-none' : 'bg-white text-gray-900 rounded-tr-none'
          }`}
        >
          {message.text}
        </div>
      </div>

      {!isSuma && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 text-gray-900 font-bold text-sm flex items-center justify-center ml-2">
          {initials}
        </div>
      )}
    </div>
  );
};

const ChatInterface: React.FC<Props> = ({ userRole, patientData, onEndAssistance }) => {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'suma', text: 'Hola, soy la Dra. Suma. ¿En qué puedo ayudar?' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    const msg: Message = { id: String(Date.now()), sender: 'user', text: input.trim() };
    setMessages((m) => [...m, msg]);
    setInput('');
    // Simula respuesta
    setTimeout(() => {
      setMessages((m) => [...m, { id: String(Date.now() + 1), sender: 'suma', text: 'Recibido. Estoy procesando la información.' }]);
    }, 600);
  };

  return (
    <div className="min-h-screen p-4 max-w-3xl mx-auto">
      <header className="mb-4 flex items-center gap-3">
        <HeartIcon className="w-9 h-9 text-red-600" />
        <div>
          <h3 className="text-lg font-bold">Dra. Suma</h3>
          <p className="text-sm text-gray-500">{userRole}</p>
        </div>
        <div className="ml-auto">
          <button
            onClick={() => onEndAssistance && onEndAssistance()}
            className="px-3 py-1 bg-gray-200 rounded-md text-sm"
          >
            Finalizar
          </button>
        </div>
      </header>

      <main>
        {messages.map((m) => (
          <ChatBubble key={m.id} message={m} role={userRole} />
        ))}
      </main>

      <footer className="mt-6 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu mensaje..."
          className="flex-grow p-2 border rounded"
        />
        <button onClick={sendMessage} className="px-4 bg-red-600 text-white rounded">
          Enviar
        </button>
      </footer>
    </div>
  );
};

export default ChatInterface;
