import React from 'react';

interface CodeBlockProps {
  code: string;
  language: string;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  return (
    <div className="relative rounded-lg bg-gray-900 p-4">
      <div className="absolute right-2 top-2 rounded-md bg-gray-800 px-2 py-1 text-xs text-gray-400">
        {language}
      </div>
      <pre className="mt-4 overflow-x-auto text-sm text-gray-300">
        <code>{code}</code>
      </pre>
    </div>
  );
}