import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, coreValues, teamMembers } from "@/data/siteData";
import Breadcrumbs from "@/components/Breadcrumbs";
import { 
  ShieldCheck, 
  Target, 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  Phone
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Actvise Accountancy | Trusted UK Accountants",
  description: "Actvise Accountancy Services is a UK accountancy & business advisory practice in Huddersfield. Tailored advice, accurate reporting and software-driven efficiency.",
  alternates: {
    canonical: "https://actvise.co.uk/about",
  },
  openGraph: {
    title: "About Actvise Accountancy Services Ltd",
    description: "Guardians of Your Finances. Tailored accountancy, bookkeeping, VAT compliance and corporate structuring for UK businesses.",
    url: "https://actvise.co.uk/about",
    images: ["/og-image.png"]
  }
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Header & Breadcrumb */}
      <section className="bg-gradient-to-b from-[#EBF3FF] to-white py-12 lg:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <Breadcrumbs 
            items={[{ label: "About Us" }]} 
            className="mb-4"
          />
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00368C] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
              About Our Practice
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              About Actvise Accountancy Services
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              A trusted UK accountancy and business advisory practice combining everyday compliance with the insight you need to make confident financial decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative & Story with Real Team Photography */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-5 text-slate-700 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Guardians of Your Finances: Built on Clarity &amp; Reliability
              </h2>
              <p>
                Actvise Accountancy Services Ltd is an accountancy and business advisory practice supporting individuals, sole traders, limited companies and charitable organisations across Huddersfield and the wider United Kingdom.
              </p>
              <p>
                We bridge the gap between traditional statutory compliance (including year-end statutory accounts, Making Tax Digital VAT returns and payroll or CIS filing) and the strategic reporting that helps business owners scale safely.
              </p>
              <p>
                Our philosophy is simple: no confusing accounting jargon, no surprise invoices and no automated silence. When you partner with Actvise, you work with real, accessible professionals who genuinely know your business and safeguard your position.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                <div className="flex items-center gap-2 font-semibold text-slate-800 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Cloud Software Driven (Xero &amp; QuickBooks)</span>
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

            {/* Right Visual / Office Team Photo */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                <div className="relative h-72 sm:h-80 w-full">
                  <Image
                    src="/images/office-team.jpg"
                    alt="Actvise Accountancy team consultation in Huddersfield"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#00368C] px-2.5 py-1 rounded-md inline-block mb-1">
                      Huddersfield Practice
                    </span>
                    <h3 className="text-sm font-bold">
                      Direct Client Advisory &amp; Support Team
                    </h3>
                  </div>
                </div>
              </div>

              {/* Mission Statement Box */}
              <div className="bg-[#00368C] text-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="w-5 h-5 text-blue-300" />
                  <h3 className="font-bold text-base">Our Mission</h3>
                </div>
                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                  To eliminate compliance anxiety for UK small businesses and charities through meticulous financial governance, proactive communication and fair, transparent pricing.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership & Practice Team with Real Photography */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00368C] bg-blue-100/70 px-3 py-1 rounded-full inline-block mb-2">
              Practice Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Meet the Professionals Behind Actvise
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Accessible, qualified accountants who value personal relationships over call centres.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => {
              // Use real photo for director and clean styled portrait avatars for others
              const photoSrc = idx === 0 ? "/images/author-mujahid.jpg" : idx === 1 ? "/images/hero-accountant.jpg" : "/images/consultation.jpg";
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-all"
                >
                  <div className="p-6">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#00368C]/20 mb-4 shadow-inner">
                      <Image
                        src={photoSrc}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
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
                    📍 9 Blackmoorfoot Road, Huddersfield
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              The Actvise Standards of Conduct
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
              href={`tel:${siteConfig.landline.replace(/\s+/g, '')}`}
              className="border border-blue-300 hover:bg-white/10 text-white font-bold text-sm px-6 py-3 rounded-lg transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Office: {siteConfig.landline}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
