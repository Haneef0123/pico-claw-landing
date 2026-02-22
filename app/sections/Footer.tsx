"use client";

import { motion } from "framer-motion";
import { Github, Twitter, MessageCircle, Mail } from "lucide-react";
import { ClawLogo } from "../components/ClawLogo";

const links = [
  {
    title: "Product",
    items: [
      { label: "Features", href: "#features" },
      { label: "Terminal", href: "#terminal" },
      { label: "Install", href: "#install" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Documentation", href: "https://github.com/sipeed/picoclaw#readme" },
      { label: "GitHub", href: "https://github.com/sipeed/picoclaw" },
      { label: "Releases", href: "https://github.com/sipeed/picoclaw/releases" },
    ],
  },
  {
    title: "Community",
    items: [
      { label: "Discord", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "Telegram", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/sipeed/picoclaw", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: MessageCircle, href: "#", label: "Discord" },
  { icon: Mail, href: "mailto:hello@picoclaw.dev", label: "Email" },
];

export function Footer() {
  return (
    <footer className="bg-[#0D1117] border-t border-[#30363D]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <ClawLogo className="w-8 h-8" />
              <span className="text-xl font-bold text-[#E6EDF3]">PicoClaw</span>
            </div>
            <p className="text-sm text-[#8B949E] mb-6">
              An ultra-lightweight AI assistant that respects your hardware.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#161B22] border border-[#30363D] flex items-center justify-center text-[#8B949E] hover:text-[#FF6B35] hover:border-[#FF6B35]/50 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {links.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-[#E6EDF3] uppercase tracking-wider mb-4">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-[#8B949E] hover:text-[#FF6B35] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#30363D] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#8B949E]">
            © {new Date().getFullYear()} PicoClaw. MIT License.
          </p>
          <p className="text-sm text-[#8B949E] flex items-center gap-2">
            Made with <span className="text-[#FF6B35]">❤</span> by the Sipeed Team
          </p>
        </div>
      </div>
    </footer>
  );
}
