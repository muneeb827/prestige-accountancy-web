"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/data/siteData";
import { validateUKPhoneNumber } from "@/lib/validation";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Send,
  Loader2
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "Company Annual Accounts",
    message: "",
    honeypot: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  // Pre-fill from URL query parameters if provided
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const name = params.get("name") || "";
      const email = params.get("email") || "";
      const phone = params.get("phone") || "";
      const service = params.get("service") || "";
      if (name || email || phone || service) {
        setFormData((prev) => ({
          ...prev,
          firstName: name || prev.firstName,
          email: email || prev.email,
          phone: phone || prev.phone,
          service: service || prev.service
        }));
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Strict UK phone validation
    const phoneValidation = validateUKPhoneNumber(formData.phone);
    if (!phoneValidation.isValid) {
      setStatus("error");
      setResponseMsg(phoneValidation.error || "Please enter a valid UK phone number (e.g. +44 1234 567890).");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setResponseMsg(data.message || "Thank you! We will get back to you promptly.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "Company Annual Accounts",
          message: "",
          honeypot: ""
        });
      } else {
        setStatus("error");
        setResponseMsg(data.error || "Something went wrong. Please call us directly.");
      }
    } catch {
      setStatus("error");
      setResponseMsg("Connection error. Please call us directly or chat on WhatsApp.");
    }
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "AccountingService",
      "name": siteConfig.name,
      "telephone": siteConfig.phone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "9 Blackmoorfoot Road, Crosland Moor",
        "addressLocality": "Huddersfield",
        "addressRegion": "West Yorkshire",
        "postalCode": "HD4 5AQ",
        "addressCountry": "GB"
      }
    }
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* Header */}
      <section className="bg-gradient-to-b from-[#EBF3FF] to-white py-16 lg:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00368C] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contact Actvise Accountancy Services
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Speak directly with a qualified accountant. Whether you are based in Huddersfield, West Yorkshire or anywhere in the UK, we are ready to assist.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Details & Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Practice Office &amp; Details
                </h2>
                <p className="text-sm text-slate-600">
                  Clients are welcome to schedule an in-person meeting or connect with us via video call or telephone.
                </p>
              </div>

              {/* Direct Cards */}
              <div className="space-y-4">
                
                {/* Mobile & WhatsApp */}
                <div className="p-5 rounded-2xl bg-[#EBF3FF] border border-blue-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00368C] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#00368C]">
                      Mobile &amp; Direct Line
                    </h3>
                    <a 
                      href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} 
                      className="text-base font-extrabold text-slate-900 hover:text-[#00368C] block mt-0.5"
                    >
                      {siteConfig.phone}
                    </a>
                    <a
                      href={siteConfig.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-md mt-2 hover:bg-emerald-200 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Office Phone */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Office Phone
                    </h3>
                    <a 
                      href={`tel:${siteConfig.landline.replace(/\s+/g, '')}`}
                      className="text-base font-bold text-slate-900 hover:text-[#00368C] block mt-0.5"
                    >
                      {siteConfig.landline}
                    </a>
                  </div>
                </div>

                {/* Email Address */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Email Inquiries
                    </h3>
                    <a 
                      href={siteConfig.gmailComposeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-slate-900 hover:text-[#00368C] block mt-0.5"
                      title="Click to compose in Gmail"
                    >
                      {siteConfig.email}
                    </a>
                    <a
                      href={siteConfig.gmailComposeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00368C] bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md mt-2 hover:bg-blue-100 transition-colors"
                      title="Compose email directly in Gmail"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open in Gmail</span>
                    </a>
                  </div>
                </div>

                {/* Office Address */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Registered Office
                    </h3>
                    <p className="text-sm font-medium text-slate-800 mt-0.5">
                      {siteConfig.address}
                    </p>
                    <a
                      href="https://maps.google.com/?q=9+Blackmoorfoot+Road+Crosland+Moor+Huddersfield+HD4+5AQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-xs font-bold text-[#00368C] hover:underline mt-1.5"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Business Hours
                    </h3>
                    <p className="text-sm font-medium text-slate-800 mt-0.5">
                      {siteConfig.hours}
                    </p>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Weekend queries attended by appointment
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Interactive Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-5 sm:p-8 lg:p-10 shadow-lg">
                <div className="mb-6">
                  <h2 className="text-2xl font-extrabold text-slate-900">
                    Send Us a Message
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">
                    Fill out the form below. We will analyze your query and respond with clear advice and a fixed-fee quote.
                  </p>
                </div>

                {status === "success" && (
                  <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold">Message Sent Successfully!</div>
                      <div>{responseMsg}</div>
                    </div>
                  </div>
                )}

                {status === "error" && (
                  <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm">
                    {responseMsg}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Invisible Honeypot Field for Bot Spam Prevention */}
                  <div className="hidden" aria-hidden="true" style={{ display: "none" }}>
                    <label htmlFor="company_website_url">Company Website</label>
                    <input
                      type="text"
                      id="company_website_url"
                      name="company_website_url"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        First Name *
                      </label>
                      <input 
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="First Name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00368C]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Last Name
                      </label>
                      <input 
                        type="text"
                        value={formData.lastName}
                        onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Last Name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00368C]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address *
                      </label>
                      <input 
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@gmail.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00368C]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        UK Phone or Mobile *
                      </label>
                      <input 
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+44 1234 567890"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00368C]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Service of Interest
                    </label>
                    <select 
                      value={formData.service}
                      onChange={e => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#00368C]"
                    >
                      <option value="Company Annual Accounts">Company Annual Accounts &amp; Filing</option>
                      <option value="Bookkeeping">Bookkeeping (Xero &amp; QuickBooks)</option>
                      <option value="Management Accounts">Management Accounts &amp; Reporting</option>
                      <option value="VAT Returns & MTD">VAT Returns &amp; Making Tax Digital</option>
                      <option value="CIS Registration & Returns">CIS Registration &amp; Returns</option>
                      <option value="Pension Registration">Workplace Pension Auto-Enrolment</option>
                      <option value="Charity Accounts">Charity Accounts &amp; Examination</option>
                      <option value="Charity Registration">Charity Registration Support</option>
                      <option value="Business Startups">Business Startups &amp; Launch</option>
                      <option value="Company Formations">Company Formations &amp; Structuring</option>
                      <option value="Mergers & Acquisitions">Mergers, Acquisitions &amp; Demergers</option>
                      <option value="General Consultation">Switching Accountants or General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      How Can We Help? *
                    </label>
                    <textarea 
                      rows={4}
                      required
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please tell us a bit about your business, current software (e.g. Xero or QuickBooks) or upcoming deadlines..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00368C]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-3.5 sm:py-4 px-4 bg-[#00368C] hover:bg-[#002868] text-white font-bold text-xs sm:text-sm uppercase tracking-normal sm:tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center text-center leading-snug disabled:opacity-50"
                  >
                    {status === "submitting" ? (
                      <span className="inline-flex items-center justify-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin shrink-0" />
                        <span>Sending Message...</span>
                      </span>
                    ) : (
                      <span className="inline-block text-center">
                        <Send className="w-4 h-4 inline-block -mt-0.5 mr-2 shrink-0" />
                        <span>Send Message &amp; Book Free Consultation</span>
                      </span>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-2 text-center">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Your information is strictly confidential and never shared with third parties.</span>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
