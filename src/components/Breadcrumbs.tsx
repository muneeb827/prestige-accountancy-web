import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const fullItems = [
    { label: "Home", href: "/" },
    ...items
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": fullItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      ...(item.href ? { "item": `https://prestigeaccountancy.com${item.href}` } : {})
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav 
        aria-label="Breadcrumb" 
        className={`flex items-center text-xs font-medium text-slate-500 overflow-x-auto py-2 ${className}`}
      >
        <ol className="inline-flex items-center space-x-1.5 sm:space-x-2">
          {fullItems.map((item, index) => {
            const isLast = index === fullItems.length - 1;
            return (
              <li key={index} className="inline-flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 mx-1 shrink-0" aria-hidden="true" />
                )}
                {isLast || !item.href ? (
                  <span 
                    className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-none" 
                    aria-current="page"
                  >
                    {index === 0 && <Home className="w-3.5 h-3.5 inline mr-1 text-slate-400 -mt-0.5" />}
                    {item.label}
                  </span>
                ) : (
                  <Link 
                    href={item.href} 
                    className="text-slate-600 hover:text-[#00368C] transition-colors inline-flex items-center"
                  >
                    {index === 0 && <Home className="w-3.5 h-3.5 mr-1 text-slate-400 -mt-0.5" />}
                    <span>{item.label}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
