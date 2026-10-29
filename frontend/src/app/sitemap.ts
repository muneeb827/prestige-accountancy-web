import { MetadataRoute } from "next";
import { servicesData, blogPosts, whoWeHelpAudience } from "@/data/siteData";
import { locationsData } from "@/data/locationsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://actvise.co.uk";

  // Static core routes
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/who-we-help",
    "/insights",
    "/resources",
    "/resources/vat-calculator",
    "/resources/compliance-checklist",
    "/contact",
    "/privacy-policy",
    "/cookie-policy",
    "/terms"
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-10-21"),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8
  }));

  // Accountancy services
  const accountancyRoutes = servicesData
    .filter(s => s.category === "accountancy")
    .map(s => ({
      url: `${baseUrl}/services/accountancy/${s.slug}`,
      lastModified: new Date("2026-10-19"),
      changeFrequency: "monthly" as const,
      priority: 0.9
    }));

  // Business services
  const businessRoutes = servicesData
    .filter(s => s.category === "business-services")
    .map(s => ({
      url: `${baseUrl}/services/business-services/${s.slug}`,
      lastModified: new Date("2026-10-19"),
      changeFrequency: "monthly" as const,
      priority: 0.9
    }));

  // Blog posts
  const blogRoutes = blogPosts.map(p => ({
    url: `${baseUrl}/insights/${p.slug}`,
    lastModified: new Date("2026-10-21"),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  // Local West Yorkshire town routes
  const locationRoutes = locationsData.map(l => ({
    url: `${baseUrl}/locations/${l.slug}`,
    lastModified: new Date("2026-10-21"),
    changeFrequency: "monthly" as const,
    priority: 0.85
  }));

  return [
    ...staticRoutes,
    ...accountancyRoutes,
    ...businessRoutes,
    ...locationRoutes,
    ...blogRoutes
  ];
}
