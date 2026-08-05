import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { CollectionCampaign, SiteFooter } from "./site-sections";
import HeroSlider from "./hero-slider";
import BrandCarousel from "./brand-carousel";

const products = [
  { name: "Almanya Beyaz Şimşek Desen Halı Saha Forması", tone: "navy", image: "/urunler/almanya-beyaz-simsek-desen-hali-saha-formasi.png", price: "450 TL" },
  { name: "Saha Ateşi", tone: "orange" },
  { name: "Beyaz Deplasman", tone: "white" },
  { name: "Elektrik Mavisi", tone: "blue" },
  { name: "Şampiyon Siyah", tone: "navy" },
  { name: "Turuncu Dinamo", tone: "orange" },
  { name: "Buz Beyazı", tone: "white" },
  { name: "Mavi Fırtına", tone: "blue" },
  { name: "Gece Kartalı", tone: "navy" },
];

const featuredCategories = [
  {
    name: "Futbol Forması",
    image: "/urunler/slider/hali-saha-formasi-slide-model-1.png",
    href: "/forma-tasarla/futbol-formasi-tasarla",
    color: "mint",
  },
  {
    name: "Halı Saha Forması",
    image: "/urunler/slider/hali-saha-formasi-slide-model-2.png",
    href: "/forma-tasarla/hali-saha-formasi-tasarla",
    color: "rose",
  },
  {
    name: "Takım Forması",
    image: "/urunler/slider/hali-saha-formasi-slide-model-3.png",
    href: "/forma-tasarla/takim-formasi-tasarla",
    color: "sand",
  },
];

const customerPhotos = [
  "Mor formalarıyla sahadaki genç futbol takımı",
  "Mavi siyah formalarıyla halı saha takımı",
  "Kişiye özel isimli formasını teslim alan oyuncu",
  "Yeşil beyaz formalarıyla takım soyunma odasında",
  "Siyah beyaz formalarıyla genç futbol takımı",
  "Kırmızı lacivert formalarıyla takım buluşması",
  "Yeşil beyaz formalarıyla sahaya çıkan oyuncular",
  "Beyaz yeşil formalarıyla halı saha takımı",
  "Siyah beyaz formalarıyla çocuk futbol takımı",
  "Siyah beyaz formalarıyla sahadaki genç takım",
  "Üretimi tamamlanan yeşil takım formaları",
  "Pembe beyaz özel tasarım okul forması",
  "Üretimi tamamlanan petrol yeşili takım forması",
  "Paketlenen mor beyaz takım formaları",
  "Üretimi tamamlanan kırmızı yeşil takım forması",
];

