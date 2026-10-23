import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, siteConfig } from "@/data/siteData";
import Breadcrumbs from "@/components/Breadcrumbs";
import { 
  Clock, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  Award,
  ShieldCheck
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-static";

export async function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: {
      absolute: `${post.title} | Prestige Accountancy`,
    },
    description: post.metaDescription,
    alternates: {
      canonical: `https://prestigeaccountancy.com/insights/${slug}`,
    },
    openGraph: {
      title: `${post.title} | Prestige Accountancy`,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedDate,
      authors: ["Muhammad Mujahid"],
      url: `https://prestigeaccountancy.com/insights/${slug}`,
      images: ["/og-image.png"]
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.summary,
    "datePublished": post.publishedDate,
    "image": "https://prestigeaccountancy.com/og-image.png",
    "author": {
      "@type": "Person",
      "name": "Muhammad Mujahid",
      "jobTitle": "Managing Director",
      "worksFor": {
        "@type": "AccountingService",
        "name": siteConfig.name
      }
    },
    "publisher": {
      "@type": "AccountingService",
      "name": siteConfig.name,
      "logo": {
        "@type": "ImageObject",
        "url": "https://prestigeaccountancy.com/prestige-logo.png"
      }
    },
    "mainEntityOfPage": `https://prestigeaccountancy.com/insights/${post.slug}`
  };

  const otherPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Header & Breadcrumb */}
      <section className="bg-gradient-to-b from-[#EBF3FF] to-white py-12 lg:py-16 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <Breadcrumbs 
            items={[
              { label: "Insights", href: "/insights" },
              { label: post.title }
            ]}
            className="mb-4"
          />

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-3">
            <span className="font-bold text-[#00368C] bg-blue-100/70 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.publishedDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readingTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {post.title}
          </h1>

          {/* Author Bar */}
          <div className="flex items-center gap-3 pt-6 border-t border-slate-200 mt-6 text-xs text-slate-600">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
              <Image 
                src="/images/author-mujahid.jpg" 
                alt="Muhammad Mujahid" 
                fill 
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <span>Muhammad Mujahid</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full">
                  Verified Practice Lead
                </span>
              </div>
              <div className="text-slate-500 text-[11px]">Managing Director, Prestige Accountancy Services Ltd</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Article Body */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          
          {/* AEO Fast-Answer Summary Box */}
          <div className="bg-blue-50/80 border-l-4 border-[#00368C] p-6 rounded-r-xl mb-10">
            <h2 className="text-xs uppercase font-extrabold text-[#00368C] tracking-wider mb-2">
              Executive Summary &amp; Direct Answer
            </h2>
            <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
              {post.summary}
            </p>
          </div>

          {/* Key Takeaways */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 mb-10">
            <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>Key Compliance Takeaways</span>
            </h3>
            <ul className="space-y-2.5">
              {post.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Paragraphs */}
          <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed text-base">
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Author Bio Box for E-E-A-T */}
          <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-md shrink-0">
              <Image 
                src="/images/author-mujahid.jpg" 
                alt="Muhammad Mujahid" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="space-y-1.5 text-center sm:text-left">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <h4 className="text-base font-bold text-slate-900">
                  About Muhammad Mujahid
                </h4>
                <span className="text-[11px] font-semibold text-[#00368C] bg-blue-100/70 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <Award className="w-3 h-3 text-[#00368C]" />
                  <span>Practice Director</span>
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Muhammad Mujahid leads Prestige Accountancy Services Ltd, providing statutory compliance, cloud bookkeeping, VAT returns and business structuring for UK companies, sole traders and non-profits across Huddersfield and nationwide.
              </p>
              <div className="text-[11px] text-slate-500 pt-1">
                📍 9 Blackmoorfoot Road, Huddersfield, HD4 5AQ • Tel: {siteConfig.phone}
              </div>
            </div>
          </div>

          {/* Practice Action CTA Box */}
          <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-[#00368C] to-[#0A4BB5] text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-xl font-bold">
                Need Professional Assistance With This?
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 max-w-md">
                Our accountants can review your filing schedule, set up your cloud software and eliminate compliance stress.
              </p>
            </div>
            <Link
              href="/contact"
              className="bg-white hover:bg-blue-50 text-[#00368C] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow shrink-0 transition-all"
            >
              Book Free Consultation
            </Link>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-10 border-t border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-6">
              More Insights &amp; Updates
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {otherPosts.map((other) => (
                <Link
                  key={other.slug}
                  href={`/insights/${other.slug}`}
                  className="p-5 rounded-xl border border-slate-200 hover:border-[#00368C] hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[10px] font-bold text-[#00368C] uppercase tracking-wider block mb-2">
                      {other.category}
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#00368C] transition-colors leading-snug mb-2">
                      {other.title}
                    </h4>
                  </div>
                  <span className="text-[11px] font-bold text-[#2B7EFE] flex items-center gap-1 mt-3">
                    Read Post <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
