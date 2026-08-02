import Script from "next/script";
import Image from "next/image";

const products = [
  { name: "Gece Mavisi", type: "Profesyonel maç forması", tone: "navy" },
  { name: "Saha Ateşi", type: "Sublimasyon takım forması", tone: "orange" },
  { name: "Beyaz Deplasman", type: "Nefes alan performans kumaşı", tone: "white" },
  { name: "Elektrik Mavisi", type: "Kulübe özel tasarım", tone: "blue" },
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
        <div className="socials" aria-label="Sosyal medya">
          <a href="#" aria-label="Facebook" title="Facebook hesabı yakında"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3 0-5 2-5 5v2H6v4h3v7h4v-7h3l1-4h-4V9c0-.7.3-1 1-1Z" /></svg></a>
          <a href="#" aria-label="X" title="X hesabı yakında"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4.3l3.5 4.7L17 4h2l-5.3 6.1L20 20h-4.3l-4.1-5.4L7 20H5l5.7-6.7L5 4Zm3.3 1.7 8.3 12.6h1.2L9.5 5.7H8.3Z" /></svg></a>
          <a href="#" aria-label="Instagram" title="Instagram hesabı yakında"><svg viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm11.3 2.7a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" clipRule="evenodd" /></svg></a>
          <a href="#" aria-label="TikTok" title="TikTok hesabı yakında"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3h3c.2 1.8 1.2 3 3 3.4v3a8 8 0 0 1-3-1v6.1a6.5 6.5 0 1 1-6.5-6.5H12v3.2a3.3 3.3 0 1 0 2 3V3Z" /></svg></a>
        </div>
        <a className="brand" href="#" aria-label="Emir Spor ana sayfa"><Image src="/portfolyo/logo/emirspor-logo.png" alt="Emir Spor" width={192} height={56} priority /></a>
        <div className="header-contact">
          <a className="header-phone" href="tel:+905444407767">0544-440-77-67</a>
          <a className="header-cta" href="https://wa.me/905444407767?text=Merhaba%20sipari%C5%9F%20vermek%20istiyorum" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp üzerinden teklif al">TEKLİF AL</a>
        </div>
      </div>
      <div className="header-nav container-wide">
        <span className="menu-mark" aria-hidden="true"><i></i><i></i><i></i></span>
        <nav aria-label="Ana menü">
          <a href="#">ANA SAYFA</a><a href="#urunler">FORMALAR</a><a href="#surec">ÜRETİM</a><a href="#hakkimizda">HAKKIMIZDA</a><a href="#iletisim">İLETİŞİM</a>
        </nav>
        <a className="nav-search" href="#urunler" aria-label="Ürünlerde ara" title="Ürünlerde ara"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21 20-5.2-5.2a7.5 7.5 0 1 0-1.4 1.4L20 21l1-1ZM5 10.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z" /></svg></a>
      </div>
    </header>

    <main>
      <section className="campaign-hero">
        <div className="hero-shade"></div>
        <div className="hero-content container-wide">
          <p className="kicker">TAKIMINIZIN KİMLİĞİNİ TASARLIYORUZ</p>
          <h1>FORMADAN<br />DAHA FAZLASI.</h1>
          <p className="hero-copy">Kulübünüze özel sublimasyon formalar. Güçlü tasarım, performans kumaşı ve takımınıza ait benzersiz bir görünüm.</p>
          <a className="solid-button" href="#iletisim">TASARIMI BAŞLATALIM</a>
        </div>
        <a className="scroll-cue" href="#kategoriler" aria-label="Kategorilere ilerle">↓</a>
      </section>

      <section id="kategoriler" className="promo-grid">
        <a className="promo promo-one" href="#urunler"><span>YENİ SEZON</span><strong>MAÇ FORMALARI</strong><em>İNCELE →</em></a>
        <a className="promo promo-two" href="#urunler"><span>KULÜBÜNE ÖZEL</span><strong>SIFIRDAN TASARIM</strong><em>DETAYLAR →</em></a>
        <a className="promo promo-three" href="#surec"><span>TAKIM PAKETİ</span><strong>FORMA + ŞORT</strong><em>SÜRECİ GÖR →</em></a>
      </section>

      <section id="urunler" className="products-section">
        <div className="section-heading">
          <p className="kicker orange">KOLEKSİYON</p>
          <h2>SAHAYA YENİ ÇIKANLAR</h2>
          <p>Takım renklerinize, logonuza ve hikâyenize göre yeniden tasarlanabilen örnek forma çizgileri.</p>
        </div>
        <div className="product-grid container-wide">
          {products.map((product, index) => <article className="product" key={product.name}>
            <div className={`jersey-stage ${product.tone}`}>
              <span className="product-number">0{index + 1}</span>
              <div className="jersey"><span>EMİR<br />SPOR</span></div>
              <a href="#iletisim" aria-label={`${product.name} için teklif al`}>+</a>
            </div>
            <p>{product.type}</p><h3>{product.name}</h3><span className="product-link">PROJENE UYARLA →</span>
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
