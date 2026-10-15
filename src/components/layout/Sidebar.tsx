import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Library,
  BookMarked,
  Clock,
  AlertTriangle,
  Users,
} from 'lucide-react';

interface NavItem {
  name: string;
  path: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    name: 'Dashboard',
    path: '/',
    icon: <LayoutDashboard className="w-5 h-5" />,
  },
  {
    name: 'Colecciones y Recursos',
    path: '/resources',
    icon: <Library className="w-5 h-5" />,
  },
  {
    name: 'Préstamos y Renovaciones',
    path: '/loans',
    icon: <BookMarked className="w-5 h-5" />,
  },
  {
    name: 'Cola de Reservas',
    path: '/reservations',
    icon: <Clock className="w-5 h-5" />,
  },
  {
    name: 'Multas y Moras',
    path: '/fines',
    icon: <AlertTriangle className="w-5 h-5" />,
  },
  {
    name: 'Gestión de Usuarios',
    path: '/users',
    icon: <Users className="w-5 h-5" />,
  },
];

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col min-h-screen">
      <div className="p-6 border-b border-slate-800">
        <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
          Módulos del Sistema
        </span>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'
              }`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 m-4 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-400">
        <p className="font-semibold text-slate-300">Arquitectura Base</p>
        <p className="mt-1">React + Vite + NestJS + Neon DB</p>
        <p className="text-[11px] text-slate-500 mt-1">v1.0.0 (Esqueleto)</p>
      </div>
    </aside>
  );
};

export default Sidebar;
