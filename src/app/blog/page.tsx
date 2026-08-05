import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import { SiteFooter, SiteHeader } from "../site-sections";
import BlogList, { type BlogPost } from "./blog-list";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  title: "Forma Tasarımı ve Halı Saha Forması Blogu",
  description: "Halı saha forması, futbol forması yaptırma, forma tasarlama, sublimasyon baskı, kumaş seçimi ve takım siparişi hakkında uzman rehberleri okuyun.",
  alternates: { canonical: "/blog" },
  openGraph: { title: "Emir Spor Forma Blogu", description: "Takım forması tasarlama ve forma yaptırma rehberleri.", url: "/blog", type: "website" },
};

const content = [
  ["Halı Saha Forması Nasıl Tasarlanır?", "Takım renkleri, forma deseni, logo, isim ve numara yerleşimiyle etkili bir halı saha forması tasarlamanın adımları.", "FORMA TASARIMI"],
  ["Forma Yaptırma Rehberi", "Takım adedi, beden listesi, kumaş seçimi ve teslim sürecine kadar forma siparişi verirken bilmeniz gerekenler.", "FORMA YAPTIRMA"],
  ["Sublimasyon Forma Nedir?", "Solmayan renk ve sınırsız desen avantajı sunan sublimasyon baskılı formaların üretim yöntemini yakından tanıyın.", "ÜRETİM"],
  ["Halı Saha Forması Fiyatları", "Forma fiyatını belirleyen kumaş, baskı, takım adedi ve kişiselleştirme seçeneklerini karşılaştırın.", "FİYAT REHBERİ"],
  ["Takım Formasında Kumaş Seçimi", "Nefes alan, hafif ve hızlı kuruyan spor kumaşları arasından takımınız için doğru seçimi yapın.", "KUMAŞ"],
  ["İsimli Forma Tasarlama Önerileri", "Oyuncu isimleri ve forma numaralarının okunaklı, dengeli ve estetik yerleşimi için tasarım ipuçları.", "FORMA TASARIMI"],
  ["Futbol Forması Beden Tablosu", "Çocuk ve yetişkin oyuncular için doğru forma bedenini belirlemenin pratik yolları.", "BEDEN REHBERİ"],
  ["Takım Logosu Formaya Nasıl Eklenir?", "Arma dosyası hazırlığından baskı konumuna kadar profesyonel takım logosu kullanımını öğrenin.", "BASKI"],
  ["Sponsor Baskılı Forma Rehberi", "Sponsor logolarını forma tasarımına marka görünürlüğünü koruyarak yerleştirmenin kuralları.", "BASKI"],
  ["Ucuz Forma Yaptırırken Nelere Dikkat Edilir?", "Bütçeyi korurken kumaş ve üretim kalitesinden ödün vermemek için kontrol edilmesi gereken noktalar.", "SATIN ALMA"],
  ["Okul Takımları İçin Forma Tasarımı", "Okul renklerini ve kurumsal kimliği sahaya taşıyan öğrenci takımı formaları için öneriler.", "FORMA TASARIMI"],
  ["Forma ve Şort Takımı Nasıl Hazırlanır?", "Forma üstü ile şortun renk, numara ve desen bütünlüğünü doğru planlama yöntemleri.", "TAKIM SETİ"],
  ["Futbol Forması Yıkama Talimatları", "Sublimasyon baskılı formaların rengini ve kumaş yapısını uzun süre koruyacak bakım önerileri.", "BAKIM"],
  ["Turnuva İçin Forma Siparişi", "Teslim tarihini kaçırmadan takım listesi, tasarım onayı ve üretim sürecini planlayın.", "SİPARİŞ"],
  ["Yeni Sezon Forma Trendleri", "Modern desenler, güçlü renk geçişleri ve yeni nesil takım forması tasarım yaklaşımlarını keşfedin.", "TRENDLER"],
] as const;

const posts: BlogPost[] = content.map((item, index) => ({ id: index + 1, title: item[0], summary: item[1], category: item[2], date: `${String((index % 28) + 1).padStart(2, "0")} AĞUSTOS 2026`, image: `/portfolyo/musteriler/${String((index % 15) + 1).padStart(2, "0")}.webp` }));

export default function BlogPage() {
  const schema = { "@context": "https://schema.org", "@type": "Blog", name: "Emir Spor Forma Blogu", url: "https://emirspor.com/blog", description: metadata.description, blogPost: posts.map((post) => ({ "@type": "BlogPosting", headline: post.title, description: post.summary })) };
  return <><Script id="blog-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><SiteHeader /><main>
    <section className={styles.blogHero} aria-label="Emir Spor blog"><Image src="/portfolyo/banner/fikirden-sahaya-stadyum.png" alt="Forma tasarımı ve futbol forması blogu" fill priority sizes="100vw" /><span className={styles.heroLabel}>EMİR SPOR · FORMA REHBERİ</span></section>
    <section className={`${styles.intro} container-wide`}><h1>Forma Tasarımı ve Halı Saha Forması Blogu</h1><p>Forma tasarla sürecinden kumaş seçimine, halı saha forması fiyatlarından takım siparişine kadar sahaya çıkmadan önce ihtiyaç duyacağınız güncel ve anlaşılır rehberler.</p></section>
    <section className={`${styles.catalog} container-wide`} aria-label="Blog yazıları"><BlogList posts={posts} /></section>
  </main><SiteFooter /></>;
}
