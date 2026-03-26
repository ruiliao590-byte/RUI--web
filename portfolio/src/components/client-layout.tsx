"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { TextureOverlay } from "@/components/texture-overlay";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="book">
      <TextureOverlay />
      {children}
      <ThemeSwitcher />
    </ThemeProvider>
  );
}
