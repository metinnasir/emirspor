"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const slides = [
  {
    src: "/urunler/slider/hali-saha-formasi-slide-model-1.png",
    alt: "Beyaz ve bordo özel tasarım halı saha forması",
    title: "Formanı Kendin Tasarla",
    subtitle: "26/27 Yeni Sezon Koleksiyonu",
  },
  {
    src: "/urunler/slider/hali-saha-formasi-slide-model-2.png",
    alt: "Yeşil ve altın renkli özel tasarım halı saha forması",
    title: "Takımına Özel Üretim",
    subtitle: "Renklerin, Logon, Forman",
  },
  {
    src: "/urunler/slider/hali-saha-formasi-slide-model-3.png",
    alt: "Kırmızı ve beyaz özel tasarım halı saha forması",
    title: "Sahada Farkını Göster",
    subtitle: "İsim ve Numara Dahil Tasarım",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const showNext = useCallback(() => {
    setActive((current) => (current + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(showNext, 5000);
    return () => window.clearInterval(timer);
  }, [paused, showNext]);

  return (
    <section
      className="hero-slider"
      aria-roledescription="carousel"
      aria-label="Yeni sezon halı saha formaları"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="slider-track">
        {slides.map((slide, index) => (
          <article className="slider-slide" key={slide.src} aria-hidden={active !== index} style={{ transform: `translateY(${(active - index) * 100}%)` }}>
            <div className="slider-copy">
              <p className="slider-title">{slide.title}</p>
              <p className="slider-subtitle">{slide.subtitle}</p>
              <div className="slider-links">
                <a href="#urunler">MODELLERİ İNCELE</a>
                <a href="https://wa.me/905444407767?text=Merhaba%2C%20tak%C4%B1m%C4%B1ma%20%C3%B6zel%20forma%20tasarlamak%20istiyorum" target="_blank" rel="noopener noreferrer">FORMA TASARLA</a>
              </div>
            </div>
            <div className="slider-visual">
              <Image src={slide.src} alt={slide.alt} width={579} height={723} priority={index === 0} sizes="(max-width: 700px) 80vw, 46vw" />
            </div>
          </article>
        ))}
      </div>

      <div className="slider-pagination" aria-label="Slider sayfaları">
        {slides.map((slide, index) => (
          <button type="button" key={slide.src} className={active === index ? "active" : ""} onClick={() => setActive(index)} aria-label={`${index + 1}. formayı göster`} aria-current={active === index ? "true" : undefined}>
            <span>0{index + 1}</span><i aria-hidden="true" />
          </button>
        ))}
      </div>
    </section>
  );
}
