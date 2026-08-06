import type { MetadataRoute } from "next";
import { footballProducts } from "./product-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const designPages = [
    "basketbol-formasi-tasarla", "voleybol-formasi-tasarla", "takim-formasi-tasarla",
    "hali-saha-formasi-tasarla", "ucuz-forma-tasarla", "isimli-forma-tasarla",
    "espor-formasi-tasarla", "asker-formasi-tasarla", "tezkere-formasi-tasarla",
    "kaleci-formasi-tasarla", "taraftar-formasi-tasarla", "tenis-formasi-tasarla",
    "bowling-formasi-tasarla",
  ];
  return [
    { url: "https://emirspor.com", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://emirspor.com/blog", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    {
      url: "https://emirspor.com/forma-tasarla/futbol-formasi-tasarla",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: "https://emirspor.com/kategori/futbol-formalari",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://emirspor.com/urunler/almanya-beyaz-simsek-desen-hali-saha-formasi",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...designPages.map((slug) => ({
      url: `https://emirspor.com/forma-tasarla/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...footballProducts.map((product) => ({
      url: `https://emirspor.com/urunler/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];
}
