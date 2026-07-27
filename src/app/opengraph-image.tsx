import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "LiftUp AI — AI Personal Trainer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(
    join(process.cwd(), "public/images/logo_icon.png"),
  );
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 88px",
          background:
            "radial-gradient(900px 500px at 78% -10%, #2b2a6b 0%, transparent 62%), radial-gradient(700px 400px at 8% 110%, #0b3a6b 0%, transparent 60%), #0c0e14",
          color: "#f2f4f8",
          fontFamily: "sans-serif",
        }}
      >
        <img src={logoSrc} width={104} height={104} alt="" style={{ borderRadius: 26 }} />
        <div
          style={{
            marginTop: 44,
            fontSize: 78,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          LiftUp AI
        </div>
        <div
          style={{
            marginTop: 22,
            fontSize: 34,
            color: "#8f9bb3",
            letterSpacing: "-0.01em",
          }}
        >
          Your AI personal trainer — plans, coaching, recovery.
        </div>
        <div
          style={{
            marginTop: 46,
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 26,
            color: "#64d2ff",
          }}
        >
          <span>iOS</span>
          <span style={{ color: "#3a4155" }}>·</span>
          <span>Android</span>
          <span style={{ color: "#3a4155" }}>·</span>
          <span>liftupai.net</span>
        </div>
      </div>
    ),
    size,
  );
}
