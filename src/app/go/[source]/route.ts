import type { NextRequest } from "next/server";
import { resolveGoTarget } from "@/lib/goLink";

// 기기(User-Agent)마다 목적지가 달라서 절대 캐시되면 안 된다.
// 캐시되면 아이폰 사용자가 Play 링크를 받는 식으로 섞인다.
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest, ctx: RouteContext<"/go/[source]">) {
  const { source } = await ctx.params;
  const target = resolveGoTarget(source.toLowerCase(), request.headers.get("user-agent"));
  return new Response(null, {
    status: 302,
    headers: {
      Location: target,
      "Cache-Control": "no-store, max-age=0",
      Vary: "User-Agent",
    },
  });
}
