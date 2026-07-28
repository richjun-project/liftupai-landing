import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 상위 디렉터리의 lockfile을 워크스페이스 루트로 오인하지 않도록 고정
  turbopack: {
    root: __dirname,
  },
  // www는 중복 URL이 되지 않도록 apex로 영구 리다이렉트
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.liftupai.net" }],
        destination: "https://liftupai.net/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
