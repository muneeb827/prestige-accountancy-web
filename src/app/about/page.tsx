import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, coreValues, teamMembers } from "@/data/siteData";
import { 
  ShieldCheck, 
  Target, 
  Compass, 
  ArrowRight, 
  Award, 
  CheckCircle2, 
  Phone,
  FileCheck,
  Building
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Prestige Accountancy | Trusted UK Accountants",
  description: "Prestige Accountancy Services is a UK accountancy & business advisory practice. Tailored advice, accurate reporting and software-driven efficiency.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#EBF3FF] to-white py-16 lg:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00368C] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
            About Our Practice
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            About Prestige Accountancy Services
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            A trusted UK accountancy and business advisory practice combining everyday compliance with the insight you need to make confident financial decisions.
          </p>
        </div>
      </section>

      {/* Main Narrative & Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5 text-slate-700 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Guardians of Your Finances — Built on Clarity & Reliability
              </h2>
              <p>
                Prestige Accountancy Services Ltd is an accountancy and business advisory practice supporting individuals, sole traders, limited companies, and charitable organisations of every size across Huddersfield and the wider United Kingdom.
              </p>
              <p>
                We bridge the gap between traditional statutory compliance — such as year-end statutory accounts, Making Tax Digital VAT returns, and payroll/CIS filing — and the strategic reporting that helps business owners scale safely.
              </p>
              <p>
                Our philosophy is simple: no confusing accounting jargon, no surprise invoices, and no automated silence. When you partner with Prestige, you work with real, accessible professionals who genuinely know your business and safeguard your position.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                <div className="flex items-center gap-2 font-semibold text-slate-800 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Cloud Software Driven (Xero & QuickBooks)</span>
                </div>
                <div className="flex items-center gap-2 font-semibold text-slate-800 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Fixed, Predictable Monthly Fees</span>
                </div>
                <div className="flex items-center gap-2 font-semibold text-slate-800 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Fully Compliant UK Filings</span>
                </div>
                <div className="flex items-center gap-2 font-semibold text-slate-800 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Dedicated Personal Accountant</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              {/* Mission Card */}
              <div className="bg-[#00368C] text-white p-7 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-blue-600">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Our Mission</h3>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed">
                  &ldquo;To help clients understand their finances, meet their statutory obligations with zero stress, and successfully develop their businesses.&rdquo;
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-slate-50 border border-slate-200 p-7 rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-blue-100 text-[#00368C]">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  &ldquo;To become a recognised and universally trusted UK provider of modern accountancy and business advisory services.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team (E-E-A-T Signal) */}
      <section className="py-16 bg-slate-50 border-t border-slate-200" id="team">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00368C] bg-blue-100 px-3 py-1 rounded-full">
              Leadership & Practitioners
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Meet the Prestige Practice Team
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Dedicated professionals committed to precision, technical expertise, and attentive client support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <div 
                key={i}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between"
              >
                <div className="p-6">
                  <div className="w-16 h-16 rounded-full bg-[#00368C] text-white flex items-center justify-center font-extrabold text-xl mb-4 shadow-md">
                    {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {member.name}
                  </h3>
                  <div className="text-xs font-bold text-[#2B7EFE] mb-1">
                    {member.role}
                  </div>
                  <div className="inline-block px-2 py-0.5 rounded bg-slate-100 text-[11px] font-semibold text-slate-600 mb-3">
                    {member.credentials}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
                <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 text-[11px] font-semibold text-slate-500">
                  Huddersfield & UK Wide Delivery
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              The Prestige Standards of Conduct
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-slate-200 bg-slate-50/50">
                <h3 className="font-bold text-slate-900 text-base mb-2">{val.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 bg-[#00368C] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Ready to experience dedicated, transparent accountancy?
          </h2>
          <p className="text-blue-100 max-w-xl mx-auto text-sm sm:text-base">
            Book a 15-minute introductory call. We will review your current systems and give you a fixed-fee quote.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white hover:bg-blue-50 text-[#00368C] font-bold text-sm px-6 py-3 rounded-lg shadow transition-all"
            >
              Book Your Free Consultation
            </Link>
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="border border-blue-300 hover:bg-white/10 text-white font-bold text-sm px-6 py-3 rounded-lg transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
