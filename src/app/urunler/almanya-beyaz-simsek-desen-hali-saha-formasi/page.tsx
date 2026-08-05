import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import styles from "./product.module.css";

const productName = "Almanya Beyaz Şimşek Desen Halı Saha Forması";
const productUrl = "https://emirspor.com/urunler/almanya-beyaz-simsek-desen-hali-saha-formasi";
const productImage = "/urunler/almanya-beyaz-simsek-desen-hali-saha-formasi.png";
const whatsappUrl = "https://wa.me/905444407767?text=Merhaba%2C%20Almanya%20Beyaz%20%C5%9Eim%C5%9Fek%20Desen%20Hal%C4%B1%20Saha%20Formas%C4%B1%20hakk%C4%B1nda%20sipari%C5%9F%20vermek%20istiyorum";

export const metadata: Metadata = {
  title: "Almanya Beyaz Şimşek Desen Halı Saha Forması",
  description: "Almanya beyaz şimşek desenli halı saha forması; forma, şort, isim, numara, logo ve sponsor baskısı seçenekleriyle takıma özel üretilir.",
  alternates: { canonical: "/urunler/almanya-beyaz-simsek-desen-hali-saha-formasi" },
  openGraph: {
    type: "website",
    url: productUrl,
    title: productName,
    description: "Takımınıza özel beyaz, siyah, kırmızı ve sarı detaylı halı saha forma takımı.",
    images: [{ url: productImage, width: 1369, height: 1542, alt: productName }],
  },
};

const relatedProducts = [
  { name: "Bordo Beyaz Özel Tasarım Forma", image: "/urunler/slider/hali-saha-formasi-slide-model-1.png" },
  { name: "Petrol Yeşili Dalga Desen Forma", image: "/urunler/slider/hali-saha-formasi-slide-model-2.png" },
  { name: "Kırmızı Lacivert Maç Forması", image: "/urunler/slider/hali-saha-formasi-slide-model-3.png" },
];

