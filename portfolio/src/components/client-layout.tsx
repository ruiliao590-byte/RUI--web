"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { TextureOverlay } from "@/components/texture-overlay";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { useResponsiveTheme } from "@/hooks/use-responsive-theme";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useResponsiveTheme();

  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="book"
      enableSystem
      disableTransitionOnChange
    >
      <TextureOverlay />
      {children}
      <ThemeSwitcher />
    </ThemeProvider>
  );
}
