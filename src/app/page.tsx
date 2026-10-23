import Link from "next/link";
import Image from "next/image";
import LocalTownCoverage from "@/components/LocalTownCoverage";
import { 
  siteConfig, 
  servicesData, 
  whoWeHelpAudience, 
  homeFaqs, 
  coreValues, 
  clientTestimonials 
} from "@/data/siteData";
import { 
  Phone, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Star, 
  FileText, 
  Building2, 
  TrendingUp, 
  Sparkles, 
  Calculator, 
  Clock, 
  Users, 
  Award,
  ChevronRight,
  HelpCircle
} from "lucide-react";

export default function Home() {
  const accountancyServices = servicesData.filter(s => s.category === "accountancy");
  const businessServices = servicesData.filter(s => s.category === "business-services");

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homeFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      {/* FAQ Schema Markup for Google AI Overviews and Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#EBF3FF] via-white to-white pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-slate-100 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#00368C] text-xs font-bold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-[#2B7EFE]" />
                <span>Huddersfield & Nationwide UK Accountancy Practice</span>
              </div>

              {/* H1 Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Accountancy & Bookkeeping That Helps Your{" "}
                <span className="text-[#00368C] relative inline-block">
                  Business Grow
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#2B7EFE]/30" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="8" />
                  </svg>
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Accountancy, bookkeeping, VAT and business support for individuals, sole traders, limited companies, partnerships, startups and charities across Huddersfield and the UK. Clear numbers, plain-English advice and fixed fees.
              </p>

              {/* Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm font-semibold text-slate-800 max-w-lg mx-auto lg:mx-0 text-left">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Xero & QuickBooks Cloud Specialists</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Transparent Fixed-Fee Agreements</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>HMRC & Companies House Submissions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Seamless, Zero-Disruption Switching</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#00368C] hover:bg-[#002868] text-white text-base font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-900/20 hover:shadow-xl transition-all duration-200"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-base font-bold px-6 py-3.5 rounded-xl shadow-md transition-all duration-200"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>WhatsApp: {siteConfig.phone}</span>
                </a>
              </div>

              {/* Trust Subtext */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-1.5 sm:gap-2.5 text-xs text-slate-500 pt-1 text-center sm:text-left">
                <div className="flex items-center text-amber-400 shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span>5.0 Star rated customer satisfaction • Direct accountant contact</span>
              </div>
            </div>

            {/* Right Card / Interactive Consultation Lead Form */}
            <div className="lg:col-span-5" id="consultation">
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 overflow-hidden relative">
                
                {/* Hero Photograph Header */}
                <div className="relative h-44 w-full">
                  <Image 
                    src="/images/hero-accountant.jpg"
                    alt="Prestige Accountancy Services - Chartered & Professional Accountants in Huddersfield"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300">Available For Direct Consultation</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-100 mt-0.5">Huddersfield Practice • 9 Blackmoorfoot Road, HD4 5AQ</p>
                  </div>
                </div>

                <div className="p-6 sm:p-7 relative">
                  <div className="absolute top-0 right-0 bg-[#00368C] text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-bl-xl">
                    Fixed-Fee Quote
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    Request a Free Consultation
                  </h3>
                  <p className="text-xs text-slate-500 mb-5">
                    Discuss your business requirements with an accountant. No obligations, no pushy sales.
                  </p>

                <form action="/contact" method="GET" className="space-y-3.5">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="hero-name" className="block text-xs font-semibold text-slate-700 mb-1">Your Name</label>
                      <input 
                        id="hero-name"
                        type="text" 
                        required 
                        placeholder="John Smith" 
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00368C]" 
                      />
                    </div>
                    <div>
                      <label htmlFor="hero-phone" className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                      <input 
                        id="hero-phone" 
                        type="tel" 
                        required 
                        placeholder="07123 456789" 
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00368C]" 
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="hero-email" className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                    <input 
                      id="hero-email"
                      type="email" 
                      required 
                      placeholder="john@example.com" 
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00368C]" 
                    />
                  </div>

                  <div>
                    <label htmlFor="hero-service" className="block text-xs font-semibold text-slate-700 mb-1">Service You Need</label>
                    <select id="hero-service" className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#00368C]">
                      <option value="annual-accounts">Company Annual Accounts</option>
                      <option value="bookkeeping">Bookkeeping & Reconciliations</option>
                      <option value="vat">VAT Returns & MTD</option>
                      <option value="cis">CIS Registration & Monthly Returns</option>
                      <option value="startup">New Business Startup</option>
                      <option value="charity">Charity Accounts & Examination</option>
                      <option value="other">Other or Full Practice Review</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#00368C] hover:bg-[#002868] text-white font-bold text-sm rounded-lg shadow-md transition-all duration-150 flex items-center justify-center gap-2 mt-2"
                  >
                    <span>Get Your Tailored Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Your privacy is 100% protected under UK GDPR</span>
                  </div>
                </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CORE VALUES SECTION */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00368C] bg-blue-100/60 px-3 py-1 rounded-full">
              Our Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              The Six Values Guiding Every Prestige Client
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              We combine everyday compliance with actionable guidance to help you navigate UK financial regulations with total confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => (
              <div 
                key={val.title}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#EBF3FF] text-[#00368C] font-extrabold text-sm flex items-center justify-center mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {val.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES SECTION (11 CONFIRMED SERVICES) */}
      <section className="py-20 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00368C] bg-blue-100/60 px-3 py-1 rounded-full">
              Our Comprehensive Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
              Clear Numbers, Dedicated Guidance & Compliance
            </h2>
            <p className="text-base text-slate-600 mt-3">
              Structured into two dedicated service hubs. Accountancy and Business Services are built to handle your everyday operations and long-term milestones.
            </p>
          </div>

          {/* Hub 1: Accountancy Services */}
          <div className="mb-16">
            <div className="flex items-center justify-between pb-4 border-b-2 border-[#00368C] mb-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Category Hub 1: Accountancy Services
                </h3>
                <p className="text-sm text-slate-500">
                  From day-to-day digital bookkeeping to statutory filings and charity examinations.
                </p>
              </div>
              <Link 
                href="/services" 
                className="hidden sm:flex items-center gap-1 text-sm font-bold text-[#00368C] hover:text-[#2B7EFE]"
              >
                View Hub <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {accountancyServices.map((service) => (
                <div 
                  key={service.slug}
                  className="bg-white rounded-xl border border-slate-200 p-5 hover:border-[#2B7EFE] hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#EBF3FF] text-[#00368C] flex items-center justify-center font-bold mb-4 group-hover:bg-[#00368C] group-hover:text-white transition-colors">
                      <FileText className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#00368C] transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {service.shortDesc}
                    </p>
                  </div>
                  <Link
                    href={`/services/accountancy/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00368C] group-hover:text-[#2B7EFE] pt-2 border-t border-slate-100"
                  >
                    <span>Read Full Scope</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Hub 2: Business Services */}
          <div>
            <div className="flex items-center justify-between pb-4 border-b-2 border-[#2B7EFE] mb-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Category Hub 2: Business Services
                </h3>
                <p className="text-sm text-slate-500">
                  Launch planning, commercial formations, holding structures and transaction due diligence.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {businessServices.map((service) => (
                <div 
                  key={service.slug}
                  className="bg-white rounded-xl border border-slate-200 p-6 hover:border-[#00368C] hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#00368C] flex items-center justify-center font-bold mb-4 group-hover:bg-[#00368C] group-hover:text-white transition-colors">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#00368C] transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>
                  </div>
                  <Link
                    href={`/services/business-services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00368C] group-hover:text-[#2B7EFE] pt-3 border-t border-slate-100"
                  >
                    <span>Explore Service Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. WHO WE HELP SECTION */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950 border border-blue-800 px-3 py-1 rounded-full">
              Tailored Sector Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Who We Help Across Huddersfield &amp; UK
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2">
              Every business structure has unique obligations. We deliver tailored workflows designed specifically for your stage and sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoWeHelpAudience.map((audience) => (
              <div 
                key={audience.slug}
                className="bg-slate-800/80 rounded-xl p-6 border border-slate-700/80 hover:border-blue-400 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {audience.title}
                  </h3>
                  <div className="text-xs text-blue-400 font-medium mb-3">
                    {audience.tagline}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {audience.desc}
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-300 border-t border-slate-700 pt-3">
                    {audience.bullets.map((b, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-blue-300 transition-colors"
                >
                  <span>Book Consultation for {audience.title.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SWITCHING TO PRESTIGE SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-gradient-to-r from-[#00368C] to-[#0A4BB5] rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-full">
                  Stress-Free Handover
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                  Thinking of Switching Accountants? It&apos;s Simpler Than You Think.
                </h2>
                <p className="text-sm sm:text-base text-blue-100 max-w-2xl leading-relaxed">
                  Worried about gaps in your filing or difficult conversations? We manage the entire transition. We contact your previous accountant for professional clearance, import your cloud accounting data and verify everything with zero disruption.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs font-semibold">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-3">
                    <span className="block text-blue-300 font-bold mb-1">Step 1</span>
                    Free initial consultation & fixed-fee quote
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-3">
                    <span className="block text-blue-300 font-bold mb-1">Step 2</span>
                    We request clearance & records directly
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-3">
                    <span className="block text-blue-300 font-bold mb-1">Step 3</span>
                    Seamless onboarding & continuous support
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3 justify-center items-center lg:items-end">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto text-center bg-white hover:bg-blue-50 text-[#00368C] font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg transition-all"
                >
                  Start Your Switch Today
                </Link>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                  className="text-xs font-medium text-blue-200 hover:text-white flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Or call directly: {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00368C] bg-blue-100 px-3 py-1 rounded-full">
              Client Feedback
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Trusted by Businesses & Organisations Across the UK
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clientTestimonials.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-amber-400 mb-3">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-700 italic leading-relaxed mb-4">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100">
                  <div className="font-bold text-sm text-slate-900">{item.author}</div>
                  <div className="text-xs text-slate-500">{item.business}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6B. LOCAL WEST YORKSHIRE TOWN COVERAGE */}
      <LocalTownCoverage />

      {/* 7. MINI FAQ SECTION (AEO & GOOGLE AI OPTIMIZED) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00368C] bg-blue-100 px-3 py-1 rounded-full">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Everything You Need to Know Before Getting Started
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Clear, transparent answers to the questions our clients ask most often.
            </p>
          </div>

          <div className="space-y-4">
            {homeFaqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-blue-300 transition-colors"
              >
                <h3 className="text-base font-bold text-slate-900 flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-[#2B7EFE] shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-slate-600 mt-2 pl-7 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-sm text-slate-600">
              Have a specific question about your situation?{" "}
              <Link href="/contact" className="font-bold text-[#00368C] hover:text-[#2B7EFE] underline">
                Speak directly with an accountant today
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
