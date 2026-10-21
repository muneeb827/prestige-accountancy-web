"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteData";
import { 
  CheckSquare, 
  Square, 
  Calendar, 
  Clock, 
  AlertTriangle, 
  Printer, 
  Download, 
  CheckCircle2, 
  Building2, 
  ArrowRight,
  ShieldAlert,
  Phone
} from "lucide-react";

interface ComplianceItem {
  id: string;
  category: "ltd" | "vat" | "cis" | "payroll" | "charity";
  title: string;
  authority: "Companies House" | "HMRC" | "The Pensions Regulator" | "Charity Commission";
  deadlineRule: string;
  penaltySummary: string;
  actionRequired: string;
}

const masterItems: ComplianceItem[] = [
  {
    id: "ltd-accounts",
    category: "ltd",
    title: "Statutory Annual Accounts Submission",
    authority: "Companies House",
    deadlineRule: "Exactly 9 months after your financial year-end date (Accounting Reference Date).",
    penaltySummary: "Automatic late filing penalties starting at £150 up to £1,500 (doubled if late 2 years in a row).",
    actionRequired: "Finalise general ledger, review balance sheet, and approve director sign-off before electronic filing."
  },
  {
    id: "ltd-tax-payment",
    category: "ltd",
    title: "Corporation Tax Payment Due",
    authority: "HMRC",
    deadlineRule: "9 months and 1 day after your accounting period ends.",
    penaltySummary: "HMRC late payment interest charged daily at Bank of England base rate + 2.5%.",
    actionRequired: "Pay electronic balance to HMRC Accounts Office quoting your 17-digit CT reference."
  },
  {
    id: "ltd-ct600",
    category: "ltd",
    title: "Corporation Tax Return (Form CT600)",
    authority: "HMRC",
    deadlineRule: "12 months after the end of your company accounting period.",
    penaltySummary: "£100 instant penalty, increasing to £200 at 3 months, plus 10% tax surcharge at 6 months.",
    actionRequired: "Submit tagged iXBRL computations and detailed profit & loss schedules to HMRC."
  },
  {
    id: "ltd-cs01",
    category: "ltd",
    title: "Annual Confirmation Statement (CS01)",
    authority: "Companies House",
    deadlineRule: "Within 14 days of your annual review confirmation date.",
    penaltySummary: "Criminal offence; failure to file can lead to compulsory company strike-off.",
    actionRequired: "Verify directors, registered office address, PSC register, and share capital register."
  },
  {
    id: "vat-quarterly",
    category: "vat",
    title: "Making Tax Digital (MTD) VAT Return & Payment",
    authority: "HMRC",
    deadlineRule: "1 calendar month and 7 days after the end of your quarterly VAT period.",
    penaltySummary: "1 penalty point per late return (4 points = £200 fine) + 2% to 4% late payment penalties.",
    actionRequired: "Reconcile input/output VAT via digital links in Xero/QuickBooks and submit via MTD API."
  },
  {
    id: "cis-monthly",
    category: "cis",
    title: "Monthly CIS300 Contractor Return",
    authority: "HMRC",
    deadlineRule: "By the 19th of each calendar month following the tax month (covers 6th to 5th).",
    penaltySummary: "Instant £100 penalty for being 1 day late; £200 at 2 months; £300/5% at 6 months.",
    actionRequired: "Verify all subcontractor UTR numbers, issue deduction certificates, and file return."
  },
  {
    id: "payroll-paye",
    category: "payroll",
    title: "Monthly PAYE & National Insurance Remittance",
    authority: "HMRC",
    deadlineRule: "By the 22nd of each month for electronic bank transfers (19th for postal cheque).",
    penaltySummary: "Escalating percentage penalties (1% to 4%) on delayed PAYE deductions.",
    actionRequired: "Submit Full Payment Submission (FPS) on or before payday and pay net payroll taxes."
  },
  {
    id: "pension-tpr",
    category: "payroll",
    title: "Workplace Pension Auto-Enrolment & Contributions",
    authority: "The Pensions Regulator",
    deadlineRule: "Contributions due by the 22nd of the following month (19th for paper). Triennial re-declaration.",
    penaltySummary: "Statutory compliance notices and escalating daily fines of £50 to £2,500/day from TPR.",
    actionRequired: "Assess eligible staff, upload contribution schedules to NEST/People's Pension, and remit funds."
  },
  {
    id: "charity-return",
    category: "charity",
    title: "Charity Annual Return & Independent Examination",
    authority: "Charity Commission",
    deadlineRule: "Within 10 months of charity financial year-end (for gross income > £10,000).",
    penaltySummary: "Charity marked as 'overdue' on public register, risking donor trust and grant eligibility.",
    actionRequired: "Prepare trustees' report, apply charity SORP standards, and complete independent examination."
  }
];

