import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import VatCalculator from "@/components/VatCalculator";
import { siteConfig } from "@/data/siteData";
import { 
  ShieldCheck, 
  CheckCircle2, 
  HelpCircle, 
  Phone, 
  MessageCircle, 
  FileText,
  AlertTriangle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free UK VAT Calculator (2026/27) | Add or Remove VAT Online | Prestige",
  description: "Free online UK VAT Calculator with 2026/27 rates (20% standard, 5% reduced). Calculate net, VAT, and gross totals. Expert Making Tax Digital support in Huddersfield & UK-wide.",
  alternates: {
    canonical: "https://prestigeaccountancy.com/resources/vat-calculator",
  },
  openGraph: {
    title: "Free UK VAT Calculator (2026/27) | Prestige Accountancy Services",
    description: "Calculate UK VAT instantly. Add or remove VAT at 20% or 5% with full Making Tax Digital compliance guidance.",
    url: "https://prestigeaccountancy.com/resources/vat-calculator",
    images: ["/og-image.png"]
  }
};

export default function VatCalculatorPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I calculate UK VAT at 20%?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To add 20% VAT to a net amount, multiply the net figure by 0.20 to find the VAT amount, or by 1.20 to calculate the gross total. To remove 20% VAT from a gross amount, divide the gross figure by 1.20."
        }
      },
      {
        "@type": "Question",
        "name": "What is the UK VAT registration threshold in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The UK VAT taxable turnover registration threshold is £90,000 on a rolling 12-month basis. If your taxable turnover exceeds £90,000 in any 12-month period or is expected to exceed it in the next 30 days, registration with HMRC is legally mandatory."
        }
      },
      {
        "@type": "Question",
        "name": "Can I reclaim VAT paid before my business registered?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. UK businesses can generally reclaim VAT on goods purchased up to 4 years before registration (provided you still own them or used them to produce goods) and on services purchased up to 6 months before registration."
        }
      },
      {
        "@type": "Question",
        "name": "What is Making Tax Digital (MTD) for VAT?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Making Tax Digital (MTD) requires all VAT-registered UK businesses to keep digital accounting records and submit their quarterly VAT returns using HMRC-approved software like Xero or QuickBooks."
        }
      }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header & Breadcrumb */}
      <section className="bg-gradient-to-b from-[#EBF3FF] to-slate-50 py-12 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <Breadcrumbs 
            items={[
              { label: "Resources", href: "/resources" },
              { label: "UK VAT Calculator" }
            ]}
            className="mb-4"
          />

          <span className="text-xs font-bold uppercase tracking-wider text-[#00368C] bg-blue-100/70 px-3 py-1 rounded-full inline-block mb-3">
            Interactive Accounting Tool
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Free UK VAT Calculator (2026/27)
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-3 max-w-3xl leading-relaxed">
            Calculate UK Value Added Tax instantly. Accurately add 20% or 5% VAT to net prices, or remove VAT from gross totals for HMRC invoice reconciliation and pricing decisions.
          </p>
        </div>
      </section>

      {/* Main Tool Container */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          
          {/* Embedded Interactive Calculator */}
          <VatCalculator />

          {/* Educational In-Depth Guide */}
          <div className="mt-16 bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-10">
            
            {/* 1. How VAT Works */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                How to Calculate UK VAT: Step-by-Step
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Value Added Tax (VAT) is a consumption tax charged on most goods and services supplied by VAT-registered businesses in the United Kingdom. Depending on whether you are raising customer invoices or recording supplier receipts, you need to either add or extract VAT.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="text-base font-bold text-slate-900">
                    Adding 20% VAT (Net to Gross)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Multiply your net invoice price by <span className="font-mono font-bold text-[#00368C]">0.20</span> to find the VAT amount, then add it to your net price. Alternatively, multiply by <span className="font-mono font-bold text-[#00368C]">1.20</span> to calculate the gross total directly.
                  </p>
                  <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs font-mono text-slate-700">
                    Example: £500 × 1.20 = £600.00 Gross (£100.00 VAT)
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <h3 className="text-base font-bold text-slate-900">
                    Removing 20% VAT (Gross to Net)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To extract the VAT from a gross total, divide the gross figure by <span className="font-mono font-bold text-[#00368C]">1.20</span> to determine the net price. The difference between gross and net is your reclaimable input VAT.
                  </p>
                  <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs font-mono text-slate-700">
                    Example: £600 ÷ 1.20 = £500.00 Net (£100.00 VAT)
                  </div>
                </div>
              </div>
            </div>

            {/* 2. HMRC Registration Rules */}
            <div className="pt-6 border-t border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                When Do You Need to Register for UK VAT?
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                In the United Kingdom, registration is governed by strict statutory rules set by HMRC:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="p-5 rounded-xl border border-slate-200 bg-blue-50/50 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00368C]">The Rolling 12-Month Rule</span>
                  <h4 className="text-base font-bold text-slate-900">£90,000 Threshold</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    You must register if your cumulative taxable turnover across any rolling 12-month period surpasses £90,000. This is not tied to your financial year-end.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-slate-200 bg-amber-50/50 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-800">The 30-Day Forward Look</span>
                  <h4 className="text-base font-bold text-slate-900">Imminent Turnover</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    You must notify HMRC within 30 days if you realize that your turnover in the next 30 consecutive days alone will exceed £90,000.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-slate-200 bg-emerald-50/50 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Voluntary Registration</span>
                  <h4 className="text-base font-bold text-slate-900">Reclaim Input VAT</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Businesses under £90,000 can voluntarily register to reclaim VAT on significant startup equipment, commercial stock, and overheads.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Common VAT FAQs */}
            <div className="pt-6 border-t border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#00368C]" />
                <span>Frequently Asked Questions About UK VAT</span>
              </h2>

              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <h4 className="text-sm font-bold text-slate-900">
                    What items qualify for the 5% reduced VAT rate?
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Reduced rate (5%) applies to domestic fuel and power (electricity, gas, heating oil), energy-saving materials installed in residential premises, children&apos;s car seats, and smoking cessation products.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <h4 className="text-sm font-bold text-slate-900">
                    What is the difference between Zero-Rated and Exempt goods?
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Zero-rated supplies (0%) are taxable goods where no VAT is charged to customers, but you can still reclaim input VAT on related business purchases. Exempt supplies (like financial services, insurance, and medical care) do not allow you to register for VAT or reclaim input VAT.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <h4 className="text-sm font-bold text-slate-900">
                    How does the HMRC Points-Based Late Submission Penalty work?
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under HMRC rules, every late quarterly VAT submission earns 1 penalty point. Once you reach 4 points, an automatic £200 fine is levied for that return and every subsequent late return until a 12-month period of clean compliance is completed.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Support CTA */}
            <div className="p-8 rounded-2xl bg-[#00368C] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="text-xl font-bold">
                  Need Help With Your Quarterly VAT Returns?
                </h3>
                <p className="text-xs sm:text-sm text-blue-100 max-w-lg">
                  Prestige Accountancy Services manages VAT registration, scheme optimisation (Flat Rate, Cash, Standard), and encrypted Making Tax Digital filings with fixed transparent fees.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-xl bg-white text-[#00368C] font-bold text-xs uppercase tracking-wider hover:bg-blue-50 transition-all text-center shadow"
                >
                  Book Free Consultation
                </Link>
                <a
                  href={`tel:${siteConfig.landline.replace(/\s+/g, '')}`}
                  className="px-5 py-3 rounded-xl border border-blue-300 hover:bg-white/10 text-white font-bold text-xs transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {siteConfig.landline}</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
