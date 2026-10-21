import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData, siteConfig } from "@/data/siteData";
import Breadcrumbs from "@/components/Breadcrumbs";
import VatReturnsDeepContent from "@/components/services/VatReturnsDeepContent";
import BookkeepingDeepContent from "@/components/services/BookkeepingDeepContent";
import CisDeepContent from "@/components/services/CisDeepContent";
import AnnualAccountsDeepContent from "@/components/services/AnnualAccountsDeepContent";
import { 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  ShieldCheck, 
  HelpCircle,
  Users,
  Banknote,
  Workflow
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-static";

export async function generateStaticParams() {
  return servicesData
    .filter(s => s.category === "accountancy")
    .map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find(s => s.slug === slug && s.category === "accountancy");
  if (!service) return { title: "Service Not Found" };

  return {
    title: {
      absolute: `${service.title} | Prestige Accountancy`,
    },
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `https://prestigeaccountancy.com/services/accountancy/${slug}`,
    },
    openGraph: {
      title: `${service.title} | Prestige Accountancy`,
      description: service.metaDescription,
      url: `https://prestigeaccountancy.com/services/accountancy/${slug}`,
      images: ["/og-image.png"]
    }
  };
}

export default async function AccountancyServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find(s => s.slug === slug && s.category === "accountancy");

  if (!service) {
    notFound();
  }

  const otherServices = servicesData
    .filter(s => s.category === "accountancy" && s.slug !== slug);

  // 1. Structured Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://prestigeaccountancy.com/services/accountancy/${slug}#service`,
    "name": service.title,
    "description": service.shortDesc,
    "provider": {
      "@type": "AccountingService",
      "name": siteConfig.name,
      "telephone": [siteConfig.phone, siteConfig.landline],
      "url": "https://prestigeaccountancy.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "9 Blackmoorfoot Road, Crosland Moor",
        "addressLocality": "Huddersfield",
        "addressRegion": "West Yorkshire",
        "postalCode": "HD4 5AQ",
        "addressCountry": "GB"
      }
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Huddersfield" },
      { "@type": "AdministrativeArea", "name": "West Yorkshire" },
      { "@type": "Country", "name": "United Kingdom" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service.title,
      "itemListElement": service.deliverables.map(d => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": d
        }
      }))
    }
  };

  // 2. Structured FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": (service.faqs || []).map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {service.faqs && service.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Hero & Breadcrumb */}
      <section className="bg-gradient-to-b from-[#EBF3FF] to-white py-12 lg:py-16 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <Breadcrumbs 
            items={[
              { label: "Services", href: "/services" },
              { label: "Accountancy Services", href: "/services" },
              { label: service.title }
            ]}
            className="mb-4"
          />

          <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#00368C] bg-blue-100/70 px-3 py-1 rounded-full mb-3">
            Accountancy Services
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            {service.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-3xl">
            {service.shortDesc}
          </p>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Scope, Who It's For, Pricing, Process, FAQs */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Deliverables */}
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

              {/* Who This Is For */}
              {service.whoItsFor && (
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#00368C]" />
                    <span>Who This Is For</span>
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {service.whoItsFor}
                  </p>
                </div>
              )}

              {/* Transparent Pricing Guidance */}
              {service.pricingGuidance && (
                <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                  <h3 className="text-lg font-bold text-emerald-950 mb-2 flex items-center gap-2">
                    <Banknote className="w-5 h-5 text-emerald-700" />
                    <span>Transparent Pricing Guidance</span>
                  </h3>
                  <p className="text-sm text-emerald-900 leading-relaxed">
                    {service.pricingGuidance}
                  </p>
                  <p className="text-xs text-emerald-800 mt-2 font-medium">
                    ✓ All pricing is fixed and agreed in advance before any work commences.
                  </p>
                </div>
              )}

              {/* 3-Step Working Process */}
              {service.processSteps && service.processSteps.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-5 flex items-center gap-2">
                    <Workflow className="w-6 h-6 text-[#00368C]" />
                    <span>How We Work Together</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {service.processSteps.map((s, idx) => (
                      <div key={idx} className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm space-y-2">
                        <span className="text-xs font-mono font-bold text-[#2B7EFE] bg-blue-50 px-2.5 py-1 rounded-md">
                          Step {s.step}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900">
                          {s.title}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {s.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* The Business Advantage */}
              <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200">
                <h3 className="text-base font-bold text-[#00368C] mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#00368C]" />
                  <span>The Business Advantage</span>
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {service.benefits}
                </p>
              </div>

              {/* Comprehensive Practical Guidance for Top Money Pages */}
              {slug === "vat-returns-mtd" && <VatReturnsDeepContent />}
              {slug === "bookkeeping" && <BookkeepingDeepContent />}
              {slug === "cis-registration" && <CisDeepContent />}
              {slug === "annual-accounts" && <AnnualAccountsDeepContent />}

              {/* Service Specific FAQs */}
              {service.faqs && service.faqs.length > 0 && (
                <div className="pt-4">
                  <h2 className="text-2xl font-bold text-slate-900 mb-5 flex items-center gap-2">
                    <HelpCircle className="w-6 h-6 text-[#00368C]" />
                    <span>Frequently Asked Questions</span>
                  </h2>
                  <div className="space-y-3">
                    {service.faqs.map((faq, idx) => (
                      <div key={idx} className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                        <h4 className="text-sm font-bold text-slate-900">
                          {faq.q}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Services in this Category */}
              <div className="pt-6 border-t border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Other Accountancy Solutions
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {otherServices.slice(0, 4).map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/accountancy/${s.slug}`}
                      className="p-3.5 rounded-lg border border-slate-200 hover:border-[#00368C] hover:bg-slate-50 transition-all text-xs font-semibold text-slate-800 flex items-center justify-between"
                    >
                      <span>{s.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: CTA Box & Contact Info */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl sticky top-28 space-y-5">
                <div className="text-xs uppercase font-bold text-blue-400 tracking-wider">
                  Direct Enquiry
                </div>
                <h3 className="text-xl font-bold">
                  Speak with an Accountant
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Discuss your {service.title.toLowerCase()} requirements with our practice team. Transparent fixed-fee quote provided.
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
                    href={`tel:${siteConfig.landline.replace(/\s+/g, '')}`}
                    className="w-full py-2.5 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold text-xs rounded-lg flex items-center justify-center gap-2 transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Office: {siteConfig.landline}</span>
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
