"use client";

import { useState } from "react";
import { siteConfig } from "@/data/siteData";
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Loader2, 
  MessageCircle, 
  Phone,
  RotateCcw
} from "lucide-react";

export default function HeroConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Company Annual Accounts",
    honeypot: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          service: formData.service,
          message: `Consultation request submitted from homepage hero widget for: ${formData.service}.`,
          honeypot: formData.honeypot
        })
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please call us directly.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network connection error. Please call us or chat on WhatsApp.");
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "Company Annual Accounts",
      honeypot: ""
    });
    setStatus("idle");
    setErrorMsg("");
  };

  return (
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

      {/* Success State */}
      {status === "success" ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-center animate-fade-in">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-3">
            <CheckCircle2 className="w-7 h-7 text-emerald-600" />
          </div>
          <h4 className="text-base font-extrabold text-emerald-900 mb-1">
            Consultation Request Received!
          </h4>
          <p className="text-xs text-emerald-800 leading-relaxed mb-4">
            Thank you, <strong>{formData.name}</strong>. Your consultation details have been delivered to Actvise Accountancy &amp; Tax Services. A qualified accountant will contact you on <strong>{formData.phone || formData.email}</strong> within 24 business hours.
          </p>

          <div className="pt-2 border-t border-emerald-200/80 flex flex-col sm:flex-row gap-2.5">
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Instant WhatsApp Chat</span>
            </a>
            <button
              onClick={handleReset}
              className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg border border-slate-300 hover:bg-white text-slate-700 text-xs font-semibold transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>New Request</span>
            </button>
          </div>
        </div>
      ) : (
        /* Form State */
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {/* Honeypot field for bot spam prevention */}
          <div className="hidden" aria-hidden="true" style={{ display: "none" }}>
            <label htmlFor="hero_website_check">Website</label>
            <input
              type="text"
              id="hero_website_check"
              name="hero_website_check"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {status === "error" && (
            <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs">
              {errorMsg}
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="hero-name" className="block text-xs font-semibold text-slate-700 mb-1">
                Your Name *
              </label>
              <input 
                id="hero-name"
                type="text" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. David" 
                disabled={status === "submitting"}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00368C] disabled:bg-slate-50" 
              />
            </div>
            <div>
              <label htmlFor="hero-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                Phone Number *
              </label>
              <input 
                id="hero-phone" 
                type="tel" 
                required 
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="07123 456789" 
                disabled={status === "submitting"}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00368C] disabled:bg-slate-50" 
              />
            </div>
          </div>

          <div>
            <label htmlFor="hero-email" className="block text-xs font-semibold text-slate-700 mb-1">
              Email Address *
            </label>
            <input 
              id="hero-email"
              type="email" 
              required 
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@company.co.uk" 
              disabled={status === "submitting"}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00368C] disabled:bg-slate-50" 
            />
          </div>

          <div>
            <label htmlFor="hero-service" className="block text-xs font-semibold text-slate-700 mb-1">
              Service You Need
            </label>
            <select 
              id="hero-service" 
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              disabled={status === "submitting"}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#00368C] disabled:bg-slate-50"
            >
              <option value="Company Annual Accounts">Company Annual Accounts &amp; Filing</option>
              <option value="Bookkeeping & Reconciliations">Bookkeeping &amp; Reconciliations</option>
              <option value="VAT Returns & MTD">VAT Returns &amp; MTD Compliance</option>
              <option value="CIS Returns & Subcontractors">CIS Registration &amp; Monthly Returns</option>
              <option value="New Business Startup">New Business Startup &amp; Formation</option>
              <option value="Charity Accounts">Charity Accounts &amp; Examination</option>
              <option value="General Consultation">Full Accountancy Review &amp; Consultation</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-3 bg-[#00368C] hover:bg-[#002868] text-white font-bold text-sm rounded-lg shadow-md transition-all duration-150 flex items-center justify-center gap-2 mt-2 disabled:opacity-75 cursor-pointer"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending Consultation Request...</span>
              </>
            ) : (
              <>
                <span>Get Your Tailored Quote</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Your privacy is 100% protected under UK GDPR</span>
          </div>
        </form>
      )}
    </div>
  );
}
