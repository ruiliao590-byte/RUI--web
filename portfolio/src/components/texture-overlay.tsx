"use client";

import { useTheme } from "@/components/theme-provider";

export function TextureOverlay() {
  const { theme } = useTheme();

  // A data URL for an SVG that generates a procedural noise texture.
  const svgNoise = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none z-[100]"
      style={{
        backgroundImage: svgNoise,
        opacity: theme === "night" ? 0.3 : 0.15,
        mixBlendMode: theme === "night" ? "screen" : "overlay",
      }}
    />
  );
}
