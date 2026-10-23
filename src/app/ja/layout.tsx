import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { entityId, sameAs, site } from "@/lib/site";
import { jaPricing, jaSite } from "@/lib/ja";
import "../globals.css";

// 일본어 페이지는 <html lang="ja"> 가 필요해 루트 레이아웃을 따로 둔다(한국어는 (ko)/layout.tsx).
// 본문 글꼴은 시스템 일본어 글꼴(globals.css 의 html[lang="ja"]), 영문 제목만 Archivo.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${jaSite.name} — ${jaSite.tagline}`,
    template: `%s | ${jaSite.name}`,
  },
  description: jaSite.description,
  keywords: [
    "LIFTUP.AI",
    "リフトアップAI",
    "AIパーソナルトレーナー",
    "筋トレ アプリ",
    "筋トレ 記録 アプリ",
    "筋トレメニュー 作成",
    "AI 筋トレ",
    "ジム 初心者 メニュー",
    "自宅 筋トレ",
    "パーソナルジム 代わり",
  ],
  applicationName: jaSite.name,
  authors: [{ name: site.nameEn }],
  creator: site.nameEn,
  publisher: site.nameEn,
  alternates: {
    canonical: "/ja",
    languages: { ko: "/", ja: "/ja", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: `${site.url}/ja`,
    siteName: jaSite.name,
    title: `${jaSite.name} — ${jaSite.tagline}`,
    description: jaSite.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${jaSite.name} — ${jaSite.tagline}`,
    description: jaSite.description,
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

// 같은 실체는 한국어 페이지와 같은 @id 를 쓴다(이름·설명만 일본어).
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": entityId.organization,
    name: site.nameEn,
    alternateName: [site.name, jaSite.name],
    url: site.url,
    logo: `${site.url}/images/logo_icon.png`,
    email: site.email,
    sameAs: [...sameAs],
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": entityId.app,
    name: jaSite.name,
    alternateName: [jaSite.nameKana, site.nameEn, site.name],
    operatingSystem: "iOS, Android",
    applicationCategory: "HealthApplication",
    description: jaSite.description,
    url: `${site.url}/ja`,
    image: `${site.url}/images/logo_icon.png`,
    inLanguage: ["ja", "ko", "en"],
    offers: [
      {
        "@type": "Offer",
        price: "0",
        priceCurrency: "JPY",
        description: "無料ダウンロード・筋トレ記録は無料",
      },
      {
        "@type": "Offer",
        price: String(jaPricing.monthlyJpy),
        priceCurrency: "JPY",
        description: "Pro 月額（1週間無料体験つき、日本の App Store）",
      },
      {
        "@type": "Offer",
        price: String(jaPricing.yearlyJpy),
        priceCurrency: "JPY",
        description: "Pro 年額（1週間無料体験つき、日本の App Store）",
      },
    ],
    downloadUrl: [site.appStore, site.playStore],
    author: { "@id": entityId.organization },
    publisher: { "@id": entityId.organization },
  },
];

export default function JaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${archivo.variable} h-full antialiased`}>
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
