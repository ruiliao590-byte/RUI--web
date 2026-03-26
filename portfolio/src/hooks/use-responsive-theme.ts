"use client";

import { useTheme } from "@/components/theme-provider";
import { useEffect } from "react";

export function useResponsiveTheme() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      if (theme === "night") return;

      if (window.innerWidth < 768) {
        setTheme("newspaper");
      } else if (window.innerWidth > 1024) {
        setTheme("book");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setTheme, theme]);
}
