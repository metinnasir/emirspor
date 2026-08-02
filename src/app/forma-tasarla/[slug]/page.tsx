import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

const pages = {
  "futbol-formasi-tasarla": { title: "Futbol Forması Tasarla", intro: "Kulübünüzün renklerini, logosunu ve sahadaki kimliğini yansıtan özel futbol forması tasarım süreci." },
  "basketbol-formasi-tasarla": { title: "Basketbol Forması Tasarla", intro: "Basketbol takımları için hareket özgürlüğünü ve güçlü takım görünümünü bir araya getiren özel tasarımlar." },
  "voleybol-formasi-tasarla": { title: "Voleybol Forması Tasarla", intro: "Kadın ve erkek voleybol takımlarına uygun kalıp, renk ve kişiselleştirme seçenekleriyle forma tasarımı." },
  "takim-formasi-tasarla": { title: "Takım Forması Tasarla", intro: "Okullar, kulüpler, şirket turnuvaları ve amatör ekipler için takıma özel forma hazırlama rehberi." },
  "hali-saha-formasi-tasarla": { title: "Halı Saha Forması Tasarla", intro: "Halı saha ekipleri için isim, numara, logo ve sponsor baskılı özgün forma tasarım çözümleri." },
  "ucuz-forma-tasarla": { title: "Ucuz Forma Tasarla", intro: "Bütçeyi korurken kumaş, baskı ve kullanım kalitesinden vazgeçmeden forma hazırlamanın yolları." },
  "isimli-forma-tasarla": { title: "İsimli Forma Tasarla", intro: "Her oyuncuya özel isim ve numara seçenekleriyle kişiselleştirilmiş takım forması tasarımı." },
} as const;

type PageSlug = keyof typeof pages;

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
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
  return <main className="editorial-placeholder">
    <Link href="/" className="back-home">← EMİR SPOR</Link>
    <div><p className="kicker orange">FORMA TASARLA REHBERİ</p><h1>{page.title}</h1><p>{page.intro}</p><p className="preparing-note">Bu tanıtım sayfası için özgün görseller, ayrıntılı anlatımlar ve SEO içeriği hazırlanacaktır.</p><a className="solid-button" href="https://wa.me/905444407767?text=Merhaba%2C%20tak%C4%B1m%C4%B1ma%20%C3%B6zel%20forma%20tasarlamak%20istiyorum">TASARIMA BAŞLA</a></div>
  </main>;
}
