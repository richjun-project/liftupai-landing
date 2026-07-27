import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_KR, Archivo } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const plexKr = IBM_Plex_Sans_KR({
  variable: "--font-plex-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "리프트업AI",
    "LiftUp AI",
    "AI 퍼스널 트레이너",
    "AI PT",
    "운동 기록 앱",
    "헬스 앱",
    "웨이트 트레이닝",
    "운동 루틴 추천",
    "AI 식단 분석",
    "홈트",
    "근력 운동",
    "운동 루틴 자동 생성",
  ],
  applicationName: site.name,
  authors: [{ name: site.nameEn }],
  creator: site.nameEn,
  publisher: site.nameEn,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
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
  // 검색엔진 소유확인 코드 — 발급 후 채워 넣으면 됨
  verification: {
    other: {
      ...(process.env.NEXT_PUBLIC_NAVER_VERIFICATION
        ? {
            "naver-site-verification":
              process.env.NEXT_PUBLIC_NAVER_VERIFICATION,
          }
        : {}),
    },
    ...(process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION }
      : {}),
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0f14",
  colorScheme: "dark",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.name,
    alternateName: site.nameEn,
    operatingSystem: "iOS, Android",
    applicationCategory: "HealthApplication",
    description: site.description,
    url: site.url,
    image: `${site.url}/images/logo_icon.png`,
    inLanguage: ["ko", "en", "ja"],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "KRW",
      description: "무료 다운로드 · Pro 구독 시 전체 기능 이용",
    },
    downloadUrl: [site.appStore, site.playStore],
    author: { "@type": "Organization", name: site.nameEn, url: site.url },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: "ko",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${plexKr.variable} ${archivo.variable} h-full antialiased`}
    >
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