const recentPosts = [
  {
    title: "Halı Saha Forması Nasıl Tasarlanır?",
    summary: "Takım renklerinden kumaş seçimine kadar özel halı saha forması tasarlarken dikkat edilmesi gereken temel adımlar.",
    image: "/portfolyo/musteriler/11.webp",
  },
  {
    title: "Sublimasyon Forma Nedir?",
    summary: "Solmayan renkler, sınırsız desen ve uzun ömürlü baskı avantajlarıyla sublimasyon forma üretimini yakından tanıyın.",
    image: "/portfolyo/musteriler/12.webp",
  },
  {
    title: "Takım Forması Yaptırma Rehberi",
    summary: "Beden listesinden logo ve sponsor baskısına kadar takım forması sipariş sürecini doğru planlamanın püf noktaları.",
    image: "/portfolyo/musteriler/13.webp",
  },
  {
    title: "Forma Kumaşı Nasıl Seçilir?",
    summary: "Nefes alan, teri uzaklaştıran ve sahada hareket özgürlüğü sağlayan forma kumaşlarını karşılaştırıyoruz.",
    image: "/portfolyo/musteriler/09.webp",
  },
  {
    title: "İsimli Forma Tasarım Önerileri",
    summary: "Oyuncu ismi, numara, takım arması ve sponsor logolarını dengeli yerleştirmek için kullanabileceğiniz tasarım fikirleri.",
    image: "/portfolyo/musteriler/15.webp",
  },
];

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Emir Spor",
    url: "https://emirspor.com",
    description: "Özel futbol forması ve spor giyim üretimi",
  };

  return <>
    <Script id="organization-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

    <header className="site-header">
      <div className="header-top">
        <h1>Halısaha Forması Tasarla / Ucuz Forma Yaptırma</h1>
      </div>
      <div className="header-nav container-wide">
        <a className="brand nav-brand" href="#" aria-label="Emir Spor ana sayfa"><Image src="/portfolyo/logo/emirspor-logo.png" alt="Emir Spor" width={144} height={42} priority /></a>
        <nav aria-label="Ana menü">
          <a href="#urunler">FUTBOL</a><a href="#urunler">BASKETBOL</a><a href="#urunler">VOLEYBOL</a><a href="#urunler">EŞOFMAN</a><a href="#surec">BLOG</a>
          <details className="design-menu">
            <summary className="design-trigger">FORMA TASARLA</summary>
            <div className="design-dropdown">
              <Link href="/forma-tasarla/futbol-formasi-tasarla">Futbol Forması Tasarla</Link>
              <Link href="/forma-tasarla/basketbol-formasi-tasarla">Basketbol Forması Tasarla</Link>
              <Link href="/forma-tasarla/voleybol-formasi-tasarla">Voleybol Forması Tasarla</Link>
              <Link href="/forma-tasarla/takim-formasi-tasarla">Takım Forması Tasarla</Link>
              <Link href="/forma-tasarla/hali-saha-formasi-tasarla">Halı Saha Forması Tasarla</Link>
              <Link href="/forma-tasarla/ucuz-forma-tasarla">Ucuz Forma Tasarla</Link>
              <Link href="/forma-tasarla/isimli-forma-tasarla">İsimli Forma Tasarla</Link>
            </div>
          </details>
        </nav>
        <div className="nav-actions">
          <div className="socials" aria-label="Sosyal medya">
            <a href="#" aria-label="Facebook" title="Facebook hesabı yakında"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3 0-5 2-5 5v2H6v4h3v7h4v-7h3l1-4h-4V9c0-.7.3-1 1-1Z" /></svg></a>
            <a href="#" aria-label="X" title="X hesabı yakında"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4.3l3.5 4.7L17 4h2l-5.3 6.1L20 20h-4.3l-4.1-5.4L7 20H5l5.7-6.7L5 4Zm3.3 1.7 8.3 12.6h1.2L9.5 5.7H8.3Z" /></svg></a>
            <a href="#" aria-label="Instagram" title="Instagram hesabı yakında"><svg viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm11.3 2.7a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" clipRule="evenodd" /></svg></a>
            <a href="#" aria-label="TikTok" title="TikTok hesabı yakında"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3h3c.2 1.8 1.2 3 3 3.4v3a8 8 0 0 1-3-1v6.1a6.5 6.5 0 1 1-6.5-6.5H12v3.2a3.3 3.3 0 1 0 2 3V3Z" /></svg></a>
          </div>
          <a className="nav-search" href="#urunler" aria-label="Ürünlerde ara" title="Ürünlerde ara"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21 20-5.2-5.2a7.5 7.5 0 1 0-1.4 1.4L20 21l1-1ZM5 10.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z" /></svg></a>
        </div>
      </div>
    </header>

    <main>
      <HeroSlider />

      <section className="service-benefits" aria-label="Alışveriş avantajları">
        <div className="service-benefits-grid container-wide">
          <article className="service-benefit">
            <span className="service-benefit-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48"><path d="M4 11h24v23H14M28 19h8l8 9v6h-6M10 18H2m10 7H5m8 7H8"/><circle cx="17" cy="36" r="4"/><circle cx="34" cy="36" r="4"/></svg>
            </span>
            <div><h3>Ücretsiz Kargo</h3><p>10.000 TL üzeri siparişler için...</p></div>
          </article>
          <article className="service-benefit">
            <span className="service-benefit-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48"><rect x="6" y="12" width="27" height="25" rx="2"/><path d="M12 18h12m-12 7h8M34 8l8 3v8c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10v-8l8-3Z"/><path d="m31 18 2 2 4-5"/></svg>
            </span>
            <div><h3>Güvenli Ödeme</h3><p>Kapıda güvenli ödeme...</p></div>
          </article>
          <article className="service-benefit">
            <span className="service-benefit-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48"><rect x="7" y="15" width="34" height="25" rx="2"/><path d="M13 15V9h20v6M7 23h34"/><circle cx="34" cy="31" r="2"/></svg>
            </span>
            <div><h3>Fiyat Garantisi</h3><p>Tüm baskılar ücretsiz...</p></div>
          </article>
          <article className="service-benefit">
            <span className="service-benefit-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="16"/><circle cx="24" cy="24" r="8"/><path d="m13 13 6 6m10 10 6 6m0-22-6 6M19 29l-6 6"/></svg>
            </span>
            <div><h3>Online Tasarım</h3><p>Ücretsiz tasarım desteği...</p></div>
          </article>
        </div>
      </section>

      <section className="featured-categories" aria-labelledby="featured-categories-title">
        <h2 id="featured-categories-title">Forma Koleksiyonları</h2>
        <div className="featured-category-grid container-wide">
          {featuredCategories.map((category) => (
            <Link className="featured-category" href={category.href} key={category.name}>
              <div className={`featured-category-visual ${category.color}`}>
                <Image
                  src={category.image}
                  alt={`${category.name} modeli`}
                  width={580}
                  height={724}
                  sizes="(max-width: 700px) 86vw, 33vw"
                />
              </div>
              <h3>{category.name}</h3>
              <p>450 TL&apos;den başlayan fiyatlarla</p>
            </Link>
          ))}
        </div>
      </section>

      <CollectionCampaign orderHref="#urunler" />

      <section id="urunler" className="products-section">
        <div className="section-heading">
          <p className="kicker orange">26/27 SEZON</p>
          <h2 className="season-title">Yeni Ürünler</h2>
          <p>En çok tercih edilen halı saha forma modelleri.</p>
        </div>
        <div className="product-grid container-wide">
          {products.map((product, index) => <article className="product" key={product.name}>
            {product.image ? (
              <Link href="/urunler/almanya-beyaz-simsek-desen-hali-saha-formasi" aria-label={`${product.name} ürün sayfasını aç`}>
                <div className="product-image-stage">
                  <Image src={product.image} alt={product.name} width={1369} height={1542} sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw" />
                </div>
              </Link>
            ) : (
              <div className={`jersey-stage ${product.tone}`}>
                <span className="product-number">0{index + 1}</span>
                <div className="jersey"><span>EMİR<br />SPOR</span></div>
              </div>
            )}
            <h3>{product.name}</h3>
            <span className="product-price">{product.price ?? "450 TL"}</span>
          </article>)}
        </div>
      </section>

      <div className="brand-carousel-heading">
        <h2>Referanslarımız</h2>
      </div>
      <BrandCarousel />

      <section id="surec" className="process-section">
        <div className="section-heading light-heading"><p className="kicker orange">TAKIMINA ÖZEL HALISAHA FORMASI</p><h2>FİKİRDEN SAHAYA</h2></div>
        <div className="process-grid container-wide">
          <article><b>01</b><h3>İhtiyacı anlatın</h3><p>Takımına özel halısaha forması tasarlamak için forma detaylarını paylaşın.</p></article>
          <article><b>02</b><h3>Tasarımı görün</h3><p>Logo, sponsor, isim ve numaralarla size özel tasarımı hazırlayalım.</p></article>
          <article><b>03</b><h3>Sahaya çıkın</h3><p>Onaydan sonra üretim, kalite kontrol ve teslimat sürecini tamamlayalım.</p></article>
        </div>
      </section>

      <section className="editorial-products" aria-label="Forma üretimi ve tasarım seçenekleri">
        <div className="editorial-product-row container-wide">
          <div className="editorial-product-copy">
            <p className="editorial-eyebrow">Geleneksel Yöntemler</p>
            <h2>Takım Forması Üretimi</h2>
            <p className="editorial-description">Takımınızın renkleri, logosu, isim ve numara detaylarıyla sahaya özel, dayanıklı ve konforlu formalar üretiyoruz.</p>
            <a href="#urunler">450 TL&apos;den başlayan fiyatlarla</a>
          </div>
          <div className="editorial-product-image">
            <Image src="/urunler/slider/hali-saha-formasi-slide-model-2.png" alt="Takıma özel yeşil halı saha forması" width={580} height={724} sizes="(max-width: 700px) 100vw, 50vw" />
          </div>
        </div>
        <div className="editorial-product-row reverse container-wide">
          <div className="editorial-product-image">
            <Image src="/urunler/slider/hali-saha-formasi-slide-model-3.png" alt="Kırmızı özel tasarım halı saha forması" width={580} height={724} sizes="(max-width: 700px) 100vw, 50vw" />
          </div>
          <div className="editorial-product-copy">
            <p className="editorial-eyebrow">Tasarım Devrimi</p>
            <h2>Sublimasyon Forma</h2>
            <p className="editorial-description">Sınırsız renk ve desen seçeneğiyle, solmayan baskılar kullanarak takımınıza özel sublimasyon forma tasarlıyoruz.</p>
            <a href="#urunler">Modelleri inceleyin</a>
          </div>
        </div>
        <div className="editorial-product-row container-wide">
          <div className="editorial-product-copy">
            <p className="editorial-eyebrow">Profesyonel Dokunuş</p>
            <h2>Kişiye Özel Forma</h2>
            <p className="editorial-description">Oyuncu ismi, forma numarası, takım logosu ve sponsor baskılarıyla her detayı size özel hazırlıyoruz.</p>
            <a href="#urunler">Formanı tasarla</a>
          </div>
          <div className="editorial-product-image">
            <Image src="/urunler/slider/hali-saha-formasi-slide-model-1.png" alt="Beyaz ve bordo kişiye özel halı saha forması" width={580} height={724} sizes="(max-width: 700px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      <section id="iletisim" className="contact-banner">
        <div><p className="kicker">SIRADAKİ FORMA SİZİN OLSUN</p><h2>Halısaha Formanızı<br />Birlikte Tasarlayalım</h2></div>
        <a
          className="whatsapp-button"
          href="https://wa.me/905444407767?text=Merhaba%20sipari%C5%9F%20vermek%20istiyorum"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp üzerinden sipariş ver"
        >
          <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16.04 3A12.87 12.87 0 0 0 5 22.49L3.28 29l6.67-1.75A12.96 12.96 0 1 0 16.04 3Zm0 23.58a10.7 10.7 0 0 1-5.46-1.49l-.39-.23-3.96 1.04 1.06-3.86-.25-.4a10.66 10.66 0 1 1 9 4.94Zm5.85-7.99c-.32-.16-1.9-.94-2.2-1.05-.29-.11-.5-.16-.71.16-.21.32-.82 1.05-1 1.26-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59a9.62 9.62 0 0 1-1.78-2.21c-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.64 0 1.56 1.14 3.07 1.3 3.28.16.21 2.24 3.42 5.42 4.79.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.9-.77 2.17-1.52.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z" /></svg>
          <span>WHATSAPP&apos;TAN SİPARİŞ VER</span>
        </a>
      </section>

      <section className="customer-gallery" aria-labelledby="customer-gallery-title">
        <div className="customer-gallery-heading container-wide">
          <p className="kicker orange">GERÇEK TAKIMLAR · GERÇEK FORMALAR</p>
          <h2 id="customer-gallery-title">Sizden Gelenler</h2>
          <p>Emir Spor formalarıyla sahaya çıkan takımlarımızdan kareler.</p>
        </div>
        <div className="customer-gallery-grid container-wide">
          {customerPhotos.map((alt, index) => (
            <figure className="customer-gallery-photo" key={alt}>
              <Image
                src={`/portfolyo/musteriler/${String(index + 1).padStart(2, "0")}.webp`}
                alt={alt}
                fill
                sizes="(max-width: 560px) 50vw, (max-width: 900px) 33vw, 20vw"
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="recent-posts" aria-labelledby="recent-posts-title">
        <div className="recent-posts-heading container-wide">
          <p className="kicker orange">FORMA REHBERİ</p>
          <h2 id="recent-posts-title">Yeni Blog Yazıları</h2>
        </div>
        <div className="recent-posts-grid container-wide">
          {recentPosts.map((post) => (
            <article className="recent-post-card" key={post.title}>
              <div className="recent-post-image">
                <Image src={post.image} alt={post.title} fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 33vw, 20vw" />
              </div>
              <div className="recent-post-copy">
                <h3>{post.title}</h3>
                <p>{post.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="kategoriler" className="promo-grid">
        <a className="promo promo-one" href="#urunler"><span>YENİ SEZON</span><strong>MAÇ FORMALARI</strong><em>İNCELE →</em></a>
        <a className="promo promo-two" href="#urunler"><span>KULÜBÜNE ÖZEL</span><strong>SIFIRDAN TASARIM</strong><em>DETAYLAR →</em></a>
        <a className="promo promo-three" href="#surec"><span>TAKIM PAKETİ</span><strong>FORMA + ŞORT</strong><em>SÜRECİ GÖR →</em></a>
      </section>
    </main>

    <SiteFooter />
  </>;
}
