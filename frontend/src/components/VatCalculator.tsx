"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteData";
import { 
  Calculator, 
  ArrowRight, 
  MessageCircle, 
  CheckCircle2, 
  HelpCircle, 
  ShieldCheck,
  TrendingUp,
  Percent
} from "lucide-react";

export default function VatCalculator() {
  const [amount, setAmount] = useState<string>("1000");
  const [rate, setRate] = useState<number>(20); // 20%, 5%, 0%
  const [mode, setMode] = useState<"add" | "remove">("add"); // add VAT or remove VAT

  const numAmount = parseFloat(amount) || 0;

  let net = 0;
  let vat = 0;
  let gross = 0;

  if (mode === "add") {
    net = numAmount;
    vat = net * (rate / 100);
    gross = net + vat;
  } else {
    gross = numAmount;
    net = gross / (1 + rate / 100);
    vat = gross - net;
  }

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(val);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
      {/* Calculator Header */}
      <div className="bg-gradient-to-r from-[#00368C] to-[#0A4BB5] text-white p-6 sm:p-8">
        <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-blue-200 mb-2">
          <Calculator className="w-4 h-4 text-[#2B7EFE]" />
          <span>Free UK Accounting Tool</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold">
          UK VAT Calculator (2026/27 Rates)
        </h3>
        <p className="text-xs sm:text-sm text-blue-100 mt-2 max-w-2xl leading-relaxed">
          Instantly calculate standard (20%), reduced (5%), or custom UK VAT amounts. Toggle between adding VAT to net figures or extracting VAT from gross totals.
        </p>
      </div>

      <div className="p-6 sm:p-8 space-y-8">
        {/* Input Controls */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 1. Mode Toggle */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Calculation Type
            </label>
            <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-xl">
              <button
                type="button"
                onClick={() => setMode("add")}
                className={`py-2 text-xs font-bold rounded-lg transition-all ${
                  mode === "add"
                    ? "bg-[#00368C] text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Add VAT (+20%)
              </button>
              <button
                type="button"
                onClick={() => setMode("remove")}
                className={`py-2 text-xs font-bold rounded-lg transition-all ${
                  mode === "remove"
                    ? "bg-[#00368C] text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Remove VAT (Gross)
              </button>
            </div>
          </div>

          {/* 2. Amount Input */}
          <div>
            <label htmlFor="vat-amount-input" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              {mode === "add" ? "Net Amount (Excl. VAT)" : "Gross Amount (Incl. VAT)"}
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 font-bold text-sm">
                £
              </span>
              <input
                id="vat-amount-input"
                type="number"
                min="0"
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="1000.00"
                className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-slate-300 text-base font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00368C]"
              />
            </div>
          </div>

          {/* 3. VAT Rate Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              UK VAT Rate
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "20% Std", val: 20 },
                { label: "5% Red", val: 5 },
                { label: "0% Zero", val: 0 },
              ].map((r) => (
                <button
                  key={r.val}
                  type="button"
                  onClick={() => setRate(r.val)}
                  className={`py-2.5 px-2 text-xs font-bold rounded-xl border transition-all ${
                    rate === r.val
                      ? "border-[#00368C] bg-blue-50 text-[#00368C] shadow-sm ring-1 ring-[#00368C]"
                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Calculation Result Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          
          {/* Net Amount Card */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-semibold text-slate-500 block mb-1">
              Net Amount (Excl. VAT)
            </span>
            <div className="text-2xl font-extrabold text-slate-900">
              {formatCurrency(net)}
            </div>
            <span className="text-[11px] text-slate-500 mt-1 block">
              Base taxable value
            </span>
          </div>

          {/* VAT Amount Card */}
          <div className="p-5 rounded-2xl bg-blue-50/80 border border-blue-200">
            <span className="text-xs font-semibold text-[#00368C] block mb-1">
              VAT Rate ({rate}%)
            </span>
            <div className="text-2xl font-extrabold text-[#00368C]">
              {formatCurrency(vat)}
            </div>
            <span className="text-[11px] text-blue-800 mt-1 block">
              HMRC tax element
            </span>
          </div>

          {/* Gross Total Card */}
          <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200">
            <span className="text-xs font-semibold text-emerald-800 block mb-1">
              Gross Total (Incl. VAT)
            </span>
            <div className="text-2xl font-extrabold text-emerald-900">
              {formatCurrency(gross)}
            </div>
            <span className="text-[11px] text-emerald-700 mt-1 block">
              Total invoice or customer price
            </span>
          </div>

        </div>

        {/* VAT Compliance Summary & Lead Capture Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-[#002257] text-white flex flex-col items-center text-center space-y-5 overflow-hidden shadow-lg">
          <div className="space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>HMRC Making Tax Digital (MTD) Compliant</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold tracking-tight">
              Approaching the £90,000 UK VAT Threshold?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              We manage VAT registrations, quarterly Making Tax Digital filings and optimal scheme selection (Flat Rate, Cash, or Standard) with fixed monthly pricing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md mx-auto pt-1">
            <Link
              href="/contact"
              className="w-full sm:w-1/2 py-3 px-4 rounded-xl bg-white text-slate-900 font-bold text-xs hover:bg-slate-100 transition-all text-center flex items-center justify-center gap-2 shadow"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-1/2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all text-center flex items-center justify-center gap-2 shadow"
            >
              <MessageCircle className="w-4 h-4 shrink-0 fill-current" />
              <span>WhatsApp an Accountant</span>
            </a>
          </div>
        </div>

        {/* Quick UK VAT Rules Guide */}
        <div className="pt-4 border-t border-slate-200">
          <h4 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-[#00368C]" />
            <span>Essential UK VAT Rules (2026/27)</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">£90,000 Registration Threshold</span>
              <p>Registration is mandatory if your taxable turnover exceeds £90,000 over any 12-month rolling period or is expected to exceed it in the next 30 days.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Standard Rate (20%)</span>
              <p>Applies to most standard goods and commercial services sold by UK VAT-registered businesses.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">Reduced (5%) &amp; Zero (0%)</span>
              <p>5% applies to home energy and mobility aids; 0% applies to basic food, books, children’s clothing and public transport.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
