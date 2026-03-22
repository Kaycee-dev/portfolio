import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#080D1A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Amber accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "4px",
            background: "#F59E0B",
          }}
        />

        <div
          style={{
            color: "#F59E0B",
            fontSize: "16px",
            fontFamily: "monospace",
            marginBottom: "24px",
            letterSpacing: "0.1em",
          }}
        >
          {"// data.engineer · backend.dev"}
        </div>

        <div
          style={{
            color: "#E8EDF5",
            fontSize: "72px",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
          Kelechi Michael Uba
        </div>

        <div
          style={{
            color: "#8A9BBC",
            fontSize: "24px",
            marginTop: "8px",
          }}
        >
          Senior Data Engineer · Backend & Fullstack Developer
        </div>

        <div
          style={{
            color: "#4A5A7A",
            fontSize: "16px",
            marginTop: "40px",
            fontFamily: "monospace",
          }}
        >
          ₦20B+ cumulative savings · 70% faster validation · Lagos, Nigeria
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
