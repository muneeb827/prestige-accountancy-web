"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, navItems } from "@/data/siteData";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  ChevronDown, 
  MessageCircle, 
  ShieldCheck, 
  ArrowRight 
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Prevent background scrolling when mobile navigation drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile drawer on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-sm border-b border-slate-100 flex flex-col ${mobileMenuOpen ? "h-[100dvh]" : "h-auto"}`}>
        {/* Top Bar with Deep Blue Background */}
        <div className="bg-[#00368C] text-white text-xs py-2 px-4 sm:px-8 hidden md:block shrink-0">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-blue-100">
              <MapPin className="w-3.5 h-3.5 text-[#2B7EFE]" />
              {siteConfig.address}
            </span>
            <span className="flex items-center gap-1.5 text-blue-100">
              <Clock className="w-3.5 h-3.5 text-[#2B7EFE]" />
              {siteConfig.hours}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a 
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} 
              className="flex items-center gap-1.5 font-semibold text-white hover:text-blue-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-300" />
              <span>Direct: {siteConfig.phone}</span>
            </a>
            <a 
              href={siteConfig.whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1 rounded-full font-bold transition-all shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar with White Background */}
      <div className="bg-white text-slate-800 flex flex-col flex-1 min-h-0">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 py-2 sm:py-2.5 flex items-center justify-between shrink-0">
          
          {/* Brand Logo - Official Full-Color Approved Logo on White Background */}
          <Link href="/" className="flex items-center group py-0.5">
            <div className="flex items-center">
              <Image 
                src="/prestige-logo.svg" 
                alt="Actvise Accountancy Services Ltd" 
                width={260} 
                height={74} 
                className="h-10 sm:h-12 lg:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                priority
                unoptimized
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              if (item.submenu) {
                return (
                  <div 
                    key={item.label} 
                    className="relative group"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link 
                      href={item.href}
                      className="flex items-center gap-1 text-sm font-semibold text-slate-800 hover:text-[#00368C] py-2 transition-colors"
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#00368C] transition-transform duration-200 group-hover:rotate-180" />
                    </Link>

                    {/* Mega Menu Dropdown */}
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[580px] bg-white rounded-xl shadow-2xl border border-slate-100 p-6 grid grid-cols-2 gap-6 transition-all duration-200 z-50 text-slate-800 ${servicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                      {item.submenu.map((col) => (
                        <div key={col.category}>
                          <div className="text-xs font-bold uppercase tracking-wider text-[#00368C] mb-3 pb-1 border-b border-blue-50">
                            {col.category}
                          </div>
                          <ul className="space-y-1.5">
                            {col.items.map((sub) => (
                              <li key={sub.href}>
                                <Link 
                                  href={sub.href}
                                  className="text-sm text-slate-700 hover:text-[#00368C] hover:translate-x-1 transition-all duration-150 block py-1 font-medium"
                                  onClick={() => setServicesDropdownOpen(false)}
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <div className="col-span-2 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                        <span className="flex items-center gap-1 font-medium text-emerald-700">
                          <ShieldCheck className="w-4 h-4 text-emerald-600" />
                          Fixed-fee pricing &amp; zero hidden costs
                        </span>
                        <Link 
                          href="/services" 
                          className="font-bold text-[#00368C] hover:text-[#2B7EFE] flex items-center gap-1"
                          onClick={() => setServicesDropdownOpen(false)}
                        >
                          View All 11 Services <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link 
                  key={item.label} 
                  href={item.href}
                  className="text-sm font-semibold text-slate-800 hover:text-[#00368C] transition-colors"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#00368C] hover:bg-[#002868] text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow hover:shadow-md transition-all duration-150"
            >
              <span>Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#00368C] hover:bg-slate-100 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div 
            id="mobile-drawer"
            className="lg:hidden bg-white border-t border-slate-100 px-4 sm:px-8 pt-3 pb-16 space-y-4 text-slate-900 shadow-2xl flex-1 min-h-0 overflow-y-auto overscroll-contain"
          >
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                if (item.submenu) {
                  return (
                    <div key={item.label} className="border-b border-slate-100 last:border-b-0 py-1">
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="flex items-center justify-between w-full py-2.5 text-base font-semibold text-slate-900 hover:text-[#00368C] transition-colors"
                        aria-expanded={mobileServicesOpen}
                      >
                        <span>{item.label}</span>
                        <ChevronDown 
                          className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                            mobileServicesOpen ? "rotate-180 text-[#00368C]" : ""
                          }`} 
                        />
                      </button>
                      {mobileServicesOpen && (
                        <div className="pl-3 pr-2 py-1 space-y-1 mb-2 border-l-2 border-blue-200">
                          <Link
                            href={item.href}
                            className="block py-1.5 text-sm font-bold text-[#00368C] hover:underline"
                            onClick={() => {
                              setMobileMenuOpen(false);
                            }}
                          >
                            View All 11 Services →
                          </Link>
                          {item.submenu.flatMap(col => col.items).map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block py-1.5 text-sm text-slate-600 hover:text-[#00368C] transition-colors"
                              onClick={() => {
                                setMobileMenuOpen(false);
                              }}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <div key={item.label} className="border-b border-slate-100 last:border-b-0 py-1">
                    <Link
                      href={item.href}
                      className="block py-2.5 text-base font-semibold text-slate-900 hover:text-[#00368C]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className="pt-3 pb-6 border-t border-slate-200 space-y-2.5">
              <a 
                href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} 
                className="flex items-center justify-center gap-2 w-full py-3 border border-slate-300 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#00368C]" />
                Call {siteConfig.phone}
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#00368C] hover:bg-[#002868] text-white rounded-xl text-sm font-bold shadow transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>

    {/* Spacer so page content starts cleanly below the fixed header */}
    <div className="h-[58px] sm:h-[68px] md:h-[109px]" aria-hidden="true" />
  </>
  );
}