export default function DeadlineChecklistTool() {
  const [selectedCategories, setSelectedCategories] = useState<{ [key: string]: boolean }>({
    ltd: true,
    vat: true,
    cis: false,
    payroll: true,
    charity: false
  });

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev => ({
      ...prev,
      [cat]: !prev[cat]
    }));
  };

  const filteredItems = masterItems.filter(item => selectedCategories[item.category]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
      
      {/* Tool Header */}
      <div className="bg-gradient-to-r from-[#00368C] to-[#0A4BB5] text-white p-6 sm:p-8">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-200 mb-2">
          <Calendar className="w-4 h-4 text-[#2B7EFE]" />
          <span>Interactive Compliance Planner (2026/27)</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold">
          Custom UK Compliance &amp; Statutory Deadlines Generator
        </h3>
        <p className="text-xs sm:text-sm text-blue-100 mt-2 max-w-2xl leading-relaxed">
          Select the operations that apply to your business. Our tool will instantly filter the exact Companies House, HMRC, and Pensions Regulator obligations and penalty traps you must monitor.
        </p>

        {/* Filter Checkboxes */}
        <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
          <button
            type="button"
            onClick={() => toggleCategory("ltd")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${
              selectedCategories.ltd 
                ? "bg-white text-[#00368C] border-white shadow-md" 
                : "bg-white/10 text-white border-white/20 hover:bg-white/20"
            }`}
          >
            {selectedCategories.ltd ? <CheckSquare className="w-4 h-4 text-[#00368C]" /> : <Square className="w-4 h-4" />}
            <span>Limited Company</span>
          </button>

          <button
            type="button"
            onClick={() => toggleCategory("vat")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${
              selectedCategories.vat 
                ? "bg-white text-[#00368C] border-white shadow-md" 
                : "bg-white/10 text-white border-white/20 hover:bg-white/20"
            }`}
          >
            {selectedCategories.vat ? <CheckSquare className="w-4 h-4 text-[#00368C]" /> : <Square className="w-4 h-4" />}
            <span>VAT Registered</span>
          </button>

          <button
            type="button"
            onClick={() => toggleCategory("cis")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${
              selectedCategories.cis 
                ? "bg-white text-[#00368C] border-white shadow-md" 
                : "bg-white/10 text-white border-white/20 hover:bg-white/20"
            }`}
          >
            {selectedCategories.cis ? <CheckSquare className="w-4 h-4 text-[#00368C]" /> : <Square className="w-4 h-4" />}
            <span>CIS Construction</span>
          </button>

          <button
            type="button"
            onClick={() => toggleCategory("payroll")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${
              selectedCategories.payroll 
                ? "bg-white text-[#00368C] border-white shadow-md" 
                : "bg-white/10 text-white border-white/20 hover:bg-white/20"
            }`}
          >
            {selectedCategories.payroll ? <CheckSquare className="w-4 h-4 text-[#00368C]" /> : <Square className="w-4 h-4" />}
            <span>Employers / Payroll</span>
          </button>

          <button
            type="button"
            onClick={() => toggleCategory("charity")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${
              selectedCategories.charity 
                ? "bg-white text-[#00368C] border-white shadow-md" 
                : "bg-white/10 text-white border-white/20 hover:bg-white/20"
            }`}
          >
            {selectedCategories.charity ? <CheckSquare className="w-4 h-4 text-[#00368C]" /> : <Square className="w-4 h-4" />}
            <span>Registered Charity</span>
          </button>
        </div>
      </div>

      {/* Action Bar */}
      <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="text-xs font-medium text-slate-600">
          Showing <strong className="text-slate-900 font-bold">{filteredItems.length} statutory obligations</strong> based on your selections.
        </div>
        <button
          type="button"
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 text-xs font-semibold shadow-sm transition-all"
        >
          <Printer className="w-3.5 h-3.5 text-slate-600" />
          <span>Print / Save as PDF Checklist</span>
        </button>
      </div>

      {/* Checklist Cards List */}
      <div className="p-6 sm:p-8 space-y-4">
        {filteredItems.length === 0 ? (
          <div className="p-8 text-center text-slate-500 text-sm">
            Please select at least one business category above to generate your customized compliance schedule.
          </div>
        ) : (
          filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-5 sm:p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-[#00368C] transition-all space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#00368C] flex items-center justify-center font-bold text-xs shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#00368C]" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">
                    {item.title}
                  </h4>
                </div>
                <span className="text-[11px] font-mono font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full self-start sm:self-auto">
                  Authority: {item.authority}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1 text-xs">
                <div className="p-3 rounded-lg bg-blue-50/60 border border-blue-100 text-slate-700">
                  <strong className="text-[#00368C] block mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    Statutory Due Date:
                  </strong>
                  <span>{item.deadlineRule}</span>
                </div>

                <div className="p-3 rounded-lg bg-red-50/60 border border-red-100 text-slate-700">
                  <strong className="text-red-700 block mb-1 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    Late Penalty Hazard:
                  </strong>
                  <span>{item.penaltySummary}</span>
                </div>
              </div>

              <div className="text-xs text-slate-600 pt-1">
                <strong>Prestige Action Protocol:</strong> {item.actionRequired}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Tool Footer / CTA Strip */}
      <div className="bg-slate-900 text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-slate-800">
        <div className="space-y-1 text-center md:text-left">
          <h4 className="text-lg font-bold">
            Want 100% Guaranteed On-Time Filing?
          </h4>
          <p className="text-xs text-slate-400 max-w-xl">
            Prestige Accountancy manages statutory compliance schedules for clients nationwide. We guarantee on-time submission when records are received on schedule.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-[#00368C] hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow transition-all flex items-center gap-2"
          >
            <span>Request Compliance Review</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow transition-all"
          >
            WhatsApp Us
          </a>
        </div>
      </div>

    </div>
  );
}
