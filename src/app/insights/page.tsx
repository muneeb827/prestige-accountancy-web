import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, siteConfig } from "@/data/siteData";
import Breadcrumbs from "@/components/Breadcrumbs";
import InsightsFilterGrid from "@/components/InsightsFilterGrid";

export const metadata: Metadata = {
  title: "Accounting & Compliance News, Tips & Updates | Prestige Insights",
  description: "Stay ahead with practical UK accounting guides, Making Tax Digital updates, Companies House deadlines and financial best practices from Prestige Accountancy.",
  alternates: {
    canonical: "https://prestigeaccountancy.com/insights",
  },
  openGraph: {
    title: "Accounting & Compliance Insights | Prestige Accountancy",
    description: "Stay ahead with practical UK accounting guides, Making Tax Digital updates, and financial best practices.",
    url: "https://prestigeaccountancy.com/insights",
    images: ["/og-image.png"]
  }
};

export default function InsightsHubPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Prestige Accountancy Insights & News",
    "description": "Practical guides and updates on UK accounting, VAT, CIS, charity accounts, and business growth.",
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name,
      "logo": "https://prestigeaccountancy.com/prestige-logo.png"
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.summary,
      "datePublished": post.publishedDate,
      "author": {
        "@type": "Person",
        "name": "Muhammad Mujahid"
      },
      "url": `https://prestigeaccountancy.com/insights/${post.slug}`
    }))
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* Header */}
      <section className="bg-gradient-to-b from-[#EBF3FF] to-white py-12 lg:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <Breadcrumbs items={[{ label: "Insights" }]} className="mb-4" />
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00368C] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Knowledge Hub
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Insights — News, Updates &amp; Tips
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              Essential commentary on UK regulatory shifts, HMRC filing deadlines, cloud accounting habits, and business structuring tips.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <InsightsFilterGrid posts={blogPosts} />
        </div>
      </section>
    </div>
  );
}
