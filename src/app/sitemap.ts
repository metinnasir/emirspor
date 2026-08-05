import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://emirspor.com", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
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
  ];
}
