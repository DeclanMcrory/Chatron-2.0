import React, { useState } from 'react';
import { Brain } from 'lucide-react';
import { OrbVisualizer } from './components/OrbVisualizer';
import { ChatInterface } from './components/ChatInterface';
import { SystemMetrics } from './components/SystemMetrics';
import { ThoughtStream } from './components/ThoughtStream';
import { Message, EmotionalState, SystemStatus, ThoughtProcess } from './types';

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I am CHATRON, your quantum-enhanced AI assistant. How can I help you today?',
      sender: 'ai',
      timestamp: Date.now(),
      confidence: 100,
    },
  ]);

  const [emotionalState, setEmotionalState] = useState<EmotionalState>({
    primary: 'neutral',
    intensity: 0.5,
  });

  const [systemStatus, setSystemStatus] = useState<SystemStatus>({
    energyLevel: 100,
    processingState: 'idle',
    connectionStatus: 'connected',
    temperature: 45,
    confidenceLevel: 95,
  });

  const [thoughts, setThoughts] = useState<ThoughtProcess[]>([]);

  const simulateThoughtProcess = () => {
    const newThoughts: ThoughtProcess[] = [
      {
        id: '1',
        type: 'reasoning',
        content: 'Analyzing input patterns and context...',
      },
      {
        id: '2',
        type: 'quantum',
        content: 'Quantum probability matrix initialized',
      },
      {
        id: '3',
        type: 'analysis',
        content: 'Processing through neural pathways...',
      },
      {
        id: '4',
        type: 'synthesis',
        content: 'Synthesizing response based on quantum computations',
      },
    ];

    newThoughts.forEach((thought, index) => {
      setTimeout(() => {
        setThoughts(prev => [...prev, thought]);
      }, index * 800);
    });

    setTimeout(() => {
      setThoughts([]);
    }, 5000);
  };

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, newMessage]);
    setSystemStatus(prev => ({ ...prev, processingState: 'thinking' }));
    setEmotionalState(prev => ({ ...prev, primary: 'processing' }));
    simulateThoughtProcess();

    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'I understand your query. Let me process that with my quantum-enhanced capabilities...',
        sender: 'ai',
        timestamp: Date.now(),
        confidence: Math.floor(Math.random() * 20) + 80,
      };

      setMessages(prev => [...prev, aiMessage]);
      setSystemStatus(prev => ({ 
        ...prev, 
        processingState: 'idle',
        confidenceLevel: Math.floor(Math.random() * 20) + 80,
        temperature: Math.floor(Math.random() * 30) + 40,
      }));
      setEmotionalState(prev => ({ ...prev, primary: 'thoughtful' }));
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8 flex items-center justify-center gap-4">
          <Brain className="h-8 w-8 text-indigo-400" />
          <h1 className="text-3xl font-bold text-white">CHATRON</h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="flex items-center justify-center">
              <OrbVisualizer
                emotionalState={emotionalState}
                systemStatus={systemStatus}
              />
            </div>
            <SystemMetrics status={systemStatus} />
            <ThoughtStream thoughts={thoughts} />
          </div>

          <div className="h-[600px]">
            <ChatInterface messages={messages} onSendMessage={handleSendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;