import type { Metadata } from "next";
import Link from "next/link";
import { servicesData, siteConfig } from "@/data/siteData";
import Breadcrumbs from "@/components/Breadcrumbs";
import { 
  FileText, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronRight,
  Calculator
} from "lucide-react";

export const metadata: Metadata = {
  title: "Accountancy & Business Services Hub | Actvise Accountancy",
  description: "Explore our 11 core financial services across Accountancy & Business Services. Fixed fees, Making Tax Digital compliance and dedicated client support.",
  alternates: {
    canonical: "https://actvise.co.uk/services",
  },
  openGraph: {
    title: "Accountancy & Business Services Hub | Actvise Accountancy",
    description: "Explore our 11 core financial services across Accountancy & Business Services.",
    url: "https://actvise.co.uk/services",
    images: ["/og-image.png"]
  }
};

export default function ServicesHubPage() {
  const accountancyServices = servicesData.filter(s => s.category === "accountancy");
  const businessServices = servicesData.filter(s => s.category === "business-services");

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-[#EBF3FF] to-white py-12 lg:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <Breadcrumbs items={[{ label: "Services" }]} className="mb-4" />
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00368C] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Our Services Hub
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Accountancy & Business Services
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              Tailored, technology-driven financial solutions for sole traders, limited companies and charities. Built on clarity, punctuality and transparent fixed-fee agreements.
            </p>
          </div>
        </div>
      </section>

      {/* Main Hub Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-20">
          
          {/* Category Hub 1: Accountancy */}
          <div id="accountancy">
            <div className="border-b-2 border-[#00368C] pb-4 mb-8">
              <span className="text-xs font-bold text-[#00368C] uppercase tracking-wider">
                Category Hub 01
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Accountancy Services
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Core compliance, digital record keeping, statutory reporting and regulatory submissions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {accountancyServices.map((service) => (
                <div 
                  key={service.slug}
                  className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-[#2B7EFE] hover:shadow-lg transition-all group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#EBF3FF] text-[#00368C] flex items-center justify-center font-bold mb-4 group-hover:bg-[#00368C] group-hover:text-white transition-colors">
                      <FileText className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#00368C] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100">
                    <Link
                      href={`/services/accountancy/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00368C] group-hover:text-[#2B7EFE]"
                    >
                      <span>Explore Service</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category Hub 2: Business Services */}
          <div id="business-services">
            <div className="border-b-2 border-[#2B7EFE] pb-4 mb-8">
              <span className="text-xs font-bold text-[#2B7EFE] uppercase tracking-wider">
                Category Hub 02
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Business Services
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Commercial formations, group corporate structuring and transaction due diligence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {businessServices.map((service) => (
                <div 
                  key={service.slug}
                  className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-[#00368C] hover:shadow-lg transition-all group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#00368C] flex items-center justify-center font-bold mb-4 group-hover:bg-[#00368C] group-hover:text-white transition-colors">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#00368C] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100">
                    <Link
                      href={`/services/business-services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00368C] group-hover:text-[#2B7EFE]"
                    >
                      <span>Explore Service</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Fixed Fee Promise Banner */}
      <section className="py-14 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-emerald-700 font-bold text-sm bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Fixed-Fee Transparency
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900">
            Every service comes with an agreed, transparent monthly fee
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            No surprise invoices, no unexpected billable hours. Just dedicated accountancy you can forecast accurately in your monthly budget.
          </p>
          <div className="pt-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#00368C] hover:bg-[#002868] text-white font-bold text-sm px-6 py-3 rounded-lg shadow transition-all"
            >
              <span>Get a Tailored Service Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
