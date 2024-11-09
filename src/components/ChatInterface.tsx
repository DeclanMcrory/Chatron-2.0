import React from 'react';
import { Message } from '../types';
import { Send, Code, Mic } from 'lucide-react';
import { CodeBlock } from './CodeBlock';

interface ChatInterfaceProps {
  messages: Message[];
  onSendMessage: (content: string) => void;
}

export function ChatInterface({ messages, onSendMessage }: ChatInterfaceProps) {
  const [input, setInput] = React.useState('');
  const [isCodeMode, setIsCodeMode] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  return (
    <div className="flex h-full flex-col rounded-lg bg-white/10 backdrop-blur-lg">
      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg ${
                message.sender === 'user'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white/20 text-gray-100'
              }`}
            >
              {message.isCode ? (
                <CodeBlock code={message.content} language={message.codeLanguage || 'text'} />
              ) : (
                <div className="px-4 py-2">
                  {message.content}
                  {message.confidence && (
                    <div className="mt-1 text-xs opacity-75">
                      Confidence: {message.confidence}%
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="border-t border-white/10 p-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsCodeMode(!isCodeMode)}
            className="rounded-lg bg-gray-700 p-2 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <Code className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="rounded-lg bg-gray-700 p-2 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <Mic className="h-5 w-5" />
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={`flex-1 rounded-lg px-4 py-2 text-white placeholder-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              isCodeMode ? 'bg-gray-900' : 'bg-white/5'
            }`}
            placeholder={isCodeMode ? "Enter code..." : "Type your message..."}
          />
          <button
            type="submit"
            className="rounded-lg bg-indigo-600 p-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
}