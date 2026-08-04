"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const brands = [
  { name: "Emir Spor", style: "script" },
  { name: "Forma Atölyesi", style: "serif" },
  { name: "Takımın Ruhu", style: "round" },
  { name: "Saha Stili", style: "logo", image: "/portfolyo/logo/referans-logo-1.png" },
  { name: "Faby Teamwear", style: "bold" },
  { name: "Yeni Nesil Forma", style: "classic" },
];

export default function BrandCarousel() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(6);

  useEffect(() => {
    const updateVisible = () => setVisible(window.innerWidth <= 560 ? 2 : window.innerWidth <= 900 ? 3 : 6);
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, brands.length - visible);
  const safeIndex = Math.min(index, maxIndex);
  const previous = () => setIndex(safeIndex <= 0 ? maxIndex : safeIndex - 1);
  const next = () => setIndex(safeIndex >= maxIndex ? 0 : safeIndex + 1);

  return (
    <section className="brand-carousel" aria-label="Markalarımız">
      <button type="button" onClick={previous} aria-label="Önceki markaları göster">←</button>
      <div className="brand-carousel-window">
        <div
          className="brand-carousel-track"
          style={{ transform: `translateX(-${safeIndex * (100 / visible)}%)`, "--brand-visible": visible } as React.CSSProperties}
        >
          {brands.map((brand) => (
            <div className={`brand-mark ${brand.style}`} key={brand.name}>
              {brand.image ? <Image src={brand.image} alt={brand.name} width={2048} height={684} sizes="260px" /> : brand.name}
            </div>
          ))}
        </div>
      </div>
      <button type="button" onClick={next} aria-label="Sonraki markaları göster">→</button>
    </section>
  );
}
