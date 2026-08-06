export type Product = {
  slug: string;
  name: string;
  price: number;
  image: string;
  category: "Futbol Formaları";
  colors: string;
};

export const footballProducts: Product[] = [
  { slug: "amed-siyah-ic-saha-halisaha-forma-tasarla", name: "Amed Siyah İç Saha Halısaha Forma Tasarla", price: 450, image: "/urunler/futbol/amed-siyah-ic-saha-halisaha-forma-tasarla.webp", category: "Futbol Formaları", colors: "siyah, kırmızı ve beyaz" },
  { slug: "amed-spor-24-25-halisaha-formasi", name: "Amed Spor 24-25 Halısaha Forması", price: 450, image: "/urunler/futbol/amed-spor-24-25-halisaha-formasi.webp", category: "Futbol Formaları", colors: "beyaz, yeşil ve kırmızı" },
  { slug: "arsenal-001-halisaha-futbol-forma", name: "Arsenal 001 Halısaha Futbol Forma", price: 450, image: "/urunler/futbol/arsenal-001-halisaha-futbol-forma.webp", category: "Futbol Formaları", colors: "kırmızı ve beyaz" },
  { slug: "arsenal-002-halisaha-futbol-forma", name: "Arsenal 002 Halısaha Futbol Forma", price: 450, image: "/urunler/futbol/arsenal-002-halisaha-futbol-forma.webp", category: "Futbol Formaları", colors: "bordo, kırmızı ve beyaz" },
  { slug: "arsenal-003-halisaha-futbol-forma", name: "Arsenal 003 Halısaha Futbol Forma", price: 450, image: "/urunler/futbol/arsenal-003-halisaha-futbol-forma.webp", category: "Futbol Formaları", colors: "kırmızı ve beyaz" },
  { slug: "arsenal-22-23-tasarim-halisaha-formasi", name: "Arsenal 22-23 Tasarım Halısaha Forması", price: 450, image: "/urunler/futbol/arsenal-22-23-tasarim-halisaha-formasi.webp", category: "Futbol Formaları", colors: "mavi ve beyaz" },
  { slug: "arsenal-lacivert-mavi-halisaha-forma", name: "Arsenal Lacivert Mavi Halısaha Forma", price: 450, image: "/urunler/futbol/arsenal-lacivert-mavi-halisaha-forma.webp", category: "Futbol Formaları", colors: "lacivert, mavi ve gold" },
  { slug: "arsenal-mavi-ozil-halisaha-formasi", name: "Arsenal Mavi Özil Halısaha Forması", price: 450, image: "/urunler/futbol/arsenal-mavi-ozil-halisaha-formasi.webp", category: "Futbol Formaları", colors: "açık mavi, lacivert ve beyaz" },
  { slug: "arsenal-yesil-gold-halisaha-forma-tasarla", name: "Arsenal Yeşil Gold Halısaha Forma Tasarla", price: 450, image: "/urunler/futbol/arsenal-yesil-gold-halisaha-forma-tasarla.webp", category: "Futbol Formaları", colors: "koyu yeşil, gold ve beyaz" },
  { slug: "ay-yildiz-turkiye-konsept-halisaha-forma-tasarla", name: "Ay Yıldız Türkiye Konsept Halısaha Forma Tasarla", price: 450, image: "/urunler/futbol/ay-yildiz-turkiye-konsept-halisaha-forma-tasarla.webp", category: "Futbol Formaları", colors: "siyah, kırmızı ve beyaz" },
  { slug: "barcelona-001-halisaha-futbol-forma", name: "Barcelona 001 Halısaha Futbol Forma", price: 450, image: "/urunler/futbol/barcelona-001-halisaha-futbol-forma.webp", category: "Futbol Formaları", colors: "lacivert ve bordo" },
  { slug: "aston-villa-concept-halisaha-formasi", name: "Aston Villa Concept Halısaha Forması", price: 450, image: "/urunler/futbol/aston-villa-concept-halisaha-formasi.webp", category: "Futbol Formaları", colors: "krem, gold ve bordo" },
  { slug: "athletico-nacional-concept-halisaha-formasi", name: "Athletico Nacional Concept Halısaha Forması", price: 450, image: "/urunler/futbol/athletico-nacional-concept-halisaha-formasi.webp", category: "Futbol Formaları", colors: "yeşil, siyah ve bordo" },
];

export const catalogProducts: Product[] = [
  { slug: "almanya-beyaz-simsek-desen-hali-saha-formasi", name: "Almanya Beyaz Şimşek Desen Halı Saha Forması", price: 450, image: "/urunler/almanya-beyaz-simsek-desen-hali-saha-formasi.png", category: "Futbol Formaları", colors: "beyaz, siyah, kırmızı ve sarı" },
  ...footballProducts,
];
