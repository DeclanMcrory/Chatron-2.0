import React from 'react';
import { SystemStatus } from '../types';
import { Battery, Cpu, Signal, Thermometer } from 'lucide-react';

interface SystemMetricsProps {
  status: SystemStatus;
}

export function SystemMetrics({ status }: SystemMetricsProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex items-center gap-2 rounded-lg bg-black/20 p-3 backdrop-blur-sm">
        <Battery className="h-4 w-4 text-green-400" />
        <div className="flex-1">
          <div className="h-2 rounded-full bg-black/20">
            <div
              className="h-full rounded-full bg-green-400 transition-all duration-500"
              style={{ width: `${status.energyLevel}%` }}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 rounded-lg bg-black/20 p-3 backdrop-blur-sm">
        <Signal className="h-4 w-4 text-blue-400" />
        <div className="flex-1">
          <div className="h-2 rounded-full bg-black/20">
            <div
              className="h-full rounded-full bg-blue-400 transition-all duration-500"
              style={{ width: `${status.confidenceLevel}%` }}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 rounded-lg bg-black/20 p-3 backdrop-blur-sm">
        <Thermometer className="h-4 w-4 text-orange-400" />
        <div className="flex-1">
          <div className="h-2 rounded-full bg-black/20">
            <div
              className="h-full rounded-full bg-orange-400 transition-all duration-500"
              style={{ width: `${(status.temperature / 100) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 rounded-lg bg-black/20 p-3 backdrop-blur-sm">
        <Cpu className="h-4 w-4 text-purple-400" />
        <span className="text-sm text-white/80">
          {status.processingState === 'thinking' ? 'Processing' : 'Ready'}
        </span>
      </div>
    </div>
  );
}