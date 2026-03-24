"use client";

import { TextureOverlay } from "@/components/texture-overlay";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { useResponsiveTheme } from "@/hooks/use-responsive-theme";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  useResponsiveTheme();
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <>
      {isMounted && <TextureOverlay />}
      {children}
      {isMounted && <ThemeSwitcher />}
      {isMounted && (
        <footer className="fixed bottom-5 left-1/2 -translate-x-1/2 text-xs text-foreground/60 font-serif z-10">
          {theme === 'newspaper' ? (
            <span>LATE EDITION / PRINTED IN {currentYear}</span>
          ) : (
            <span>&copy; {currentYear} 瑞阿瑞</span>
          )}
        </footer>
      )}
    </>
  );
}
