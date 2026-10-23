"use client";

import { useState } from "react";
import Link from "next/link";
import { BlogPost } from "@/data/siteData";
import { Clock, ArrowRight, BookOpen, Layers } from "lucide-react";

interface Props {
  posts: BlogPost[];
}

export default function InsightsFilterGrid({ posts }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Tax & Compliance News",
    "Small Business Tips",
    "Charity Sector Updates",
    "Firm News"
  ];

  const filteredPosts = activeCategory === "All"
    ? posts
    : posts.filter(p => p.category === activeCategory);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          const count = cat === "All" 
            ? posts.length 
            : posts.filter(p => p.category === cat).length;

          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-semibold px-4 py-2 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                isActive
                  ? "bg-[#00368C] text-white shadow-md scale-105"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              <span>{cat}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                isActive ? "bg-white/20 text-white" : "bg-slate-200 text-slate-600"
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Filter Status Indicator */}
      <div className="flex items-center justify-between text-xs text-slate-500 mb-6 pb-2 border-b border-slate-100">
        <span>
          Showing <strong className="text-slate-800 font-bold">{filteredPosts.length}</strong> {filteredPosts.length === 1 ? "article" : "articles"}
          {activeCategory !== "All" && (
            <span> in <strong className="text-[#00368C] font-bold">{activeCategory}</strong></span>
          )}
        </span>
        {activeCategory !== "All" && (
          <button
            type="button"
            onClick={() => setActiveCategory("All")}
            className="text-[#00368C] hover:underline font-semibold"
          >
            Reset to All
          </button>
        )}
      </div>

      {/* Posts Grid */}
      {filteredPosts.length === 0 ? (
        <div className="bg-slate-50 rounded-2xl p-12 text-center border border-slate-200 space-y-3">
          <BookOpen className="w-10 h-10 text-slate-400 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">No articles found in this category</h3>
          <p className="text-xs text-slate-500">More guides will be published soon. Check back for updates.</p>
          <button
            type="button"
            onClick={() => setActiveCategory("All")}
            className="mt-2 px-4 py-2 rounded-lg bg-[#00368C] text-white text-xs font-bold"
          >
            View All Articles
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
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
      )}
    </div>
  );
}
