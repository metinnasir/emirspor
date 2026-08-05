import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../site-sections";
import CategoryProducts from "./category-products";
import styles from "./category.module.css";

const categories = {
  "futbol-formalari": { title: "Futbol Formaları", label: "SAHADA TAKIM RUHU", description: "Takımınıza özel renk, logo, isim ve numara seçenekleriyle hazırlanan futbol forması modellerini inceleyin. Nefes alan kumaşlar ve dayanıklı sublimasyon baskıyla maçlara hazır olun." },
} as const;

type CategorySlug = keyof typeof categories;
const images = ["/urunler/almanya-beyaz-simsek-desen-hali-saha-formasi.png", "/urunler/slider/hali-saha-formasi-slide-model-1.png", "/urunler/slider/hali-saha-formasi-slide-model-2.png", "/urunler/slider/hali-saha-formasi-slide-model-3.png"];
const names = ["Almanya Beyaz Şimşek Desen Forma", "Bordo Beyaz Çizgili Forma", "Petrol Yeşili Dalga Desen Forma", "Kırmızı Lacivert Maç Forması", "Siyah Beyaz Deplasman Forması", "Mavi Şimşek Takım Forması"];

export function generateStaticParams() { return Object.keys(categories).map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const category = categories[slug as CategorySlug]; if (!category) return {}; return { title: category.title, description: category.description, alternates: { canonical: `/kategori/${slug}` } }; }

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories[slug as CategorySlug];
  if (!category) notFound();
  const products = Array.from({ length: 30 }, (_, index) => ({ id: index + 1, name: `${names[index % names.length]} ${String(index + 1).padStart(2, "0")}`, price: 450 + (index % 4) * 50, image: images[index % images.length], href: "/urunler/almanya-beyaz-simsek-desen-hali-saha-formasi" }));

  return <><SiteHeader /><main>
    <section className={styles.categoryHero} aria-label={`${category.title} kategori görseli`}><Image src="/portfolyo/banner/ana-sayfa-hero.png" alt={`${category.title} özel tasarım forma modelleri`} fill priority sizes="100vw" /><span className={styles.heroLabel}>{category.label}</span></section>
    <section className={`${styles.intro} container-wide`}><h1>{category.title}</h1><p>{category.description}</p></section>
    <section className={`${styles.catalog} container-wide`} aria-label={`${category.title} ürün listesi`}><CategoryProducts products={products} /></section>
  </main><SiteFooter /></>;
}
