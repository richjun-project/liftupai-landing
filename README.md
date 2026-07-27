# 리프트업AI 랜딩페이지

[liftupai.net](https://liftupai.net) — AI 퍼스널 트레이너 앱 **리프트업AI**의 공식 소개 페이지.

## 스택

- Next.js 16 (App Router, Turbopack)
- Tailwind CSS 4 (CSS-first `@theme` 토큰)
- TypeScript
- Vercel 배포

## 개발

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 프로덕션 빌드
npm run lint
```

## 구조

```
src/
  app/
    layout.tsx            메타데이터 · JSON-LD(SoftwareApplication, WebSite) · 폰트
    page.tsx              섹션 조립 + FAQPage JSON-LD
    globals.css           컬러 토큰, premium-glow / shimmer / marquee
    sitemap.ts            sitemap.xml
    robots.ts             robots.txt (Yeti · Daumoa 명시 허용)
    opengraph-image.tsx   1200×630 OG 이미지 동적 생성
  components/             Hero, Features, Trainers, Pricing, Faq, DownloadCta, Footer
  lib/site.ts             스토어 링크 · 도메인 · 약관 URL 상수
```

앱 스토어 링크나 문의 이메일이 바뀌면 `src/lib/site.ts`만 수정하면 됩니다.

## SEO

- 메타데이터 · OG · Twitter 카드: `src/app/layout.tsx`
- 구조화 데이터: SoftwareApplication, WebSite, FAQPage
- `sitemap.xml`, `robots.txt` 자동 생성

검색엔진 소유확인 코드는 환경변수로 주입합니다 (Vercel > Settings > Environment Variables):

| 변수 | 용도 |
| --- | --- |
| `NEXT_PUBLIC_GOOGLE_VERIFICATION` | Google Search Console 소유확인 |
| `NEXT_PUBLIC_NAVER_VERIFICATION` | 네이버 서치어드바이저 소유확인 |

값을 넣고 재배포하면 `<meta>` 태그가 자동으로 추가됩니다.
