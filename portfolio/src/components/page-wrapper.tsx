"use client";

import { TextureOverlay } from "@/components/texture-overlay";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TextureOverlay />
      {children}
      <ThemeSwitcher />
    </>
  );
}
