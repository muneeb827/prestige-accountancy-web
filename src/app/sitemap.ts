import { MetadataRoute } from "next";
import { servicesData, blogPosts, whoWeHelpAudience } from "@/data/siteData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://prestigeaccountancy.com";

  // Static core routes
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/who-we-help",
    "/insights",
    "/resources",
    "/contact",
    "/privacy-policy",
    "/cookie-policy",
    "/terms"
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-10-19"),
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
    lastModified: new Date("2026-10-19"),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [
    ...staticRoutes,
    ...accountancyRoutes,
    ...businessRoutes,
    ...blogRoutes
  ];
}
