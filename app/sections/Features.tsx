"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, Shield, Zap, Code, MessageSquare, Globe } from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";

const features = [
  {
    icon: Terminal,
    title: "Terminal Native",
    description: "Works seamlessly in your terminal. No GUI bloat, just pure CLI efficiency.",
  },
  {
    icon: Cpu,
    title: "Tiny Footprint",
    description: "Uses less than 10MB RAM. Runs on $10 boards like LicheeRV Nano.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Sub-50ms cold start. No waiting, instant responses every time.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Local LLM inference. Your data never leaves your machine.",
  },
  {
    icon: Code,
    title: "Developer Friendly",
    description: "Plugin system written in Go. Easy to extend and customize.",
  },
  {
    icon: MessageSquare,
    title: "Multi-Channel",
    description: "Works via Telegram, WhatsApp, Feishu, and more.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-[#0D1117]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#E6EDF3] mb-4">
            Why PicoClaw?
          </h2>
          <p className="text-lg text-[#8B949E] max-w-2xl mx-auto">
            Built for developers who value performance, privacy, and simplicity.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 0.1}>
              <div className="group p-6 rounded-xl bg-[#161B22] border border-[#30363D] hover:border-[#FF6B35]/50 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-[#FF6B35]/10 flex items-center justify-center mb-4 group-hover:bg-[#FF6B35]/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-[#FF6B35]" />
                </div>
                <h3 className="text-xl font-semibold text-[#E6EDF3] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#8B949E] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
