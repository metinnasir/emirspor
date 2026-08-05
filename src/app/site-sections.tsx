import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return <header className="site-header">
    <div className="header-top">
      <h1>Halısaha Forması Tasarla / Ucuz Forma Yaptırma</h1>
    </div>
    <div className="header-nav container-wide">
      <Link className="brand nav-brand" href="/" aria-label="Emir Spor ana sayfa"><Image src="/portfolyo/logo/emirspor-logo.png" alt="Emir Spor" width={144} height={42} priority /></Link>
      <nav aria-label="Ana menü">
        <Link href="/kategori/futbol-formalari">FUTBOL</Link><Link href="/#urunler">BASKETBOL</Link><Link href="/#urunler">VOLEYBOL</Link><Link href="/#urunler">EŞOFMAN</Link><Link href="/blog">BLOG</Link>
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
        <Link className="nav-search" href="/#urunler" aria-label="Ürünlerde ara" title="Ürünlerde ara"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21 20-5.2-5.2a7.5 7.5 0 1 0-1.4 1.4L20 21l1-1ZM5 10.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z" /></svg></Link>
      </div>
    </div>
  </header>;
}

export function CollectionCampaign({ orderHref = "https://wa.me/905444407767?text=Merhaba%20sipari%C5%9F%20vermek%20istiyorum" }: { orderHref?: string }) {
  return <section className="collection-campaign" aria-labelledby="collection-campaign-title">
    <div className="collection-campaign-visual">
      <Image
        src="/urunler/slider/hali-saha-formasi-slide-model-1.png"
        alt="Özel tasarım halı saha forması kampanyası"
        width={580}
        height={724}
        sizes="(max-width: 700px) 88vw, 46vw"
      />
    </div>
    <div className="collection-campaign-copy">
      <p>Yeni sezon halısaha formalarında...</p>
      <h2 id="collection-campaign-title"><strong>Sezon sonu</strong> indirimlerini<br />kaçırma</h2>
      <a href={orderHref} target={orderHref.startsWith("http") ? "_blank" : undefined} rel={orderHref.startsWith("http") ? "noopener noreferrer" : undefined}>Şimdi Sipariş Ver</a>
    </div>
  </section>;
}

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-main container-wide">
      <div className="footer-about">
        <Link className="brand footer-brand" href="/"><Image src="/portfolyo/logo/emirspor-logo.png" alt="Emir Spor forma üreticisi" width={192} height={56} /></Link>
        <p>Emir Spor; halı saha forması, futbol forması ve takımlara özel sublimasyon forma tasarımı ve üretimi yapar.</p>
        <a className="footer-whatsapp" href="https://wa.me/905444407767?text=Merhaba%20sipari%C5%9F%20vermek%20istiyorum" target="_blank" rel="noopener noreferrer">0544 440 77 67</a>
      </div>

      <nav className="footer-column" aria-label="Ürün kategorileri">
        <h2>Ürün Kategorileri</h2>
        <Link href="/forma-tasarla/futbol-formasi-tasarla">Futbol Forması</Link>
        <Link href="/forma-tasarla/hali-saha-formasi-tasarla">Halı Saha Forması</Link>
        <Link href="/forma-tasarla/basketbol-formasi-tasarla">Basketbol Forması</Link>
        <Link href="/forma-tasarla/voleybol-formasi-tasarla">Voleybol Forması</Link>
        <Link href="/forma-tasarla/takim-formasi-tasarla">Takım Forması</Link>
      </nav>

      <nav className="footer-column" aria-label="Önemli sayfalar">
        <h2>Sayfalar</h2>
        <Link href="/#urunler">Yeni Ürünler</Link>
        <Link href="/#surec">Nasıl Çalışır?</Link>
        <Link href="/#kategoriler">Forma Modelleri</Link>
        <Link href="/forma-tasarla/ucuz-forma-tasarla">Ucuz Forma Tasarla</Link>
        <Link href="/forma-tasarla/isimli-forma-tasarla">İsimli Forma Tasarla</Link>
      </nav>

      <nav className="footer-column" aria-label="Kurumsal bağlantılar">
        <h2>Kurumsal</h2>
        <Link href="/">Hakkımızda</Link>
        <Link href="/#iletisim">İletişim</Link>
        <Link href="/#surec">Üretim Süreci</Link>
        <Link href="/#customer-gallery-title">Sizden Gelenler</Link>
        <Link href="/blog">Blog Yazıları</Link>
      </nav>
    </div>
    <div className="footer-bottom-wrap">
      <div className="footer-bottom container-wide">© {new Date().getFullYear()} EMİR SPOR · TÜM HAKLARI SAKLIDIR</div>
    </div>
  </footer>;
}
