"use client";

import { AnimatedSection } from "../components/AnimatedSection";
import { StatCounter } from "../components/StatCounter";

const stats = [
  { value: 10, suffix: "MB", label: "RAM Usage", description: "Tiny memory footprint" },
  { value: 50, suffix: "ms", label: "Cold Start", description: "Lightning fast startup" },
  { value: 1.2, suffix: "MB", label: "Binary Size", description: "Single binary deploy" },
  { value: 100, suffix: "%", label: "Open Source", description: "MIT Licensed" },
];

export function Stats() {
  return (
    <section className="py-24 bg-[#161B22]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#E6EDF3] mb-4">
            Built for Performance
          </h2>
          <p className="text-lg text-[#8B949E] max-w-2xl mx-auto">
            Numbers that speak for themselves. Every millisecond and every byte matters.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 0.1}>
              <div className="text-center p-6 rounded-xl bg-[#0D1117] border border-[#30363D] hover:border-[#FF6B35]/30 transition-colors">
                <div className="text-4xl sm:text-5xl font-bold text-[#FF6B35] mb-2">
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-lg font-semibold text-[#E6EDF3] mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-[#8B949E]">
                  {stat.description}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
