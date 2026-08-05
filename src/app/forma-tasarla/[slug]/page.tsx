import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CollectionCampaign, SiteFooter, SiteHeader } from "../../site-sections";
import { landings } from "./landing-data";
import styles from "./landing.module.css";

const baseUrl = "https://emirspor.com";
const whatsapp = "https://wa.me/905444407767?text=Merhaba%2C%20tak%C4%B1m%C4%B1ma%20%C3%B6zel%20forma%20tasarlamak%20istiyorum";

export function generateStaticParams() {
  return Object.keys(landings).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = landings[slug];
  if (!page) return {};
  const description = page.intro.length > 158 ? `${page.intro.slice(0, 155).trim()}…` : page.intro;
  return {
    title: `${page.title} | Özel Forma Yaptırma`,
    description,
    keywords: [page.keyword, "forma tasarla", "halısaha forması", "forma yaptırma", "özel forma üretimi", "takım forması"],
    alternates: { canonical: `/forma-tasarla/${slug}` },
    openGraph: {
      type: "website", locale: "tr_TR", url: `${baseUrl}/forma-tasarla/${slug}`,
      title: `${page.title} | Emir Spor`, description,
      images: [{ url: page.hero, width: 1600, height: 900, alt: page.heroAlt }],
    },
    twitter: { card: "summary_large_image", title: page.title, description, images: [page.hero] },
    robots: { index: true, follow: true },
  };
}

