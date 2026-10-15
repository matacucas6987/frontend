import React, { useState } from 'react';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import { Users as UsersIcon, GraduationCap, Briefcase, UserCheck, Plus } from 'lucide-react';
import { UserRole } from '../types';

export const Users: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string>('ALL');

  const roles = [
    { role: UserRole.ESTUDIANTE, label: 'Estudiantes', icon: <GraduationCap className="w-4 h-4" /> },
    { role: UserRole.PROFESOR, label: 'Profesores', icon: <Briefcase className="w-4 h-4" /> },
    { role: UserRole.BIBLIOTECARIO, label: 'Bibliotecarios', icon: <UserCheck className="w-4 h-4" /> },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Gestión de Usuarios
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Directorio institucional de Estudiantes, Profesores y Personal Bibliotecario.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm">
            <Plus className="w-4 h-4" />
            <span>Nuevo Usuario</span>
          </button>
        </div>
      </div>

      {/* Selector de Roles Institucionales */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {roles.map((r) => (
          <button
            key={r.role}
            onClick={() => setSelectedRole(r.role)}
            className={`p-4 rounded-xl border text-left flex items-center gap-3 transition-all ${
              selectedRole === r.role
                ? 'bg-indigo-50/70 border-indigo-500 text-indigo-700 shadow-sm'
                : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            <div className="p-2 rounded-lg bg-slate-100 text-slate-700">
              {r.icon}
            </div>
            <div>
              <span className="text-sm font-semibold block">{r.label}</span>
              <span className="text-xs text-slate-400">Rol: {r.role}</span>
            </div>
          </button>
        ))}
      </div>

      <Card>
        <div className="text-center py-12">
          <div className="mx-auto w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mb-3">
            <UsersIcon className="w-6 h-6" />
          </div>
          <h4 className="text-base font-semibold text-slate-800">Directorio inicializado</h4>
          <p className="text-sm text-slate-500 max-w-md mx-auto mt-1">
            Los campos institucionales (Identificación, Código Universitario, Plan de Estudios, Semestre y Correo) están modelados y listos en{' '}
            <code className="text-indigo-600 font-mono text-xs bg-slate-100 px-1 py-0.5 rounded">/api/users</code>.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Users;
