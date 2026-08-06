import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { CollectionCampaign, SiteFooter, SiteHeader } from "../../site-sections";
import { catalogProducts, footballProducts } from "../../product-data";
import styles from "../almanya-beyaz-simsek-desen-hali-saha-formasi/product.module.css";

const baseUrl = "https://emirspor.com";

export function generateStaticParams() {
  return footballProducts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = footballProducts.find((item) => item.slug === slug);
  if (!product) return {};
  const description = `${product.name}, ${product.colors} renkleriyle takımınıza özel isim, numara, logo ve sponsor baskılı olarak üretilir. Fiyatı ${product.price} TL.`;
  return {
    title: `${product.name} | 450 TL`, description,
    keywords: [product.name, "halısaha forması", "forma yaptırma", "forma tasarla", "futbol forması"],
    alternates: { canonical: `/urunler/${slug}` },
    openGraph: { type: "website", url: `${baseUrl}/urunler/${slug}`, title: product.name, description, images: [{ url: product.image, width: 1369, height: 1540, alt: product.name }] },
    twitter: { card: "summary_large_image", title: product.name, description, images: [product.image] },
    robots: { index: true, follow: true },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = footballProducts.find((item) => item.slug === slug);
  if (!product) notFound();
  const productUrl = `${baseUrl}/urunler/${slug}`;
  const whatsappUrl = `https://wa.me/905444407767?text=${encodeURIComponent(`Merhaba, ${product.name} hakkında sipariş vermek istiyorum`)}`;
  const related = catalogProducts.filter((item) => item.slug !== slug).slice(0, 3);
  const description = `${product.name}; ${product.colors} renkleriyle hazırlanan, isim, numara, takım arması ve sponsor baskıları kişiselleştirilebilen özel futbol forması modelidir.`;
  const schema = {
    "@context": "https://schema.org", "@type": "Product", name: product.name,
    image: [`${baseUrl}${product.image}`], description, sku: `EMS-${slug.toUpperCase().slice(0, 18)}`,
    brand: { "@type": "Brand", name: "Emir Spor" }, category: "Futbol Formaları",
    offers: { "@type": "Offer", url: productUrl, priceCurrency: "TRY", price: "450", availability: "https://schema.org/InStock", itemCondition: "https://schema.org/NewCondition" },
  };

  return <>
    <Script id={`product-schema-${slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <SiteHeader />
    <main className={styles.page}>
      <nav className={`${styles.breadcrumb} container-wide`} aria-label="Sayfa yolu">
        <Link href="/">Ana Sayfa</Link><span>/</span><Link href="/kategori/futbol-formalari">Futbol Formaları</Link><span>/</span><span>{product.name}</span>
      </nav>

      <section className={`${styles.productHero} container-wide`}>
        <div className={styles.gallery} aria-label={`${product.name} ürün görseli`}>
          <figure className={`${styles.productPhoto} ${styles.mainPhoto}`}>
            <Image src={product.image} alt={`${product.name} forma, şort ve çorap takımı`} title={`${product.name} ürün görseli`} fill priority sizes="(max-width: 900px) 100vw, 55vw" />
          </figure>
        </div>
        <div className={styles.summary}>
          <p className={styles.eyebrow}>TAKIMA ÖZEL FUTBOL FORMASI</p><h1>{product.name}</h1>
          <div className={styles.price}>{product.price} TL <small>/ ADET</small></div>
          <p className={styles.shortDescription}>{description} Tasarım takım renklerinize göre düzenlenebilir ve üretimden önce onayınıza sunulur.</p>
          <a className={styles.whatsappButton} href={whatsappUrl} target="_blank" rel="noopener noreferrer" title={`${product.name} siparişi için WhatsApp'tan yazın`}>
            <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16.04 3A12.87 12.87 0 0 0 5 22.49L3.28 29l6.67-1.75A12.96 12.96 0 1 0 16.04 3Zm0 23.58a10.7 10.7 0 0 1-5.46-1.49l-.39-.23-3.96 1.04 1.06-3.86-.25-.4a10.66 10.66 0 1 1 9 4.94Zm5.85-7.99c-.32-.16-1.9-.94-2.2-1.05-.29-.11-.5-.16-.71.16-.21.32-.82 1.05-1 1.26-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59a9.62 9.62 0 0 1-1.78-2.21c-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.64 0 1.56 1.14 3.07 1.3 3.28.16.21 2.24 3.42 5.42 4.79.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.9-.77 2.17-1.52.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z" /></svg>
            WHATSAPP&apos;TAN SİPARİŞ VER
          </a>
          <p className={styles.orderNote}>Takım adedi, beden listesi, baskılar ve teslim tarihi sipariş öncesinde netleştirilir.</p>
          <dl className={styles.meta}><div><dt>Fiyat</dt><dd>450 TL</dd></div><div><dt>Kategori</dt><dd>Futbol Formaları</dd></div><div><dt>Üretim</dt><dd>Takıma özel</dd></div></dl>
        </div>
      </section>

      <section className={`${styles.productDetails} container-wide`} aria-labelledby="product-details-title">
        <div className={styles.productDetailsHeading}><p>ÜRÜN BİLGİLERİ</p><h2 id="product-details-title">Ürün Detayları</h2></div>
        <div className={styles.productDetailsGrid}>
          <article><span>01</span><h3>Takıma Özel Tasarım</h3><p>Modelin renkleri, takım arması, oyuncu isimleri, numaralar ve sponsor logoları siparişinize göre düzenlenir.</p></article>
          <article><span>02</span><h3>Sublimasyon Baskı</h3><p>Desen ve renkler kumaşa işlenir; yüzeyde ağırlık oluşturmayan, spor kullanımına uygun kalıcı baskı elde edilir.</p></article>
          <article><span>03</span><h3>Forma ve Şort Seti</h3><p>Üst forma ile şort aynı görsel kimlikte hazırlanır. Çorap ve ek takım parçaları talebe göre değerlendirilir.</p></article>
          <article><span>04</span><h3>Onaylı Üretim</h3><p>Dijital tasarım ve oyuncu listesi kontrol edildikten sonra baskı, dikim ve kalite kontrol süreci başlatılır.</p></article>
        </div>
      </section>

      <section className={styles.productDescription} aria-labelledby="product-description-title"><div className="container-wide">
        <p className={styles.descriptionEyebrow}>DETAYLI ÜRÜN AÇIKLAMASI</p>
        <h2 id="product-description-title">{product.name} ile Takımına Özel Forma Yaptırma</h2>
        <p className={styles.descriptionLead}>{product.name}, {product.colors} renklerinin dengeli kullanıldığı modern bir halısaha forması seçeneğidir. Amatör futbol takımları, okul ekipleri, şirket turnuvaları ve düzenli maç yapan arkadaş grupları için kişiselleştirilebilir.</p>
        <div className={styles.descriptionColumns}>
          <article><h3>Halısaha Forması Nasıl Kişiselleştirilir?</h3><p>Her oyuncu için farklı isim, numara ve beden bilgisi uygulanabilir. Takım arması ve sponsor logoları tasarım bütünlüğünü bozmayacak alanlara yerleştirilir.</p><p>Diğer seçenekler için <Link href="/kategori/futbol-formalari">futbol formaları kategorisini</Link> inceleyebilirsiniz.</p></article>
          <article><h3>Forma Tasarla ve Üretim Onayı</h3><p>Takım renkleri, logolar ve oyuncu listesi paylaşıldıktan sonra dijital çalışma hazırlanır. Yazılı onay alınmadan üretime başlanmaz.</p><p>Sürecin ayrıntıları <Link href="/forma-tasarla/futbol-formasi-tasarla">futbol forması tasarla</Link> rehberinde yer alır.</p></article>
          <article><h3>Forma Yaptırma Fiyatı</h3><p>Bu modelin ürün fiyatı adet başına 450 TL&apos;dir. Toplam sipariş, ek ürünler ve özel uygulamalar WhatsApp görüşmesinde netleştirilir.</p><p>Bütçe planlaması için <Link href="/forma-tasarla/ucuz-forma-tasarla">ucuz forma tasarla</Link> sayfasını okuyabilirsiniz.</p></article>
          <article><h3>Kumaş, Baskı ve Bakım</h3><p>Hafif spor kumaşı hareket rahatlığı sağlar. Ürünün ters çevrilerek düşük sıcaklıkta yıkanması ve baskı yüzeyine doğrudan ütü uygulanmaması önerilir.</p><p>Takım siparişi rehberi için <Link href="/forma-tasarla/hali-saha-formasi-tasarla">halısaha forması tasarla</Link> sayfasına göz atın.</p></article>
        </div>
        <div className={styles.descriptionCta}><h3>{product.name} Modelini Takımınıza Uyarlayalım</h3><p>Takım adedi, renkler, beden listesi ve logoları paylaşın; tasarım çalışmasını başlatalım.</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">WHATSAPP&apos;TAN BİLGİ AL</a></div>
      </div></section>

      <section className={`${styles.related} container-wide`}><div className={styles.relatedHeading}><p>BENZER MODELLER</p><h2>Bunları da inceleyin</h2></div>
        <div className={styles.relatedGrid}>{related.map((item) => <article key={item.slug}><Link href={`/urunler/${item.slug}`}><div><Image src={item.image} alt={item.name} title={item.name} fill sizes="(max-width: 600px) 100vw, 33vw" /></div><h3>{item.name}</h3><span>{item.price} TL</span></Link></article>)}</div>
      </section>
    </main>
    <CollectionCampaign orderHref={whatsappUrl} /><SiteFooter />
  </>;
}
