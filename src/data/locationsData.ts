export interface LocationItem {
  slug: string;
  town: string;
  areaName: string;
  postcodes: string[];
  distanceFromOffice: string;
  travelDescription: string;
  heroTitle: string;
  metaTitle: string;
  metaDescription: string;
  shortDesc: string;
  localEconomyOverview: string;
  industriesServed: string[];
  localFaqs: { q: string; a: string }[];
}

export const locationsData: LocationItem[] = [
  {
    slug: "halifax",
    town: "Halifax",
    areaName: "Halifax & Calderdale",
    postcodes: ["HX1", "HX2", "HX3"],
    distanceFromOffice: "7 miles (approx. 15 minutes via A629)",
    travelDescription: "Direct 15-minute drive south along the A629 Calderdale Way. Free on-site client parking is available directly outside our practice on Blackmoorfoot Road.",
    heroTitle: "Chartered Accountants for Halifax & Calderdale Businesses",
    metaTitle: "Accountants in Halifax | Prestige Accountancy Services",
    metaDescription: "Professional accountancy, bookkeeping, VAT returns, CIS and corporate filing for Halifax and Calderdale businesses. Fixed fees, free consultations.",
    shortDesc: "Comprehensive accountancy, Xero bookkeeping, VAT submissions and statutory annual accounts tailored for sole traders, SMEs, and limited companies across Halifax.",
    localEconomyOverview: "Halifax boasts a rich commercial heritage spanning innovative manufacturing, logistics, tech startups at Dean Clough, and independent retail. From growing family businesses around Copley to established service practices in the town centre, businesses in Halifax require accountants who combine local accessibility with modern cloud efficiency.",
    industriesServed: [
      "Manufacturing & engineering contractors",
      "Creative agencies and tech firms at Dean Clough",
      "Haulage, logistics and distribution operators",
      "Retail, hospitality, and e-commerce shops",
      "Specialist trades and construction subcontractors"
    ],
    localFaqs: [
      {
        q: "Can Prestige Accountancy visit our business premises in Halifax?",
        a: "Yes. While our headquarters are in nearby Huddersfield (HD4), our team regularly visits clients across Halifax and Calderdale for on-site reviews and management accounts meetings."
      },
      {
        q: "Do I need to travel to your office to sign documents?",
        a: "Not at all. We operate a 100% paperless cloud portal with digital e-signatures for all Companies House and HMRC filings. You can manage everything securely from your desk in Halifax."
      },
      {
        q: "Do you offer fixed monthly fees for Halifax companies?",
        a: "Yes. All our accountancy, bookkeeping, and payroll services are provided under transparent, pre-agreed fixed monthly fees with zero unexpected hourly billing."
      }
    ]
  },
  {
    slug: "brighouse",
    town: "Brighouse",
    areaName: "Brighouse & Clifton",
    postcodes: ["HD6"],
    distanceFromOffice: "5.5 miles (approx. 12 minutes via A641 / Bradford Rd)",
    travelDescription: "Convenient 12-minute journey down the A641 / Bradford Road directly into Crosland Moor. Quick access from M62 Junction 25.",
    heroTitle: "Accountancy & Bookkeeping Services in Brighouse",
    metaTitle: "Accountants in Brighouse (HD6) | Prestige Accountancy",
    metaDescription: "Local accountants serving Brighouse (HD6) and surrounding areas. Specialist CIS, VAT, bookkeeping and company formations with transparent fixed fees.",
    shortDesc: "Dedicated local accounting services for Brighouse tradespeople, limited company directors, and expanding retail businesses throughout HD6.",
    localEconomyOverview: "Positioned directly on the Calder Valley transport corridor near Junction 25 of the M62, Brighouse is home to a thriving community of industrial fabricators, commercial transport fleets, independent trades, and bustling high street retailers. We provide Brighouse business owners with stress-free compliance, Making Tax Digital VAT management, and corporate accounts.",
    industriesServed: [
      "Construction contractors and CIS subcontractors",
      "Commercial transport and fleet operators",
      "Industrial engineering and metal fabrication",
      "Independent retailers and food & beverage venues",
      "Professional service consultancies"
    ],
    localFaqs: [
      {
        q: "Are you located close to Brighouse?",
        a: "Yes, our practice is situated just 12 minutes from Brighouse town centre along the A641, making drop-ins or in-person strategy consultations fast and convenient."
      },
      {
        q: "How do you help Brighouse construction contractors with CIS?",
        a: "We verify subcontractors with HMRC instantly, calculate monthly deduction certificates, handle monthly CIS300 submissions by the 19th, and offset CIS credits against payroll liabilities."
      },
      {
        q: "Can you switch our accounts from our previous Brighouse accountant?",
        a: "Yes. Switching is seamless. We send a standard professional clearance letter to your previous accountant and transfer your Xero, QuickBooks, or paper records in under 48 hours."
      }
    ]
  },
  {
    slug: "elland",
    town: "Elland",
    areaName: "Elland & Lowfields Business Park",
    postcodes: ["HX5"],
    distanceFromOffice: "4 miles (approx. 8 minutes via Halifax Rd / Ainley Top)",
    travelDescription: "Under 10 minutes drive south via the Ainley Top roundabout onto Halifax Road. Ideal for businesses operating in Lowfields Business Park.",
    heroTitle: "Accountants for Elland & Lowfields Business Park",
    metaTitle: "Accountants in Elland (HX5) | Prestige Accountancy",
    metaDescription: "Expert accountancy and cloud bookkeeping for Elland and Lowfields Business Park companies. Xero certified, VAT MTD compliant, fixed fees.",
    shortDesc: "Strategic accounting, payroll, VAT and statutory annual reporting for enterprises in Elland, Ainley Top, and Lowfields Business Park.",
    localEconomyOverview: "Elland hosts one of West Yorkshire’s premier commercial centres: Lowfields Business Park, alongside a dense concentration of manufacturing, distribution, printing, and automotive service companies. Our accountants provide the robust financial reporting, cash-flow modelling, and statutory year-end filing that Elland’s fast-moving enterprises require.",
    industriesServed: [
      "Enterprises in Lowfields Business Park",
      "Wholesale distributors and importers",
      "Commercial printing and packaging firms",
      "Automotive garages and repair workshops",
      "Technology and B2B services"
    ],
    localFaqs: [
      {
        q: "Do you support commercial businesses in Lowfields Business Park?",
        a: "Yes, Lowfields is practically on our doorstep (less than 8 minutes away). We support several industrial and commercial companies in Elland with monthly management reporting."
      },
      {
        q: "Can you set up live cloud bank feeds for our company?",
        a: "Yes. We configure automated bank synchronization with all major UK institutions (Barclays, Lloyds, NatWest, HSBC, and digital challenger banks like Starling and Tide)."
      },
      {
        q: "What is your turnaround time for year-end statutory accounts?",
        a: "For businesses with reconciled monthly bookkeeping, our typical turnaround for statutory draft accounts is 5 to 10 working days."
      }
    ]
  },
  {
    slug: "holmfirth",
    town: "Holmfirth",
    areaName: "Holmfirth & The Holme Valley",
    postcodes: ["HD9"],
    distanceFromOffice: "6 miles (approx. 14 minutes via Woodhead Rd / Meltham Rd)",
    travelDescription: "Direct 14-minute scenic journey along Meltham Road or Woodhead Road connecting the Holme Valley straight to our Crosland Moor office.",
    heroTitle: "Accountancy Services for Holmfirth & Holme Valley",
    metaTitle: "Accountants in Holmfirth (HD9) | Prestige Accountancy",
    metaDescription: "Trusted local accountants for Holmfirth hospitality, retail, sole traders and limited companies across the Holme Valley (HD9). Free initial consultation.",
    shortDesc: "Friendly, accessible accountancy, bookkeeping, VAT, and startup advice for hospitality, tourism, creative businesses and trades across Holmfirth.",
    localEconomyOverview: "Famed for its vibrant culture, tourism, independent bistros, artisan makers, and boutique retail, Holmfirth and the Holme Valley possess a unique entrepreneurial ecosystem. We help Holmfirth sole traders and limited companies keep on top of their day-to-day accounts, register for VAT efficiently, and file compliant statutory accounts without stress.",
    industriesServed: [
      "Hospitality, pubs, cafes, and restaurants",
      "Artisans, craft producers, and independent retailers",
      "Holme Valley tradespeople and landscape contractors",
      "Remote professionals and digital creative consultants",
      "Holiday lets and tourism hospitality operators"
    ],
    localFaqs: [
      {
        q: "Do you specialize in hospitality and retail accounting in Holmfirth?",
        a: "Yes. We have deep expertise in EPOS till integrations, cash reconciliation, stock accounting, and VAT calculations for cafes, pubs, and independent retail shops."
      },
      {
        q: "I am a sole trader in Holmfirth; do you assist with bookkeeping?",
        a: "Yes, our sole trader bookkeeping packages start from just £120/month, ensuring your business expenses and allowable deductions are accurately tracked throughout the year."
      },
      {
        q: "Can I meet with an accountant on Saturdays or after hours?",
        a: "We offer flexible consultation appointments by prior arrangement for busy business owners who cannot step away from operations during peak daytime hours."
      }
    ]
  },
  {
    slug: "dewsbury",
    town: "Dewsbury",
    areaName: "Dewsbury & Heavy Woollen District",
    postcodes: ["WF12", "WF13"],
    distanceFromOffice: "9 miles (approx. 18 minutes via Leeds Rd / A644)",
    travelDescription: "Straightforward 18-minute drive via the A644 or A62 Leeds Road into Huddersfield. Easily accessible with dedicated on-site parking.",
    heroTitle: "Accountants for Dewsbury & Heavy Woollen District",
    metaTitle: "Accountants in Dewsbury (WF12, WF13) | Prestige Accountancy",
    metaDescription: "Dedicated accountancy, CIS, VAT and business startup support for Dewsbury and Batley companies. Multilingual support (English, Urdu, Punjabi).",
    shortDesc: "Professional accountancy, CIS registration, VAT compliance, and corporate structuring for Dewsbury businesses, contractors, and family firms.",
    localEconomyOverview: "Dewsbury and the Heavy Woollen District have an industrious commercial base spanning textile manufacturing, bed and mattress fabrication, vehicle logistics, trade wholesaling, and independent family enterprises. Prestige Accountancy provides culturally attuned, multilingual accounting guidance (English, Urdu, Punjabi) with rock-solid compliance.",
    industriesServed: [
      "Textile, mattress, and upholstery manufacturers",
      "Wholesale traders and international import/export",
      "Construction, joinery, and building contractors",
      "Commercial transport and delivery fleets",
      "Family-owned retail and hospitality enterprises"
    ],
    localFaqs: [
      {
        q: "Do you provide multilingual support for Dewsbury business owners?",
        a: "Yes! Our team fluently communicates in English, Urdu, and Punjabi, ensuring complex UK tax and Companies House compliance is explained clearly in your language of choice."
      },
      {
        q: "Can you help our Dewsbury manufacturing business with VAT and MTD?",
        a: "Yes. We manage high-volume quarterly VAT submissions, import VAT reverse charges, and Making Tax Digital compliance for manufacturing and wholesale clients."
      },
      {
        q: "Do you assist with new limited company formations in Dewsbury?",
        a: "Yes. We handle company registration with Companies House within 24 hours, alongside share capital structuring, Articles of Association, and business bank account introduction."
      }
    ]
  }
];
