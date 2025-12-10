import React from 'react';

interface PatientData {
  fullName: string;
  age: string;
  gender: string;
  currentMedication: string;
  healthHistory: string;
}

interface PatientFormProps {
  userRole: string;
  patientData: PatientData;
  onChange: (newData: PatientData) => void;
  onComplete: () => void;
}

const PatientForm: React.FC<PatientFormProps> = ({ patientData, onChange, onComplete }) => {
  const updateField = (field: keyof PatientData, value: string) => {
    onChange({ ...patientData, [field]: value });
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h3 className="text-lg font-bold text-gray-900 mb-3">Datos del Paciente</h3>

      <div className="space-y-3">
        <div>
          <label className="text-xs font-semibold uppercase text-gray-700">Nombre Completo *</label>
          <input
            value={patientData.fullName}
            onChange={(e) => updateField('fullName', e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Nombre completo"
          />
        </div>

        <div>
          <label className="text-xs font-semibold uppercase text-gray-700">Edad *</label>
          <input
            type="number"
            value={patientData.age}
            onChange={(e) => updateField('age', e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Edad"
            min={0}
          />
        </div>

        <div>
          <label className="text-xs font-semibold uppercase text-gray-700">Sexo</label>
          <select value={patientData.gender} onChange={(e) => updateField('gender', e.target.value)} className="w-full p-2 border rounded">
            <option value="">Seleccionar</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-semibold uppercase text-gray-700">Medicacion Actual</label>
          <textarea value={patientData.currentMedication} onChange={(e) => updateField('currentMedication', e.target.value)} className="w-full p-2 border rounded" rows={2} />
        </div>

        <div>
          <label className="text-xs font-semibold uppercase text-gray-700">Antecedentes de Salud</label>
          <textarea value={patientData.healthHistory} onChange={(e) => updateField('healthHistory', e.target.value)} className="w-full p-2 border rounded" rows={2} />
        </div>

        <div className="pt-3">
          <button onClick={onComplete} className="w-full bg-red-600 text-white py-2 rounded">
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientForm;
