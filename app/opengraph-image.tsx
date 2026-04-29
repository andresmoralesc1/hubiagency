import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#000",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Arial Black, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: "bold",
            color: "#fff",
            letterSpacing: "0.05em",
          }}
        >
          hubIAGENCY
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#06b6d4",
            marginTop: 20,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Automate • Innovate • Elevate
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
