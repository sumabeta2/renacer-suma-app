// ./components/PatientForm.tsx (Título Compactado)

import React from 'react';
import { PatientData } from '../types';

interface PatientFormProps {
  patientData: PatientData;
  onDataChange: (field: keyof PatientData, value: string) => void;
}

const PatientForm: React.FC<PatientFormProps> = ({ patientData, onDataChange }) => {
  // CLAVE DE COMPACIDAD: p-2 en lugar de p-3 para inputs
  const inputBaseStyle = "w-full p-2 border-2 rounded-lg text-gray-900 transition-colors duration-200 resize-y";
  const inputBorderStyles = "border-gray-300 focus:border-blue-500 placeholder-gray-500 focus:ring-1 focus:ring-blue-500";
  
  return (
    <div className="space-y-4 pt-2"> 
      
      {/* 1. SECCIÓN TÍTULO: CLAVE DE COMPACIDAD: text-lg en lugar de text-xl */}
      <h3 className="text-lg font-extrabold text-gray-900 uppercase tracking-wide flex items-center mb-1">
        {/* Ícono de identificación para Datos de Paciente */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M10 16h.01" />
        </svg>
        DATOS DEL PACIENTE / VÍCTIMA
      </h3>

      {/* Leyenda de Campos Obligatorios - Diseño más suave */}
      <p className="text-sm italic text-gray-500 mb-4">
        (*) Nombre, Edad y Rol son campos obligatorios.
      </p>

      <div className="space-y-3">
        
        {/* 1. Nombre Completo (*) - Input con Label y Outline */}
        <div className="space-y-1">
            <label htmlFor="fullName" className="text-xs font-semibold uppercase text-gray-700">
                Nombre Completo <span className="text-red-600">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Escribe el nombre completo"
              value={patientData.fullName}
              onChange={(e) => onDataChange('fullName', e.target.value)}
              className={`${inputBaseStyle} ${inputBorderStyles}`}
            />
        </div>

        {/* 2. Edad (*) - Input con Label y Outline */}
        <div className="space-y-1">
            <label htmlFor="age" className="text-xs font-semibold uppercase text-gray-700">
                Edad <span className="text-red-600">*</span>
            </label>
            <input
              id="age"
              type="number" 
              inputMode="numeric"
              placeholder="Escribe la edad"
              value={patientData.age}
              onChange={(e) => onDataChange('age', e.target.value)}
              className={`${inputBaseStyle} ${inputBorderStyles}`}
              min="0"
            />
        </div>

        {/* 3. Sexo - Select con Label y Outline */}
        <div className="space-y-1">
            <label htmlFor="gender" className="text-xs font-semibold uppercase text-gray-700">
                Seleccionar Sexo
            </label>
            <div className="relative">
                <select
                    id="gender"
                    value={patientData.gender}
                    onChange={(e) => onDataChange('gender', e.target.value)}
                    className={`${inputBaseStyle} ${inputBorderStyles} appearance-none bg-white pr-8 cursor-pointer`}
                  >
                    <option value="">Seleccionar Sexo</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Otro">Otro</option>
                  </select>
                {/* Ícono de flecha personalizado para el select */}
                <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
        
        {/* 4. Medicación Actual - Textarea */}
        <div className="space-y-1">
            <label htmlFor="currentMedication" className="text-xs font-semibold uppercase text-gray-700">
                Medicación Actual
            </label>
            <textarea
              id="currentMedication"
              placeholder="Ej: Aspirina, Insulina"
              value={patientData.currentMedication}
              onChange={(e) => onDataChange('currentMedication', e.target.value)}
              rows={2} 
              className={`${inputBaseStyle} ${inputBorderStyles} resize-none`}
            ></textarea>
        </div>

        {/* 5. Antecedentes de Salud - Textarea */}
        <div className="space-y-1">
            <label htmlFor="healthHistory" className="text-xs font-semibold uppercase text-gray-700">
                Antecedentes de Salud
            </label>
            <textarea
              id="healthHistory"
              placeholder="Ej: Alergia a la penicilina, Hipertensión."
              value={patientData.healthHistory}
              onChange={(e) => onDataChange('healthHistory', e.target.value)}
              rows={2}
              className={`${inputBaseStyle} ${inputBorderStyles} resize-none`}
            ></textarea>
        </div>

      </div>
    </div>
  );
};

export default PatientForm;
