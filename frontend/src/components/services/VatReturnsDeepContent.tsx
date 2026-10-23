import React from "react";
import Link from "next/link";
import VatCalculator from "@/components/VatCalculator";
import { siteConfig } from "@/data/siteData";
import { 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  ShieldAlert, 
  Layers, 
  FileText, 
  Clock, 
  Scale, 
  HelpCircle,
  ArrowRight,
  TrendingUp,
  Percent,
  Check,
  Building2,
  Info,
  Sparkles
} from "lucide-react";

export default function VatReturnsDeepContent() {
  return (
    <div className="space-y-12 mt-8 text-slate-800">
      
      {/* 1. Interactive Tool Spotlight */}
      <div className="bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div className="mb-4">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00368C] bg-blue-100/70 px-3 py-1 rounded-full">
            Interactive Financial Tool
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
            Calculate Your VAT Liability Instantly
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Use our built-in HMRC 2026/27 VAT calculator to check net amounts, input VAT, or gross pricing before filing.
          </p>
        </div>
        <VatCalculator />
      </div>

      {/* 2. UK VAT Thresholds & Mandatory Rules */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Scale className="w-6 h-6 text-[#00368C]" />
          <h2 className="text-2xl font-bold text-slate-900">
            UK VAT Registration Thresholds & Statutory Rules (2026/27)
          </h2>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          Value Added Tax (VAT) is a business tax collected on behalf of HM Revenue & Customs (HMRC). 
          Understanding exactly when you are legally obliged to register is critical to avoiding heavy retrospective tax assessments and failure-to-notify fines.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-5 rounded-xl border border-blue-200 bg-blue-50/60 space-y-2">
            <span className="text-xs font-mono font-bold text-[#00368C] uppercase tracking-wider">
              Compulsory Threshold
            </span>
            <div className="text-3xl font-extrabold text-[#00368C]">
              £90,000
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              If your cumulative UK taxable turnover exceeds <strong>£90,000</strong> in any <strong>rolling 12-month period</strong> (not your company accounting year), you must notify HMRC within 30 days.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-amber-200 bg-amber-50/60 space-y-2">
            <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-wider">
              30-Day Forward Look
            </span>
            <div className="text-3xl font-extrabold text-amber-800">
              Future £90k
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              If you realize at any time that your taxable turnover in the <strong>next 30 consecutive days alone</strong> will surpass £90,000, you must register immediately from the date you realized.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-emerald-200 bg-emerald-50/60 space-y-2">
            <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider">
              Deregistration Limit
            </span>
            <div className="text-3xl font-extrabold text-emerald-800">
              £88,000
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              If your expected future taxable turnover falls below <strong>£88,000</strong> over the coming 12 months, you can apply to HMRC to deregister and remove the administrative burden.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-100 border-l-4 border-[#00368C] text-xs text-slate-700 leading-relaxed mt-3">
          <strong>Voluntary VAT Registration Advantage:</strong> You do not have to wait until reaching £90,000. 
          If your clients are predominantly VAT-registered companies or if you invest heavily in capital tools and stock upfront, registering voluntarily allows you to reclaim 20% on all allowable business purchases, improving early cash reserves.
        </div>
      </div>

      {/* 3. HMRC VAT Schemes Comparison Table */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Layers className="w-6 h-6 text-[#00368C]" />
          <h2 className="text-2xl font-bold text-slate-900">
            HMRC VAT Schemes Compared: Choosing the Best Fit
          </h2>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          Operating under the incorrect VAT scheme can tie up thousands of pounds in working capital. At Prestige Accountancy, we review your billing cycle and customer profiles to select the most financially advantageous method:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
            <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 uppercase font-mono text-[11px]">
              <tr>
                <th className="py-3 px-4">Scheme</th>
                <th className="py-3 px-4">Eligibility Limit</th>
                <th className="py-3 px-4">Key Advantage</th>
                <th className="py-3 px-4">Best Suited For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-bold text-slate-900">Standard Accounting</td>
                <td className="py-3 px-4">No turnover limit</td>
                <td className="py-3 px-4">Reclaim VAT on purchase invoices immediately, even before paying suppliers.</td>
                <td className="py-3 px-4">Retailers, cash-paid traders, or firms with prompt payment terms.</td>
              </tr>
              <tr className="hover:bg-slate-50 bg-blue-50/30">
                <td className="py-3 px-4 font-bold text-[#00368C]">Cash Accounting Scheme</td>
                <td className="py-3 px-4">Turnover up to £1.35m</td>
                <td className="py-3 px-4 font-medium text-emerald-900">
                  You only pay VAT when customers pay you. Automatic bad debt relief if invoices remain unpaid.
                </td>
                <td className="py-3 px-4 font-medium text-slate-900">
                  B2B consultants, contractors and agencies with 30 to 60-day credit terms.
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-bold text-slate-900">Flat Rate Scheme (FRS)</td>
                <td className="py-3 px-4">Turnover up to £150k</td>
                <td className="py-3 px-4">Pay HMRC a fixed % of gross revenue. Simplified bookkeeping without tracking every input penny.</td>
                <td className="py-3 px-4">Low-overhead service businesses (subject to the 16.5% limited cost trader rule).</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-bold text-slate-900">Annual Accounting Scheme</td>
                <td className="py-3 px-4">Turnover up to £1.35m</td>
                <td className="py-3 px-4">Submit only 1 comprehensive VAT return per year with interim monthly/quarterly direct debit payments.</td>
                <td className="py-3 px-4">Established businesses seeking predictable cash outflows and reduced filing overhead.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. HMRC Penalty Points & Surcharge Schedule */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-6 h-6 text-red-600" />
          <h2 className="text-2xl font-bold text-slate-900">
            HMRC VAT Penalty Points & Late Payment Surcharges
          </h2>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          HMRC operates a strict <strong>points-based penalty regime</strong> for late VAT submissions alongside financial percentage charges for late payments. Missing statutory deadlines escalates quickly:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border border-red-200 bg-red-50/50 space-y-3">
            <h3 className="text-base font-bold text-red-950 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <span>Submission Penalty Points System</span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <span className="font-mono font-bold text-red-600">•</span>
                <span>You receive <strong>1 penalty point</strong> for every VAT return submitted after the statutory due date.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono font-bold text-red-600">•</span>
                <span>For quarterly filers, reaching <strong>4 penalty points</strong> triggers an automatic <strong>£200 fine</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono font-bold text-red-600">•</span>
                <span>Every subsequent late return while at 4 points incurs an additional <strong>£200 fine</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono font-bold text-red-600">•</span>
                <span>Points only expire after 12 consecutive months of 100% on-time submissions and all outstanding returns being filed.</span>
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-xl border border-amber-200 bg-amber-50/50 space-y-3">
            <h3 className="text-base font-bold text-amber-950 flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>Late Payment Penalties & Interest</span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <span className="font-mono font-bold text-amber-600">•</span>
                <span><strong>Days 1 to 15 overdue:</strong> 0% penalty if payment or Time-to-Pay arrangement is agreed.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono font-bold text-amber-600">•</span>
                <span><strong>Days 16 to 30 overdue:</strong> 2% penalty calculated on the tax balance outstanding at day 15.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono font-bold text-amber-600">•</span>
                <span><strong>Day 31+ overdue:</strong> Additional 2% penalty (total 4%) plus daily annualized penalty rate of 4% until settled.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono font-bold text-amber-600">•</span>
                <span><strong>HMRC Late Payment Interest:</strong> Charged from day 1 at Bank of England base rate + 2.5%.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span><strong>The Prestige Guarantee:</strong> When you provide your records on time, our accountants guarantee your quarterly VAT is finalized, cross-checked and submitted electronically days before the deadline, eliminating penalty risks entirely.</span>
        </div>
      </div>

      {/* 5. Allowable vs Disallowable Input VAT Checklist */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <FileText className="w-6 h-6 text-[#00368C]" />
          <h2 className="text-2xl font-bold text-slate-900">
            Input VAT Recovery: Allowable vs Disallowable Expenses
          </h2>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          HMRC routinely inspects VAT refund claims. Claiming VAT on non-qualifying purchases triggers audits and tax repayment assessments. Here is our certified accounting checklist:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Allowable */}
          <div className="p-5 rounded-xl border border-emerald-200 bg-white shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Allowable Input VAT (100% Reclaimable)</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Commercial Vehicles & Vans:</strong> 100% VAT reclaimable on vans, lorries and commercial pickups used for business.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Machinery, Tools & Stock:</strong> Materials, raw stock and trade equipment bought exclusively for resale or operations.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Professional Fees:</strong> Accountancy, legal fees, website development, marketing and business insurance subscriptions.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Business Travel Accommodation:</strong> Hotels and subsistence for employees traveling on legitimate business duties.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Pre-Registration Expenses:</strong> Goods purchased up to 4 years prior (still in use) and services up to 6 months prior to registration date.</span>
              </li>
            </ul>
          </div>

          {/* Disallowable */}
          <div className="p-5 rounded-xl border border-red-200 bg-white shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-red-700 font-bold text-sm">
              <XCircle className="w-5 h-5 text-red-600" />
              <span>Disallowable Input VAT (Zero Reclaim)</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span><strong>Client Hospitality & Entertainment:</strong> Taking corporate clients or prospective leads out to dinners, drinks, or sporting events.</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span><strong>Passenger Cars:</strong> Purchase VAT is completely blocked unless the car is 100% exclusive business use with zero personal availability (e.g., taxi or driving school).</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span><strong>Personal & Non-Business Goods:</strong> Any expense with dual personal use (e.g., home groceries, non-business phone contracts).</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span><strong>Purchases from Non-VAT Suppliers:</strong> Subcontractors or small suppliers not registered for VAT cannot charge VAT; reclaiming it is unlawful.</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span><strong>Exempt Supplies & Zero-Rated Items:</strong> Books, public transport tickets and zero-rated financial transactions contain no VAT to reclaim.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 6. Making Tax Digital (MTD) Cloud Integration */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-[#002257] text-white space-y-4">
        <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-wider font-bold">
          <Sparkles className="w-4 h-4" />
          <span>Making Tax Digital (MTD) Certified</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold">
          100% Digital Links Compliance for Xero, QuickBooks & FreeAgent
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
          HMRC’s Making Tax Digital regulations strictly prohibit manual copy-pasting between spreadsheets and tax portals. 
          Under MTD rules, every transaction must preserve a complete <strong>digital audit trail</strong> from the primary source receipt through to the final API submission. 
          Prestige Accountancy manages direct API connections to HMRC, maintaining complete legal compliance without software confusion.
        </p>
        <div className="pt-2 flex flex-wrap gap-4">
          <div className="px-3.5 py-2 rounded-lg bg-white/10 border border-white/10 text-xs font-semibold">
            ✓ Xero Silver Partner Certified
          </div>
          <div className="px-3.5 py-2 rounded-lg bg-white/10 border border-white/10 text-xs font-semibold">
            ✓ QuickBooks Online ProAdvisor
          </div>
          <div className="px-3.5 py-2 rounded-lg bg-white/10 border border-white/10 text-xs font-semibold">
            ✓ Direct HMRC Gateway Bridging
          </div>
        </div>
      </div>

    </div>
  );
}
