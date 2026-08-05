import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../site-sections";

const pages = {
  "futbol-formasi-tasarla": { title: "Futbol Forması Tasarla", intro: "Kulübünüzün renklerini, logosunu ve sahadaki kimliğini yansıtan özel futbol forması tasarım süreci." },
  "basketbol-formasi-tasarla": { title: "Basketbol Forması Tasarla", intro: "Basketbol takımları için hareket özgürlüğünü ve güçlü takım görünümünü bir araya getiren özel tasarımlar." },
  "voleybol-formasi-tasarla": { title: "Voleybol Forması Tasarla", intro: "Kadın ve erkek voleybol takımlarına uygun kalıp, renk ve kişiselleştirme seçenekleriyle forma tasarımı." },
  "takim-formasi-tasarla": { title: "Takım Forması Tasarla", intro: "Okullar, kulüpler, şirket turnuvaları ve amatör ekipler için takıma özel forma hazırlama rehberi." },
  "hali-saha-formasi-tasarla": { title: "Halı Saha Forması Tasarla", intro: "Halı saha ekipleri için isim, numara, logo ve sponsor baskılı özgün forma tasarım çözümleri." },
  "ucuz-forma-tasarla": { title: "Ucuz Forma Tasarla", intro: "Bütçeyi korurken kumaş, baskı ve kullanım kalitesinden vazgeçmeden forma hazırlamanın yolları." },
  "isimli-forma-tasarla": { title: "İsimli Forma Tasarla", intro: "Her oyuncuya özel isim ve numara seçenekleriyle kişiselleştirilmiş takım forması tasarımı." },
  "espor-formasi-tasarla": { title: "Espor Forması Tasarla", intro: "Espor takımları, oyuncu toplulukları ve turnuva ekipleri için takım kimliğini yansıtan kişiselleştirilmiş forma tasarımları." },
  "asker-formasi-tasarla": { title: "Asker Forması Tasarla", intro: "Asker uğurlaması ve hatıra organizasyonları için isim, tertip, dönem ve özel mesajlarla kişiselleştirilen forma tasarımları." },
  "tezkere-formasi-tasarla": { title: "Tezkere Forması Tasarla", intro: "Terhis ve tezkere hatırası için dönem, birlik, isim ve kişisel detaylarla hazırlanan özgün forma tasarımları." },
  "kaleci-formasi-tasarla": { title: "Kaleci Forması Tasarla", intro: "Kalecilerin sahada ayrışmasını sağlayan renk, desen, isim ve numara seçenekleriyle özel kaleci forması tasarımı." },
  "taraftar-formasi-tasarla": { title: "Taraftar Forması Tasarla", intro: "Takım sevgisini tribünde ve günlük yaşamda taşımak isteyen gruplar için kişiselleştirilmiş taraftar formaları." },
  "tenis-formasi-tasarla": { title: "Tenis Forması Tasarla", intro: "Bireysel sporcular, kulüpler ve tenis akademileri için hareket özgürlüğü sunan özel spor giyim tasarımları." },
  "bowling-formasi-tasarla": { title: "Bowling Forması Tasarla", intro: "Bowling takımları, lig oyuncuları ve kurumsal turnuvalar için isim ve logo baskılı özel forma tasarımları." },
} as const;

type PageSlug = keyof typeof pages;

export function generateStaticParams() {
  return Object.keys(pages).filter((slug) => slug !== "futbol-formasi-tasarla").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug as PageSlug];
  if (!page) return {};
  return { title: page.title, description: page.intro, robots: { index: false, follow: true } };
}

export default async function DesignLandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug as PageSlug];
  if (!page) notFound();
  return <>
    <SiteHeader />
    <main className="editorial-placeholder">
      <Link href="/" className="back-home">← EMİR SPOR</Link>
      <div><p className="kicker orange">FORMA TASARLA REHBERİ</p><h1>{page.title}</h1><p>{page.intro}</p><p className="preparing-note">Bu tanıtım sayfası için özgün görseller, ayrıntılı anlatımlar ve SEO içeriği hazırlanacaktır.</p><a className="solid-button" href="https://wa.me/905444407767?text=Merhaba%2C%20tak%C4%B1m%C4%B1ma%20%C3%B6zel%20forma%20tasarlamak%20istiyorum">TASARIMA BAŞLA</a></div>
    </main>
    <SiteFooter />
  </>;
}
