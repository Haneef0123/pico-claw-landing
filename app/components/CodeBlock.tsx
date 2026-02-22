'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  fileName?: string;
  className?: string;
}

export function CodeBlock({ code, language = 'bash', fileName, className = '' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between bg-claw-terminal border border-claw-border rounded-t-lg px-4 py-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-term-close" />
          <div className="w-3 h-3 rounded-full bg-term-minimize" />
          <div className="w-3 h-3 rounded-full bg-term-maximize" />
        </div>
        {fileName && (
          <span className="text-xs text-claw-muted font-mono">{fileName}</span>
        )}
        <button
          onClick={handleCopy}
          className="p-1.5 rounded hover:bg-claw-border transition-colors"
          aria-label="Copy to clipboard"
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.div
                key="check"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <Check className="w-4 h-4 text-claw-success" />
              </motion.div>
            ) : (
              <motion.div
                key="copy"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <Copy className="w-4 h-4 text-claw-muted group-hover:text-claw-text transition-colors" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
      
      {/* Code Content */}
      <pre className="bg-claw-bg border-x border-b border-claw-border rounded-b-lg p-4 overflow-x-auto">
        <code className="font-mono text-sm text-claw-text block">
          {code}
        </code>
      </pre>
    </div>
  );
}
