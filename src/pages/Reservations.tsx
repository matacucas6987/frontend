import React, { useState } from 'react';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import { Clock, Tablet, BookOpen, Plus } from 'lucide-react';

export const Reservations: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<'ALL' | 'GENERAL' | 'TABLETA'>('ALL');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Cola de Reservas
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Gestión y orden de espera para material general y dispositivos tecnológicos (tabletas/laptops).
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm">
            <Plus className="w-4 h-4" />
            <span>Crear Reservación</span>
          </button>
        </div>
      </div>

      {/* Categorías de Cola */}
      <div className="flex gap-3">
        <button
          onClick={() => setFilterCategory('ALL')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold border transition-all ${
            filterCategory === 'ALL'
              ? 'bg-indigo-600 text-white border-indigo-600'
              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
          }`}
        >
          Todas las colas
        </button>
        <button
          onClick={() => setFilterCategory('GENERAL')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold border flex items-center gap-2 transition-all ${
            filterCategory === 'GENERAL'
              ? 'bg-indigo-600 text-white border-indigo-600'
              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Cola General</span>
        </button>
        <button
          onClick={() => setFilterCategory('TABLETA')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold border flex items-center gap-2 transition-all ${
            filterCategory === 'TABLETA'
              ? 'bg-indigo-600 text-white border-indigo-600'
              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Tablet className="w-3.5 h-3.5" />
          <span>Cola de Tabletas (Tecnoteca)</span>
        </button>
      </div>

      <Card>
        <div className="text-center py-12">
          <div className="mx-auto w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mb-3">
            <Clock className="w-6 h-6" />
          </div>
          <h4 className="text-base font-semibold text-slate-800">No hay reservas activas en la cola</h4>
          <p className="text-sm text-slate-500 max-w-md mx-auto mt-1">
            Los usuarios pueden entrar a la lista de espera mediante el servicio{' '}
            <code className="text-indigo-600 font-mono text-xs bg-slate-100 px-1 py-0.5 rounded">POST /api/reservations</code>.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Reservations;
