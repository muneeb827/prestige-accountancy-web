import type { Metadata } from "next";
import { siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Privacy Policy | Prestige Accountancy Services Ltd",
  description: "Privacy policy and UK GDPR compliance statement for Prestige Accountancy Services Ltd.",
  alternates: {
    canonical: "https://prestigeaccountancy.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6 text-slate-700 leading-relaxed">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-500">
          Last updated: October 2026 • In compliance with the UK Data Protection Act 2018 and UK GDPR.
        </p>

        <section className="space-y-3 pt-4">
          <h2 className="text-xl font-bold text-slate-900">1. Who We Are</h2>
          <p>
            {siteConfig.name} (&ldquo;Prestige Accountancy&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is an accountancy practice registered in England and Wales. We operate from {siteConfig.address}.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">2. Data We Collect</h2>
          <p>
            When you contact us, book a consultation, or engage our accountancy services, we may collect:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>Your name, business name and job title.</li>
            <li>Contact details including email address, phone number and trading address.</li>
            <li>Financial and accounting records necessary to perform statutory duties (VAT, PAYE, annual accounts, CIS).</li>
            <li>Identity verification documents required under UK Anti-Money Laundering (AML) regulations.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">3. How We Use Your Data</h2>
          <p>
            We process your personal and business data strictly to fulfill our contractual accountancy obligations, comply with statutory filings (HMRC, Companies House, Charity Commission) and respond to direct inquiries. We do not sell your personal data.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">4. Contacting Our Data Controller</h2>
          <p>
            If you have questions about your personal data or wish to exercise your rights under UK GDPR, please write to us at {siteConfig.address} or email {siteConfig.email}.
          </p>
        </section>
      </div>
    </div>
  );
}
