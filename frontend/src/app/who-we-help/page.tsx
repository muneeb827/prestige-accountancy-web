import type { Metadata } from "next";
import Link from "next/link";
import { whoWeHelpAudience, siteConfig } from "@/data/siteData";
import Breadcrumbs from "@/components/Breadcrumbs";
import { 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  MessageCircle, 
  ShieldCheck 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Who We Help | Accountants for Companies, Contractors & Charities",
  description: "Specialised accountancy workflows for UK Limited Companies, Sole Traders, Construction Contractors (CIS), Startups and Registered Charities.",
  alternates: {
    canonical: "https://prestigeaccountancy.com/who-we-help",
  },
  openGraph: {
    title: "Who We Help | Prestige Accountancy Services",
    description: "Specialised accountancy workflows for UK Limited Companies, Sole Traders, CIS Contractors, Startups and Charities.",
    url: "https://prestigeaccountancy.com/who-we-help",
    images: ["/og-image.png"]
  }
};

export default function WhoWeHelpPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-[#EBF3FF] to-white py-12 lg:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <Breadcrumbs items={[{ label: "Who We Help" }]} className="mb-4" />
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00368C] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Tailored Sector Solutions
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Accountancy Built for Your Specific World
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              One size does not fit all in UK finance. Whether you are scaling a limited company, managing CIS subcontractors, or running a charity, we provide dedicated support tailored to your sector.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections per Audience */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-16">
          {whoWeHelpAudience.map((audience, idx) => (
            <div 
              key={audience.slug}
              id={audience.slug}
              className={`p-8 sm:p-10 rounded-2xl border transition-all ${idx % 2 === 0 ? 'bg-slate-50 border-slate-200' : 'bg-white border-blue-100 shadow-sm'}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#00368C] bg-blue-100/60 px-3 py-1 rounded-full">
                    Audience Focus #{idx + 1}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {audience.title}
                  </h2>
                  <p className="text-base font-semibold text-[#2B7EFE]">
                    {audience.tagline}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {audience.desc}
                  </p>

                  <div className="pt-2">
                    <h3 className="text-xs uppercase font-bold text-slate-500 tracking-wider mb-2">Key Support Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {audience.bullets.map((b, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-3 justify-center items-stretch lg:border-l lg:border-slate-200 lg:pl-8">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider text-center lg:text-left">
                    Fixed-Fee Monthly Packages
                  </div>
                  <Link
                    href="/contact"
                    className="w-full text-center bg-[#00368C] hover:bg-[#002868] text-white font-bold text-sm px-5 py-3 rounded-xl shadow transition-all"
                  >
                    Discuss Your Requirements
                  </Link>
                  <a
                    href={siteConfig.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>WhatsApp An Accountant</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Switch Support */}
      <section className="py-14 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Ready to partner with an accountant who truly understands your sector?
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Book your free consultation with Muhammad Mujahid and our senior practitioners today.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white hover:bg-slate-100 text-[#00368C] font-bold text-sm px-6 py-3 rounded-lg shadow transition-all"
            >
              Book Your Free Consultation
            </Link>
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="border border-slate-700 hover:border-slate-500 text-white font-bold text-sm px-6 py-3 rounded-lg transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#2B7EFE]" />
              <span>Direct: {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
