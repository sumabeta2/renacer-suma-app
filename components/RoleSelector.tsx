import React from 'react';
import { UserRole } from '../types';

interface RoleSelectorProps {
  selectedRole: UserRole | null;
  onSelectRole: (role: UserRole) => void;
}

const RoleSelector: React.FC<RoleSelectorProps> = ({ selectedRole, onSelectRole }) => {
  const roles = [UserRole.Medico, UserRole.Enfermero, UserRole.Paramedico, UserRole.PrimerRespondiente];

  return (
    <div className="mb-6">
      <h3 className="text-gray-700 text-lg font-semibold uppercase mb-3">MI ROL ES:</h3>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4"> {/* Responsive grid for roles */}
        {roles.map((role) => (
          <label
            key={role}
            className={`flex items-center justify-center p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 text-center
                        ${selectedRole === role
                          ? 'border-blue-500 bg-blue-600 text-white'
                          : 'border-gray-300 bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
          >
            <input
              type="radio"
              name="userRole"
              value={role}
              checked={selectedRole === role}
              onChange={() => onSelectRole(role)}
              className="hidden" // Hide native radio button
            />
            <span className="font-medium text-sm sm:text-base">{role}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RoleSelector;