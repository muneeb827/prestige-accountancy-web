import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { locationsData, LocationItem } from "@/data/locationsData";
import { siteConfig } from "@/data/siteData";
import Breadcrumbs from "@/components/Breadcrumbs";
import { 
  MapPin, 
  Car, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  ShieldCheck, 
  HelpCircle,
  Building2,
  Calculator,
  FileText,
  Users,
  Clock,
  MessageCircle
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-static";

export async function generateStaticParams() {
  return locationsData.map(loc => ({ slug: loc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = locationsData.find(l => l.slug === slug);
  if (!location) return { title: "Location Not Found" };

  return {
    title: {
      absolute: `${location.metaTitle} | Actvise Accountancy`,
    },
    description: location.metaDescription,
    alternates: {
      canonical: `https://actvise.co.uk/locations/${slug}`,
    },
    openGraph: {
      title: `${location.metaTitle} | Actvise Accountancy`,
      description: location.metaDescription,
      url: `https://actvise.co.uk/locations/${slug}`,
      images: ["/og-image.png"]
    }
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = locationsData.find(l => l.slug === slug);

  if (!location) {
    notFound();
  }

  const otherLocations = locationsData.filter(l => l.slug !== slug);

  // 1. Structured LocalBusiness Schema
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "@id": `https://actvise.co.uk/locations/${slug}#localbusiness`,
    "name": `Actvise Accountancy Services - ${location.town}`,
    "image": "https://actvise.co.uk/og-image.png",
    "telephone": [siteConfig.phone, siteConfig.landline],
    "url": `https://actvise.co.uk/locations/${slug}`,
    "priceRange": "££",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "9 Blackmoorfoot Road, Crosland Moor",
      "addressLocality": "Huddersfield",
      "addressRegion": "West Yorkshire",
      "postalCode": "HD4 5AQ",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 53.6395,
      "longitude": -1.8085
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": location.town
      },
      ...location.postcodes.map(pc => ({
        "@type": "AdministrativeArea",
        "name": pc
      })),
      {
        "@type": "AdministrativeArea",
        "name": "West Yorkshire"
      }
    ],
    "description": location.shortDesc
  };

  // 2. Structured FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": location.localFaqs.map(faq => ({
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
      {/* Schema Injections */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#EBF3FF] to-white py-12 lg:py-16 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <Breadcrumbs 
            items={[
              { label: "Locations", href: "/#locations" },
              { label: `Accountants in ${location.town}` }
            ]}
            className="mb-4"
          />

          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00368C] bg-blue-100/70 px-3 py-1 rounded-full mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#00368C]" />
            <span>Serving {location.areaName} ({location.postcodes.join(", ")})</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            {location.heroTitle}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-3xl">
            {location.shortDesc}
          </p>

          <div className="mt-6 flex flex-wrap gap-4 items-center text-xs font-semibold text-slate-700 bg-white/80 p-3.5 rounded-xl border border-blue-100 inline-flex">
            <div className="flex items-center gap-1.5 text-blue-900">
              <Car className="w-4 h-4 text-[#00368C]" />
              <span>{location.distanceFromOffice}</span>
            </div>
            <span className="text-slate-300">•</span>
            <div className="text-emerald-700 font-bold">
              ✓ Free Client Parking at Head Office
            </div>
            <span className="text-slate-300">•</span>
            <div className="text-slate-600">
              100% Paperless Cloud Portal Available
            </div>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Local Area Overview */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-[#00368C]" />
                  <span>Supporting {location.town}’s Business Community</span>
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  {location.localEconomyOverview}
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
                  <strong>Travel &amp; Accessibility:</strong> {location.travelDescription}
                </div>
              </div>

              {/* Industries We Serve in this Town */}
              <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200">
                <h3 className="text-lg font-bold text-[#00368C] mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#00368C]" />
                  <span>Key Sectors We Support in {location.town}</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {location.industriesServed.map((ind, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{ind}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Accountancy Solutions for this Town */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-5">
                  Accounting Services for {location.town} Businesses
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link
                    href="/services/accountancy/vat-returns-mtd"
                    className="p-5 rounded-xl border border-slate-200 hover:border-[#00368C] hover:shadow-md transition-all group block space-y-2 bg-white"
                  >
                    <div className="text-xs font-mono font-bold text-[#00368C] flex items-center justify-between">
                      <span>VAT &amp; MTD</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm">VAT Returns &amp; MTD Submissions</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Quarterly digital submissions, scheme optimization (Cash vs Standard) and making sure you never miss a deadline.
                    </p>
                  </Link>

                  <Link
                    href="/services/accountancy/bookkeeping"
                    className="p-5 rounded-xl border border-slate-200 hover:border-[#00368C] hover:shadow-md transition-all group block space-y-2 bg-white"
                  >
                    <div className="text-xs font-mono font-bold text-[#00368C] flex items-center justify-between">
                      <span>Bookkeeping</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm">Xero &amp; QuickBooks Bookkeeping</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Live bank feeds, paperless receipt scanning, monthly reconciliations and tailored profit reports from £120/mo.
                    </p>
                  </Link>

                  <Link
                    href="/services/accountancy/annual-accounts"
                    className="p-5 rounded-xl border border-slate-200 hover:border-[#00368C] hover:shadow-md transition-all group block space-y-2 bg-white"
                  >
                    <div className="text-xs font-mono font-bold text-[#00368C] flex items-center justify-between">
                      <span>Statutory Accounts</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm">Company Annual Accounts</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      FRS 102/105 compliance, electronic submission to Companies House and HMRC with transparent director walk-throughs.
                    </p>
                  </Link>

                  <Link
                    href="/services/accountancy/cis-registration"
                    className="p-5 rounded-xl border border-slate-200 hover:border-[#00368C] hover:shadow-md transition-all group block space-y-2 bg-white"
                  >
                    <div className="text-xs font-mono font-bold text-[#00368C] flex items-center justify-between">
                      <span>Construction</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm">CIS Contractor &amp; Subcontractor Services</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Instant HMRC UTR verifications, monthly deduction statements, CIS300 filing and PAYE tax offsets.
                    </p>
                  </Link>
                </div>
              </div>

              {/* Local FAQs */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-5 flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-[#00368C]" />
                  <span>Frequently Asked Questions for {location.town} Clients</span>
                </h2>
                <div className="space-y-3">
                  {location.localFaqs.map((faq, idx) => (
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

              {/* Other Local Areas */}
              <div className="pt-6 border-t border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Other Nearby Towns We Serve
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {otherLocations.map(loc => (
                    <Link
                      key={loc.slug}
                      href={`/locations/${loc.slug}`}
                      className="p-3 rounded-lg border border-slate-200 hover:border-[#00368C] hover:bg-slate-50 transition-all text-xs font-semibold text-slate-800 text-center block"
                    >
                      <span>{loc.town}</span>
                      <span className="block text-[10px] text-slate-500 font-normal mt-0.5">{loc.postcodes.join(", ")}</span>
                    </Link>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column (4 cols) Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl sticky top-28 space-y-5">
                <div className="text-xs uppercase font-bold text-blue-400 tracking-wider">
                  Local Service
                </div>
                <h3 className="text-xl font-bold">
                  Book a Consultation in {location.town}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Speak directly with a qualified accountant. Available for in-person meetings at our Huddersfield office or via phone or video consultation.
                </p>

                <div className="space-y-3 pt-2">
                  <Link
                    href="/contact"
                    className="w-full py-3 px-3 sm:px-4 bg-[#00368C] hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-normal sm:tracking-wide rounded-lg shadow flex items-center justify-center gap-2 text-center leading-snug transition-all"
                  >
                    <span>Request Free Consultation</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </Link>

                  <a
                    href={siteConfig.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-3 sm:px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-normal sm:tracking-wide rounded-lg shadow flex items-center justify-center gap-2 text-center leading-snug transition-all"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0 fill-current" />
                    <span>WhatsApp: {siteConfig.phone}</span>
                  </a>

                  <a
                    href={`tel:${siteConfig.landline.replace(/\s+/g, '')}`}
                    className="w-full py-2.5 px-3 sm:px-4 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold text-xs rounded-lg flex items-center justify-center gap-2 text-center transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 shrink-0" />
                    <span>Call: {siteConfig.landline}</span>
                  </a>
                </div>

                <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
                  <div>📍 <strong>Practice Address:</strong></div>
                  <div>9 Blackmoorfoot Road, Crosland Moor, Huddersfield, HD4 5AQ</div>
                  <div className="text-blue-400 pt-1">
                    Free on-site client parking available.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
