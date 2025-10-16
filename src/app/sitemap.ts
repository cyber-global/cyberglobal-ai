import { MetadataRoute } from "next";
import { services } from "@/content/services";
import { caseStudies } from "@/content/caseStudies";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://cybergl.ai";
  const now = new Date();
  
  // Main routes
  const mainRoutes = [
    "",
    "/about",
    "/business-impact",
    "/case-studies",
    "/services",
    "/products/pentx",
    "/partners",
    "/contact",
    "/privacy",
    "/terms"
  ];

  // Generate service slugs (for future individual service pages)
  const serviceRoutes = services.map((service) => {
    const slug = service.name.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    return `/services/${slug}`;
  });

  // Generate case study slugs (for future individual case study pages)
  const caseStudyRoutes = caseStudies.map((caseStudy) => {
    const slug = caseStudy.title.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    return `/case-studies/${slug}`;
  });

  // Combine all routes
  const allRoutes = [
    ...mainRoutes,
    // Uncomment when individual service/case study pages are created:
    // ...serviceRoutes,
    // ...caseStudyRoutes,
  ];

  return allRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}


