import type { Metadata } from "next";
import { Josefin_Sans, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700", "900"], variable: "--font-body", display: "swap" });
const josefinSans = Josefin_Sans({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-heading", display: "swap" });

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
  return <html lang="tr"><body className={`${poppins.variable} ${josefinSans.variable}`}>{children}</body></html>;
}
