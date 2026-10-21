import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteData";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t-4 border-[#00368C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block bg-white px-4 py-2 rounded-xl shadow-sm hover:shadow transition-all group">
              <div className="flex items-center">
                <Image 
                  src="/prestige-logo.svg" 
                  alt="Prestige Accountancy Services Ltd" 
                  width={260} 
                  height={74} 
                  className="h-10 sm:h-12 lg:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                  unoptimized
                />
              </div>
            </Link>
            <p className="text-sm font-semibold text-blue-400 tracking-wide uppercase">
              {siteConfig.tagline}
            </p>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Tailored accountancy, bookkeeping, VAT compliance, and corporate structuring for UK sole traders, limited companies, and charities.
            </p>
            
            <div className="space-y-2.5 text-sm text-slate-300 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#2B7EFE] shrink-0 mt-1" />
                <span>{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#2B7EFE] shrink-0" />
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  Mobile / WhatsApp: <strong className="text-white">{siteConfig.phone}</strong>
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#2B7EFE] shrink-0" />
                <span>Office Landline: {siteConfig.landline}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#2B7EFE] shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </div>
            </div>

            {/* Social Icons (Facebook, Instagram, TikTok, LinkedIn) */}
            <div className="pt-2">
              <div className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2.5">Follow Our Updates</div>
              <div className="flex items-center gap-2.5">
                <a 
                  href={siteConfig.socials.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#2B7EFE] hover:bg-[#00368C] flex items-center justify-center text-white transition-all text-sm font-bold"
                  aria-label="Prestige Accountancy Facebook"
                >
                  f
                </a>
                <a 
                  href={siteConfig.socials.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#2B7EFE] hover:bg-[#00368C] flex items-center justify-center text-white transition-all text-sm font-bold"
                  aria-label="Prestige Accountancy Instagram"
                >
                  ig
                </a>
                <a 
                  href={siteConfig.socials.tiktok} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#2B7EFE] hover:bg-[#00368C] flex items-center justify-center text-white transition-all text-sm font-bold"
                  aria-label="Prestige Accountancy TikTok"
                >
                  tk
                </a>
                <a 
                  href={siteConfig.socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#2B7EFE] hover:bg-[#00368C] flex items-center justify-center text-white transition-all text-sm font-bold"
                  aria-label="Prestige Accountancy LinkedIn"
                >
                  in
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Accountancy Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Accountancy
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/accountancy/bookkeeping" className="hover:text-white transition-colors">
                  Bookkeeping
                </Link>
              </li>
              <li>
                <Link href="/services/accountancy/annual-accounts" className="hover:text-white transition-colors">
                  Annual Accounts Filing
                </Link>
              </li>
              <li>
                <Link href="/services/accountancy/management-accounts" className="hover:text-white transition-colors">
                  Management Accounts
                </Link>
              </li>
              <li>
                <Link href="/services/accountancy/vat-returns-mtd" className="hover:text-white transition-colors">
                  VAT Returns & MTD
                </Link>
              </li>
              <li>
                <Link href="/services/accountancy/cis-registration" className="hover:text-white transition-colors">
                  CIS Registration & Returns
                </Link>
              </li>
              <li>
                <Link href="/services/accountancy/pension-registration" className="hover:text-white transition-colors">
                  Workplace Pension
                </Link>
              </li>
              <li>
                <Link href="/services/accountancy/charity-accounts" className="hover:text-white transition-colors">
                  Charity Accounts & Examination
                </Link>
              </li>
              <li>
                <Link href="/services/accountancy/charity-registration" className="hover:text-white transition-colors">
                  Charity Registration
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Business Services & Who We Help */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Business & Solutions
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/business-services/business-startups" className="hover:text-white transition-colors">
                  Business Startups
                </Link>
              </li>
              <li>
                <Link href="/services/business-services/company-formations" className="hover:text-white transition-colors">
                  Formations & Structuring
                </Link>
              </li>
              <li>
                <Link href="/services/business-services/mergers-acquisitions" className="hover:text-white transition-colors">
                  M&A and Demergers
                </Link>
              </li>
              <li className="pt-2 text-xs font-bold uppercase tracking-wider text-blue-400">
                Audience Hub
              </li>
              <li>
                <Link href="/who-we-help" className="hover:text-white transition-colors">
                  Limited Companies (SMEs)
                </Link>
              </li>
              <li>
                <Link href="/who-we-help" className="hover:text-white transition-colors">
                  Sole Traders & Freelancers
                </Link>
              </li>
              <li>
                <Link href="/who-we-help" className="hover:text-white transition-colors">
                  CIS Contractors
                </Link>
              </li>
              <li>
                <Link href="/who-we-help" className="hover:text-white transition-colors">
                  Charities & Not-for-Profits
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links & Fixed Fee Promise */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Information
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Prestige
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-colors">
                  Insights & Blog
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Key Tax Deadlines
                </Link>
              </li>
              <li>
                <Link href="/resources/vat-calculator" className="hover:text-white transition-colors">
                  Free VAT Calculator
                </Link>
              </li>
              <li>
                <Link href="/resources/compliance-checklist" className="hover:text-white transition-colors">
                  Compliance Checklist Tool
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-2 text-slate-300">
              <div className="flex items-center gap-1.5 font-bold text-white">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                The Prestige Guarantee
              </div>
              <p className="text-slate-400">
                Transparent fixed-fee agreement. No hidden charges, no surprise invoices.
              </p>
            </div>
          </div>

        </div>

        {/* Local Town Coverage Footer Strip */}
        <div className="py-6 border-b border-slate-800 text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="font-bold uppercase tracking-wider text-slate-400 text-[11px] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#2B7EFE]" />
              <span>West Yorkshire Areas We Cover:</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-slate-400">
              <Link href="/locations/halifax" className="hover:text-white transition-colors">Halifax (HX1-HX3)</Link>
              <span className="text-slate-700">•</span>
              <Link href="/locations/brighouse" className="hover:text-white transition-colors">Brighouse (HD6)</Link>
              <span className="text-slate-700">•</span>
              <Link href="/locations/elland" className="hover:text-white transition-colors">Elland (HX5)</Link>
              <span className="text-slate-700">•</span>
              <Link href="/locations/holmfirth" className="hover:text-white transition-colors">Holmfirth (HD9)</Link>
              <span className="text-slate-700">•</span>
              <Link href="/locations/dewsbury" className="hover:text-white transition-colors">Dewsbury (WF12-WF13)</Link>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Legal Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 {siteConfig.name}. All rights reserved. Registered in England & Wales{siteConfig.crn ? ` (CRN: ${siteConfig.crn})` : ""}.
          </div>
          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Engagement</Link>
            <span>•</span>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">XML Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
