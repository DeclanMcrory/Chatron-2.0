import React, { useEffect, useRef } from 'react';
import { EmotionalState, SystemStatus } from '../types';

interface OrbVisualizerProps {
  emotionalState: EmotionalState;
  systemStatus: SystemStatus;
}

export function OrbVisualizer({ emotionalState, systemStatus }: OrbVisualizerProps) {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pulseAnimation = () => {
      if (orbRef.current) {
        orbRef.current.style.transform = `scale(${1 + Math.sin(Date.now() / 1000) * 0.05})`;
      }
      requestAnimationFrame(pulseAnimation);
    };

    const animationFrame = requestAnimationFrame(pulseAnimation);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const getOrbColor = () => {
    switch (emotionalState.primary) {
      case 'happy':
        return 'from-blue-400 to-purple-500';
      case 'thoughtful':
        return 'from-purple-500 to-pink-500';
      case 'processing':
        return 'from-green-400 to-blue-500';
      default:
        return 'from-blue-500 to-indigo-500';
    }
  };

  return (
    <div className="relative w-48 h-48">
      <div
        ref={orbRef}
        className={`absolute inset-0 rounded-full bg-gradient-to-br ${getOrbColor()} 
          shadow-lg shadow-indigo-500/50 backdrop-blur-xl
          transition-all duration-500 ease-in-out`}
        style={{
          opacity: systemStatus.energyLevel / 100,
        }}
      >
        <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm" />
      </div>
      {systemStatus.processingState === 'thinking' && (
        <div className="absolute inset-0 animate-ping rounded-full bg-white/20 backdrop-blur-sm" />
      )}
    </div>
  );
}