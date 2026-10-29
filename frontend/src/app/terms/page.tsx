import type { Metadata } from "next";
import { siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Terms of Engagement | Actvise Accountancy Services Ltd",
  description: "Terms and conditions of engagement for accountancy and business advisory services.",
  alternates: {
    canonical: "https://actvise.co.uk/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6 text-slate-700 leading-relaxed">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
          Terms of Engagement &amp; Website Use
        </h1>
        <p className="text-sm text-slate-500">
          Last updated: October 2026.
        </p>

        <section className="space-y-3 pt-4">
          <h2 className="text-xl font-bold text-slate-900">1. Website Use</h2>
          <p>
            The content provided on this website is for general informational purposes only and does not constitute formal tax, legal, or investment advice. Formal engagements require an executed Letter of Engagement with {siteConfig.name}.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">2. Professional Engagement</h2>
          <p>
            All accountancy, bookkeeping, VAT, CIS and corporate structuring engagements are conducted under formal UK professional standards and our standardized fixed-fee agreements.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">3. Anti-Money Laundering Regulations</h2>
          <p>
            In accordance with the Proceeds of Crime Act and UK Money Laundering Regulations, we are required by law to verify the identity and address of all clients prior to commencing work.
          </p>
        </section>
      </div>
    </div>
  );
}
