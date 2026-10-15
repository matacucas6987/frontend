import React, { useEffect, useState } from 'react';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import { BookOpen, Users, Clock, AlertTriangle, Layers, Laptop } from 'lucide-react';
import apiClient from '../api/client';

export const Dashboard: React.FC = () => {
  const [backendStatus, setBackendStatus] = useState<'checking' | 'online' | 'offline'>('checking');

  useEffect(() => {
    // Verificar conectividad con el backend
    apiClient
      .get('/users')
      .then(() => setBackendStatus('online'))
      .catch((err) => {
        // Si responde 200 o incluso un error HTTP de la API, el backend está activo
        if (err.response) {
          setBackendStatus('online');
        } else {
          setBackendStatus('offline');
        }
      });
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Panel de Control</h2>
          <p className="text-sm text-slate-500 mt-1">
            Resumen general del Sistema de Gestión Bibliotecaria Universidad de Madeira.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 font-medium">Estado Backend:</span>
          {backendStatus === 'checking' && <Badge variant="warning">Comprobando...</Badge>}
          {backendStatus === 'online' && <Badge variant="success">API Online (:3000)</Badge>}
          {backendStatus === 'offline' && <Badge variant="danger">API Desconectada</Badge>}
        </div>
      </div>

      {/* Tarjetas de métricas base */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase">Colecciones Totales</p>
              <h4 className="text-2xl font-bold text-slate-800 mt-1">6</h4>
              <p className="text-xs text-slate-400 mt-1">General, Reserva, Hemeroteca...</p>
            </div>
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
              <Layers className="w-6 h-6" />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase">Préstamos Activos</p>
              <h4 className="text-2xl font-bold text-slate-800 mt-1">0</h4>
              <p className="text-xs text-slate-400 mt-1">En circulación</p>
            </div>
            <div className="p-3 bg-sky-50 text-sky-600 rounded-lg">
              <BookOpen className="w-6 h-6" />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase">Cola de Reservas</p>
              <h4 className="text-2xl font-bold text-slate-800 mt-1">0</h4>
              <p className="text-xs text-slate-400 mt-1">General y Tabletas</p>
            </div>
            <div className="p-3 bg-amber-50 text-amber-600 rounded-lg">
              <Clock className="w-6 h-6" />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase">Multas Pendientes</p>
              <h4 className="text-2xl font-bold text-slate-800 mt-1">$0.00</h4>
              <p className="text-xs text-slate-400 mt-1">Moras registradas</p>
            </div>
            <div className="p-3 bg-rose-50 text-rose-600 rounded-lg">
              <AlertTriangle className="w-6 h-6" />
            </div>
          </div>
        </Card>
      </div>

      {/* Card de información de Arquitectura Base */}
      <Card
        title="Esqueleto Funcional Inicializado"
        subtitle="Infraestructura Dockerizada y Pipeline End-to-End"
        icon={<Laptop className="w-5 h-5" />}
      >
        <div className="space-y-4 text-sm text-slate-600">
          <p>
            El sistema se encuentra configurado con arquitectura desacoplada por capas:
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-700">
            <li><strong>Frontend:</strong> React 18 + Vite + TypeScript con componentes modulares y cliente Axios.</li>
            <li><strong>Backend:</strong> NestJS 10 con TypeORM, validación global con class-validator y CORS habilitado.</li>
            <li><strong>Base de Datos:</strong> PostgreSQL en Neon con conexión SSL segura.</li>
            <li><strong>Contenedores:</strong> Docker y Docker Compose con imagen base obligatoria <code className="bg-slate-100 px-1 py-0.5 rounded text-indigo-600 font-mono">node:24-alpine3.24</code> y volúmenes de desarrollo.</li>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
