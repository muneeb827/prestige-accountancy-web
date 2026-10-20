import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData, siteConfig } from "@/data/siteData";
import { 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  ShieldCheck, 
  Building2, 
  ChevronLeft 
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData
    .filter(s => s.category === "business-services")
    .map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find(s => s.slug === slug && s.category === "business-services");
  if (!service) return { title: "Service Not Found" };

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
  };
}

export default async function BusinessServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find(s => s.slug === slug && s.category === "business-services");

  if (!service) {
    notFound();
  }

  const otherServices = servicesData
    .filter(s => s.category === "business-services" && s.slug !== slug);

  return (
    <div>
      {/* Breadcrumb & Hero */}
      <section className="bg-gradient-to-b from-[#EBF3FF] to-white py-14 lg:py-16 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00368C] hover:text-[#2B7EFE] mb-4"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </Link>
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#2B7EFE] bg-blue-100/70 px-3 py-1 rounded-full mb-3">
            Business Services
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            {service.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-3xl">
            {service.shortDesc}
          </p>
        </div>
      </section>

      {/* Main Content & Deliverables */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Scope & Deliverables */}
            <div className="lg:col-span-8 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  What We Deliver
                </h2>
                <div className="space-y-3">
                  {service.deliverables.map((item, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-slate-800 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Benefit Box */}
              <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200">
                <h3 className="text-base font-bold text-[#00368C] mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#00368C]" />
                  Strategic Value
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {service.benefits}
                </p>
              </div>

              {/* Related Services */}
              <div className="pt-6 border-t border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Other Business Services
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {otherServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/business-services/${s.slug}`}
                      className="p-3.5 rounded-lg border border-slate-200 hover:border-[#00368C] hover:bg-slate-50 transition-all text-xs font-semibold text-slate-800 flex items-center justify-between"
                    >
                      <span>{s.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: CTA Box */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl sticky top-28 space-y-5">
                <div className="text-xs uppercase font-bold text-blue-400 tracking-wider">
                  Advisory Consultation
                </div>
                <h3 className="text-xl font-bold">
                  Corporate Advisory
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Discuss your commercial structuring, startup launch, or M&amp;A due diligence confidentially.
                </p>
                <div className="space-y-3 pt-2">
                  <Link
                    href="/contact"
                    className="w-full py-3 bg-[#00368C] hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow flex items-center justify-center gap-2 transition-all"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={siteConfig.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow flex items-center justify-center gap-2 transition-all"
                  >
                    <span>WhatsApp: {siteConfig.phone}</span>
                  </a>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                    className="w-full py-2.5 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold text-xs rounded-lg flex items-center justify-center gap-2 transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call {siteConfig.phone}</span>
                  </a>
                </div>
                <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
                  📍 9 Blackmoorfoot Road, Huddersfield, HD4 5AQ
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
