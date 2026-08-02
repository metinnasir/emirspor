"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const slides = [
  {
    src: "/portfolyo/banner/emirspor-forma-yaptirma-slide-1.png",
    alt: "Emir Spor ile sınır tanımadan özel forma tasarlayın",
  },
  {
    src: "/portfolyo/banner/emirspor-forma-yaptirma-slide-2.png",
    alt: "10.000 TL üzeri forma siparişlerinde ücretsiz kargo",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const showNext = useCallback(() => {
    setActive((current) => (current + 1) % slides.length);
  }, []);

  const showPrevious = () => {
    setActive((current) => (current - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(showNext, 5000);
    return () => window.clearInterval(timer);
  }, [paused, showNext]);

  return (
    <section
      className="hero-slider"
      aria-roledescription="carousel"
      aria-label="Emir Spor kampanyaları"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="slider-track" style={{ transform: `translateX(-${active * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="slider-slide" key={slide.src} aria-hidden={active !== index}>
            <Image
              src={slide.src}
              alt={slide.alt}
              width={2048}
              height={666}
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      <button className="slider-arrow slider-previous" type="button" onClick={showPrevious} aria-label="Önceki görsel">‹</button>
      <button className="slider-arrow slider-next" type="button" onClick={showNext} aria-label="Sonraki görsel">›</button>

      <div className="slider-dots" aria-label="Slider sayfaları">
        {slides.map((slide, index) => (
          <button
            type="button"
            key={slide.src}
            className={active === index ? "active" : ""}
            onClick={() => setActive(index)}
            aria-label={`${index + 1}. görseli göster`}
            aria-current={active === index ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
}
