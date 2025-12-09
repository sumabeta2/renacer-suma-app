import React from 'react';
import { PatientData } from '../types';

interface PatientFormProps {
  patientData: PatientData;
  onDataChange: (field: keyof PatientData, value: string) => void;
}

const PatientForm: React.FC<PatientFormProps> = ({ patientData, onDataChange }) => {
  return (
    <div className="mb-6">
      <h3 className="text-gray-700 text-lg font-semibold uppercase mb-3">DATOS DEL PACIENTE/VICTIMA</h3>
      <p className="text-red-600 text-sm italic mb-4">(*) Nombre, Edad y Rol son campos obligatorios.</p>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Nombre Completo (*)"
          value={patientData.fullName}
          onChange={(e) => onDataChange('fullName', e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number" // Use type "number" for age input
          placeholder="Edad (*)"
          value={patientData.age}
          onChange={(e) => onDataChange('age', e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          min="0" // Age cannot be negative
        />
        <select
          value={patientData.gender}
          onChange={(e) => onDataChange('gender', e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Seleccionar Sexo</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="Otro">Otro</option>
        </select>
        <textarea
          placeholder="Medicación Actual"
          value={patientData.currentMedication}
          onChange={(e) => onDataChange('currentMedication', e.target.value)}
          rows={3}
          className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
        ></textarea>
        <textarea
          placeholder="Antecedentes de Salud"
          value={patientData.healthHistory}
          onChange={(e) => onDataChange('healthHistory', e.target.value)}
          rows={3}
          className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
        ></textarea>
      </div>
    </div>
  );
};

export default PatientForm;