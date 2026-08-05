import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { CollectionCampaign, SiteFooter, SiteHeader } from "../../site-sections";
import styles from "./page.module.css";

const pageUrl = "https://emirspor.com/forma-tasarla/futbol-formasi-tasarla";
const whatsapp = "https://wa.me/905444407767?text=Merhaba%2C%20tak%C4%B1m%C4%B1ma%20%C3%B6zel%20futbol%20formas%C4%B1%20tasarlatmak%20istiyorum";

export const metadata: Metadata = {
  title: "Futbol Forması Tasarla | Halısaha Forması Yaptırma",
  description: "Takımına özel futbol ve halısaha forması tasarla. Forma yaptırma süreci, kumaş, sublimasyon baskı, beden, fiyat ve teslimat hakkında ayrıntılı rehber.",
  keywords: ["halısaha forması", "forma tasarla", "forma yaptırma", "futbol forması tasarla", "takım forması yaptırma", "özel forma tasarımı"],
  alternates: { canonical: "/forma-tasarla/futbol-formasi-tasarla" },
  openGraph: { type: "article", url: pageUrl, title: "Futbol Forması Tasarla ve Takımına Özel Forma Yaptır", description: "Özgün takım kimliği, dayanıklı baskı ve doğru kumaşla futbol formanızı birlikte tasarlayalım.", images: [{ url: "/portfolyo/tanitim/futbol-formasi-tasarla/futbol-formasi-tasarla-hero.webp", width: 1792, height: 896, alt: "Siyah beyaz ve kırmızı özel futbol formaları giyen üç oyuncu" }] },
};

const faqs = [
  ["Futbol forması tasarlamak için hangi bilgiler gerekir?", "Takım adı, ana ve yardımcı renkler, logo, sponsor dosyaları, oyuncu isimleri, numaralar, beden listesi, takım adedi ve hedef teslim tarihi başlangıç için yeterlidir."],
  ["Halısaha forması yaptırma fiyatı nasıl belirlenir?", "Fiyat; sipariş adedi, seçilen kumaş, forma veya forma-şort seti, baskı ayrıntıları ve özel üretim taleplerine göre hesaplanır. Net teklif için takım listenizi paylaşabilirsiniz."],
  ["İsim, numara, logo ve sponsor baskıları ücrete dahil mi?", "Standart sublimasyon üretimde tasarıma işlenen isim, numara, arma ve sponsor baskıları teklif kapsamına göre birlikte planlanır. Sipariş öncesinde bütün ayrıntılar yazılı olarak netleştirilir."],
  ["Kendi çizimimizle forma tasarla hizmeti alabilir miyiz?", "Evet. Beğendiğiniz renkleri, eskizi veya görsel referansı paylaşabilirsiniz. Tasarım ekibi bunu üretilebilir bir forma düzenine dönüştürür; marka veya kulüp haklarını ihlal eden çalışmalar kullanılmaz."],
  ["Forma yaptırma süresi ne kadar?", "Üretim süresi takım adedi ve iş yoğunluğuna göre değişir. Tasarım onayı, beden listesinin tamamlanması ve ödeme planının netleşmesinden sonra size hedef teslim tarihi bildirilir."],
  ["Çocuk ve yetişkin bedenleri aynı siparişte hazırlanabilir mi?", "Evet. Okul, akademi ve karma yaş gruplarında çocuk ve yetişkin bedenleri aynı takım tasarımıyla üretilebilir. Her oyuncu için bedenin ayrı listelenmesi gerekir."],
];

