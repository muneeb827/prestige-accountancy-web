import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteData";
import { 
  Calendar, 
  Download, 
  FileCheck, 
  Clock, 
  AlertCircle, 
  ArrowRight, 
  ShieldCheck 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Key UK Tax & Filing Deadlines 2026/27 | Free Resources | Prestige",
  description: "Stay ahead of statutory UK filing deadlines for Companies House annual accounts, quarterly VAT returns, monthly CIS, and payroll compliance.",
};

export default function ResourcesPage() {
  const deadlines = [
    {
      target: "Companies House Annual Accounts",
      rule: "Due exactly 9 months after your company's accounting reference date (financial year-end).",
      penalty: "Escalating fines from £150 up to £1,500 for late submission.",
      tag: "Limited Companies"
    },
    {
      target: "Corporation Tax Return (CT600) & Payment",
      rule: "Payment due 9 months and 1 day after year-end; return due 12 months after year-end.",
      penalty: "Late filing penalties plus daily interest on unpaid tax balances.",
      tag: "Limited Companies"
    },
    {
      target: "Quarterly VAT Returns & Payment (MTD)",
      rule: "Due 1 calendar month and 7 days after the end of your quarterly VAT accounting period.",
      penalty: "HMRC points-based default surcharge and late payment interest.",
      tag: "VAT Registered"
    },
    {
      target: "Monthly CIS Subcontractor Returns",
      rule: "Due by the 19th of each calendar month covering payments in the preceding tax month.",
      penalty: "Immediate £100 fine if 1 day late, increasing up to £3,000 for prolonged delays.",
      tag: "Construction Scheme"
    },
    {
      target: "PAYE & National Insurance Remittances",
      rule: "Due by the 22nd of the month for electronic payments (or 19th for cheque).",
      penalty: "HMRC late payment penalties and interest charges.",
      tag: "Employers"
    },
    {
      target: "Charity Commission Annual Return",
      rule: "Due within 10 months of the charity financial year-end for income exceeding £10,000.",
      penalty: "Public listing as overdue on the official Charity Commission register.",
      tag: "Registered Charities"
    }
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-[#EBF3FF] to-white py-16 lg:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00368C] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Free Tools &amp; Knowledge
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Key UK Accounting &amp; Filing Deadlines (2026/27)
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Never miss an HMRC or Companies House deadline again. Keep this statutory reference handy to avoid costly financial penalties.
          </p>
        </div>
      </section>

      {/* Deadlines Table / Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Statutory Filing Calendar
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Standard filing timetables for UK businesses and organisations.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Prestige Managed Clients Never Miss a Deadline
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {deadlines.map((item, i) => (
              <div 
                key={i}
                className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 hover:border-[#00368C] transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-base font-bold text-slate-900">
                    {item.target}
                  </h3>
                  <span className="inline-block text-[11px] font-bold text-[#00368C] bg-blue-100/70 px-2.5 py-0.5 rounded-full self-start sm:self-auto">
                    {item.tag}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 font-medium mb-2">
                  <Clock className="w-4 h-4 text-[#2B7EFE] inline mr-1.5 -mt-0.5" />
                  {item.rule}
                </p>
                <div className="flex items-center gap-2 text-xs text-rose-700 bg-rose-50 px-3 py-1.5 rounded-lg border border-rose-200/60 font-medium">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>Penalty Risk: {item.penalty}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Practice Resources */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Free Practice Checklists &amp; Guides
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Complimentary resources prepared by our practice team to help you prepare your financial records efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#00368C] flex items-center justify-center font-bold mb-4">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  UK Business Startup Checklist
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  The step-by-step 10-point checklist for setting up a company with Companies House, HMRC, and cloud banking.
                </p>
              </div>
              <Link
                href="/contact"
                className="text-xs font-bold text-[#00368C] hover:text-[#2B7EFE] flex items-center gap-1.5 pt-3 border-t border-slate-100"
              >
                <span>Request Free Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#00368C] flex items-center justify-center font-bold mb-4">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Sole Trader vs Ltd Decision Sheet
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  A side-by-side comparison matrix of personal liability, accounting requirements, and credibility considerations.
                </p>
              </div>
              <Link
                href="/contact"
                className="text-xs font-bold text-[#00368C] hover:text-[#2B7EFE] flex items-center gap-1.5 pt-3 border-t border-slate-100"
              >
                <span>Request Free Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#00368C] flex items-center justify-center font-bold mb-4">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Charity Accounts Prep Checklist
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Guidelines for charity trustees preparing for annual reporting, fund separation, and independent examination.
                </p>
              </div>
              <Link
                href="/contact"
                className="text-xs font-bold text-[#00368C] hover:text-[#2B7EFE] flex items-center gap-1.5 pt-3 border-t border-slate-100"
              >
                <span>Request Free Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#00368C] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-3">
          <h2 className="text-2xl font-bold">
            Worried about an upcoming statutory deadline?
          </h2>
          <p className="text-blue-100 text-sm max-w-lg mx-auto">
            Contact Prestige Accountancy Services. We can review your records and ensure prompt filing to avoid late submission penalties.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="bg-white hover:bg-blue-50 text-[#00368C] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow inline-block"
            >
              Get Immediate Deadline Help
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
