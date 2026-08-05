import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import styles from "./product.module.css";
import { CollectionCampaign, SiteFooter, SiteHeader } from "../../site-sections";

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

    <SiteHeader />

    <main className={styles.page}>
      <nav className={`${styles.breadcrumb} container-wide`} aria-label="Sayfa yolu">
        <Link href="/">Ana Sayfa</Link><span>/</span><Link href="/forma-tasarla/hali-saha-formasi-tasarla">Halı Saha Formaları</Link><span>/</span><span>{productName}</span>
      </nav>

      <section className={`${styles.productHero} container-wide`}>
        <div className={styles.gallery} aria-label="Ürün görselleri">
          <figure className={`${styles.productPhoto} ${styles.mainPhoto}`}>
            <Image src={productImage} alt={`${productName} forma, şort ve çorap takımı`} fill priority sizes="(max-width: 900px) 100vw, 55vw" />
          </figure>
        </div>

        <div className={styles.summary}>
          <p className={styles.eyebrow}>TAKIMA ÖZEL HALI SAHA FORMASI</p>
          <h1>{productName}</h1>
          <div className={styles.price}>450 TL <small>/ ADET</small></div>
          <p className={styles.shortDescription}>Beyaz zemin üzerine siyah, kırmızı ve sarı şimşek detaylarıyla tasarlanan bu model; takımınıza özel isim, numara, logo ve sponsor baskılarıyla üretilir.</p>

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

      <section className={`${styles.productDetails} container-wide`} aria-labelledby="product-details-title">
        <div className={styles.productDetailsHeading}>
          <p>ÜRÜN BİLGİLERİ</p>
          <h2 id="product-details-title">Ürün Detayları</h2>
        </div>
        <div className={styles.productDetailsGrid}>
          <article><span>01</span><h3>Tasarıma Özel Üretim</h3><p>Forma ve şort takımı; kulüp renkleri, oyuncu isimleri, numaralar, takım arması ve sponsor logolarıyla size özel hazırlanır.</p></article>
          <article><span>02</span><h3>Kumaş ve Baskı</h3><p>Nefes alan, hafif ve hızlı kuruyan spor kumaşı kullanılır. Sublimasyon baskı çatlama, soyulma ve renk atmasına karşı dayanıklıdır.</p></article>
          <article><span>03</span><h3>Sipariş ve Üretim</h3><p>Takım detayları alındıktan sonra dijital tasarım hazırlanır. Tasarım onayınızın ardından üretim ve kalite kontrol süreci başlar.</p></article>
          <article><span>04</span><h3>Beden ve Takım Adedi</h3><p>Çocuk ve yetişkin bedenleri üretilebilir. Takım adedi, beden listesi ve özel ölçü talepleri sipariş öncesinde netleştirilir.</p></article>
        </div>
      </section>

      <section className={styles.productDescription} aria-labelledby="product-description-title">
        <div className="container-wide">
          <p className={styles.descriptionEyebrow}>DETAYLI ÜRÜN AÇIKLAMASI</p>
          <h2 id="product-description-title">Almanya Şimşek Desenli Halı Saha Forması Yaptırma</h2>
          <p className={styles.descriptionLead}>Takımınızın sahada tek bir kimlikle görünmesini sağlayan Almanya beyaz şimşek desenli halı saha forması; modern çizgileri, kişiselleştirilebilir baskıları ve maç boyunca konfor sunan kumaş yapısıyla takım siparişleri için hazırlanır.</p>

          <div className={styles.descriptionColumns}>
            <article>
              <h3>Takımınıza Özel Halı Saha Forması</h3>
              <p>Bu model beyaz zemin üzerine siyah, kırmızı ve sarı geçişlerle oluşturulan dinamik bir tasarıma sahiptir. Amatör futbol takımları, arkadaş grupları, okul ekipleri, şirket turnuvaları ve düzenli maç yapan kulüpler için üretilebilir. Hazır bir modeli doğrudan kullanabilir veya renkleri takım kimliğinize göre değiştirebilirsiniz.</p>
              <p>Profesyonel görünümlü bir <Link href="/forma-tasarla/hali-saha-formasi-tasarla">halı saha forması</Link> için takım arması, oyuncu ismi, forma numarası ve sponsor logoları tasarım üzerinde dengeli biçimde konumlandırılır. Böylece bütün oyuncular aynı görsel dili taşırken her forma kişiye özel bilgilerle hazırlanır.</p>
            </article>

            <article>
              <h3>Forma Yaptırma Süreci Nasıl İlerler?</h3>
              <p><Link href="/forma-tasarla/takim-formasi-tasarla">Forma yaptırma</Link> süreci takım adedi, renk tercihleri, beden listesi, logo dosyaları ve teslim tarihi bilgilerinin paylaşılmasıyla başlar. Bu bilgiler doğrultusunda dijital ön çalışma hazırlanır ve üretime geçilmeden önce takım yetkilisinin onayına sunulur.</p>
              <p>Onaylanan tasarım oyuncu bedenlerine göre üretim planına alınır. Baskı, dikim ve kalite kontrol aşamalarının ardından formalar teslimata hazırlanır. İsim ve numaraların doğru eşleşmesi için sipariş listesinin üretim öncesinde kontrol edilmesi önemlidir.</p>
            </article>

            <article>
              <h3>Forma Tasarla: Renk, Logo ve Baskı Seçenekleri</h3>
              <p>Kendi takımınız için <Link href="/forma-tasarla/futbol-formasi-tasarla">forma tasarla</Link> seçeneğini kullanırken ana renk, yardımcı renk, desen yoğunluğu, yaka biçimi ve kol detayları değiştirilebilir. Takım logosunun yanında lig, turnuva veya sponsor logoları da tasarıma eklenebilir.</p>
              <p>Sublimasyon baskı tekniğinde renk ve desen kumaşın yapısına işlendiği için baskı yüzeyde ağırlık oluşturmaz. Bu yöntem özellikle çok renkli, degrade geçişli ve şimşek desenli futbol formalarında daha özgür bir tasarım alanı sağlar.</p>
            </article>

            <article>
              <h3>Konforlu Kumaş ve Uzun Ömürlü Kullanım</h3>
              <p>Hafif polyester spor kumaşı hareket sırasında vücudun rahat kalmasına yardımcı olur. Nefes alan doku ve hızlı kuruma özelliği, yoğun maç temposunda formanın ağırlaşmasını azaltır. Kumaş seçimi çocuk ve yetişkin takımları için kullanım ihtiyacına göre planlanabilir.</p>
              <p>Formaların kullanım ömrünü korumak için düşük sıcaklıkta, ters çevrilerek yıkanması ve doğrudan yüksek ısı uygulanmaması önerilir. Bütçe odaklı alternatifler için <Link href="/forma-tasarla/ucuz-forma-tasarla">ucuz forma tasarla</Link> sayfamızı da inceleyebilirsiniz.</p>
            </article>
          </div>

          <div className={styles.descriptionCta}>
            <h3>Almanya Şimşek Desenli Formayı Takımınıza Uyarlayalım</h3>
            <p>Takım adedinizi, beden listenizi ve renk tercihlerinizi paylaşın; dijital forma tasarımınızı hazırlayalım.</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">WHATSAPP&apos;TAN BİLGİ AL</a>
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

    <CollectionCampaign orderHref={whatsappUrl} />
    <SiteFooter />
  </>;
}
