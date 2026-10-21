export interface ServiceItem {
  slug: string;
  category: 'accountancy' | 'business-services';
  title: string;
  metaTitle: string;
  metaDescription: string;
  shortDesc: string;
  keywords: string[];
  deliverables: string[];
  benefits: string;
  ctaText: string;
  schemaType: string;
  whoItsFor: string;
  pricingGuidance: string;
  processSteps: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export interface BlogPost {
  slug: string;
  category: 'Tax & Compliance News' | 'Small Business Tips' | 'Charity Sector Updates' | 'Firm News';
  title: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  readingTime: string;
  publishedDate: string;
  content: string[];
  keyTakeaways: string[];
}

export const siteConfig = {
  name: "Prestige Accountancy Services Ltd",
  shortName: "Prestige Accountancy",
  tagline: "Guardians of Your Finances",
  phone: "+44 7949 446368",
  landline: "+44 7949 446368",
  whatsapp: "+447949446368",
  whatsappLink: "https://wa.me/447949446368?text=Hello%20Prestige%20Accountancy%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.",
  email: "info@prestigeaccountancy.com", // Placeholder until client sends official inbox
  address: "9 Blackmoorfoot Road, Crosland Moor, Huddersfield, HD4 5AQ, United Kingdom",
  city: "Huddersfield",
  county: "West Yorkshire",
  postcode: "HD4 5AQ",
  country: "United Kingdom",
  crn: "", // Real Companies House number pending from client
  foundedYear: 2026,
  hours: "Monday - Friday: 9:00 AM - 5:30 PM",
  socials: {
    facebook: "https://facebook.com/prestigeaccountancy",
    instagram: "https://instagram.com/prestigeaccountancy",
    tiktok: "https://tiktok.com/@prestigeaccountancy",
    linkedin: "https://linkedin.com/company/prestige-accountancy-services"
  },
  colors: {
    navy: "#00368C",
    blue: "#2B7EFE",
    black: "#000000",
    white: "#FFFFFF"
  }
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { 
    label: "Services", 
    href: "/services",
    submenu: [
      {
        category: "Accountancy Services",
        items: [
          { label: "Bookkeeping", href: "/services/accountancy/bookkeeping" },
          { label: "Company Annual Accounts", href: "/services/accountancy/annual-accounts" },
          { label: "Management Accounts", href: "/services/accountancy/management-accounts" },
          { label: "VAT Returns & MTD", href: "/services/accountancy/vat-returns-mtd" },
          { label: "CIS Registration", href: "/services/accountancy/cis-registration" },
          { label: "Pension Registration", href: "/services/accountancy/pension-registration" },
          { label: "Charity Accounts", href: "/services/accountancy/charity-accounts" },
          { label: "Charity Registration", href: "/services/accountancy/charity-registration" },
        ]
      },
      {
        category: "Business Services",
        items: [
          { label: "Business Startups", href: "/services/business-services/business-startups" },
          { label: "Company Formations & Structuring", href: "/services/business-services/company-formations" },
          { label: "Mergers, Acquisitions & Demergers", href: "/services/business-services/mergers-acquisitions" },
        ]
      }
    ]
  },
  { label: "Who We Help", href: "/who-we-help" },
  { label: "Insights", href: "/insights" },
  { label: "Resources", href: "/resources" },
  { label: "Contact Us", href: "/contact" }
];

export const servicesData: ServiceItem[] = [
  // Hub 1: Accountancy
  {
    slug: "bookkeeping",
    category: "accountancy",
    title: "Bookkeeping Services",
    metaTitle: "Bookkeeping Services (Xero & QuickBooks) | Prestige Accountancy",
    metaDescription: "Professional ongoing bookkeeping, bank reconciliations and financial reporting in Xero & QuickBooks for UK sole traders, companies and startups.",
    shortDesc: "Ongoing record-keeping, bank reconciliations, and tailored monthly reporting powered by Xero and QuickBooks Online.",
    keywords: ["bookkeeping services", "online bookkeeping", "Xero bookkeeping", "QuickBooks bookkeeping", "Huddersfield bookkeeper"],
    deliverables: [
      "Reconcile bank statements and investigate discrepancies promptly",
      "Accurately record all income, expenses and maintain balanced general ledgers",
      "Fully integrated in cloud software: Xero and QuickBooks Online",
      "Prepare tailored profit & loss, balance sheet and cash-flow reports",
      "Maintain flawless digital records that support quarterly VAT and year-end accounts"
    ],
    benefits: "Less admin stress, zero calculation errors, and crystal clear day-to-day numbers to guide your business choices.",
    ctaText: "Get a Free Bookkeeping Review",
    schemaType: "AccountingService",
    whoItsFor: "UK sole traders, small business owners, partnerships, and limited company directors who want accurate, up-to-date monthly numbers without spending evenings drowning in receipts and bank reconciliations.",
    pricingGuidance: "Transparent fixed-fee agreement from £120/month tailored to your monthly transaction volume and invoice frequency. Zero hidden onboarding charges.",
    processSteps: [
      {
            "step": "01",
            "title": "Cloud Setup & Live Bank Feeds",
            "desc": "Connect your business bank accounts securely into Xero or QuickBooks Online for automated, real-time data flow."
      },
      {
            "step": "02",
            "title": "Monthly Categorisation & Auditing",
            "desc": "Every transaction, invoice, and receipt is matched and verified against HMRC allowable expenditure rules."
      },
      {
            "step": "03",
            "title": "Management Reports & Year-End Ready",
            "desc": "Receive clean monthly profit & loss reports, with a balanced ledger ready for instant VAT and year-end filing."
      }
],
    faqs: [
      {
            "q": "Can you take over our existing Xero or QuickBooks account?",
            "a": "Yes, seamlessly. We transfer advisor access without disrupting your operations or historical ledger entries."
      },
      {
            "q": "How often do you reconcile my business accounts?",
            "a": "We reconcile on a weekly or monthly cycle depending on your transaction volume, ensuring your figures are always real-time."
      },
      {
            "q": "Do you support businesses that still keep paper receipts?",
            "a": "Yes. We help you digitise paperwork easily using mobile receipt-scanning tools integrated straight into your cloud ledger."
      },
      {
            "q": "Will your bookkeeping directly integrate with my year-end statutory filing?",
            "a": "Absolutely. Having clean monthly books makes your annual statutory accounts and VAT returns fast, flawless, and stress-free."
      }
]
  },
  {
    slug: "annual-accounts",
    category: "accountancy",
    title: "Company Annual Accounts & Filing",
    metaTitle: "Company Annual Accounts & Companies House Filing | Prestige Accountancy",
    metaDescription: "Preparation and electronic submission of statutory year-end accounts and balance sheets to Companies House and HMRC with full compliance.",
    shortDesc: "Comprehensive preparation, verification, and timely electronic submission of statutory year-end financial statements.",
    keywords: ["annual accounts", "year-end accounts", "Companies House filing", "statutory accounts", "corporate accounts UK"],
    deliverables: [
      "Full preparation of balance sheet, profit & loss, and cash-flow statements",
      "Assistance with director reports and standard statutory disclosures",
      "Direct electronic submission to Companies House and HMRC",
      "Seamless integration with your Xero, QuickBooks, or custom accounting records",
      "Clear, plain-English walk-through of your financial standing before submission"
    ],
    benefits: "Guaranteed on-time statutory filing, avoidance of penalty charges, and a pristine corporate compliance record.",
    ctaText: "Request Annual Accounts Quote",
    schemaType: "AccountingService",
    whoItsFor: "All UK Limited Companies and LLPs required by law to file annual statutory accounts with Companies House and HMRC Corporation Tax returns.",
    pricingGuidance: "Transparent fixed fee typically between £450 and £950 for micro and small entities, agreed in advance before any work begins.",
    processSteps: [
      {
            "step": "01",
            "title": "Year-End Ledger Audit",
            "desc": "Comprehensive reconciliation of balance sheet accounts, bank statements, asset registers, and director loan accounts."
      },
      {
            "step": "02",
            "title": "Statutory Financial Statements",
            "desc": "Preparation of FRS 102/105 compliant balance sheet, profit and loss statement, and mandatory disclosure notes."
      },
      {
            "step": "03",
            "title": "Director Sign-off & Dual Submission",
            "desc": "A plain-English walk-through with you before direct electronic submission to Companies House and HMRC."
      }
],
    faqs: [
      {
            "q": "What is the deadline for filing limited company annual accounts?",
            "a": "Your statutory accounts must be submitted to Companies House within 9 months of your financial year-end date."
      },
      {
            "q": "What happens if a company submits accounts late to Companies House?",
            "a": "Companies House automatically imposes escalating late penalties starting at £150 up to £1,500. We guarantee timely submission to avoid all penalties."
      },
      {
            "q": "Do you explain the accounts before they are officially submitted?",
            "a": "Yes, always. We provide a plain-English summary walk-through explaining your profit, tax liability, and director dividends before you sign off."
      },
      {
            "q": "What records do you need from me to prepare annual accounts?",
            "a": "Your cloud accounting software access, bank statements for the full financial period, and major asset or loan documents."
      }
]
  },
  {
    slug: "management-accounts",
    category: "accountancy",
    title: "Management Accounts & Reporting",
    metaTitle: "Management Accounts & Financial Reporting | Prestige Accountancy",
    metaDescription: "Periodic financial insights, KPI tracking, cash-flow forecasts and budget variance analysis for business owners, lenders and investors.",
    shortDesc: "Regular monthly or quarterly financial insights, KPI tracking, and forecasting for owners, managers, investors, and lenders.",
    keywords: ["management accounts", "financial reporting", "budgets and forecasts", "KPI reporting", "cash flow analysis"],
    deliverables: [
      "Customized monthly or quarterly performance reports and vital KPIs",
      "Revenue trend analysis, cost anomaly identification, and margin reviews",
      "Forward-looking rolling budgets and dynamic cash-flow forecasts",
      "Working-capital reviews and liquidity monitoring",
      "Investor-ready and bank-ready presentation packs for funding and lending"
    ],
    benefits: "Better decision making, real-time control over spending, and funding-ready financial intelligence.",
    ctaText: "Discuss Your Reporting Needs",
    schemaType: "AccountingService",
    whoItsFor: "Growing businesses, multi-director SMEs, and founders preparing for bank finance, commercial mortgages, or outside equity investment.",
    pricingGuidance: "From £175/month tailored to reporting frequency (monthly or quarterly) and custom KPI depth.",
    processSteps: [
      {
            "step": "01",
            "title": "KPI & Strategy Definition",
            "desc": "Identify your critical metrics: gross profit margin, debtor collection days, burn rate, and departmental costs."
      },
      {
            "step": "02",
            "title": "Periodic Synthesis & Forecasting",
            "desc": "Extract figures, eliminate accounting noise, and build dynamic 12-month rolling cash-flow models."
      },
      {
            "step": "03",
            "title": "Executive Decision Review",
            "desc": "Discuss real financial performance, identify emerging risks, and agree corrective actions with your dedicated accountant."
      }
],
    faqs: [
      {
            "q": "How do management accounts differ from annual statutory accounts?",
            "a": "Statutory accounts are historical compliance documents for HMRC and Companies House. Management accounts are forward-looking decision tools prepared monthly or quarterly."
      },
      {
            "q": "Can these reports be tailored for our bank or investors?",
            "a": "Yes. We format reporting packs to meet the exact covenants and due-diligence requirements of UK high street banks and commercial lenders."
      },
      {
            "q": "Will management accounts help me forecast cash flow shortages?",
            "a": "Yes, our rolling cash-flow models project cash balances 3 to 12 months ahead so you never face unexpected liquidity surprises."
      },
      {
            "q": "How quickly are reports delivered after month-end?",
            "a": "Typically within 7 to 10 working days following the end of the reporting month, provided source records are complete."
      }
]
  },
  {
    slug: "vat-returns-mtd",
    category: "accountancy",
    title: "VAT Returns & MTD Compliance",
    metaTitle: "VAT Returns & Making Tax Digital (MTD) Compliance | Prestige Accountancy",
    metaDescription: "HMRC Making Tax Digital (MTD) compliant VAT returns, VAT registration, scheme advice (Standard, Flat Rate, Cash Accounting).",
    shortDesc: "Complete VAT registration, scheme advisory, and digital quarterly submissions in full alignment with HMRC Making Tax Digital.",
    keywords: ["VAT returns", "Making Tax Digital", "MTD compliance", "VAT registration", "HMRC VAT submission"],
    deliverables: [
      "HMRC VAT registration and setup for sole traders and limited companies",
      "Preparation and electronic submission of quarterly returns adhering strictly to MTD",
      "Strategic advice on the most tax-efficient scheme (Flat Rate, Cash, or Standard)",
      "Continuous audits of purchase invoices and sales receipts to eliminate compliance errors",
      "Handling HMRC queries and compliance reviews on your behalf"
    ],
    benefits: "Accurate submissions, zero late submission penalties, and optimal cash flow through proper VAT scheme selection.",
    ctaText: "Request VAT Support",
    schemaType: "AccountingService",
    whoItsFor: "UK sole traders, partnerships, and limited companies approaching or exceeding the £90,000 turnover threshold, or businesses opting for voluntary registration to reclaim substantial input VAT.",
    pricingGuidance: "From £95 per quarterly submission, including Making Tax Digital (MTD) software bridging and submission.",
    processSteps: [
      {
            "step": "01",
            "title": "Digital Invoice Verification",
            "desc": "Audit all sales invoices and supplier bills to ensure proper VAT rates, valid tax invoices, and reverse-charge treatments."
      },
      {
            "step": "02",
            "title": "Scheme Optimisation & Computation",
            "desc": "Calculate quarterly liability using Standard, Cash, or Flat Rate accounting to maximise cash retention."
      },
      {
            "step": "03",
            "title": "Encrypted HMRC MTD Submission",
            "desc": "Direct electronic submission through HMRC-authorised digital links before the statutory deadline."
      }
],
    faqs: [
      {
            "q": "When must my business register for UK VAT?",
            "a": "You must register if your taxable turnover exceeds £90,000 in any 12-month rolling period or if you expect to exceed it in the next 30 days."
      },
      {
            "q": "Which VAT scheme is best: Standard, Cash, or Flat Rate?",
            "a": "We analyze your customer payment habits and expense structure to recommend the scheme that maximizes cash flow and minimises admin."
      },
      {
            "q": "Can you help me reclaim VAT on purchases made before registration?",
            "a": "Yes. You can generally reclaim VAT on goods purchased up to 4 years prior and services up to 6 months prior to your registration date."
      },
      {
            "q": "What is Making Tax Digital (MTD) for VAT?",
            "a": "HMRC requires all VAT-registered entities to keep digital accounting records and submit returns using compatible cloud software. We handle 100% of this compliance."
      }
]
  },
  {
    slug: "cis-registration",
    category: "accountancy",
    title: "CIS Registration & Returns",
    metaTitle: "CIS Registration & Monthly Returns for Contractors | Prestige Accountancy",
    metaDescription: "Construction Industry Scheme (CIS) support for UK contractors and subcontractors. Subcontractor verification, deductions and monthly returns.",
    shortDesc: "Dedicated Construction Industry Scheme support for contractors and subcontractors in Huddersfield and across the UK.",
    keywords: ["CIS registration", "Construction Industry Scheme", "CIS returns", "contractor accountant", "CIS subcontractor verification"],
    deliverables: [
      "Assistance with full contractor and subcontractor CIS registrations with HMRC",
      "Immediate verification of subcontractor status and deduction rates (0%, 20%, or 30%)",
      "Precise calculation of deductions and issuance of monthly payment statements",
      "Preparation and on-time electronic submission of monthly CIS returns to HMRC",
      "Year-end CIS deduction offsets against PAYE and Corporation liabilities"
    ],
    benefits: "Avoid severe HMRC monthly CIS late filing penalties and ensure clean, dispute-free subcontractor relationships.",
    ctaText: "Request CIS Assistance",
    schemaType: "AccountingService",
    whoItsFor: "UK construction contractors, subcontractors, builders, joiners, electricians, and tradespeople operating within the Construction Industry Scheme.",
    pricingGuidance: "From £65/month including instant subcontractor verifications, deduction certificates, and monthly HMRC returns.",
    processSteps: [
      {
            "step": "01",
            "title": "HMRC Subcontractor Verification",
            "desc": "Instant verification of worker UTR numbers to assign the correct deduction rate (0% gross, 20% standard, or 30% unverified)."
      },
      {
            "step": "02",
            "title": "Monthly Deduction Statements",
            "desc": "Accurate labour vs materials calculations and issuing mandatory payment certificates to all subcontractors."
      },
      {
            "step": "03",
            "title": "Monthly Filing & PAYE Offsets",
            "desc": "Submitting electronic monthly CIS300 returns by the 19th and offsetting CIS suffered against company payroll tax."
      }
],
    faqs: [
      {
            "q": "When is the monthly CIS return deadline?",
            "a": "Monthly CIS returns must reach HMRC by the 19th of each calendar month following the end of the tax month."
      },
      {
            "q": "What happens if a CIS return is filed late?",
            "a": "HMRC issues an automatic £100 penalty for missing the 19th, increasing to £200 at 2 months, and £300 or 5% at 6 months. We ensure you never miss a filing."
      },
      {
            "q": "How do subcontractors get their CIS deductions refunded?",
            "a": "Limited companies can offset CIS suffered against their monthly PAYE/NIC liabilities or claim a refund from HMRC at the tax year-end. We prepare the complete claim."
      },
      {
            "q": "Do materials count towards the CIS deduction?",
            "a": "No. Deductions are only taken from the labour element of the invoice. Valid materials costs paid by the subcontractor are exempt from deduction."
      }
]
  },
  {
    slug: "pension-registration",
    category: "accountancy",
    title: "Workplace Pension Registration & Auto-Enrolment",
    metaTitle: "Workplace Pension Setup & Auto-Enrolment | Prestige Accountancy",
    metaDescription: "Workplace pension scheme setup, auto-enrolment compliance, employee assessment and ongoing provider communications (NEST, The People's Pension).",
    shortDesc: "End-to-end setup and administration of workplace pensions and auto-enrolment employer duties.",
    keywords: ["workplace pension", "auto-enrolment", "pension registration", "employer duties", "NEST pension setup"],
    deliverables: [
      "Assistance in selecting and establishing compliant schemes (e.g., NEST, The People's Pension)",
      "Routine assessment of eligible jobholders and non-eligible workers",
      "Drafting and issuing statutory employee communication letters",
      "Precise calculation of employer and employee qualifying earnings contributions",
      "Declaration of Compliance submission to The Pensions Regulator and re-enrolment duties"
    ],
    benefits: "Freedom from employer compliance fines and effortless management of auto-enrolment responsibilities.",
    ctaText: "Discuss Workplace Pensions",
    schemaType: "AccountingService",
    whoItsFor: "UK employers hiring their first employee, businesses reaching auto-enrolment duties, or companies needing routine pension payroll administration.",
    pricingGuidance: "From £45/month alongside payroll, covering monthly contribution assessments, pension provider sync, and TPR declarations.",
    processSteps: [
      {
            "step": "01",
            "title": "Master Trust Scheme Setup",
            "desc": "Establishing an authorised, low-cost qualifying workplace pension scheme (NEST, The People's Pension, or Smart Pension)."
      },
      {
            "step": "02",
            "title": "Worker Assessment & Communications",
            "desc": "Monthly assessment of eligible jobholders and generating legally required statutory enrolment letters."
      },
      {
            "step": "03",
            "title": "The Pensions Regulator Declaration",
            "desc": "Filing your formal Declaration of Compliance with The Pensions Regulator and monitoring mandatory 3-year re-enrolment."
      }
],
    faqs: [
      {
            "q": "Who must be automatically enrolled into a workplace pension?",
            "a": "Workers aged between 22 and State Pension age earning over £10,000 per year (£192/week or £833/month) must be enrolled."
      },
      {
            "q": "What are the current minimum pension contribution rates?",
            "a": "The minimum total contribution is 8% of qualifying earnings, with employers contributing at least 3% and employees contributing 5%."
      },
      {
            "q": "What is the Declaration of Compliance deadline?",
            "a": "Employers must complete their Declaration of Compliance with The Pensions Regulator within 5 months of their duties start date."
      },
      {
            "q": "What if all my employees want to opt out?",
            "a": "You must still set up a compliant scheme, enrol eligible staff, and allow them to opt out themselves through the pension provider. Employers cannot opt staff out."
      }
]
  },
  {
    slug: "charity-accounts",
    category: "accountancy",
    title: "Charity Accounts & Independent Examination",
    metaTitle: "Charity Accounts & Independent Examination | Prestige Accountancy",
    metaDescription: "Specialist charity accounting, SORP compliance, Receipts & Payments or Accrual accounts, and Charity Commission submissions.",
    shortDesc: "Specialist statutory accounting, Statement of Financial Activities (SOFA), and independent examination for UK charitable bodies.",
    keywords: ["charity accounts", "charity accountants", "independent examination", "Charity Commission filing", "SORP accounting"],
    deliverables: [
      "Preparation of Receipts & Payments accounts or Accruals-based accounts (SORP compliant)",
      "Statement of Financial Activities (SOFA) and balance sheet preparation",
      "Arranging independent examination of accounts by qualified practitioners",
      "Assistance with Charity Commission and OSCR annual returns and submissions",
      "Prudent guidance on restricted vs unrestricted fund accounting and financial governance"
    ],
    benefits: "Full transparency and accountability to donors, trustees, and regulators with clean, compliant financial statements.",
    ctaText: "Discuss Charity Accounting",
    schemaType: "AccountingService",
    whoItsFor: "Registered charities, Charitable Incorporated Organisations (CIOs), community trusts, and non-profits in England and Wales.",
    pricingGuidance: "Competitive fixed rates tailored for non-profits, starting from £350 for Receipts & Payments up to custom packages for full SORP accrual accounts.",
    processSteps: [
      {
            "step": "01",
            "title": "Fund Accounting Audit",
            "desc": "Strict separation and reconciliation of restricted grant funds, endowment capital, designated reserves, and unrestricted income."
      },
      {
            "step": "02",
            "title": "SOFA & Balance Sheet Compilation",
            "desc": "Preparation of the Statement of Financial Activities (SOFA), balance sheet, and comprehensive trustee notes under Charities SORP FRS 102."
      },
      {
            "step": "03",
            "title": "Independent Examination & Filing",
            "desc": "Formal independent examiner sign-off and filing with the Charity Commission and Companies House (if charitable company)."
      }
],
    faqs: [
      {
            "q": "When does a charity require an Independent Examination?",
            "a": "Charities with gross annual income between £25,000 and £1 million generally require an independent examination rather than a full statutory audit."
      },
      {
            "q": "What is Charity SORP (FRS 102)?",
            "a": "The Statement of Recommended Practice sets statutory standards for charity accounting, governing how funds, grants, and overheads must be reported."
      },
      {
            "q": "Can charities prepare simple Receipts & Payments accounts?",
            "a": "Yes, non-company registered charities with gross income under £250,000 can opt for simpler Receipts & Payments accounts."
      },
      {
            "q": "What is the Charity Commission filing deadline?",
            "a": "Annual accounts and the Trustees' Annual Report must be filed with the Charity Commission within 10 months of your financial year-end."
      }
]
  },
  {
    slug: "charity-registration",
    category: "accountancy",
    title: "Charity Registration Support",
    metaTitle: "Charity Registration Support & Guidance | Prestige Accountancy",
    metaDescription: "Expert guidance for organisations seeking charitable status. Eligibility review, governing documents, and Charity Commission application management.",
    shortDesc: "Structured guidance and preparation for organisations establishing charitable status with the Charity Commission.",
    keywords: ["charity registration", "register a charity", "charitable status", "Charity Commission application", "CIO formation"],
    deliverables: [
      "Detailed review of eligibility under UK charitable law purposes",
      "Assistance in drafting and refining governing documents (constitution or articles of association)",
      "Rigorous preparation and submission of the Charity Commission formal application",
      "Professional handling of Charity Commission queries and clarification letters",
      "Post-registration operational advice on financial books and Gift Aid setups"
    ],
    benefits: "A smoother, well-prepared application that avoids regulatory rejections and sets your charity up for longevity.",
    ctaText: "Request Registration Support",
    schemaType: "AccountingService",
    whoItsFor: "Unincorporated associations, community foundations, and social impact founders seeking official UK charitable status with the Charity Commission.",
    pricingGuidance: "Structured one-off onboarding package with clear milestone pricing, avoiding surprise hourly charges.",
    processSteps: [
      {
            "step": "01",
            "title": "Public Benefit & Objects Assessment",
            "desc": "Aligning your organisation's core mission precisely with the 13 recognised legal charitable purposes in England & Wales."
      },
      {
            "step": "02",
            "title": "Governing Document Drafting",
            "desc": "Drafting a bespoke Constitution or Articles of Association suitable for a Charitable Incorporated Organisation (CIO)."
      },
      {
            "step": "03",
            "title": "Commission Application & Case Handling",
            "desc": "Submitting the online Charity Commission dossier and answering officer clarification queries through to registration."
      }
],
    faqs: [
      {
            "q": "When is charity registration mandatory in England and Wales?",
            "a": "Registration is compulsory once your organisation's annual income exceeds £5,000, or immediately if you form a Charitable Incorporated Organisation (CIO)."
      },
      {
            "q": "What is a Charitable Incorporated Organisation (CIO)?",
            "a": "A CIO gives you corporate legal status and limited liability without having to register separately with Companies House. It is the modern gold standard for UK charities."
      },
      {
            "q": "How long does Charity Commission registration typically take?",
            "a": "Standard applications take between 4 to 12 weeks, depending on the complexity of charitable objects and public benefit evidence."
      },
      {
            "q": "Do you help set up Gift Aid after registration?",
            "a": "Yes. Once your charity registration number is issued, we help you register for HMRC charities online to claim 25p on every £1 donated."
      }
]
  },

  // Hub 2: Business Services
  {
    slug: "business-startups",
    category: "business-services",
    title: "Business Startup Support",
    metaTitle: "Startup Accountants & Business Launch Setup | Prestige Accountancy",
    metaDescription: "Everything new UK entrepreneurs need: business plans, company registration, HMRC setup, accounting software onboarding and cash flow planning.",
    shortDesc: "Everything you need to launch your venture on solid financial, legal, and operational footing.",
    keywords: ["startup accountant", "business setup", "company registration", "business plan help", "start up accountants UK"],
    deliverables: [
      "Fast-track company formation with Companies House and HMRC registration",
      "Practical business plan development covering revenue models, projections, and growth KPIs",
      "Evaluation of finance avenues including startup loans, grants, and equity considerations",
      "Guidance on trading structure: Sole Trader vs Limited Company vs LLP",
      "Complete cloud setup and training in Xero or QuickBooks Online"
    ],
    benefits: "A guided launch backed by professional accountants, avoiding rookie compliance traps and positioning you for rapid growth.",
    ctaText: "Book Your Free Startup Consultation",
    schemaType: "AccountingService",
    whoItsFor: "Aspiring entrepreneurs, professionals leaving employment, and founders launching a new commercial business in the UK.",
    pricingGuidance: "Free initial 45-minute consultation, followed by transparent fixed startup packages covering formation, HMRC registration, and cloud setup.",
    processSteps: [
      {
            "step": "01",
            "title": "Entity Structuring Consultation",
            "desc": "Expert assessment of your business model to choose the right legal form: Sole Trader, Partnership, or Limited Company."
      },
      {
            "step": "02",
            "title": "Incorporation & Statutory Registration",
            "desc": "Companies House registration, HMRC Corporation Tax, PAYE setup, and opening commercial banking facilities."
      },
      {
            "step": "03",
            "title": "Cloud Accounting Onboarding",
            "desc": "Configuring Xero or QuickBooks with live bank feeds, branded invoice templates, and initial bookkeeping training."
      }
],
    faqs: [
      {
            "q": "Should I start as a Sole Trader or a Limited Company?",
            "a": "We evaluate your expected revenue, commercial risk, and client expectations to guide you to the structure that minimises tax and protects personal assets."
      },
      {
            "q": "How quickly can you incorporate my company?",
            "a": "We can incorporate your company with Companies House electronically within 3 to 24 hours."
      },
      {
            "q": "What taxes do startups need to register for with HMRC?",
            "a": "Depending on your setup: Corporation Tax, PAYE (if employing staff), VAT (if threshold reached or voluntary), and director Self Assessment."
      },
      {
            "q": "Do you provide business plan assistance for startup loans?",
            "a": "Yes, we build financial models, cash-flow forecasts, and breakeven analyses suitable for British Business Bank startup loans."
      }
]
  },
  {
    slug: "company-formations",
    category: "business-services",
    title: "Company Formations & Corporate Structuring",
    metaTitle: "Company Formation & Group Structuring Advice | Prestige Accountancy",
    metaDescription: "Strategic corporate structures, group holding companies, property portfolio incorporation and shareholding arrangements.",
    shortDesc: "Strategic advice on the optimal corporate structure for your commercial enterprise or property portfolio.",
    keywords: ["company formation", "company structuring", "group structure", "property company setup", "holding company formation"],
    deliverables: [
      "Assessment of commercial goals to determine ideal corporate configuration",
      "Structuring advice for holding companies, trading subsidiaries, and asset-holding vehicles",
      "Setup and incorporation of SPVs (Special Purpose Vehicles) for property portfolios",
      "Assistance with group consolidations, inter-company balances, and combined statements",
      "Drafting robust share capital structures and founder ownership divisions"
    ],
    benefits: "Ring-fenced business risk, protected family assets, streamlined operational hierarchy, and scalable foundations.",
    ctaText: "Request Structuring Consultation",
    schemaType: "AccountingService",
    whoItsFor: "Established traders incorporating, property portfolio investors creating SPVs, and trading companies setting up holding group structures.",
    pricingGuidance: "Fixed fee structures tailored to single-entity incorporations, property SPVs, or multi-company group architectures.",
    processSteps: [
      {
            "step": "01",
            "title": "Structural Architecture Design",
            "desc": "Determine the ideal hierarchy: holding company, trading subsidiary, or property Special Purpose Vehicle (SPV)."
      },
      {
            "step": "02",
            "title": "Share Capital & Articles Structuring",
            "desc": "Drafting alphabet shares (A, B, C), bespoke Articles of Association, and shareholder protective covenants."
      },
      {
            "step": "03",
            "title": "Companies House Setup & Registrations",
            "desc": "Fast electronic formation, PSC register creation, share certificate issuance, and HMRC corporate activation."
      }
],
    faqs: [
      {
            "q": "What is a Special Purpose Vehicle (SPV) for property investment?",
            "a": "An SPV is a limited company dedicated solely to buying, holding, and letting property, allowing for 100% mortgage interest deduction against rental income."
      },
      {
            "q": "Why should an established trading business create a Holding Company?",
            "a": "A holding company ring-fences valuable assets (like commercial property, retained cash, or IP) away from trading operational risks."
      },
      {
            "q": "What are alphabet shares and why are they useful?",
            "a": "Alphabet shares (Ordinary A, B, C) allow different dividend distributions to be declared to different shareholders without altering capital voting power."
      },
      {
            "q": "How long does a complex corporate group restructuring take?",
            "a": "Simple incorporations take 24 hours; holding group structuring with clearance reviews typically takes 2 to 4 weeks."
      }
]
  },
  {
    slug: "mergers-acquisitions",
    category: "business-services",
    title: "Mergers, Acquisitions & Demergers Support",
    metaTitle: "Mergers, Acquisitions & Demergers Financial Support | Prestige Accountancy",
    metaDescription: "Financial due diligence, independent business valuation, transaction modeling and post-merger integration alongside legal advisers.",
    shortDesc: "Rigorous financial intelligence, valuation, and advisory support through corporate combinations and separations.",
    keywords: ["mergers and acquisitions", "business valuation", "financial due diligence", "demerger", "corporate buyout support"],
    deliverables: [
      "In-depth financial due diligence to uncover underlying liabilities and verify earnings",
      "Objective business valuations based on industry multiples and discounted cash flows",
      "Close collaborative work alongside your corporate legal counsel",
      "Deal structuring assistance to protect buyer or seller commercial interests",
      "Post-transaction accounting integration and unified balance sheet realignment"
    ],
    benefits: "Hidden balance sheet risks revealed, transaction valuation substantiated, and smooth post-acquisition financial continuity.",
    ctaText: "Discuss Your Transaction Privately",
    schemaType: "AccountingService",
    whoItsFor: "Business owners looking to sell or buy an existing trading business, acquire a competitor, or execute a shareholder demerger.",
    pricingGuidance: "Project-based milestone fees for due diligence and valuation, agreed before commencing transaction reviews.",
    processSteps: [
      {
            "step": "01",
            "title": "Valuation & Normalised Earnings",
            "desc": "Normalise historical EBITDA, examine balance sheet liabilities, and determine market value using sector multiples."
      },
      {
            "step": "02",
            "title": "Financial & Tax Due Diligence",
            "desc": "In-depth forensic review of revenue quality, debt covenants, contingent liabilities, and tax warranties."
      },
      {
            "step": "03",
            "title": "Deal Structuring & Post-Deal Integration",
            "desc": "Collaborate with corporate lawyers on SPA mechanics, completion accounts, and seamless ledger consolidation."
      }
],
    faqs: [
      {
            "q": "What is the difference between an asset purchase and a share purchase?",
            "a": "In a share purchase, the buyer acquires the entire company including past liabilities. In an asset purchase, the buyer cherry-picks specific business assets and contracts."
      },
      {
            "q": "How do you determine what a UK small business is worth?",
            "a": "We evaluate normalized maintainable earnings (adjusted EBITDA) against current industry sector valuation multiples and discounted future cash flows."
      },
      {
            "q": "What does financial due diligence investigate?",
            "a": "We scrutinise historical revenue stability, customer concentration risk, tax compliance history, off-balance-sheet commitments, and working capital cycles."
      },
      {
            "q": "Can you collaborate directly with our commercial corporate solicitor?",
            "a": "Yes, we work in close tandem with your legal team, supplying financial warranties, completion balance sheet mechanics, and disclosure reviews."
      }
]
  }
];

export const whoWeHelpAudience = [
  {
    slug: "limited-companies",
    title: "Limited Companies (SMEs)",
    tagline: "Total statutory compliance, proactive management accounts & Corporation Tax readiness.",
    desc: "From ambitious scale-ups to established family enterprises, we take the heavy lifting of annual accounts, VAT returns, payroll, and dividend planning off your shoulders.",
    icon: "Building2",
    bullets: [
      "Companies House & HMRC annual accounts filing",
      "Real-time Xero/QuickBooks digital bookkeeping",
      "Strategic quarterly management reporting",
      "Director loan account and dividend management"
    ]
  },
  {
    slug: "sole-traders",
    title: "Sole Traders & Freelancers",
    tagline: "Stress-free bookkeeping, accurate expense tracking & prompt filing.",
    desc: "Running your own business leaves little time for invoices and paperwork. We ensure all legitimate allowable expenses are recorded and your records stay bulletproof.",
    icon: "UserCheck",
    bullets: [
      "Simplified bookkeeping without confusing jargon",
      "Maximizing allowable business expense deductions",
      "Preparation for Making Tax Digital for Income Tax",
      "Transition guidance if expanding into a Limited Company"
    ]
  },
  {
    slug: "cis-contractors",
    title: "Contractors & Subcontractors (CIS)",
    tagline: "Hassle-free CIS deductions, monthly returns & verification.",
    desc: "The Construction Industry Scheme has severe penalties for paperwork delays. We verify subcontractors in seconds, submit your monthly CIS returns, and help you offset deductions.",
    icon: "HardHat",
    bullets: [
      "Subcontractor verification (0%, 20%, 30% rates)",
      "Monthly CIS statements and HMRC submissions",
      "Reclaiming CIS tax suffered against PAYE bills",
      "Direct advice on worker status and IR35 compliance"
    ]
  },
  {
    slug: "startups",
    title: "Startups & New Entrepreneurs",
    tagline: "Solid legal formations, software setup & investor-ready financials.",
    desc: "Starting a business is thrilling, but messy early accounting can sink it. We help you choose the right legal structure, register with HMRC, and install modern cloud accounting from day one.",
    icon: "Rocket",
    bullets: [
      "Company registration within 24 hours",
      "Cloud software setup (Xero / QuickBooks) with bank feeds",
      "Cash flow forecasting and 12-month financial projections",
      "Clear advice on founders' shares and equity splits"
    ]
  },
  {
    slug: "charities",
    title: "Charities, Not-for-Profits & CIOs",
    tagline: "Transparent fund accounting, independent examination & trustee peace of mind.",
    desc: "Charities face rigorous Charity Commission and SORP compliance. We safeguard your organisation with independent examinations, trustee reporting, and clean fund allocation.",
    icon: "HeartHandshake",
    bullets: [
      "Charity Commission and OSCR compliance",
      "Receipts & Payments or Accruals SOFA preparation",
      "Independent examination by qualified accountants",
      "Restricted vs Unrestricted fund transparency"
    ]
  }
];

export const blogPosts: BlogPost[] = [
  {
    slug: "making-tax-digital-vat-2026",
    category: "Tax & Compliance News",
    title: "Making Tax Digital for VAT in 2026: What UK Businesses Must Do",
    metaTitle: "Making Tax Digital for VAT in 2026: UK Compliance Guide | Prestige",
    metaDescription: "Everything UK small businesses, sole traders and companies need to know about HMRC Making Tax Digital (MTD) rules, digital record keeping and penalties.",
    summary: "HMRC requires all VAT-registered businesses to maintain digital records and submit returns using compatible software. Here is the practical checklist for 2026.",
    readingTime: "5 min read",
    publishedDate: "October 14, 2026",
    keyTakeaways: [
      "All VAT-registered businesses must use MTD-compatible software (e.g. Xero or QuickBooks).",
      "Manual spreadsheets require digital bridging links to comply with HMRC rules.",
      "HMRC points-based penalty system penalizes late submissions and late payments separately."
    ],
    content: [
      "Making Tax Digital (MTD) is now the universal standard for UK VAT reporting. Every VAT-registered enterprise, regardless of turnover threshold, is legally obligated to keep digital records and file via functional compatible software.",
      "The days of typing figures manually into the HMRC online portal are permanently gone. If your business relies on manual paper ledgers or standalone disconnected spreadsheets, you risk falling foul of digital link requirements.",
      "At Prestige Accountancy Services, we set up and integrate Xero and QuickBooks Online for our clients, ensuring that every sales invoice, expense receipt, and bank feed synchronizes without manual error."
    ]
  },
  {
    slug: "key-uk-filing-deadlines-2026-27",
    category: "Tax & Compliance News",
    title: "Key UK Accounting & Filing Deadlines for 2026/27",
    metaTitle: "UK Accounting & Statutory Filing Deadlines 2026/27 | Prestige",
    metaDescription: "Essential statutory deadlines for UK Limited Companies, VAT returns, PAYE, and Companies House annual accounts filing to avoid penalties.",
    summary: "A concise reference calendar of statutory filing dates for UK Limited Companies, employers, and VAT-registered businesses.",
    readingTime: "4 min read",
    publishedDate: "October 10, 2026",
    keyTakeaways: [
      "Companies House accounts are due exactly 9 months after your financial year end.",
      "VAT returns and payments are due 1 calendar month and 7 days after the quarter end.",
      "CIS returns must reach HMRC by the 19th of each calendar month."
    ],
    content: [
      "Missing a statutory filing date in the UK triggers automatic, escalating financial penalties. Companies House issues an immediate £150 fine if accounts are just 1 day late, doubling if repeated in consecutive years.",
      "For employers, PAYE and National Insurance must be paid by the 22nd of the month (electronically). For construction contractors, the 19th of each month is the rigid deadline for CIS submissions.",
      "Prestige Accountancy maintains a proactive filing schedule for all our clients, alerting you well in advance so your books are reconciled, signed off, and filed weeks before any deadline."
    ]
  },
  {
    slug: "sole-trader-vs-limited-company",
    category: "Small Business Tips",
    title: "Sole Trader vs Limited Company: Which Is Right for You?",
    metaTitle: "Sole Trader vs Limited Company: Practical Guide | Prestige Accountancy",
    metaDescription: "Comparing Sole Trader vs Limited Company in the UK: liability protection, administrative burden, tax efficiency, and growth capacity.",
    summary: "Choosing between Sole Trader and Limited Company status affects your personal legal liability, accounting obligations, and business reputation.",
    readingTime: "6 min read",
    publishedDate: "September 28, 2026",
    keyTakeaways: [
      "Sole Trader status has simpler accounting and low admin, but unlimited personal liability.",
      "Limited Companies provide a legal 'corporate veil', protecting personal assets from company debts.",
      "Companies often benefit from commercial prestige and preferred supplier status with corporate buyers."
    ],
    content: [
      "One of the first critical crossroads an entrepreneur encounters is selecting their legal trading structure. While operating as a Sole Trader is quick to start with minimal public filings, your personal assets (including your home) are liable for commercial debt.",
      "A Private Limited Company (Ltd) creates a distinct legal entity. This not only safeguards personal wealth under limited liability principles but also enhances your credibility when tendering for corporate contracts or applying for commercial credit.",
      "Our team provides an objective structural evaluation, analyzing your projected revenues, industry risk profile, and growth targets to advise the most prudent route."
    ]
  },
  {
    slug: "charity-accounts-explained-receipts-accruals",
    category: "Charity Sector Updates",
    title: "Charity Accounts Explained: Receipts & Payments vs Accruals",
    metaTitle: "Charity Accounts Explained: Receipts & Payments vs Accruals | Prestige",
    metaDescription: "Understand UK Charity Commission accounting rules: gross income thresholds, Receipts and Payments, Accruals SOFA, and independent examination requirements.",
    summary: "How UK charity trustees can determine whether their charity needs simplified Receipts and Payments accounts or full SORP Accruals reporting.",
    readingTime: "5 min read",
    publishedDate: "September 18, 2026",
    keyTakeaways: [
      "Non-company charities with gross income under £250,000 can usually opt for Receipts & Payments.",
      "Charities with income over £250,000 or structured as Charitable Companies must prepare Accruals accounts (SORP).",
      "Independent examinations are mandatory once gross income exceeds £25,000."
    ],
    content: [
      "Charity accounting in the UK is governed by strict regulatory rules enforced by the Charity Commission. Trustees are legally responsible for maintaining accurate accounts, but the required format depends on your constitution and gross income.",
      "Receipts and Payments is a cash-based approach suitable for smaller, unincorporated charities, simply tracking cash entering and leaving bank accounts.",
      "In contrast, Accruals accounting (Statement of Recommended Practice / SORP) requires adjusting for debtors, creditors, depreciation, and detailed fund categorisation (restricted, unrestricted, endowment). Prestige Accountancy provides specialist guidance and independent examinations for trustees."
    ]
  },
  {
    slug: "cis-for-contractors-plain-english-guide",
    category: "Small Business Tips",
    title: "CIS for Contractors: A Plain-English Guide",
    metaTitle: "CIS for Contractors: UK Construction Scheme Explained | Prestige",
    metaDescription: "How the Construction Industry Scheme works: contractor registration, verifying subcontractors with HMRC, making monthly deductions and avoiding penalties.",
    summary: "A practical guide for UK construction businesses navigating CIS deductions, HMRC verification, and monthly return obligations.",
    readingTime: "5 min read",
    publishedDate: "September 10, 2026",
    keyTakeaways: [
      "Contractors must verify subcontractors with HMRC before issuing payment.",
      "Deduction rates are 20% for registered, 30% for unverified, and 0% for gross payment status.",
      "Monthly CIS statements must be provided to subcontractors within 14 days of the tax month end."
    ],
    content: [
      "The Construction Industry Scheme (CIS) is an HMRC system designed to collect tax at source from subcontractors in the mainstream building trades. If your business hires subcontractors for construction work, you are legally classified as a CIS contractor.",
      "Before paying any subcontractor, you must verify them through HMRC to ascertain their deduction rate. Making payments without verification or applying the wrong rate creates significant retrospective liability.",
      "Prestige Accountancy manages the entire CIS pipeline: we verify your subcontractors instantly, calculate deductions, generate compliant payment deduction statements, and file your monthly return by the 19th."
    ]
  },
  {
    slug: "switching-accountants-how-it-works",
    category: "Firm News",
    title: "Switching Accountants: How It Works & Why It's Easier Than You Think",
    metaTitle: "How to Switch Accountants in the UK Seamlessly | Prestige Accountancy",
    metaDescription: "Step-by-step guide on how to switch your accountant in the UK without service disruption, missed deadlines, or awkward conversations.",
    summary: "Thinking of changing accountants? Learn how Prestige handles the complete professional clearance process with zero downtime.",
    readingTime: "4 min read",
    publishedDate: "August 30, 2026",
    keyTakeaways: [
      "You do not need to wait until the end of your financial year to switch accountants.",
      "Your new accountant handles the professional clearance letter directly with your previous firm.",
      "All historical records and digital cloud software (Xero/QuickBooks) transfer cleanly."
    ],
    content: [
      "Many business owners stay with an unresponsive or overpriced accountant simply because they fear the transition will cause gaps, missed deadlines, or administrative headaches. In reality, switching accountants is a standard, highly regulated procedure.",
      "Once you decide to join Prestige Accountancy, we send a formal Professional Clearance Letter to your previous accountant requesting your trial balances, historical tax records, and client files. By professional code, they are required to respond promptly.",
      "We then transfer your Xero or QuickBooks subscription seamlessly. You experience zero downtime, zero missed deadlines, and immediately gain access to our attentive, proactive financial team."
    ]
  }
];

export const homeFaqs = [
  {
    q: "Do you work with businesses outside Huddersfield?",
    a: "Yes — while our physical office is located at 9 Blackmoorfoot Road, Huddersfield, we support sole traders, limited companies, and charities across the entire United Kingdom digitally via cloud platforms such as Xero and QuickBooks Online."
  },
  {
    q: "How much do your services cost?",
    a: "We believe in total transparency. Following your initial free consultation, we provide a tailored, fixed-fee monthly quote with zero hidden charges and no surprise hourly billing."
  },
  {
    q: "Can you take over from my current accountant?",
    a: "Absolutely. We manage the entire handover process for you, including writing to your current accountant for professional clearance and transferring your digital records smoothly with no gaps or stress."
  },
  {
    q: "What software do you support?",
    a: "We are cloud-first specialists proficient in Xero, QuickBooks Online, FreeAgent, and Sage. If you currently use manual spreadsheets or paper ledgers, we assist in setting up and migrating you to compliant cloud software."
  },
  {
    q: "How quickly can you onboard our business?",
    a: "Following our initial consultation, we can complete client identification, engagement letters, and software access within 24 to 48 hours."
  }
];

export const coreValues = [
  {
    title: "Technical Expertise",
    desc: "Qualified accounting standards with deep practical knowledge of UK statutory and regulatory frameworks."
  },
  {
    title: "Reliable Information",
    desc: "Accurate, balanced, and timely numbers you and your stakeholders can depend on with complete confidence."
  },
  {
    title: "Individual Attention",
    desc: "A dedicated point of contact who genuinely understands your business history, challenges, and aspirations."
  },
  {
    title: "Ethical Conduct",
    desc: "Uncompromising integrity, full transparency in pricing, and strict adherence to professional accounting ethics."
  },
  {
    title: "Forward-Looking Support",
    desc: "Not just recording history — providing actionable forecasts, cash flow advice, and growth structuring."
  },
  {
    title: "Continuous Learning",
    desc: "Always up to date with the latest HMRC rules, Making Tax Digital mandates, and cutting-edge financial tech."
  }
];

export const teamMembers = [
  {
    name: "Muhammad Mujahid",
    role: "Managing Director & Practice Principal",
    credentials: "ACCA / Qualified Practice Leader",
    bio: "Leads Prestige Accountancy Services with a vision for modern, reliable, and accessible accountancy. Over a decade of expertise advising SMEs, startups, and non-profit organisations across the UK.",
    photo: "/team-placeholder-1.jpg"
  },
  {
    name: "Senior Accounting Manager",
    role: "Practice Manager & Senior Accountant",
    credentials: "ACCA / Client Operations",
    bio: "Oversees day-to-day statutory accounting, corporate year-end accounts, and complex client compliance. Dedicated to delivering punctual and clear financial reporting.",
    photo: "/team-placeholder-2.jpg"
  },
  {
    name: "VAT & Compliance Specialist",
    role: "Client Manager (VAT, CIS & MTD)",
    credentials: "AAT / Payroll & CIS Certified",
    bio: "Specialises in Making Tax Digital compliance, quarterly VAT returns, Construction Industry Scheme reconciliations, and auto-enrolment workplace pensions.",
    photo: "/team-placeholder-3.jpg"
  },
  {
    name: "Cloud Bookkeeping Lead",
    role: "Head of Bookkeeping & Client Onboarding",
    credentials: "Certified Xero & QuickBooks ProAdvisor",
    bio: "Passionate about automating messy receipts and maintaining real-time, pristine digital ledgers for sole traders, retailers, and high-growth startups.",
    photo: "/team-placeholder-4.jpg"
  }
];

export const clientTestimonials = [
  {
    quote: "Switching to Prestige Accountancy was the best decision we made for our company. Our annual accounts and VAT returns are handled seamlessly, and their fixed-fee model gives us complete peace of mind.",
    author: "David H.",
    business: "Managing Director, West Yorkshire Logistics Ltd",
    rating: 5
  },
  {
    quote: "As a construction contractor, CIS paperwork used to give me headaches every single month. The team at Prestige verifies my subcontractors immediately and files without a hitch. Outstanding service!",
    author: "Tariq M.",
    business: "Director, Apex Build & Civils",
    rating: 5
  },
  {
    quote: "Prestige prepared our charity's annual SOFA accounts and guided our trustees through the independent examination with utmost patience and professional clarity.",
    author: "Sarah K.",
    business: "Trustee, Community Youth Initiative",
    rating: 5
  }
];
