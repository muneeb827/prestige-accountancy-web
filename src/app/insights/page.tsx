import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, siteConfig } from "@/data/siteData";
import Breadcrumbs from "@/components/Breadcrumbs";
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Tag, 
  ChevronRight, 
  Sparkles 
} from "lucide-react";

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
  const categories = [
    "All",
    "Tax & Compliance News",
    "Small Business Tips",
    "Charity Sector Updates",
    "Firm News"
  ];

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
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat, i) => (
              <span
                key={cat}
                className={`text-xs font-semibold px-4 py-2 rounded-full cursor-pointer transition-colors ${i === 0 ? 'bg-[#00368C] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.slug}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span className="font-bold text-[#00368C] bg-blue-50 px-2.5 py-1 rounded-md">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readingTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#00368C] transition-colors leading-snug">
                    <Link href={`/insights/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {post.summary}
                  </p>
                </div>

                <div className="px-6 sm:px-7 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">{post.publishedDate}</span>
                  <Link
                    href={`/insights/${post.slug}`}
                    className="font-bold text-[#00368C] group-hover:text-[#2B7EFE] flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
