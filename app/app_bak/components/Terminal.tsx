'use client';

import { ReactNode, useState, useEffect } from 'react';

interface Command {
  text: string;
  delay?: number;
}

interface TerminalProps {
  children?: ReactNode;
  title?: string;
  className?: string;
  showPrompt?: boolean;
  prompt?: string;
  commands?: Command[];
}

export function Terminal({ 
  children, 
  title = 'picoclaw', 
  className = '',
  showPrompt = true,
  prompt = 'user@machine:~$',
  commands
}: TerminalProps) {
  const [displayedCommands, setDisplayedCommands] = useState<{ text: string; typed: boolean }[]>([]);

  useEffect(() => {
    if (!commands) return;

    let timeout: NodeJS.Timeout;
    let index = 0;

    const showNextCommand = () => {
      if (index >= commands.length) return;

      const command = commands[index];
      setDisplayedCommands(prev => [...prev, { text: command.text, typed: false }]);
      
      const typeDelay = command.delay || 1000;
      
      setTimeout(() => {
        setDisplayedCommands(prev => 
          prev.map((cmd, i) => i === index ? { ...cmd, typed: true } : cmd)
        );
        index++;
        timeout = setTimeout(showNextCommand, typeDelay);
      }, 500);
    };

    timeout = setTimeout(showNextCommand, 500);

    return () => clearTimeout(timeout);
  }, [commands]);

  return (
    <div className={`font-mono overflow-hidden ${className}`}>
      {/* Terminal Header */}
      <div className="flex items-center justify-between bg-claw-terminal border border-claw-border rounded-t-lg px-4 py-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-term-close" />
          <div className="w-3 h-3 rounded-full bg-term-minimize" />
          <div className="w-3 h-3 rounded-full bg-term-maximize" />
        </div>
        <span className="text-xs text-claw-muted">{title}</span>
        <div className="w-10" />
      </div>
      
      {/* Terminal Body */}
      <div className="bg-claw-bg border-x border-b border-claw-border rounded-b-lg p-4 min-h-[200px]">
        {commands ? (
          <div className="space-y-2">
            {displayedCommands.map((cmd, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-claw-go shrink-0">{prompt}</span>
                <div className="flex-1">
                  <span className="text-claw-text">{cmd.text}</span>
                  {!cmd.typed && <span className="cursor-blink">_</span>}
                </div>
              </div>
            ))}
            {displayedCommands.length < commands.length && displayedCommands.length > 0 && (
              <div className="flex items-start gap-2">
                <span className="text-claw-go shrink-0">{prompt}</span>
                <span className="cursor-blink">_</span>
              </div>
            )}
          </div>
        ) : showPrompt ? (
          <div className="flex items-start gap-2">
            <span className="text-claw-go shrink-0">{prompt}</span>
            <div className="flex-1">{children}</div>
          </div>
        ) : children}
      </div>
    </div>
  );
}
