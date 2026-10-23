import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_KR, Archivo } from "next/font/google";
import { entityId, sameAs, site } from "@/lib/site";
import "../globals.css";

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

// 엔티티는 사이트 전체에서 한 번만 선언하고, 다른 곳에서는 @id로 참조한다.
// 페이지마다 Organization을 새로 선언하면 같은 실체가 여러 개로 쪼개진다.
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": entityId.organization,
    name: site.nameEn,
    alternateName: site.name,
    url: site.url,
    logo: `${site.url}/images/logo_icon.png`,
    email: site.email,
    // "이 표면들이 전부 같은 실체"라는 선언 — 실제 운영하는 공식 표면만 넣는다
    sameAs: [...sameAs],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": entityId.website,
    name: site.name,
    url: site.url,
    inLanguage: "ko",
    publisher: { "@id": entityId.organization },
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": entityId.app,
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
    author: { "@id": entityId.organization },
    publisher: { "@id": entityId.organization },
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
