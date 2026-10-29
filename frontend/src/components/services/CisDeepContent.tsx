import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteData";
import { 
  HardHat, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Scale, 
  Clock, 
  ShieldAlert, 
  Building2, 
  FileCheck, 
  Check, 
  Percent, 
  HelpCircle,
  ArrowRight
} from "lucide-react";

export default function CisDeepContent() {
  return (
    <div className="space-y-12 mt-8 text-slate-800">
      
      {/* 1. What is the Construction Industry Scheme (CIS)? */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <HardHat className="w-6 h-6 text-[#00368C]" />
          <h2 className="text-2xl font-bold text-slate-900">
            The Complete Guide to the Construction Industry Scheme (CIS)
          </h2>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          The Construction Industry Scheme (CIS) is an HMRC tax deduction framework designed to prevent tax evasion in the construction sector. 
          Under CIS, contractors must deduct tax at source from payments made to subcontractors and remit those funds directly to HMRC on a strict monthly schedule.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm space-y-2">
            <span className="text-xs font-mono font-bold text-[#00368C] uppercase tracking-wider">
              Contractor Duties
            </span>
            <h4 className="font-bold text-slate-900 text-sm">Contractor Responsibilities</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              You must register as a CIS contractor before paying any subcontractor. 
              You are legally required to verify subcontractors with HMRC, deduct the correct tax percentage, issue monthly deduction statements and file the CIS300 return by the 19th of each month.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm space-y-2">
            <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider">
              Subcontractor Rights
            </span>
            <h4 className="font-bold text-slate-900 text-sm">Subcontractor Rules</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Registering for CIS reduces your tax deduction from 30% down to 20% (or 0% under Gross Payment Status). 
              The tax deducted from your invoices counts as an advance payment towards your company’s Corporation Tax/PAYE or your personal tax bill.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm space-y-2">
            <span className="text-xs font-mono font-bold text-purple-800 uppercase tracking-wider">
              "Deemed Contractors"
            </span>
            <h4 className="font-bold text-slate-900 text-sm">Commercial Property Rule</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Businesses outside mainstream construction (e.g., retailers, property developers, housing associations) that spend more than <strong>£3 million on construction operations</strong> across any rolling 12-month period are legally classified as "Deemed Contractors" and must operate CIS.
            </p>
          </div>
        </div>
      </div>

      {/* 2. HMRC Verification & Deduction Rates */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Percent className="w-6 h-6 text-[#00368C]" />
          <h2 className="text-2xl font-bold text-slate-900">
            HMRC CIS Deduction Rates: 0%, 20% and 30% Explained
          </h2>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          Before paying any subcontractor for construction work, you must verify their tax status with HMRC. 
          HMRC instructs you which rate to apply to the <strong>labour element</strong> of their invoice:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
            <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 uppercase font-mono text-[11px]">
              <tr>
                <th className="py-3 px-4">Deduction Rate</th>
                <th className="py-3 px-4">Subcontractor Category</th>
                <th className="py-3 px-4">Eligibility Requirements</th>
                <th className="py-3 px-4">Financial Impact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800">
              <tr className="hover:bg-slate-50 bg-emerald-50/30">
                <td className="py-3 px-4 font-extrabold text-emerald-800">0% (Gross Payment)</td>
                <td className="py-3 px-4 font-semibold text-slate-900">Gross Payment Status</td>
                <td className="py-3 px-4 text-slate-600">
                  Passes HMRC turnover test (£30k per director or £100k+ total), flawless tax compliance history, active UK bank account.
                </td>
                <td className="py-3 px-4 font-medium text-emerald-900">
                  Paid 100% gross. Huge cash flow advantage; company pays its own tax at year-end.
                </td>
              </tr>
              <tr className="hover:bg-slate-50 bg-blue-50/30">
                <td className="py-3 px-4 font-extrabold text-[#00368C]">20% (Standard Rate)</td>
                <td className="py-3 px-4 font-semibold text-slate-900">Registered Subcontractor</td>
                <td className="py-3 px-4 text-slate-600">
                  Subcontractor is registered for CIS with HMRC and has supplied a valid Unique Taxpayer Reference (UTR) and National Insurance number or CRN.
                </td>
                <td className="py-3 px-4 font-medium text-slate-900">
                  20% deducted from labour and paid directly to HMRC on their behalf.
                </td>
              </tr>
              <tr className="hover:bg-slate-50 bg-red-50/30">
                <td className="py-3 px-4 font-extrabold text-red-700">30% (Higher Rate)</td>
                <td className="py-3 px-4 font-semibold text-slate-900">Unregistered or Unverified</td>
                <td className="py-3 px-4 text-slate-600">
                  Worker has not registered for CIS or HMRC cannot verify their tax identity details upon contractor verification.
                </td>
                <td className="py-3 px-4 font-medium text-red-900">
                  Severe 30% tax bite. Subcontractors lose almost a third of invoice cash immediately.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-slate-100 border-l-4 border-[#00368C] text-xs text-slate-700 leading-relaxed mt-2">
          <strong>The Materials Exemption Rule:</strong> CIS deductions are legally applied <em>only to the labour cost</em> of the invoice. 
          The cost of materials genuinely purchased and paid for by the subcontractor (including plant hire, consumable fuel and pre-fabricated components) must be deducted <em>before</em> calculating the 20% or 30% deduction. 
          Misapplying CIS to materials is one of the most common contractor mistakes.
        </div>
      </div>

      {/* 3. Strict HMRC Late CIS Filing Penalties Matrix */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-6 h-6 text-red-600" />
          <h2 className="text-2xl font-bold text-slate-900">
            HMRC CIS Late Filing Penalties Schedule
          </h2>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          The monthly CIS300 return must reach HMRC by the <strong>19th of every month</strong>. 
          Unlike Corporation Tax, CIS penalties are automatic, instantaneous and cumulative:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl border border-red-200 bg-red-50/60 space-y-2">
            <span className="text-[11px] font-mono font-bold text-red-700 uppercase">1 Day Late (20th)</span>
            <div className="text-2xl font-extrabold text-red-900">£100 Fine</div>
            <p className="text-xs text-slate-700 leading-relaxed">
              Instant automatic £100 penalty issued even if you made zero subcontractor payments and filed a nil return one day late.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-red-300 bg-red-50/80 space-y-2">
            <span className="text-[11px] font-mono font-bold text-red-700 uppercase">2 Months Overdue</span>
            <div className="text-2xl font-extrabold text-red-900">£200 Fine</div>
            <p className="text-xs text-slate-700 leading-relaxed">
              A second penalty of £200 is applied if the return remains outstanding 2 months after the original due date.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-red-400 bg-red-100/70 space-y-2">
            <span className="text-[11px] font-mono font-bold text-red-800 uppercase">6 Months Overdue</span>
            <div className="text-2xl font-extrabold text-red-950">£300 or 5%</div>
            <p className="text-xs text-slate-700 leading-relaxed">
              An additional £300 or 5% of the total CIS deductions on the return (whichever amount is greater).
            </p>
          </div>

          <div className="p-5 rounded-xl border border-red-500 bg-red-200/80 space-y-2">
            <span className="text-[11px] font-mono font-bold text-red-900 uppercase">12 Months Overdue</span>
            <div className="text-2xl font-extrabold text-red-950">Up to 100%</div>
            <p className="text-xs text-slate-700 leading-relaxed">
              A further £300 or up to 100% of the total CIS deduction if HMRC determines information was withheld deliberately.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span><strong>Nil Return Protection:</strong> Even when you have not hired any subcontractors in a specific tax month, you must notify HMRC or submit a "Nil Return". Actvise Accountancy automatically handles your monthly nil returns to prevent rogue £100 fines.</span>
        </div>
      </div>

      {/* 4. Reclaiming CIS Deductions & PAYE Offsets */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <FileCheck className="w-6 h-6 text-[#00368C]" />
          <h2 className="text-2xl font-bold text-slate-900">
            How Limited Companies Reclaim CIS Suffered from HMRC
          </h2>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          If your limited company operates as a subcontractor, 20% of your gross turnover is frequently withheld by principal contractors. 
          You do not have to wait until the end of the year to utilize this money:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border border-blue-200 bg-blue-50/50 space-y-3">
            <h4 className="font-bold text-[#00368C] text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Monthly PAYE & National Insurance Offset</span>
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              We declare the CIS deductions suffered by your company on your monthly <strong>Employer Payment Summary (EPS)</strong>. 
              HMRC immediately offsets these deductions against your company’s PAYE, employee National Insurance, employer NI and student loan deductions. 
              Instead of paying cash to HMRC for payroll, your CIS credits cover the bill!
            </p>
          </div>

          <div className="p-5 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-3">
            <h4 className="font-bold text-emerald-900 text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Tax Year-End HMRC Cash Repayment</span>
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              If your company suffered more CIS tax than its total annual PAYE liabilities, the excess credit can be offset against Corporation Tax or paid directly back to your business bank account as a <strong>cash refund</strong>. 
              We compile your payment certificates, reconcile the EPS records and liaise directly with HMRC’s specialist contractor repayment unit in Newcastle to expedite your payment.
            </p>
          </div>
        </div>
      </div>

      {/* 5. Domestic Reverse Charge VAT in Construction */}
      <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4">
        <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-wider font-bold">
          <Scale className="w-4 h-4" />
          <span>VAT Construction Reverse Charge</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold">
          The VAT Domestic Reverse Charge (DRC) for Construction
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
          Since March 2021, VAT-registered subcontractors supplying services under CIS to VAT-registered contractors must <strong>not</strong> charge output VAT to their client. 
          Instead, the contractor self-accounts for the VAT under the Domestic Reverse Charge. 
          Charging VAT on reverse-charge invoices results in customer disputes and rejected VAT returns. 
          Actvise Accountancy ensures all your construction invoices carry the mandatory statutory legal wording and proper software tax codes.
        </p>
      </div>

    </div>
  );
}
