import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteData";
import Breadcrumbs from "@/components/Breadcrumbs";
import DeadlineChecklistTool from "@/components/DeadlineChecklistTool";
import { 
  Calendar, 
  ShieldCheck, 
  AlertTriangle, 
  ArrowRight, 
  Clock, 
  HelpCircle,
  FileCheck,
  Building2,
  CheckCircle2
} from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "UK Statutory Deadlines & Compliance Checklist (2026/27) | Prestige Accountancy",
  },
  description: "Interactive UK statutory compliance calendar and printable checklist for Limited Companies, VAT, CIS, and employers. Avoid Companies House & HMRC fines.",
  keywords: [
    "UK statutory deadlines checklist",
    "Companies House filing deadline",
    "Corporation Tax deadline 9 months",
    "VAT return deadline MTD",
    "CIS filing deadline",
    "HMRC late filing penalties"
  ],
  alternates: {
    canonical: "https://prestigeaccountancy.com/resources/compliance-checklist",
  },
  openGraph: {
    title: "UK Statutory Deadlines & Compliance Checklist (2026/27) | Prestige",
    description: "Interactive UK statutory compliance calendar and checklist for Companies House and HMRC deadlines.",
    url: "https://prestigeaccountancy.com/resources/compliance-checklist",
    images: ["/og-image.png"]
  }
};

export default function ComplianceChecklistPage() {
  const checklistFaqs = [
    {
      q: "What is the penalty for filing Companies House accounts late?",
      a: "Companies House automatically issues statutory civil fines: £150 for up to 1 month late, £375 for 1-3 months, £750 for 3-6 months, and £1,500 for over 6 months. Penalties are doubled if accounts are submitted late two years in succession."
    },
    {
      q: "When must Corporation Tax actually be paid to HMRC?",
      a: "Corporation Tax must be paid electronically to HMRC exactly 9 months and 1 day after your accounting period ends. While the actual tax return (CT600) is due at 12 months, delaying payment beyond 9 months incurs daily interest charges."
    },
    {
      q: "What is the deadline for quarterly VAT returns under MTD?",
      a: "Quarterly VAT returns and payments are due 1 calendar month and 7 days after the end of your VAT quarter. For example, a quarter ending 31 March must be filed and paid by 7 May."
    },
    {
      q: "How does the monthly CIS filing deadline operate?",
      a: "CIS returns run from the 6th of one month to the 5th of the following month (the tax month). The return must reach HMRC by the 19th of that same month. Missing the 19th results in an immediate automatic £100 penalty."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": checklistFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "UK Statutory Deadlines & Compliance Checklist Generator",
    "url": "https://prestigeaccountancy.com/resources/compliance-checklist",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "GBP"
    },
    "description": "Interactive compliance tool filtering statutory filing dates, penalty rules, and director duties for UK companies, VAT entities, and CIS contractors."
  };

  return (
    <div>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#EBF3FF] to-white py-12 lg:py-16 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <Breadcrumbs 
            items={[
              { label: "Resources", href: "/resources" },
              { label: "Compliance Checklist" }
            ]} 
            className="mb-4" 
          />

          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00368C] bg-blue-100/70 px-3 py-1 rounded-full mb-3">
            <Calendar className="w-3.5 h-3.5 text-[#00368C]" />
            <span>2026/27 Tax Year Planner</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            UK Statutory Deadlines &amp; Compliance Checklist
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-3xl">
            A comprehensive, interactive schedule of essential filing deadlines for UK Limited Companies, VAT-registered businesses, CIS contractors, and employers. Avoid automated HMRC and Companies House penalties.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-12">
          
          {/* Interactive Checklist Tool */}
          <DeadlineChecklistTool />

          {/* Educational Explainer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-200">
            <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
              <h2 className="text-2xl font-bold text-slate-900">
                Understanding UK Statutory Filing Timelines
              </h2>
              <p>
                In the United Kingdom, limited companies and business owners face obligations across multiple regulatory authorities including Companies House, HM Revenue &amp; Customs (HMRC), The Pensions Regulator, and the Charity Commission.
              </p>
              <p>
                A widespread misconception among directors is that accounts and Corporation Tax are filed together at 12 months. In reality, statutory accounts are due at <strong>9 months</strong>, Corporation Tax payment is due at <strong>9 months and 1 day</strong>, and only the CT600 tax return carries a 12-month window.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs sm:text-sm text-amber-950 space-y-3">
              <h3 className="font-bold text-base text-amber-900 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                <span>The Automatic Penalty Reality</span>
              </h3>
              <p>
                Unlike personal self-assessment, Companies House and CIS penalties are <strong>instant and non-negotiable</strong>. Missing a monthly CIS return by one single day triggers a £100 fine automatically generated by HMRC servers.
              </p>
              <p>
                Prestige Accountancy manages proactive filing schedules for hundreds of UK business owners, ensuring balance sheets and tax returns are prepared, verified, and submitted weeks before regulatory cut-offs.
              </p>
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="pt-6 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#00368C]" />
              <span>Statutory Deadlines: Frequently Asked Questions</span>
            </h2>
            <div className="space-y-4">
              {checklistFaqs.map((faq, idx) => (
                <div key={idx} className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                  <h4 className="text-base font-bold text-slate-900">
                    {faq.q}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Tools & Resources */}
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Need to Calculate Your VAT Amount?
              </h3>
              <p className="text-xs text-slate-600 mt-1 max-w-md">
                Try our free UK VAT Calculator for standard 20% and 5% reduced rates with instant add/remove VAT breakdown.
              </p>
            </div>
            <Link
              href="/resources/vat-calculator"
              className="px-5 py-2.5 bg-[#00368C] hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow transition-all shrink-0 flex items-center gap-2"
            >
              <span>Open VAT Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
