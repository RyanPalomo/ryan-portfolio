import { ImageResponse } from "next/og";

export const alt = "Ryan Paul R. Palomo — Full Stack and Shopify Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 84px",
          color: "#f7f9fc",
          background:
            "radial-gradient(circle at 82% 18%, #244c79 0, #0c1726 38%, #050a12 72%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            color: "#86b9ef",
            fontSize: 25,
            fontWeight: 700,
            letterSpacing: 5,
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 13, height: 13, borderRadius: 999, background: "#86b9ef" }} />
          Available for work
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05 }}>
            Ryan Paul R. Palomo
          </div>
          <div style={{ color: "#aebdce", fontSize: 35, lineHeight: 1.25 }}>
            Full Stack & Shopify Developer
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#86b9ef",
            fontSize: 25,
          }}
        >
          <span>Next.js · SaaS · E-commerce</span>
          <span>Philippines · Remote</span>
        </div>
      </div>
    ),
    size,
  );
}