export default function FootballJerseyDesignPage() {
  const schema = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://emirspor.com" }, { "@type": "ListItem", position: 2, name: "Forma Tasarla", item: "https://emirspor.com/forma-tasarla" }, { "@type": "ListItem", position: 3, name: "Futbol Forması Tasarla", item: pageUrl }] },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) },
    { "@context": "https://schema.org", "@type": "Service", name: "Futbol Forması Tasarlama ve Forma Yaptırma", provider: { "@type": "Organization", name: "Emir Spor", url: "https://emirspor.com" }, areaServed: "Türkiye", serviceType: "Takıma özel futbol ve halısaha forması tasarımı ve üretimi", url: pageUrl },
  ];

  return <>
    <Script id="football-design-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <SiteHeader />
    <main>
      <section className={styles.hero}>
        <Image src="/portfolyo/tanitim/futbol-formasi-tasarla/futbol-formasi-tasarla-hero.webp" alt="Takımına özel siyah beyaz ve kırmızı futbol forması tasarımları giyen oyuncular" fill priority sizes="100vw" />
        <div className={`${styles.heroCopy} container-wide`}><p>TAKIMIN · RENKLERİN · FORMAN</p><h1>Futbol Forması Tasarla,<br />Takımına Özel Forma Yaptır</h1><div className={styles.heroText}>Halısaha forması ve futbol forması tasarlama sürecini fikirden üretime kadar birlikte yönetiyoruz.</div><a href={whatsapp} target="_blank" rel="noopener noreferrer">ÜCRETSİZ TASARIM DESTEĞİ AL</a></div>
      </section>

      <nav className={`${styles.jumpLinks} container-wide`} aria-label="Sayfa içeriği"><a href="#tasarim">Forma Tasarımı</a><a href="#surec">Üretim Süreci</a><a href="#kumas">Kumaş ve Baskı</a><a href="#fiyat">Forma Fiyatları</a><a href="#sss">Sık Sorulanlar</a></nav>

      <section className={`${styles.lead} container-wide`} id="tasarim">
        <p className={styles.eyebrow}>ÖZGÜN TAKIM KİMLİĞİ</p>
        <h2>Futbol Forması Tasarla: Sadece Bir Model Değil, Takımının Kimliğini Oluştur</h2>
        <div className={styles.twoColumns}><p>Bir futbol forması, oyuncuları aynı renkte giydirmenin ötesinde takımın sahadaki imzasıdır. İyi planlanmış bir <strong>forma tasarla</strong> çalışması; renkleri, armayı, oyuncu isimlerini ve sponsorları okunaklı bir bütün içinde birleştirir. Emir Spor&apos;da hazır bir deseni kişiselleştirebilir veya takımınız için sıfırdan özgün bir görsel dil oluşturabilirsiniz.</p><p>Arkadaş grupları, şirket takımları, okullar, futbol akademileri ve amatör kulüpler için yapılan <strong>forma yaptırma</strong> çalışmalarında kullanım ortamını da dikkate alıyoruz. Haftalık maçlar için hazırlanacak <Link href="/forma-tasarla/hali-saha-formasi-tasarla">halısaha forması</Link> ile sezon boyunca turnuvalarda kullanılacak kulüp formasının kumaş, kalıp ve adet ihtiyaçları aynı olmayabilir.</p></div>
      </section>

      <section className={`${styles.editorial} container-wide`}>
        <div className={styles.editorialImage}><Image src="/portfolyo/tanitim/futbol-formasi-tasarla/forma-tasarim-sureci.webp" alt="Futbol forması tasarla sürecinde çizimler kumaş kartelaları ve renk seçimleri" fill sizes="(max-width: 800px) 100vw, 56vw" /></div>
        <div className={styles.editorialCopy}><p className={styles.eyebrow}>FİKİRDEN DİJİTAL TASARIMA</p><h2>Takım Renklerinden Üretilebilir Forma Tasarımına</h2><p>Başlangıçta kusursuz bir çizime ihtiyacınız yoktur. Takım renkleri, beğendiğiniz tasarım yönü ve kullanılacak logolar bize yeterli bir yol haritası verir. Bu bilgiler, baskı ve dikim sınırları düşünülerek üretilebilir bir forma şablonuna dönüştürülür.</p><h3>Forma tasarımında belirlenen ayrıntılar</h3><ul><li>Ana renk, yardımcı renk ve desen yoğunluğu</li><li>Bisiklet, V veya özel yaka görünümü</li><li>Takım arması ve sponsor konumları</li><li>Oyuncu ismi ve forma numarası karakteri</li><li>Forma, şort ve çorap renk bütünlüğü</li></ul><Link href="/urunler/almanya-beyaz-simsek-desen-hali-saha-formasi">Örnek ürün sayfasını incele →</Link></div>
      </section>

      <section className={styles.steps} id="surec"><div className="container-wide"><p className={styles.eyebrow}>FORMA YAPTIRMA SÜRECİ</p><h2>Takım Formanız 6 Net Adımda Hazırlanır</h2><div className={styles.stepGrid}>{[
        ["01", "İhtiyacı Belirle", "Takım adedi, spor dalı, kullanım sıklığı ve teslim tarihini paylaşın."],
        ["02", "Renk ve Model Seç", "Hazır modellerden ilerleyin veya sıfırdan forma tasarla talebinizi anlatın."],
        ["03", "Dosyaları Gönder", "Logo, sponsor, oyuncu isimleri, numaralar ve beden listesini iletin."],
        ["04", "Dijital Tasarımı Onayla", "Üretim öncesi forma görünümünü kontrol edin ve gerekli düzeltmeleri bildirin."],
        ["05", "Üretim ve Kontrol", "Baskı, kesim, dikim ve isim-numara kontrolleri tamamlanır."],
        ["06", "Teslimat", "Onaylanan takım formaları düzenli biçimde paketlenerek gönderilir."],
      ].map(([number,title,text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className={`${styles.materials} container-wide`} id="kumas">
        <div><p className={styles.eyebrow}>PERFORMANS VE DAYANIKLILIK</p><h2>Halısaha Forması İçin Kumaş ve Sublimasyon Baskı Seçimi</h2><p>Maç sırasında teri uzaklaştıran, hızlı kuruyan ve hareketi kısıtlamayan kumaşlar tercih edilmelidir. Polyester tabanlı spor kumaşları, doğru gramaj ve örgü yapısıyla hafiflik ile dayanıklılığı dengeler. Kalıp seçimi yapılırken oyuncu profili ve kullanım alışkanlığı dikkate alınır.</p><h3>Sublimasyon baskı neden tercih edilir?</h3><p>Sublimasyon yönteminde desen kumaşın yüzeyinde kalın bir tabaka oluşturmaz; renk lif yapısına işler. Bu sayede çok renkli geçişler, ince çizgiler, oyuncu numaraları ve sponsorlar tek tasarım içinde uygulanabilir. Doğru bakım yapılan formalar, düzenli halı saha maçlarında renk bütünlüğünü uzun süre korur.</p></div>
        <div className={styles.factGrid}><article><strong>HAFİF</strong><span>Maç temposunda rahat hareket</span></article><article><strong>NEFES ALAN</strong><span>Teri uzaklaştırmaya yardımcı doku</span></article><article><strong>SINIRSIZ RENK</strong><span>Desen ve geçiş özgürlüğü</span></article><article><strong>KİŞİSEL</strong><span>İsim, numara, logo ve sponsor</span></article></div>
      </section>

      <section className={`${styles.editorial} ${styles.reverse} container-wide`}>
        <div className={styles.editorialImage}><Image src="/portfolyo/tanitim/futbol-formasi-tasarla/forma-uretim-kalite-kontrol.webp" alt="Özel futbol formalarının dikim ve baskı sonrası kalite kontrolü" fill sizes="(max-width: 800px) 100vw, 56vw" /></div>
        <div className={styles.editorialCopy}><p className={styles.eyebrow}>ÜRETİMDE KONTROL</p><h2>Forma Yaptırma İşinde Detaylar Teslimattan Önce Kontrol Edilir</h2><p>Dijital ekranda güzel görünen bir tasarımın sahada da iyi sonuç vermesi için baskı, kesim ve dikim aşamalarının birbiriyle uyumlu yürütülmesi gerekir. Üretim listesi üzerinden oyuncu ismi, numarası ve bedeni eşleştirilir; forma parçaları dikimden sonra genel görünüm ve işçilik açısından kontrol edilir.</p><h3>Sipariş listenizi nasıl hazırlamalısınız?</h3><p>Her oyuncuyu ayrı satırda; ad-soyad, forma numarası ve beden bilgisiyle yazın. Kaleci formasını ve farklı renk taleplerini ayrıca işaretleyin. Böyle bir liste, takım halinde forma yaptırma sürecinde hata riskini önemli ölçüde azaltır.</p><Link href="/forma-tasarla/isimli-forma-tasarla">İsimli forma tasarlama rehberi →</Link></div>
      </section>

      <section className={styles.pricing} id="fiyat"><div className="container-wide"><p className={styles.eyebrow}>ŞEFFAF PLANLAMA</p><h2>Futbol ve Halısaha Forması Fiyatını Neler Belirler?</h2><div className={styles.priceGrid}><article><h3>Sipariş Adedi</h3><p>Takımdaki oyuncu sayısı ve yedek forma ihtiyacı toplam üretim planını etkiler.</p></article><article><h3>Ürün İçeriği</h3><p>Yalnızca forma üstü, forma-şort veya çorap dahil tam set seçenekleri farklı hesaplanır.</p></article><article><h3>Kumaş ve Kalıp</h3><p>Kumaş türü, gramaj, yaka biçimi ve özel kalıp talepleri üretim ayrıntısını değiştirir.</p></article><article><h3>Tasarım Ayrıntısı</h3><p>Özel desen, farklı kaleci seti ve ek ürün talepleri teklif içinde netleştirilir.</p></article></div><p className={styles.priceNote}>En doğru fiyat için takım adedi, beden listesi ve istediğiniz ürün kapsamını paylaşın. Ekonomik seçenekleri karşılaştırmak için <Link href="/forma-tasarla/ucuz-forma-tasarla">ucuz forma tasarla</Link> rehberine göz atabilirsiniz.</p></div></section>

      <section className={`${styles.internalLinks} container-wide`}><p className={styles.eyebrow}>İHTİYACINA GÖRE İLERLE</p><h2>Forma Tasarla Rehberleri ve Ürünler</h2><div>{[
        ["Halısaha Forması Tasarla", "Haftalık maç yapan takımlar için model, kumaş ve baskı önerileri.", "/forma-tasarla/hali-saha-formasi-tasarla"],
        ["Takım Forması Tasarla", "Okul, kulüp ve şirket takımları için bütünlüklü tasarım planı.", "/forma-tasarla/takim-formasi-tasarla"],
        ["Futbol Formalarını İncele", "Yeni modelleri, fiyatları ve ürün ayrıntılarını karşılaştırın.", "/kategori/futbol-formalari"],
        ["Forma Blogu", "Kumaş, baskı, beden ve sipariş üzerine ayrıntılı yazılar.", "/blog"],
      ].map(([title,text,href]) => <Link href={href} key={href}><h3>{title}</h3><p>{text}</p><span>İNCELE →</span></Link>)}</div></section>

      <section className={styles.faq} id="sss"><div className="container-wide"><p className={styles.eyebrow}>MERAK EDİLENLER</p><h2>Futbol Forması Tasarla ve Forma Yaptırma Hakkında Sorular</h2><div>{faqs.map(([question,answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>

      <section className={styles.finalCta}><div><p>TAKIMIN İÇİN HAZIR MISIN?</p><h2>Halısaha Formanı Birlikte Tasarlayalım</h2><span>Renkleri, takım adedini ve teslim tarihini paylaş; sana özel tasarım sürecini başlatalım.</span><a href={whatsapp} target="_blank" rel="noopener noreferrer">WHATSAPP&apos;TAN TASARIMA BAŞLA</a></div></section>
    </main>
    <CollectionCampaign orderHref={whatsapp} />
    <SiteFooter />
  </>;
}
