"use client";

import { siteConfig } from "@/data/siteData";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-50 group">
      <a
        href={siteConfig.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
        aria-label="Chat with Prestige Accountancy on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-6 h-6 fill-current text-white" />
        <span className="font-bold text-sm tracking-wide hidden sm:inline">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