export default async function DesignLandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = landings[slug];
  if (!page) notFound();

  const pageUrl = `${baseUrl}/forma-tasarla/${slug}`;
  const schemas = [
    {
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: baseUrl },
        { "@type": "ListItem", position: 2, name: "Forma Tasarla", item: `${baseUrl}/forma-tasarla/futbol-formasi-tasarla` },
        { "@type": "ListItem", position: 3, name: page.title, item: pageUrl },
      ],
    },
    {
      "@context": "https://schema.org", "@type": "Service", name: page.title,
      serviceType: "Özel forma tasarımı ve üretimi", provider: { "@type": "Organization", name: "Emir Spor", url: baseUrl },
      areaServed: { "@type": "Country", name: "Türkiye" }, description: page.intro, url: pageUrl,
    },
    {
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: page.faq.map(([question, answer]) => ({
        "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ];

  const universalLinks: [string, string][] = [
    ["Futbol Forması Tasarla", "/forma-tasarla/futbol-formasi-tasarla"],
    ["Halısaha Forması Tasarla", "/forma-tasarla/hali-saha-formasi-tasarla"],
    ["Futbol Forması Modelleri", "/kategori/futbol-formalari"],
    ["Forma Yaptırma Rehberleri", "/blog"],
  ];
  const links = [...page.related, ...universalLinks]
    .filter(([, href]) => href !== `/forma-tasarla/${slug}`)
    .filter((item, index, all) => all.findIndex((candidate) => candidate[1] === item[1]) === index)
    .slice(0, 6);

  return <>
    <SiteHeader />
    <main>
      <section className={styles.hero}>
        <Image src={page.hero} alt={page.heroAlt} title={`${page.title} örnek tasarım`} fill priority sizes="100vw" />
        <div className={`site-shell ${styles.heroCopy}`}>
          <p>{page.eyebrow}</p><h1>{page.title}</h1><div className={styles.heroText}>{page.intro}</div>
          <a href={whatsapp} title={`${page.title} için WhatsApp'tan teklif alın`}>ÜCRETSİZ TASARIM İSTE</a>
        </div>
      </section>

      <nav className={`site-shell ${styles.breadcrumb}`} aria-label="Sayfa yolu">
        <Link href="/">Ana Sayfa</Link><span>/</span><Link href="/forma-tasarla/futbol-formasi-tasarla">Forma Tasarla</Link><span>/</span><strong>{page.title}</strong>
      </nav>

      <section className={`site-shell ${styles.intro}`}>
        <p className={styles.eyebrow}>ÖZEL FORMA YAPTIRMA REHBERİ</p>
        <h2>{page.audienceTitle}</h2>
        <div className={styles.twoColumns}>
          <p>{page.audience}</p>
          <p>Takımınızın sahadaki görünümü yalnızca renklerden oluşmaz. Doğru kalıp, okunaklı isim ve numaralar, dengeli logo yerleşimi ve kullanım amacına uygun kumaş birlikte planlanmalıdır. Emir Spor&apos;da <strong>forma tasarla</strong> süreci, fikirlerinizi üretilebilir bir tasarıma dönüştürür; onayınız alınmadan üretime geçilmez.</p>
        </div>
      </section>

      <section className={styles.editorial}>
        <figure className={styles.editorialImage}>
          <Image src="/portfolyo/tanitim/futbol-formasi-tasarla/forma-tasarim-sureci.webp" alt={`${page.title} için renk, logo ve desen hazırlama süreci`} title={`${page.keyword} tasarım süreci`} fill sizes="(max-width: 900px) 100vw, 54vw" />
          <figcaption>{page.title}: renk, arma, sponsor ve oyuncu bilgilerinin birlikte planlanması.</figcaption>
        </figure>
        <div className={styles.editorialCopy}>
          <p className={styles.eyebrow}>TASARIM DETAYLARI</p><h2>{page.designTitle}</h2><p>{page.design}</p>
          <h3>Forma tasarımında nelere dikkat ediyoruz?</h3>
          <ul><li>Takım renklerinin doğru ve tutarlı kullanımına</li><li>İsim, numara, logo ve sponsorların okunaklı olmasına</li><li>Ön, arka ve yan yüzeylerin tek bir kimlik oluşturmasına</li><li>Üretim öncesi dijital tasarım onayının alınmasına</li></ul>
        </div>
      </section>

      <section className={styles.process}>
        <div className="site-shell"><p className={styles.eyebrow}>FİKİRDEN SAHAYA</p><h2>Forma Yaptırma Süreci Nasıl İlerler?</h2>
          <div className={styles.processGrid}>{[
            ["01", "İhtiyacı Paylaşın", "Spor dalını, adetleri, bedenleri, renkleri ve teslim beklentinizi iletin."],
            ["02", "Görselleri Gönderin", "Logo, sponsor, örnek desen veya beğendiğiniz tasarım yönünü paylaşın."],
            ["03", "Tasarımı İnceleyin", "Ekibimiz üretime uygun dijital forma tasarımını onayınıza sunsun."],
            ["04", "Oyuncu Listesini Onaylayın", "İsim, numara ve beden bilgilerini son kez birlikte kontrol edelim."],
            ["05", "Üretimi Başlatalım", "Yazılı onayınızdan sonra baskı, kesim ve dikim aşamalarına geçelim."],
            ["06", "Takımınıza Teslim Edelim", "Kalite kontrolü tamamlanan formaları güvenli şekilde gönderelim."],
          ].map(([no, title, text]) => <article key={no}><span>{no}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className={`site-shell ${styles.materials}`}>
        <div><p className={styles.eyebrow}>KUMAŞ VE BASKI</p><h2>{page.materialTitle}</h2><p>{page.material}</p>
          <h3>Uzun ömürlü kullanım için</h3><p>Formaların ters çevrilerek düşük sıcaklıkta yıkanması, ağartıcı kullanılmaması ve baskı yüzeyine doğrudan ütü yapılmaması önerilir. Kullanım ve bakım şartları ürün ömrünü doğrudan etkiler.</p></div>
        <figure className={styles.qualityImage}>
          <Image src="/portfolyo/tanitim/futbol-formasi-tasarla/forma-uretim-kalite-kontrol.webp" alt={`${page.title} üretim, kumaş ve kalite kontrol detayları`} title={`${page.keyword} üretim kalitesi`} fill sizes="(max-width: 900px) 100vw, 45vw" />
          <figcaption>Forma yaptırma sürecinde baskı, dikiş ve kişiselleştirme kalite kontrolü.</figcaption>
        </figure>
      </section>

      <section className={`site-shell ${styles.details}`}>
        <p className={styles.eyebrow}>KİŞİSELLEŞTİRME SEÇENEKLERİ</p><h2>Takımınıza Özel Forma Tasarla</h2>
        <div>{page.details.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className={styles.linksSection}>
        <div className="site-shell"><p className={styles.eyebrow}>İLGİLİ SAYFALAR</p><h2>Forma Modellerini ve Rehberleri Keşfedin</h2>
          <p className={styles.linksLead}>Takımınıza en uygun seçeneği bulmak için diğer forma tasarla sayfalarını, ürün modellerini ve ayrıntılı forma yaptırma rehberlerini inceleyin.</p>
          <div className={styles.linkGrid}>{links.map(([title, href]) => <Link href={href} key={href} title={`${title} sayfasını inceleyin`}><h3>{title}</h3><span>SAYFAYI İNCELE →</span></Link>)}</div>
        </div>
      </section>

      <section className={styles.faq}>
        <div className="site-shell"><p className={styles.eyebrow}>SIK SORULAN SORULAR</p><h2>{page.title} Hakkında Merak Edilenler</h2>
          <div>{page.faq.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
        </div>
      </section>
      <CollectionCampaign orderHref={whatsapp} />
    </main>
    <SiteFooter />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
  </>;
}
