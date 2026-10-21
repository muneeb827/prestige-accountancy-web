import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteData";
import { 
  Building2, 
  Calendar, 
  Clock, 
  AlertTriangle, 
  ShieldAlert, 
  CheckCircle2, 
  Scale, 
  FileText, 
  ShieldCheck, 
  HelpCircle, 
  ArrowRight,
  TrendingUp,
  Percent,
  Check
} from "lucide-react";

export default function AnnualAccountsDeepContent() {
  return (
    <div className="space-y-12 mt-8 text-slate-800">
      
      {/* 1. The Dual Filing Framework: Companies House vs HMRC */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Building2 className="w-6 h-6 text-[#00368C]" />
          <h2 className="text-2xl font-bold text-slate-900">
            The UK Limited Company Annual Accounts Filing Framework
          </h2>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          Every UK private limited company (Ltd) and limited liability partnership (LLP) registered in England & Wales has a legal obligation under the Companies Act 2006 to prepare and file statutory year-end accounts. 
          Many new company directors are caught out by the fact that there are <strong>two distinct regulatory bodies</strong> with differing deadlines and requirements:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-[#00368C] font-bold text-xs uppercase font-mono">
              CH
            </div>
            <h4 className="font-bold text-slate-900 text-sm">Companies House (Public Register)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Companies House requires statutory financial statements (balance sheet, notes, and director signatures) for the public register. 
              These accounts inform credit agencies, banks, suppliers, and potential clients about your company’s solvency.
            </p>
            <div className="p-3 bg-blue-50/60 rounded-lg text-xs font-semibold text-[#00368C]">
              ⏳ Statutory Deadline: Exactly <strong>9 months</strong> after your Accounting Reference Date (ARD).
            </div>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold text-xs uppercase font-mono">
              HMRC
            </div>
            <h4 className="font-bold text-slate-900 text-sm">HM Revenue & Customs (Corporation Tax)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              HMRC requires full accounts alongside the Corporation Tax Return (Form CT600) and detailed tax computations in electronic iXBRL format to determine your taxable corporate profits.
            </p>
            <div className="p-3 bg-emerald-50/60 rounded-lg text-xs font-semibold text-emerald-900">
              ⚠️ Tax Payment Deadline: <strong>9 months and 1 day</strong> after your accounting period ends!
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-amber-50 border-l-4 border-amber-500 text-xs text-amber-950 leading-relaxed">
          <strong>The "9 Months and 1 Day" Cash Trap:</strong> While the CT600 return filing deadline with HMRC is 12 months after your year-end, 
          the actual <em>payment</em> of Corporation Tax is legally due <strong>9 months and 1 day</strong> after the period closes. 
          If you wait until 12 months to prepare your accounts, HMRC will charge daily late-payment interest on the unpaid tax from month 9.
        </div>
      </div>

      {/* 2. Companies House Late Filing Penalties Schedule */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-6 h-6 text-red-600" />
          <h2 className="text-2xl font-bold text-slate-900">
            Companies House Late Filing Penalties Schedule
          </h2>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          Companies House automatically issues statutory civil penalties the moment accounts cross the 9-month filing window. 
          Appeals are rarely accepted unless extreme, documented medical or natural emergencies occurred:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl border border-red-200 bg-red-50/60 space-y-2">
            <span className="text-[11px] font-mono font-bold text-red-700 uppercase">Up to 1 Month Late</span>
            <div className="text-2xl font-extrabold text-red-900">£150 Fine</div>
            <p className="text-xs text-slate-700 leading-relaxed">
              Issued automatically to private limited companies filing between 1 day and 1 month past the deadline.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-red-300 bg-red-50/80 space-y-2">
            <span className="text-[11px] font-mono font-bold text-red-700 uppercase">1 to 3 Months Late</span>
            <div className="text-2xl font-extrabold text-red-900">£375 Fine</div>
            <p className="text-xs text-slate-700 leading-relaxed">
              Applies if accounts remain unfiled 1 to 3 months past the statutory deadline.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-red-400 bg-red-100/70 space-y-2">
            <span className="text-[11px] font-mono font-bold text-red-800 uppercase">3 to 6 Months Late</span>
            <div className="text-2xl font-extrabold text-red-950">£750 Fine</div>
            <p className="text-xs text-slate-700 leading-relaxed">
              Escalates to £750 and triggers warning letters regarding compulsory company strike-off.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-red-500 bg-red-200/80 space-y-2">
            <span className="text-[11px] font-mono font-bold text-red-900 uppercase">Over 6 Months Late</span>
            <div className="text-2xl font-extrabold text-red-950">£1,500 Fine</div>
            <p className="text-xs text-slate-700 leading-relaxed">
              Maximum penalty of £1,500 plus immediate Gazette notice of compulsory dissolution and asset freezing.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-red-100 border border-red-300 text-xs text-red-950 space-y-1">
          <div className="font-bold flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-red-600" />
            <span>Double Penalty Rule Warning:</span>
          </div>
          <p>
            If your company files its accounts late for <strong>two consecutive financial years</strong>, Companies House legally <strong>doubles</strong> all the penalty amounts above (£300, £750, £1,500, and £3,000). 
            Furthermore, directors who persistently fail to submit accounts face criminal prosecution and disqualification from acting as a company director for up to 15 years.
          </p>
        </div>
      </div>

      {/* 3. Micro-Entity (FRS 105) vs Small Company (FRS 102 1A) */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Scale className="w-6 h-6 text-[#00368C]" />
          <h2 className="text-2xl font-bold text-slate-900">
            Reporting Frameworks: FRS 105 vs FRS 102 Section 1A
          </h2>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          UK corporate law provides streamlined reporting regimes for smaller companies, preventing sensitive commercial profit numbers from being broadcast across public registers:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white">
            <thead className="bg-slate-100 border-b border-slate-200 text-slate-700 uppercase font-mono text-[11px]">
              <tr>
                <th className="py-3 px-4">Standard</th>
                <th className="py-3 px-4">Thresholds (Meet at least 2)</th>
                <th className="py-3 px-4">Public Filing Requirements</th>
                <th className="py-3 px-4">Privacy Benefits</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800">
              <tr className="hover:bg-slate-50 bg-blue-50/20">
                <td className="py-3 px-4 font-bold text-[#00368C]">FRS 105 (Micro-Entity)</td>
                <td className="py-3 px-4 text-slate-600">
                  • Turnover &lt; £632,000<br/>
                  • Balance Sheet &lt; £316,000<br/>
                  • Employees &lt; 10
                </td>
                <td className="py-3 px-4 font-medium text-slate-900">
                  Simplified balance sheet with minimal statutory footnotes.
                </td>
                <td className="py-3 px-4 font-medium text-emerald-900">
                  Maximum privacy. Profit &amp; Loss statement does not have to be filed publicly at Companies House.
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-bold text-slate-900">FRS 102 Section 1A (Small Entity)</td>
                <td className="py-3 px-4 text-slate-600">
                  • Turnover &lt; £10.2 million<br/>
                  • Balance Sheet &lt; £5.1 million<br/>
                  • Employees &lt; 50
                </td>
                <td className="py-3 px-4 font-medium text-slate-900">
                  Full balance sheet with standard explanatory accounting notes and accounting policies.
                </td>
                <td className="py-3 px-4 text-slate-600">
                  Can choose to file "filleted" accounts with Companies House, keeping director remuneration and P&amp;L confidential.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Director's Loan Accounts (DLA) & Section 455 Tax Hazards */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <FileText className="w-6 h-6 text-[#00368C]" />
          <h2 className="text-2xl font-bold text-slate-900">
            Director's Loan Accounts (DLA) & Section 455 Tax Rules
          </h2>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          When a director takes funds out of the business that are not formal salary (PAYE) or declared dividends, the money is classified as an advance through a <strong>Director’s Loan Account</strong>. 
          Allowing a DLA to remain overdrawn carries significant tax consequences:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-5 rounded-xl border border-red-200 bg-red-50/50 space-y-2">
            <span className="text-[11px] font-mono font-bold text-red-700 uppercase">Section 455 Tax</span>
            <div className="text-2xl font-extrabold text-red-900">33.75% Tax</div>
            <p className="text-xs text-slate-700 leading-relaxed">
              If an overdrawn director's loan is not fully repaid within <strong>9 months and 1 day</strong> of the accounting year-end, the company must pay HMRC a 33.75% Corporation Tax penalty charge. 
              (This tax can only be reclaimed from HMRC 9 months after the loan is finally repaid).
            </p>
          </div>

          <div className="p-5 rounded-xl border border-amber-200 bg-amber-50/50 space-y-2">
            <span className="text-[11px] font-mono font-bold text-amber-700 uppercase">Benefit in Kind (BIK)</span>
            <div className="text-2xl font-extrabold text-amber-900">&gt; £10,000 Threshold</div>
            <p className="text-xs text-slate-700 leading-relaxed">
              If the balance of the loan exceeds £10,000 at any point during the tax year without the director paying official commercial interest, HMRC treats the loan as an interest-free benefit in kind, triggering Class 1A employer National Insurance.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-blue-200 bg-blue-50/50 space-y-2">
            <span className="text-[11px] font-mono font-bold text-[#00368C] uppercase">Anti-Avoidance Rule</span>
            <div className="text-2xl font-extrabold text-[#00368C]">30-Day Rule</div>
            <p className="text-xs text-slate-700 leading-relaxed">
              HMRC’s "bed and breakfasting" anti-avoidance legislation prevents directors from repaying an overdrawn loan just before the 9-month deadline and immediately borrowing the funds back within 30 days.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span><strong>Prestige Proactive Review:</strong> Before finalizing your year-end balance sheet, our accountants review all director drawings and formulate a compliant remuneration mix (salary vs dividends vs loan clearance) that eliminates s455 tax exposure legally.</span>
        </div>
      </div>

      {/* 5. Our Comprehensive Year-End Delivery Walkthrough */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-[#002257] text-white space-y-4">
        <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-wider font-bold">
          <ShieldCheck className="w-4 h-4" />
          <span>Guaranteed Compliance</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold">
          Plain-English Director Consultation Before Any Submission
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
          At Prestige Accountancy, you never sign accounts you don’t understand. 
          Once your draft accounts and Corporation Tax calculations are prepared, we conduct a plain-English review meeting to explain your profitability, gross margins, tax liabilities, and upcoming payment dates. 
          Only after your formal approval do we file electronically through our accredited gateway directly with Companies House and HMRC.
        </p>
      </div>

    </div>
  );
}
