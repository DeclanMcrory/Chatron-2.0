export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: number;
  isCode?: boolean;
  codeLanguage?: string;
  confidence?: number;
}

export interface EmotionalState {
  primary: 'neutral' | 'happy' | 'thoughtful' | 'processing';
  intensity: number;
}

export interface SystemStatus {
  energyLevel: number;
  processingState: 'idle' | 'thinking' | 'responding';
  connectionStatus: 'connected' | 'disconnected';
  temperature: number;
  confidenceLevel: number;
}

export interface ThoughtProcess {
  id: string;
  type: 'reasoning' | 'analysis' | 'synthesis' | 'quantum';
  content: string;
}