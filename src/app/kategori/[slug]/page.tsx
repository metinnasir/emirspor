import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../site-sections";
import CategoryProducts from "./category-products";
import styles from "./category.module.css";
import { catalogProducts } from "../../product-data";

const categories = {
  "futbol-formalari": { title: "Futbol Formaları", label: "SAHADA TAKIM RUHU", description: "Takımınıza özel renk, logo, isim ve numara seçenekleriyle hazırlanan futbol forması modellerini inceleyin. Nefes alan kumaşlar ve dayanıklı sublimasyon baskıyla maçlara hazır olun." },
} as const;

type CategorySlug = keyof typeof categories;
export function generateStaticParams() { return Object.keys(categories).map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const category = categories[slug as CategorySlug]; if (!category) return {}; return { title: category.title, description: category.description, alternates: { canonical: `/kategori/${slug}` } }; }

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories[slug as CategorySlug];
  if (!category) notFound();
  const products = catalogProducts.map((product, index) => ({ id: index + 1, name: product.name, price: product.price, image: product.image, href: `/urunler/${product.slug}` }));

  return <><SiteHeader /><main>
    <section className={styles.categoryHero} aria-label={`${category.title} kategori görseli`}><Image src="/portfolyo/banner/ana-sayfa-hero.png" alt={`${category.title} özel tasarım forma modelleri`} fill priority sizes="100vw" /><span className={styles.heroLabel}>{category.label}</span></section>
    <section className={`${styles.intro} container-wide`}><h1>{category.title}</h1><p>{category.description}</p></section>
    <section className={`${styles.catalog} container-wide`} aria-label={`${category.title} ürün listesi`}><CategoryProducts products={products} /></section>
  </main><SiteFooter /></>;
}
