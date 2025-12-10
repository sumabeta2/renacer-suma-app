import React from 'react';

interface Props {
  selectedRole: string | null;
  onSelectRole: (role: string) => void;
}

const roles = ['Médico', 'Enfermero/a', 'Paramédico', 'Primer Respondiente'];

const RoleSelector: React.FC<Props> = ({ selectedRole, onSelectRole }) => {
  return (
    <div className="mb-4 pt-4 border-t border-gray-200">
      <h3 className="text-base font-extrabold text-gray-900 uppercase mb-3">MI ROL ES: <span className="text-red-600">*</span></h3>

      <div className="flex flex-wrap gap-2">
        {roles.map((role) => (
          <label key={role} className={`py-2 px-4 rounded-full border-2 cursor-pointer text-sm font-medium ${selectedRole === role ? 'border-red-600 bg-red-600 text-white' : 'border-gray-300 bg-white'}`}>
            <input type="radio" name="userRole" value={role} checked={selectedRole === role} onChange={() => onSelectRole(role)} className="hidden" />
            <span>{role}</span>
          </label>
        ))}
      </div>

      {!selectedRole && <p className="text-red-500 text-xs mt-3">* SELECCIONE SU ROL PARA CONTINUAR</p>}
    </div>
  );
};

export default RoleSelector;
