import Image from "next/image";
import Link from "next/link";

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
        <Link href="/#recent-posts-title">Blog Yazıları</Link>
      </nav>
    </div>
    <div className="footer-bottom-wrap">
      <div className="footer-bottom container-wide">© {new Date().getFullYear()} EMİR SPOR · TÜM HAKLARI SAKLIDIR</div>
    </div>
  </footer>;
}
