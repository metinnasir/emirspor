import Script from "next/script";

const services = [
  ["Sublimasyon forma", "Renkleri solmayan, nefes alan kumaşlarla kulübünüze özel futbol forması üretimi."],
  ["Takıma özel tasarım", "Renk, logo, sponsor, isim ve numaraları takım kimliğinize göre birlikte tasarlıyoruz."],
  ["Toplu sipariş", "Amatör kulüpler, okullar, halı saha takımları ve turnuvalar için planlı üretim."],
];

export default function Home() {
  const schema = { "@context": "https://schema.org", "@type": "Organization", name: "Emir Spor", url: "https://emirspor.com", description: "Özel futbol forması ve spor giyim üretimi" };
  return <>
    <Script id="organization-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <header><nav className="container"><a className="brand" href="#">EMİR<span>SPOR</span></a><div className="navlinks"><a href="#urunler">Ürünler</a><a href="#surec">Nasıl çalışır?</a><a href="#iletisim">Teklif al</a></div></nav></header>
    <main>
      <section className="hero"><div className="container"><div className="eyebrow">Takımın. Renklerin. Forman.</div><h1>Sahaya takımınıza özel formayla çıkın.</h1><p>Futbol kulüpleri, okullar ve amatör takımlar için özel tasarım sublimasyon forma üretimi. Tasarımdan teslimata tek noktadan çözüm.</p><div className="actions"><a className="button" href="#iletisim">Ücretsiz tasarım görüşmesi</a><a className="button secondary" href="#urunler">Ürünleri incele</a></div></div></section>
      <section id="urunler"><div className="container"><div className="section-title"><div className="eyebrow">Ürünler</div><h2>Takımınız için eksiksiz spor giyim</h2><p>İlk sürüm, arama motorlarının anlayacağı temiz içerik yapısı ve hızlı açılış hedefiyle hazırlandı.</p></div><div className="grid">{services.map(([title, text]) => <article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section id="surec" className="light"><div className="container"><div className="section-title"><div className="eyebrow">Süreç</div><h2>Fikirden sahaya üç adım</h2></div><div className="grid"><article className="card"><h3>1. İhtiyacı paylaşın</h3><p>Takım sayısı, bedenler, renkler ve teslim tarihini belirleyelim.</p></article><article className="card"><h3>2. Tasarımı onaylayın</h3><p>Logo, sponsor, isim ve numaraların yer aldığı tasarımı netleştirelim.</p></article><article className="card"><h3>3. Üretime geçelim</h3><p>Onaydan sonra üretim ve kalite kontrol sürecini başlatalım.</p></article></div></div></section>
      <section id="iletisim"><div className="container"><div className="section-title"><div className="eyebrow">Teklif</div><h2>Takımınız için teklif isteyin</h2><p>Telefon, WhatsApp ve e-posta bilgileri doğrulandığında bu alan gerçek iletişim bağlantılarıyla güncellenecek.</p></div></div></section>
    </main>
    <footer><div className="container">© {new Date().getFullYear()} Emir Spor · Özel forma üretimi</div></footer>
  </>;
}
