import React from 'react';
import { ThoughtProcess } from '../types';
import { Sparkles, Brain, FlaskConical, Atom } from 'lucide-react';

interface ThoughtStreamProps {
  thoughts: ThoughtProcess[];
}

export function ThoughtStream({ thoughts }: ThoughtStreamProps) {
  const getIcon = (type: ThoughtProcess['type']) => {
    switch (type) {
      case 'reasoning':
        return <Brain className="h-4 w-4" />;
      case 'analysis':
        return <FlaskConical className="h-4 w-4" />;
      case 'synthesis':
        return <Sparkles className="h-4 w-4" />;
      case 'quantum':
        return <Atom className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-2 rounded-lg bg-black/20 p-4 backdrop-blur-sm">
      <h3 className="mb-4 text-sm font-medium text-indigo-300">Thought Stream</h3>
      <div className="space-y-2">
        {thoughts.map((thought) => (
          <div
            key={thought.id}
            className="flex items-start gap-2 text-sm text-white/80"
          >
            <div className="mt-1 text-indigo-400">{getIcon(thought.type)}</div>
            <p className="flex-1">{thought.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}