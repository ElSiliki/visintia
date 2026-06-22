import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#000000",
          padding: "80px",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "999px",
              backgroundColor: "#FFC72C",
            }}
          />
          <span
            style={{
              fontSize: "26px",
              color: "#a3a3ad",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            {siteConfig.availability}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <span style={{ fontSize: "150px", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.04em", lineHeight: 1 }}>
              Visintia
            </span>
            <span style={{ fontSize: "150px", fontWeight: 700, color: "#FFC72C", lineHeight: 1 }}>.</span>
          </div>
          <span
            style={{
              fontSize: "40px",
              color: "#c7c7cf",
              marginTop: "28px",
              maxWidth: "900px",
              letterSpacing: "-0.01em",
            }}
          >
            {siteConfig.tagline}
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
