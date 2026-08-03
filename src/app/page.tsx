import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import HeroSlider from "./hero-slider";

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
  { name: "Ateş Çizgisi", tone: "orange" },
  { name: "Kutup Yıldızı", tone: "white" },
  { name: "Saha Lideri", tone: "blue" },
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
      <div className="header-top container-wide">
        <div className="header-contact">
          <a className="header-phone" href="tel:+905444407767">0544-440-77-67</a>
          <a className="header-cta" href="https://wa.me/905444407767?text=Merhaba%20sipari%C5%9F%20vermek%20istiyorum" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp üzerinden teklif al">TEKLİF AL</a>
        </div>
      </div>
      <div className="header-nav container-wide">
        <a className="brand nav-brand" href="#" aria-label="Emir Spor ana sayfa"><Image src="/portfolyo/logo/emirspor-logo.png" alt="Emir Spor" width={192} height={56} priority /></a>
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

      <section id="kategoriler" className="promo-grid">
        <a className="promo promo-one" href="#urunler"><span>YENİ SEZON</span><strong>MAÇ FORMALARI</strong><em>İNCELE →</em></a>
        <a className="promo promo-two" href="#urunler"><span>KULÜBÜNE ÖZEL</span><strong>SIFIRDAN TASARIM</strong><em>DETAYLAR →</em></a>
        <a className="promo promo-three" href="#surec"><span>TAKIM PAKETİ</span><strong>FORMA + ŞORT</strong><em>SÜRECİ GÖR →</em></a>
      </section>

      <section id="urunler" className="products-section">
        <div className="section-heading">
          <p className="kicker orange">26/27 SEZON</p>
          <h2 className="season-title">YENİ SEZON HALI SAHA FORMA MODELLERİ</h2>
          <p>En çok tercih edilen halı saha forma modelleri.</p>
        </div>
        <div className="product-grid container-wide">
          {products.map((product, index) => <article className="product" key={product.name}>
            {product.image ? (
              <div className="product-image-stage">
                <Image src={product.image} alt={product.name} width={1369} height={1542} sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 25vw" />
              </div>
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

      <section id="hakkimizda" className="statement-section">
        <div className="statement-image" role="img" aria-label="Özel forma giyen futbolcular"></div>
        <div className="statement-copy">
          <p className="kicker orange">EMİR SPOR ATÖLYESİ</p>
          <h2>TAKIMINIZ İÇİN<br />TEK BİR ÇİZGİ.</h2>
          <p>Hazır kalıpların ötesine geçiyoruz. Renk seçiminden logo yerleşimine, kumaştan numaralandırmaya kadar her detayı kulübünüzle birlikte oluşturuyoruz.</p>
          <div className="stats"><div><strong>%100</strong><span>ÖZEL TASARIM</span></div><div><strong>3</strong><span>ADIMDA ÜRETİM</span></div></div>
        </div>
      </section>

      <section id="surec" className="process-section">
        <div className="section-heading light-heading"><p className="kicker orange">NASIL ÇALIŞIR?</p><h2>FİKİRDEN SAHAYA</h2></div>
        <div className="process-grid container-wide">
          <article><b>01</b><h3>İhtiyacı anlatın</h3><p>Takım sayısı, renkler, bedenler ve teslim tarihini paylaşın.</p></article>
          <article><b>02</b><h3>Tasarımı görün</h3><p>Logo, sponsor, isim ve numaralarla size özel tasarımı hazırlayalım.</p></article>
          <article><b>03</b><h3>Sahaya çıkın</h3><p>Onaydan sonra üretim, kalite kontrol ve teslimat sürecini tamamlayalım.</p></article>
        </div>
      </section>

      <section id="iletisim" className="contact-banner">
        <div><p className="kicker">SIRADAKİ FORMA SİZİN OLSUN</p><h2>TAKIMINIZI<br />BİRLİKTE TASARLAYALIM.</h2></div>
        <span className="outline-button">İLETİŞİM BİLGİLERİ YAKINDA</span>
      </section>
    </main>

    <footer><div className="footer-main container-wide"><a className="brand footer-brand" href="#"><Image src="/portfolyo/logo/emirspor-logo.png" alt="Emir Spor" width={192} height={56} /></a><p>Özel futbol forması ve takım sporları üretimi.</p><div><a href="#urunler">FORMALAR</a><a href="#surec">ÜRETİM</a><a href="#iletisim">İLETİŞİM</a></div></div><div className="footer-bottom container-wide">© {new Date().getFullYear()} EMİR SPOR · TÜM HAKLARI SAKLIDIR</div></footer>
  </>;
}
