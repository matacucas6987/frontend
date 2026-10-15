import React from 'react';
import { BookOpen, Bell, Search, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-sm">
          <BookOpen className="w-5 h-5" />
        </div>
        <div>
          <h1 className="font-bold text-slate-800 text-sm md:text-base leading-tight">
            Universidad de Madeira
          </h1>
          <p className="text-xs text-slate-500 hidden sm:block">
            Sistema Integrado de Gestión Bibliotecaria (SIGB)
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Status indicator */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full border border-emerald-200">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Base de Datos Neon: Conectada</span>
        </div>

        {/* User profile avatar */}
        <div className="flex items-center gap-2 pl-3 border-l border-slate-200">
          <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-semibold flex items-center justify-center text-xs">
            UM
          </div>
          <div className="hidden sm:block text-left text-xs">
            <span className="font-semibold text-slate-700 block">Bibliotecario</span>
            <span className="text-slate-400">Administración</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
