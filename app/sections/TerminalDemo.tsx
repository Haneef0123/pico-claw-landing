"use client";

import { Terminal } from "../components/Terminal";
import { CodeBlock } from "../components/CodeBlock";
import { AnimatedSection } from "../components/AnimatedSection";

const commands = [
  { text: "picoclaw hello", delay: 500 },
  { text: "picoclaw search latest golang news", delay: 1000 },
  { text: "picoclaw remind me in 5 minutes", delay: 800 },
  { text: "picoclaw weather", delay: 600 },
];

const installCode = `# macOS / Linux
curl -fsSL https://picoclaw.dev/install.sh | sh

# Or build from source
go install github.com/sipeed/picoclaw@latest`;

const configCode = `{
  "llm": {
    "provider": "ollama",
    "model": "llama3.2:1b"
  },
  "channels": ["terminal", "telegram"],
  "plugins": ["weather", "reminder", "search"]
}`;

export function TerminalDemo() {
  return (
    <section id="terminal" className="py-24 bg-[#0D1117]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#E6EDF3] mb-4">
            See It In Action
          </h2>
          <p className="text-lg text-[#8B949E] max-w-2xl mx-auto">
            Just type and go. No bloated interfaces, just a clean terminal experience.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <AnimatedSection direction="left">
            <Terminal 
              title="Terminal" 
              commands={commands}
            />
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[#E6EDF3] mb-3">Install</h3>
                <CodeBlock code={installCode} language="bash" />
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-[#E6EDF3] mb-3">Configure</h3>
                <CodeBlock code={configCode} language="json" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
