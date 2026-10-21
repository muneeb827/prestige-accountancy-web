import type { Metadata } from "next";
import { siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Cookie Policy | Prestige Accountancy Services Ltd",
  description: "Cookie policy explaining how Prestige Accountancy Services Ltd uses essential and analytics cookies.",
  alternates: {
    canonical: "https://prestigeaccountancy.com/cookie-policy",
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6 text-slate-700 leading-relaxed">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
          Cookie Policy
        </h1>
        <p className="text-sm text-slate-500">
          Last updated: October 2026.
        </p>

        <section className="space-y-3 pt-4">
          <h2 className="text-xl font-bold text-slate-900">1. What Are Cookies</h2>
          <p>
            Cookies are small text files placed on your device to ensure websites function smoothly, remember user preferences, and collect anonymous aggregate analytics.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">2. Cookies We Use</h2>
          <p>
            {siteConfig.name} uses strictly necessary cookies (to deliver website functionality, security, and session management) and performance cookies (to measure traffic and page interactions).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">3. Managing Your Cookies</h2>
          <p>
            You can configure your browser settings to accept or refuse cookies. However, disabling strictly necessary cookies may impact the performance of our website.
          </p>
        </section>
      </div>
    </div>
  );
}
