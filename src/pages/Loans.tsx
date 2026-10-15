import React, { useState } from 'react';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import { BookMarked, RefreshCw, Plus, Calendar } from 'lucide-react';

export const Loans: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'loans' | 'renewals'>('loans');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Préstamos y Renovaciones
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Control de circulación de material bibliográfico y tecnológico.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm">
            <Plus className="w-4 h-4" />
            <span>Registrar Préstamo</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 gap-4">
        <button
          onClick={() => setActiveTab('loans')}
          className={`pb-3 text-sm font-medium flex items-center gap-2 border-b-2 transition-colors ${
            activeTab === 'loans'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-slate-500 hover:text-slate-700'
          }`}
        >
          <BookMarked className="w-4 h-4" />
          <span>Préstamos Activos</span>
        </button>
        <button
          onClick={() => setActiveTab('renewals')}
          className={`pb-3 text-sm font-medium flex items-center gap-2 border-b-2 transition-colors ${
            activeTab === 'renewals'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-slate-500 hover:text-slate-700'
          }`}
        >
          <RefreshCw className="w-4 h-4" />
          <span>Historial de Renovaciones</span>
        </button>
      </div>

      {/* Placeholder Content */}
      <Card>
        <div className="text-center py-12">
          <div className="mx-auto w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mb-3">
            {activeTab === 'loans' ? (
              <BookMarked className="w-6 h-6" />
            ) : (
              <RefreshCw className="w-6 h-6" />
            )}
          </div>
          <h4 className="text-base font-semibold text-slate-800">
            {activeTab === 'loans'
              ? 'No hay préstamos en curso'
              : 'No hay renovaciones procesadas'}
          </h4>
          <p className="text-sm text-slate-500 max-w-md mx-auto mt-1">
            La estructura base para la gestión de préstamos y cálculo de vencimientos está lista en los módulos{' '}
            <code className="text-indigo-600 font-mono text-xs bg-slate-100 px-1 py-0.5 rounded">/api/loans</code> y{' '}
            <code className="text-indigo-600 font-mono text-xs bg-slate-100 px-1 py-0.5 rounded">/api/renewals</code>.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Loans;
