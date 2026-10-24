import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { entityId, sameAs, site } from "@/lib/site";
import { enPricing, enSite } from "@/lib/en";
import { homeLanguages } from "@/lib/i18n";
import "../globals.css";

// 영어 페이지는 <html lang="en"> 이 필요해 루트 레이아웃을 따로 둔다(한국어 (ko)/layout.tsx, 일본어 ja/layout.tsx).
// 본문은 시스템 글꼴(globals.css 의 html[lang="en"]), 제목만 Archivo.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${enSite.name} — ${enSite.tagline}`,
    template: `%s | ${enSite.name}`,
  },
  description: enSite.description,
  keywords: [
    "LIFTUP.AI",
    "AI personal trainer app",
    "AI workout planner",
    "AI gym coach",
    "workout log app",
    "strength training app",
    "gym routine for beginners",
    "home workout plan",
    "personal trainer alternative",
  ],
  applicationName: enSite.name,
  authors: [{ name: site.nameEn }],
  creator: site.nameEn,
  publisher: site.nameEn,
  alternates: {
    canonical: "/en",
    languages: homeLanguages,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${site.url}/en`,
    siteName: enSite.name,
    title: `${enSite.name} — ${enSite.tagline}`,
    description: enSite.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${enSite.name} — ${enSite.tagline}`,
    description: enSite.description,
  },
  icons: {
    icon: [{ url: "/images/logo_icon.png", type: "image/png" }],
    apple: [{ url: "/images/logo_icon.png" }],
  },
  category: "health",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0f14",
  colorScheme: "dark",
};

// 같은 실체는 한국어·일본어 페이지와 같은 @id 를 쓴다(이름·설명만 영어).
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": entityId.organization,
    name: site.nameEn,
    alternateName: [site.name, enSite.name],
    url: site.url,
    logo: `${site.url}/images/logo_icon.png`,
    email: site.email,
    sameAs: [...sameAs],
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": entityId.app,
    name: enSite.name,
    alternateName: [site.nameEn, site.name],
    operatingSystem: "iOS, Android",
    applicationCategory: "HealthApplication",
    description: enSite.description,
    url: `${site.url}/en`,
    image: `${site.url}/images/logo_icon.png`,
    inLanguage: ["en", "ko", "ja"],
    offers: [
      {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free download, workout logging always free",
      },
      {
        "@type": "Offer",
        price: String(enPricing.monthlyUsd),
        priceCurrency: "USD",
        description: "Pro monthly (1-week free trial, US App Store)",
      },
      {
        "@type": "Offer",
        price: String(enPricing.yearlyUsd),
        priceCurrency: "USD",
        description: "Pro yearly (1-week free trial, US App Store)",
      },
    ],
    downloadUrl: [site.appStore, site.playStore],
    author: { "@id": entityId.organization },
    publisher: { "@id": entityId.organization },
  },
];

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
