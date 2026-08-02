import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://emirspor.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Emir Spor - Takımına Özel Forma Tasarla / Ucuz Forma Yaptırma", template: "%s | Emir Spor" },
  description: "Takımınıza özel sublimasyon futbol forması, şort ve spor giyim üretimi. Tasarım, numune ve toplu sipariş çözümleri.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "tr_TR", url: "/", siteName: "Emir Spor", title: "Emir Spor - Takımına Özel Forma Tasarla / Ucuz Forma Yaptırma", description: "Takımınıza özel forma tasarımı ve üretimi." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body>{children}</body></html>;
}
