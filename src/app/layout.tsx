import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { siteConfig } from "@/data/siteData";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#00368C",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://prestigeaccountancy.com"),
  alternates: {
    canonical: "https://prestigeaccountancy.com",
  },
  title: {
    default: "Accountants in Huddersfield & UK-Wide | Prestige Accountancy Services",
    template: "%s | Prestige Accountancy"
  },
  description: "Expert accountancy, bookkeeping, VAT & business support for individuals, companies, startups and charities. Clear numbers, plain-English advice. Free consultation.",
  keywords: [
    "accountants Huddersfield",
    "accountancy services UK",
    "Huddersfield accountants",
    "bookkeeping services",
    "VAT returns MTD",
    "CIS accountants",
    "charity accounts",
    "annual accounts filing"
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://prestigeaccountancy.com",
    siteName: siteConfig.name,
    title: "Accountants in Huddersfield & UK-Wide | Prestige Accountancy",
    description: "Guardians of Your Finances. Tailored accountancy, bookkeeping, VAT compliance, and corporate structuring for UK businesses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prestige Accountancy Services Ltd - Guardians of Your Finances"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Prestige Accountancy Services Ltd | Guardians of Your Finances",
    description: "Expert accountancy, bookkeeping, VAT & business support across Huddersfield and the UK.",
    images: ["/og-image.png"]
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" }
    ],
    apple: [
      { url: "/icon.png" }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["AccountingService", "LocalBusiness", "Organization"],
        "@id": "https://prestigeaccountancy.com/#organization",
        "name": siteConfig.name,
        "legalName": siteConfig.name,
        "url": "https://prestigeaccountancy.com",
        "logo": "https://prestigeaccountancy.com/prestige-logo.png",
        "description": "Prestige Accountancy Services Ltd provides professional bookkeeping, annual statutory accounts, VAT, CIS, charity accounts, and corporate structuring across Huddersfield and the UK.",
        "telephone": siteConfig.phone,
        "email": siteConfig.email,
        "priceRange": "££",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": siteConfig.phone,
            "contactType": "client support & general enquiries",
            "areaServed": "GB",
            "availableLanguage": ["English", "Urdu", "Punjabi"]
          }
        ],
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Huddersfield"
          },
          {
            "@type": "AdministrativeArea",
            "name": "West Yorkshire"
          },
          {
            "@type": "Country",
            "name": "United Kingdom"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "48",
          "bestRating": "5",
          "worstRating": "1"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "9 Blackmoorfoot Road, Crosland Moor",
          "addressLocality": "Huddersfield",
          "addressRegion": "West Yorkshire",
          "postalCode": "HD4 5AQ",
          "addressCountry": "GB"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "53.6330",
          "longitude": "-1.8150"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "17:30"
          }
        ],
        "sameAs": [
          siteConfig.socials.facebook,
          siteConfig.socials.instagram,
          siteConfig.socials.linkedin,
          siteConfig.socials.tiktok
        ]
      }
    ]
  };

  return (
    <html lang="en-GB" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 font-sans antialiased selection:bg-[#00368C] selection:text-white">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
