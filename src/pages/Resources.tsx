import React, { useState } from 'react';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import { CollectionType, ResourceStatus } from '../types';
import { Book, Bookmark, Compass, Newspaper, Map, Tablet, Plus, Filter } from 'lucide-react';

export const Resources: React.FC = () => {
  const [selectedCollection, setSelectedCollection] = useState<string>('ALL');

  const collections = [
    { type: CollectionType.GENERAL, label: 'General (Libros)', icon: <Book className="w-4 h-4" /> },
    { type: CollectionType.RESERVA, label: 'Reserva (Académicos)', icon: <Bookmark className="w-4 h-4" /> },
    { type: CollectionType.REFERENCIA, label: 'Referencia (Diccionarios)', icon: <Compass className="w-4 h-4" /> },
    { type: CollectionType.HEMEROTECA, label: 'Hemeroteca (Revistas)', icon: <Newspaper className="w-4 h-4" /> },
    { type: CollectionType.MAPOTECA, label: 'Mapoteca (Mapas)', icon: <Map className="w-4 h-4" /> },
    { type: CollectionType.TECNOTECA, label: 'Tecnoteca (Laptops y Tablets)', icon: <Tablet className="w-4 h-4" /> },
  ];

  const statuses = [
    { label: ResourceStatus.DISPONIBLE, variant: 'success' as const },
    { label: ResourceStatus.PRESTADO, variant: 'info' as const },
    { label: ResourceStatus.RESERVADO, variant: 'warning' as const },
    { label: ResourceStatus.PERDIDO, variant: 'danger' as const },
    { label: ResourceStatus.DADO_DE_BAJA, variant: 'neutral' as const },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Catálogo y Colecciones
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Gestión de las 6 colecciones bibliográficas y tecnológicas de la Universidad de Madeira.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm">
            <Plus className="w-4 h-4" />
            <span>Nuevo Recurso</span>
          </button>
        </div>
      </div>

      {/* Selector de Colecciones */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {collections.map((col) => (
          <button
            key={col.type}
            onClick={() => setSelectedCollection(col.type)}
            className={`p-3 rounded-xl border text-left flex flex-col gap-2 transition-all ${
              selectedCollection === col.type
                ? 'bg-indigo-50/70 border-indigo-500 text-indigo-700 shadow-sm'
                : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            <div className="p-2 w-fit rounded-lg bg-slate-100 text-slate-700">
              {col.icon}
            </div>
            <span className="text-xs font-semibold">{col.label}</span>
          </button>
        ))}
      </div>

      {/* Estados del catálogo */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-wrap items-center gap-3">
        <span className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
          <Filter className="w-3.5 h-3.5" /> Estados disponibles:
        </span>
        {statuses.map((st) => (
          <Badge key={st.label} variant={st.variant}>
            {st.label}
          </Badge>
        ))}
      </div>

      {/* Contenedor placeholder de recursos */}
      <Card>
        <div className="text-center py-12">
          <div className="mx-auto w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mb-3">
            <Book className="w-6 h-6" />
          </div>
          <h4 className="text-base font-semibold text-slate-800">No hay recursos registrados todavía</h4>
          <p className="text-sm text-slate-500 max-w-md mx-auto mt-1">
            El catálogo se encuentra listo para recibir registros en las 6 colecciones a través del endpoint{' '}
            <code className="text-indigo-600 font-mono text-xs bg-slate-100 px-1 py-0.5 rounded">POST /api/resources</code>.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Resources;
