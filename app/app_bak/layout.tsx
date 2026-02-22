import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PicoClaw - An AI assistant that respects your hardware",
  description: "An ultra-lightweight AI assistant written in Go. <10MB RAM, <50ms cold start, local LLM inference. Every bit helps, every bit matters.",
  keywords: ["AI assistant", "Go", "local LLM", "lightweight", "terminal", "CLI"],
  authors: [{ name: "PicoClaw" }],
  openGraph: {
    title: "PicoClaw - An AI assistant that respects your hardware",
    description: "An ultra-lightweight AI assistant written in Go. <10MB RAM, <50ms cold start, local LLM inference.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PicoClaw - An AI assistant that respects your hardware",
    description: "An ultra-lightweight AI assistant written in Go. <10MB RAM, <50ms cold start.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-[#0D1117] text-[#E6EDF3]">
        {children}
      </body>
    </html>
  );
}