export default function ProductPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: productName,
    image: [`https://emirspor.com${productImage}`],
    description: "Takıma özel üretilen Almanya beyaz şimşek desen halı saha forması. İsim, numara, arma ve sponsor baskıları uygulanabilir.",
    sku: "EMS-ALM-001",
    brand: { "@type": "Brand", name: "Emir Spor" },
    offers: {
      "@type": "Offer",
      url: productUrl,
      priceCurrency: "TRY",
      price: "450",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  };

  return <>
    <Script id="product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

    <header className={styles.header}>
      <div className={styles.topline}>HALI SAHA FORMASI TASARLA · TAKIMINA ÖZEL ÜRETİM</div>
      <div className={`${styles.nav} container-wide`}>
        <Link href="/" aria-label="Emir Spor ana sayfa"><Image src="/portfolyo/logo/emirspor-logo.png" alt="Emir Spor" width={154} height={45} priority /></Link>
        <nav aria-label="Ürün sayfası menüsü">
          <Link href="/#urunler">FUTBOL</Link>
          <Link href="/forma-tasarla/hali-saha-formasi-tasarla">HALI SAHA</Link>
          <Link href="/#surec">NASIL ÇALIŞIR?</Link>
          <Link href="/#recent-posts-title">BLOG</Link>
        </nav>
        <a className={styles.headerWhatsapp} href={whatsappUrl} target="_blank" rel="noopener noreferrer">WHATSAPP</a>
      </div>
    </header>

    <main className={styles.page}>
      <nav className={`${styles.breadcrumb} container-wide`} aria-label="Sayfa yolu">
        <Link href="/">Ana Sayfa</Link><span>/</span><Link href="/forma-tasarla/hali-saha-formasi-tasarla">Halı Saha Formaları</Link><span>/</span><span>{productName}</span>
      </nav>

      <section className={`${styles.productHero} container-wide`}>
        <div className={styles.gallery} aria-label="Ürün görselleri">
          <figure className={`${styles.productPhoto} ${styles.mainPhoto}`}>
            <Image src={productImage} alt={`${productName} forma, şort ve çorap takımı`} fill priority sizes="(max-width: 900px) 100vw, 55vw" />
          </figure>
          <figure className={`${styles.productPhoto} ${styles.detailFront}`}>
            <Image src={productImage} alt="Almanya şimşek desen formasının ön görünümü" fill sizes="(max-width: 900px) 50vw, 27vw" />
          </figure>
          <figure className={`${styles.productPhoto} ${styles.detailBack}`}>
            <Image src={productImage} alt="İsim ve numara baskılı forma ile şort detayı" fill sizes="(max-width: 900px) 50vw, 27vw" />
          </figure>
        </div>

        <div className={styles.summary}>
          <p className={styles.eyebrow}>TAKIMA ÖZEL HALI SAHA FORMASI</p>
          <h1>{productName}</h1>
          <div className={styles.price}>450 TL <small>/ ADET</small></div>
          <p className={styles.shortDescription}>Beyaz zemin üzerine siyah, kırmızı ve sarı şimşek detaylarıyla tasarlanan bu model; takımınıza özel isim, numara, logo ve sponsor baskılarıyla üretilir.</p>

          <div className={styles.included}>
            <strong>Fiyata dahil olanlar</strong>
            <ul><li>Forma ve şort takımı</li><li>Oyuncu ismi ve numarası</li><li>Takım logosu ve sponsor baskıları</li><li>Tasarım desteği</li></ul>
          </div>

          <div className={styles.sizeBlock}>
            <span>Beden seçenekleri</span>
            <div><b>XS</b><b>S</b><b>M</b><b>L</b><b>XL</b><b>2XL</b></div>
          </div>

          <a className={styles.whatsappButton} href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16.04 3A12.87 12.87 0 0 0 5 22.49L3.28 29l6.67-1.75A12.96 12.96 0 1 0 16.04 3Zm0 23.58a10.7 10.7 0 0 1-5.46-1.49l-.39-.23-3.96 1.04 1.06-3.86-.25-.4a10.66 10.66 0 1 1 9 4.94Zm5.85-7.99c-.32-.16-1.9-.94-2.2-1.05-.29-.11-.5-.16-.71.16-.21.32-.82 1.05-1 1.26-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59a9.62 9.62 0 0 1-1.78-2.21c-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.64 0 1.56 1.14 3.07 1.3 3.28.16.21 2.24 3.42 5.42 4.79.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.9-.77 2.17-1.52.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z" /></svg>
            WHATSAPP&apos;TAN SİPARİŞ VER
          </a>
          <p className={styles.orderNote}>Sipariş öncesinde takım adedi, beden listesi ve teslim tarihi WhatsApp üzerinden netleştirilir.</p>

          <dl className={styles.meta}>
            <div><dt>Ürün kodu</dt><dd>EMS-ALM-001</dd></div>
            <div><dt>Kategori</dt><dd>Halı Saha Forması</dd></div>
            <div><dt>Üretim</dt><dd>Takıma özel</dd></div>
          </dl>
        </div>
      </section>

      <section className={`${styles.details} container-wide`}>
        <div className={styles.detailsIntro}>
          <p>ÜRÜN DETAYLARI</p>
          <h2>Sahada hafif, görünümde güçlü.</h2>
          <p>Almanya şimşek desen halı saha forması, takım bütünlüğünü öne çıkaran modern grafik yapısı ve maç boyunca konfor sunan spor kumaşıyla hazırlanır.</p>
        </div>
        <div className={styles.accordions}>
          <details open><summary>Ürün açıklaması</summary><p>Forma ve şorttan oluşan takım, kulübünüzün renklerine göre uyarlanabilir. Oyuncu isimleri, numaralar, takım arması ve sponsor logoları tasarıma dahil edilir.</p></details>
          <details><summary>Kumaş ve baskı özellikleri</summary><p>Nefes alan, hafif ve hızlı kuruyan polyester spor kumaşı kullanılır. Sublimasyon baskı kumaşın dokusuna işlendiği için çatlama, soyulma ve renk atması yapmaz.</p></details>
          <details><summary>Sipariş ve üretim süreci</summary><p>Detaylar alındıktan sonra dijital tasarım hazırlanır. Onayınızın ardından bedenlere göre üretim, kalite kontrol ve teslimat süreci başlatılır.</p></details>
          <details><summary>Beden ve takım adedi</summary><p>Çocuk ve yetişkin bedenleri hazırlanabilir. Takım adedi ve özel ölçü talepleri için WhatsApp üzerinden bilgi alabilirsiniz.</p></details>
        </div>
      </section>

      <section className={styles.seoContent}>
        <div className="container-wide">
          <h2>Almanya Şimşek Desenli Halı Saha Forması Yaptırma</h2>
          <div>
            <p>Takımınız için dikkat çekici ve profesyonel bir görünüm arıyorsanız Almanya beyaz şimşek desenli halı saha forması, güçlü renk kontrastı ve kişiselleştirilebilir yapısıyla ideal bir seçenektir. Model; amatör futbol takımları, şirket turnuvaları, okul ekipleri ve düzenli halı saha grupları için takım halinde üretilir.</p>
            <p>Her oyuncu için farklı isim, numara ve beden uygulanabilir. Takım logosu ile sponsor baskıları tasarıma ücret eklenmeden yerleştirilebilir. Sipariş öncesinde hazırlanan dijital forma tasarımını onayladıktan sonra üretime geçilir.</p>
          </div>
        </div>
      </section>

      <section className={`${styles.related} container-wide`}>
        <div className={styles.relatedHeading}><p>BENZER MODELLER</p><h2>Bunları da inceleyin</h2></div>
        <div className={styles.relatedGrid}>
          {relatedProducts.map((product) => <article key={product.name}>
            <div><Image src={product.image} alt={product.name} fill sizes="(max-width: 600px) 100vw, 33vw" /></div>
            <h3>{product.name}</h3><span>450 TL</span>
          </article>)}
        </div>
      </section>
    </main>

    <footer className={styles.footer}>
      <div className="container-wide"><Image src="/portfolyo/logo/emirspor-logo.png" alt="Emir Spor" width={170} height={50} /><p>Takımınıza özel halı saha forması tasarımı ve üretimi.</p><Link href="/">ANA SAYFAYA DÖN</Link></div>
    </footer>
  </>;
}
