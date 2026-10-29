import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteData";
import { 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Sparkles, 
  TrendingUp, 
  Layers, 
  FileText, 
  Clock, 
  Building2, 
  Check, 
  ShieldCheck, 
  Smartphone, 
  Receipt, 
  ArrowRight 
} from "lucide-react";

export default function BookkeepingDeepContent() {
  return (
    <div className="space-y-12 mt-8 text-slate-800">
      
      {/* 1. DIY Bookkeeping vs Certified Practice Comparison */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-[#00368C]" />
          <h2 className="text-2xl font-bold text-slate-900">
            Why DIY Bookkeeping Costs More Than a Professional Practice
          </h2>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          Many UK business owners spend late Sunday evenings wrestling with spreadsheets and receipts, believing it saves money. 
          In reality, un-reconciled bank feeds, miscategorized VAT and unclaimed tax reliefs frequently cost businesses far more than professional monthly bookkeeping fees.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-5 rounded-xl border border-red-200 bg-red-50/50 space-y-3">
            <h3 className="text-base font-bold text-red-950 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <span>The Hidden Costs of DIY Bookkeeping</span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <span className="font-mono font-bold text-red-600">•</span>
                <span><strong>Lost Hours:</strong> 8 to 15 hours every month lost on manual data entry instead of winning clients and growing revenue.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono font-bold text-red-600">•</span>
                <span><strong>Missed Legitimate Expenses:</strong> Lost receipts and unrecorded mileage mean thousands in missed Corporation Tax or Income Tax write-offs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono font-bold text-red-600">•</span>
                <span><strong>Year-End Accounting Clean-up Bills:</strong> Accountants charge heavy hourly rescue fees to untangle messy, unbalanced year-end ledgers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono font-bold text-red-600">•</span>
                <span><strong>HMRC Compliance Risk:</strong> Duplicate transactions or incorrect VAT rate tagging trigger HMRC compliance enquiries and penalty interest.</span>
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-3">
            <h3 className="text-base font-bold text-emerald-950 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>The Actvise Advantage</span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <span className="font-mono font-bold text-emerald-600">•</span>
                <span><strong>Pristine Numbers Every Month:</strong> Continuous weekly bank reconciliations ensure you always know your true cash position and profit margin.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono font-bold text-emerald-600">•</span>
                <span><strong>Maximum Tax Shield:</strong> Every deductible supplier invoice, mobile bill and business expense is captured and legally optimized.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono font-bold text-emerald-600">•</span>
                <span><strong>Fast Year-End Accounts:</strong> Because your general ledger is audited and reconciled every month, your statutory accounts are completed in days, not months.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono font-bold text-emerald-600">•</span>
                <span><strong>Clear Fixed Monthly Fee:</strong> From £120/month with zero unexpected surprise charges.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 2. Cloud Software Setup & Modern Workflows */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Smartphone className="w-6 h-6 text-[#00368C]" />
          <h2 className="text-2xl font-bold text-slate-900">
            Cloud Accounting Ecosystem: Xero, QuickBooks & Dext
          </h2>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          We operate as certified cloud bookkeeping specialists. Whether you are starting fresh or migrating away from manual paper ledgers, we integrate best-in-class software configured precisely for your industry:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-[#00368C] font-bold text-sm">
              Xero
            </div>
            <h4 className="font-bold text-slate-900 text-sm">Xero Cloud Practice</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Automated UK bank feeds, intuitive dashboard, customized quotes and professional PDF invoices with instant "Pay Now" Stripe or GoCardless buttons.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold text-sm">
              QB
            </div>
            <h4 className="font-bold text-slate-900 text-sm">QuickBooks Online</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Advanced inventory management, automated mileage tracking via mobile GPS, project profitability reports and seamless payroll integration.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-800 font-bold text-sm">
              Dext
            </div>
            <h4 className="font-bold text-slate-900 text-sm">Paperless Receipt Capture</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Snap photos of paper receipts on your phone. OCR technology automatically extracts supplier name, date, amount and VAT straight into the software.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Master Allowable vs Disallowable Business Expense Checklist */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Receipt className="w-6 h-6 text-[#00368C]" />
          <h2 className="text-2xl font-bold text-slate-900">
            HMRC Allowable vs Disallowable Business Expenses Checklist
          </h2>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          The golden HMRC rule for business expenses is that costs must be incurred <strong>"wholly and exclusively"</strong> for the purposes of the trade. Here is our practical reference guide:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Allowable */}
          <div className="p-5 rounded-xl border border-emerald-200 bg-white shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Allowable (Tax-Deductible Business Costs)</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Approved Business Mileage:</strong> 45p per mile for the first 10,000 miles (25p thereafter) using personal car for business trips.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Phone & Broadband:</strong> Apportioned business use of mobile phone and home internet contracts.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Protective Clothing & Uniform:</strong> Branded company uniform, steel toe-cap boots, hi-vis jackets and PPE.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Training & Continuing Education:</strong> Courses and seminars that update or maintain existing skills required for your current trade.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Home Office Allowance:</strong> HMRC flat-rate simplified working-from-home allowance or apportioned household bills for dedicated office space.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Professional Subscriptions:</strong> Professional indemnity insurance, trade body memberships (e.g., ACCA, FSB, Gas Safe).</span>
              </li>
            </ul>
          </div>

          {/* Disallowable */}
          <div className="p-5 rounded-xl border border-red-200 bg-white shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-red-700 font-bold text-sm">
              <XCircle className="w-5 h-5 text-red-600" />
              <span>Disallowable (Not Tax-Deductible)</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span><strong>Client Entertainment & Gifts:</strong> Taking clients out for lunch, drinks, golf days, or corporate hospitality is strictly non-deductible for tax.</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span><strong>Everyday Civilian Clothing:</strong> Business suits, everyday shoes, or smart casual wear that could be worn outside work.</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span><strong>Commuting to Permanent Workplace:</strong> Traveling from home to your regular office or primary depot is deemed personal travel.</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span><strong>Fines & Penalties:</strong> Parking tickets, speeding tickets, or late filing penalties imposed by HMRC or local councils.</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span><strong>New Trade Qualifications:</strong> Training courses to enter a completely new trade or industry rather than maintaining existing commercial competence.</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span><strong>Personal Drawings or Dividends:</strong> Withdrawing funds for director personal use is equity distribution, not an operating business expense.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 4. The Monthly Actvise Bookkeeping Cycle */}
      <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Clock className="w-5 h-5 text-[#00368C]" />
          <span>Our Structured Monthly Bookkeeping Cycle</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Here is exactly how our accounting team manages your records month after month so you never have to think about bookkeeping again:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
            <span className="text-[11px] font-mono font-bold text-[#00368C] uppercase">Week 1</span>
            <h5 className="text-xs font-bold text-slate-900">Receipt Capture</h5>
            <p className="text-[11px] text-slate-600 leading-normal">
              Syncing incoming supplier bills, Dext receipt uploads and reconciling electronic invoices.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
            <span className="text-[11px] font-mono font-bold text-[#00368C] uppercase">Week 2</span>
            <h5 className="text-xs font-bold text-slate-900">Bank Reconciliations</h5>
            <p className="text-[11px] text-slate-600 leading-normal">
              Reconciling every business debit card, PayPal, Stripe and high street bank transaction line-by-line.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
            <span className="text-[11px] font-mono font-bold text-[#00368C] uppercase">Week 3</span>
            <h5 className="text-xs font-bold text-slate-900">Debtor & Creditor Review</h5>
            <p className="text-[11px] text-slate-600 leading-normal">
              Highlighting overdue customer invoices for collection and ensuring valid supplier credit notes are accounted for.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
            <span className="text-[11px] font-mono font-bold text-[#00368C] uppercase">Week 4</span>
            <h5 className="text-xs font-bold text-slate-900">Flash P&L & Balance Sheet</h5>
            <p className="text-[11px] text-slate-600 leading-normal">
              Issuing a clear month-end profit report and balanced ledger ready for quarterly VAT or statutory year-end accounts.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
