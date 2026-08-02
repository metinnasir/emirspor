import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://emirspor.com/sitemap.xml", host: "https://emirspor.com" };
}
