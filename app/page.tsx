import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { TerminalDemo } from "./sections/TerminalDemo";
import { Stats } from "./sections/Stats";
import { CTA } from "./sections/CTA";
import { Footer } from "./sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D1117]">
      <Hero />
      <Features />
      <TerminalDemo />
      <Stats />
      <CTA />
      <Footer />
    </main>
  );
}
