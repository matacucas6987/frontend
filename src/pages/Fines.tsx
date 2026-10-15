import React from 'react';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import { AlertTriangle, DollarSign, CheckCircle2, ShieldAlert } from 'lucide-react';
import { FineStatus } from '../types';

export const Fines: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Control de Multas y Moras
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Gestión de sanciones pecuniarias por retraso o deterioro de material bibliográfico.
          </p>
        </div>
      </div>

      {/* Resumen de estados de multas */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-3">
          <div className="p-2.5 bg-amber-50 text-amber-600 rounded-lg">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-500 uppercase font-medium">Estado</span>
            <div className="flex items-center gap-2 mt-0.5">
              <Badge variant="warning">{FineStatus.PENDIENTE}</Badge>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-3">
          <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-lg">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-500 uppercase font-medium">Estado</span>
            <div className="flex items-center gap-2 mt-0.5">
              <Badge variant="success">{FineStatus.PAGADA}</Badge>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-3">
          <div className="p-2.5 bg-slate-100 text-slate-600 rounded-lg">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-500 uppercase font-medium">Estado</span>
            <div className="flex items-center gap-2 mt-0.5">
              <Badge variant="neutral">{FineStatus.CONDONADA}</Badge>
            </div>
          </div>
        </div>
      </div>

      <Card>
        <div className="text-center py-12">
          <div className="mx-auto w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mb-3">
            <DollarSign className="w-6 h-6" />
          </div>
          <h4 className="text-base font-semibold text-slate-800">Sin sanciones registradas</h4>
          <p className="text-sm text-slate-500 max-w-md mx-auto mt-1">
            El módulo base de multas está listo para interactuar con la lógica de moras y pagos en{' '}
            <code className="text-indigo-600 font-mono text-xs bg-slate-100 px-1 py-0.5 rounded">/api/fines</code>.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Fines;
